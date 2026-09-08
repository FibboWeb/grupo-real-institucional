(function () {
  var cfg = window.grncPostView || {};
  var hint = cfg.hint || "Só é possível visualizar ao publicar o post";

  function ensureNotice() {
    var gutenberg = document.querySelector(".editor-post-url, .edit-post-post-url");
    if (gutenberg && !gutenberg.querySelector(".grnc-view-notice")) {
      var p = document.createElement("p");
      p.className = "grnc-view-notice";
      p.textContent = hint;
      gutenberg.appendChild(p);
    }
  }

  function decorate(root) {
    if (!cfg.blocked) {
      return;
    }

    var scope = root && root.querySelectorAll ? root : document;
    var nodes = scope.querySelectorAll(
      ".edit-post-post-url__link, .editor-post-url__link, .editor-post-url__link-external, .edit-post-post-link__link"
    );

    nodes.forEach(function (el) {
      if (el.dataset.grncView === "1") {
        return;
      }
      el.dataset.grncView = "1";
      el.addEventListener("click", function (event) {
        event.preventDefault();
      });
      el.removeAttribute("title");
      el.removeAttribute("data-tip");
      el.setAttribute("aria-disabled", "true");
      el.style.pointerEvents = "none";
      el.style.opacity = "0.65";
    });

    ensureNotice();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      decorate(document);
    });
  } else {
    decorate(document);
  }

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1) {
          decorate(node);
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
