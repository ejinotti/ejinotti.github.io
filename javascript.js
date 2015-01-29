function ZedUI () {
  this.$currentTab = $("#menu li").filter(function () {
    return $(this).text() === "about";
  }).addClass("active");
  $("#about").slideDown();
  $("#menu").on("click", "li", this.selectTab.bind(this));
  $("#ancient").on("mouseenter", $.fn.fadeIn.bind($("#ancient-pic")));
  $("#ancient").on("mouseleave", $.fn.fadeOut.bind($("#ancient-pic")));
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
