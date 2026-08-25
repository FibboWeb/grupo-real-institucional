(function ($) {
  "use strict";

  var FIELD_KEY = "field_grnc_qs_secoes";

  function $fieldRoot($from) {
    return $from.closest(".acf-field[data-key='" + FIELD_KEY + "'], .acf-field[data-name='secoes'], .acf-field.grnc-landing-secoes");
  }

  function $flexible($field) {
    return $field.find(".acf-flexible-content").first();
  }

  function getField($field) {
    if (!window.acf || typeof acf.getField !== "function") {
      return null;
    }

    var key = $field.data("key") || FIELD_KEY;
    var field = acf.getField(key);

    if (field && typeof field.add === "function") {
      return field;
    }

    if (typeof acf.getFields === "function") {
      var found = acf.getFields({ key: key });
      if (found && found.length) {
        return found[0];
      }
    }

    return null;
  }

  function popupHtml($fc, field) {
    var html = "";

    if (field && typeof field.getPopupHTML === "function") {
      html = field.getPopupHTML() || "";
    }

    if (!html) {
      html = $fc.find("script.tmpl-popup").html() || "";
    }

    return html;
  }

  function injectButton($fc) {
    var $msg = $fc.find(".no-value-message").first();

    if (!$msg.length || $msg.find(".grnc-add-secao").length) {
      return;
    }

    $msg.append(
      '<div class="grnc-add-wrap"><button type="button" class="button button-primary grnc-add-secao">Adicionar seção</button></div>'
    );
  }

  function closePicker($fc) {
    $fc.find(".grnc-layout-picker").remove();
  }

  function openPicker($field) {
    var $fc = $flexible($field);
    var field = getField($field);

    if ($fc.find(".grnc-layout-picker").length) {
      closePicker($fc);
      return;
    }

    var html = popupHtml($fc, field);
    var $parsed = $("<div/>").html(html);
    var $list = $parsed.is("ul") ? $parsed : $parsed.find("ul").first();

    if (!$list.length || !$list.find("[data-layout]").length) {
      window.alert(
        "Os blocos da landing não carregaram. Confirme ACF Pro ativo e o plugin Grupo Real — Next Config 1.3.2+."
      );
      return;
    }

    var $picker = $('<div class="grnc-layout-picker acf-fc-popup" role="listbox"></div>');
    $picker.append($list);
    $fc.find(".no-value-message").after($picker);

    $picker.on("click", "[data-layout]", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var layout = $(this).attr("data-layout");

      if (!layout || !field || typeof field.add !== "function") {
        return;
      }

      if (typeof field.validateAdd === "function" && !field.validateAdd()) {
        return;
      }

      field.add({ layout: String(layout) });
      closePicker($fc);
    });
  }

  function onEmptyClick(event) {
    var $field = $fieldRoot($(event.target));

    if (!$field.length) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    openPicker($field);
  }

  function enhance(field) {
    if (!field || typeof field.get !== "function") {
      return;
    }

    if (field.get("key") !== FIELD_KEY && field.get("name") !== "secoes") {
      return;
    }

    injectButton($flexible(field.$el));
  }

  $(document).on(
    "click.grncSecoes",
    ".acf-field[data-key='" +
      FIELD_KEY +
      "'] .no-value-message, .acf-field[data-name='secoes'] .no-value-message, .acf-field.grnc-landing-secoes .no-value-message",
    onEmptyClick
  );

  if (window.acf && typeof window.acf.addAction === "function") {
    window.acf.addAction("ready_field/type=flexible_content", enhance);
    window.acf.addAction("append_field/type=flexible_content", enhance);
  }

  $(function () {
    $(".acf-field[data-key='" + FIELD_KEY + "'] .acf-flexible-content, .acf-field[data-name='secoes'] .acf-flexible-content").each(
      function () {
        injectButton($(this));
      }
    );
  });
})(window.jQuery);
