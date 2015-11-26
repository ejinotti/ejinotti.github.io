$(function () {
  function ZedUI () {
    this.$currentTab = $("#menu li").filter(function () {
      return $(this).text() === "about";
    }).addClass("active");
    $("#about").slideDown();
    $("#menu").on("click", "li", this.selectTab.bind(this));
    $("#ancient").on("click", this.activateDino);
    $(".know-more-link").on("click", $.fn.trigger.bind(
      $("#menu li:last-child"), "click"
    ));
  }

  ZedUI.prototype.selectTab = function (event) {
    var $newTab = $(event.currentTarget);

    if ($newTab.text() === this.$currentTab.text()) return;

    var $newSection = $("#" + $newTab.text());
    var $currentSection = $("#" + this.$currentTab.text());

    this.$currentTab.removeClass("active");
    $newTab.addClass("active");

    $currentSection.slideUp($.fn.slideDown.bind($newSection));

    this.$currentTab = $newTab;
  };

  ZedUI.prototype.activateDino = function (event) {
    $("#ancient-pic").fadeIn(window.setTimeout.bind(
      null,
      $.fn.fadeOut.bind($("#ancient-pic")),
      1000
    ));
  };

  new ZedUI();
});
