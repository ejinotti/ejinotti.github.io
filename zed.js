$(function () {
  var $currentTab = getTabFromHash();

  activateTab($currentTab, true);

  $('#menu').on('click', 'li:not(.active)', function (e) {
    activateTab($(this));
  });

  $('.know-more-link').click(function (e) {
    activateTab($('#menu li').last());
  });

  $(window).on('popstate', function (e) {
    activateTab(getTabFromHash(), true);
  });

  function getTabFromHash() {
    var $tab = $('#menu li').filter(function () {
      return $(this).text() === location.hash.slice(1);
    });

    return $tab.length ? $tab : $('#menu li').first();
  }

  function activateTab($newTab, noHistory) {
    var newId = '#' + $newTab.text();

    var $currentSection = $('#' + $currentTab.text());
    var $newSection = $(newId);

    $currentTab.removeClass('active');
    $newTab.addClass('active');

    $currentSection.slideUp($.fn.slideDown.bind($newSection));
    $currentTab = $newTab;

    if (!noHistory) {
      history.pushState(null, null, location.pathname + newId);
    }
  }
});
