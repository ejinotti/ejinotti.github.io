$(function () {
  var $currentTab = $('#menu li').filter(function () {
    return $(this).text() === location.hash.slice(1);
  });

  if (!$currentTab.length) {
    $currentTab = $('#menu li').first();
  }

  activateTab($currentTab);

  $('#menu').on('click', 'li:not(.active)', function (e) {
    activateTab($(this));
  });

  $('.know-more-link').click(function (e) {
    activateTab($('#menu li').last());
  });

  function activateTab($newTab) {
    var $currentSection = $('#' + $currentTab.text());
    var $newSection = $('#' + $newTab.text());

    $currentTab.removeClass('active');
    $newTab.addClass('active');

    $currentSection.slideUp($.fn.slideDown.bind($newSection));
    $currentTab = $newTab;
  }
});
