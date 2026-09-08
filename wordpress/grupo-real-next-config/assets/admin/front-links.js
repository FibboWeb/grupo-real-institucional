(function () {
  var origin = (window.grncFrontLinks && window.grncFrontLinks.origin) || "https://gruporealbr.com.br";

  function isFront(href) {
    return typeof href === "string" && href.indexOf(origin) === 0;
  }

  function decorate(root) {
    var scope = root && root.querySelectorAll ? root : document;
    var nodes = scope.querySelectorAll("a[href]");

    nodes.forEach(function (el) {
      if (!isFront(el.getAttribute("href") || "")) {
        return;
      }
      if (el.classList.contains("grnc-view-disabled")) {
        return;
      }
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });
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
