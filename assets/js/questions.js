/* ==========================================================================
   EM Hub — Question renderer
   Shared by the public free sample, the candidate question bank and the
   mock-test runner. Supports SBA, multiple-correct, image, audio and video.
   ========================================================================== */
(function () {
  "use strict";

  var I = window.EM.icon;

  function mediaBlock(q) {
    if (!q.media) return "";
    if (q.media.kind === "image") {
      return '<div class="media-frame">' + window.EM.xray() +
        '<div class="media-cap">' + I("image") + " " + q.media.caption + "</div></div>";
    }
    if (q.media.kind === "audio") {
      return '<div class="audio-player"><button class="play-btn" type="button" aria-label="Play recording">' + I("play") + "</button>" +
        '<div class="grow"><div class="wave">' + waveBars() + "</div>" +
        '<div class="text-xs text-subtle mt-1">' + q.media.caption + "</div></div>" +
        '<span class="text-xs mono text-subtle">0:12</span></div>';
    }
    if (q.media.kind === "video") {
      return '<div class="media-frame"><div class="video-frame"><div class="play-overlay" role="button" tabindex="0" aria-label="Play clip">' +
        I("play") + '</div><span class="duration">' + q.media.duration + "</span></div>" +
        '<div class="media-cap">' + I("video") + " " + q.media.caption + "</div></div>";
    }
    return "";
  }

  function waveBars() {
    var h = [30, 55, 80, 45, 92, 60, 35, 70, 88, 50, 40, 75, 95, 62, 38, 55, 82, 48, 30, 66, 90, 52, 36, 72, 58, 84, 42, 68];
    return h.map(function (v) { return '<span style="height:' + v + '%"></span>'; }).join("");
  }

  function typeBadge(q) {
    var map = { sba: "blue", multi: "violet", image: "teal", audio: "amber", video: "red" };
    var ic  = { sba: "list", multi: "layers", image: "image", audio: "audio", video: "video" };
    return '<span class="badge badge-' + map[q.type] + '">' +
      "<span style='display:inline-flex;width:12px;height:12px'>" + I(ic[q.type]) + "</span>" + q.typeLabel + "</span>";
  }

  /**
   * Render one question card.
   * opts: { index, total, showMeta, flagged, mode: "practice"|"exam" }
   */
  function render(q, opts) {
    opts = opts || {};
    var mode = opts.mode || "practice";
    var head =
      '<div class="row-between mb-3">' +
        '<div class="row row-tight">' +
          (opts.index != null ? '<span class="badge badge-blue">Q' + opts.index + (opts.total ? " / " + opts.total : "") + "</span>" : "") +
          typeBadge(q) +
          '<span class="badge">' + q.subject + "</span>" +
          (opts.showMeta === false ? "" :
            '<span class="badge badge-' + (q.difficulty === "Hard" ? "red" : q.difficulty === "Easy" ? "green" : "amber") + '">' + q.difficulty + "</span>") +
        "</div>" +
        '<div class="row row-tight">' +
          (opts.showMeta === false ? "" : '<span class="text-xs text-subtle">' + q.correctPct + "% answer correctly</span>") +
          '<button class="btn btn-ghost btn-xs" type="button" data-action="flag" aria-pressed="' + (opts.flagged ? "true" : "false") + '">' +
            "<span style='display:inline-flex;width:14px;height:14px'>" + I("flag") + "</span> Flag</button>" +
          '<button class="btn btn-ghost btn-xs" type="button" data-action="bookmark">' +
            "<span style='display:inline-flex;width:14px;height:14px'>" + I("bookmark") + "</span> Save</button>" +
          '<span class="text-xs text-subtle mono">' + q.id + "</span>" +
        "</div>" +
      "</div>";

    var stem = q.stem.split("\n\n").map(function (p) {
      return '<p class="question-stem">' + p + "</p>";
    }).join("");

    var isMulti = q.type === "multi";
    var options = '<div class="options" role="group" aria-label="Answer options">' +
      q.options.map(function (o) {
        return '<button class="option" type="button" data-key="' + o.key + '">' +
          '<span class="key">' + o.key + "</span><span>" + o.text + "</span></button>";
      }).join("") + "</div>";

    var submit = isMulti
      ? '<button class="btn btn-primary mt-3" type="button" data-action="submit">Submit answer</button>'
      : "";

    var explanation =
      '<div class="explanation" hidden>' +
        "<h4>Explanation</h4>" +
        q.explanation.split("\n\n").map(function (p) { return "<p>" + p + "</p>"; }).join("") +
        '<div class="key-points" style="margin-bottom:0">' +
          "<h4>" + I("zap") + " Exam technique</h4>" +
          "<p class='mb-0 text-sm'>" + q.teaching + "</p>" +
        "</div>" +
        '<div class="row row-tight mt-3">' +
          '<span class="text-xs text-subtle">Was this explanation helpful?</span>' +
          '<button class="btn btn-ghost btn-xs" type="button" data-action="rate">Yes</button>' +
          '<button class="btn btn-ghost btn-xs" type="button" data-action="rate">No</button>' +
          '<button class="btn btn-ghost btn-xs" type="button" data-action="report">Report an issue</button>' +
        "</div>" +
      "</div>";

    return '<article class="card question-card" data-qid="' + q.id + '" data-mode="' + mode + '">' +
      head + mediaBlock(q) + stem +
      (isMulti ? '<p class="text-xs text-subtle fw-700">Select all that apply, then submit.</p>' : "") +
      options + submit + explanation + "</article>";
  }

  /**
   * Mark a card as answered and reveal the explanation.
   * Returns true if the candidate was correct.
   */
  function reveal(card, q, picked, showExplanation) {
    var correct = q.answers || [q.answer];
    card.querySelectorAll(".option").forEach(function (o) {
      var k = o.getAttribute("data-key");
      o.classList.remove("is-selected");
      o.disabled = true;
      if (correct.indexOf(k) > -1) {
        o.classList.add("is-correct");
        if (!o.querySelector(".verdict")) o.insertAdjacentHTML("beforeend", '<span class="verdict">Correct answer</span>');
      } else if (picked.indexOf(k) > -1) {
        o.classList.add("is-wrong");
        if (!o.querySelector(".verdict")) o.insertAdjacentHTML("beforeend", '<span class="verdict">Your answer</span>');
      }
    });
    var exp = card.querySelector(".explanation");
    if (exp && showExplanation !== false) exp.hidden = false;
    var sub = card.querySelector('[data-action="submit"]');
    if (sub) sub.remove();
    return correct.length === picked.length && correct.every(function (k) { return picked.indexOf(k) > -1; });
  }

  /**
   * Wire up a container of rendered questions for practice mode.
   * lookup(id) must return the question object.
   */
  function attach(container, lookup, onAnswer) {
    container.addEventListener("click", function (e) {
      var card = e.target.closest(".question-card");
      if (!card) return;
      var q = lookup(card.getAttribute("data-qid"));
      if (!q) return;
      var answered = card.getAttribute("data-answered") === "1";

      var opt = e.target.closest(".option");
      if (opt && !opt.disabled) {
        if (q.type === "multi") { opt.classList.toggle("is-selected"); return; }
        finish(card, q, [opt.getAttribute("data-key")]);
        return;
      }

      var act = e.target.closest("[data-action]");
      if (!act) return;
      var a = act.getAttribute("data-action");

      if (a === "submit") {
        var picked = [].map.call(card.querySelectorAll(".option.is-selected"), function (o) { return o.getAttribute("data-key"); });
        if (!picked.length) { window.EM.toast("Select at least one option first."); return; }
        finish(card, q, picked);
      } else if (a === "flag") {
        var on = act.getAttribute("aria-pressed") !== "true";
        act.setAttribute("aria-pressed", String(on));
        act.classList.toggle("btn-soft", on);
        window.EM.toast(on ? "Question flagged for review." : "Flag removed.");
      } else if (a === "bookmark") {
        act.classList.toggle("btn-soft");
        window.EM.toast(act.classList.contains("btn-soft") ? "Saved to your bookmarks." : "Removed from bookmarks.");
      } else if (a === "rate") {
        window.EM.toast("Thank you — feedback recorded.");
      } else if (a === "report") {
        window.EM.toast("Reported to the editorial team for review.");
      }

      if (e.target.closest(".play-btn")) {
        card.querySelectorAll(".wave span").forEach(function (b, i) {
          setTimeout(function () { b.classList.add("on"); }, i * 40);
        });
        window.EM.toast("Audio playback is simulated in this prototype.");
      }
      if (e.target.closest(".play-overlay")) window.EM.toast("Video playback is simulated in this prototype.");

      function noop() { return answered; }
      noop();
    });

    function finish(card, q, picked) {
      if (card.getAttribute("data-answered") === "1") return;
      card.setAttribute("data-answered", "1");
      var right = reveal(card, q, picked);
      window.EM.toast(right ? "Correct — well done." : "Not quite. Read the explanation below.");
      if (typeof onAnswer === "function") onAnswer(q, picked, right, card);
    }
  }

  window.EMQ = { render: render, reveal: reveal, attach: attach, mediaBlock: mediaBlock, typeBadge: typeBadge };
})();
