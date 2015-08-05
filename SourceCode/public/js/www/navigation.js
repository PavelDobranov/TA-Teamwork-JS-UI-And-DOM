/* global $, Raphael */

$(function () {
  var navigationDataPath = './data/www/navigation.json',
    navigationElementId = 'nav',
    buttonFillColor = '#FFA500',
    buttonStrokeColor = 'rgba(0, 0, 0, 0)',
    buttonStrokeWidth = 15,
    buttonCursorType = 'pointer',
    buttonsOffset = 50,
    collapsedButtonCoordinates = 'T-100,-100',
    expandedButtonCoordinateY = '100',
    firstButtonExpandPosition = 150,
    animationTimeOffset = 200,
    animationType = 'elastic',
    navigationButtons = [],
    collapsed = true,
    paper,
    transformedButton,
    navigationData;

  $.getJSON(navigationDataPath)
    .done(function (data) {
      navigationData = data;
      generateButtons();
    });

  function generateButtons() {
    var buttonAttributes = {
      fill: buttonFillColor,
      stroke: buttonStrokeColor,
      'stroke-width': buttonStrokeWidth,
      cursor: buttonCursorType
    };

    paper = Raphael(navigationElementId);

    paper
      .path(navigationData.svgPath)
      .attr(buttonAttributes)
      .click(function (argument) {
        collapsed ? expandMenuItems() : collapseMenuItems();
      });

    navigationData.items.forEach(function (menuItem) {
      buttonAttributes.href = menuItem.url;
      var button = paper
        .path(menuItem.svgPath)
        .attr(buttonAttributes)
        .hide();

      button.transform(collapsedButtonCoordinates);
      navigationButtons.push(button);
    });
  }

  function collapseMenuItems() {
    navigationButtons.forEach(function (button, index) {
      transformedButton = navigationData.items[index].svgPath;

      button.animate({ path: transformedButton }, animationTimeOffset, animationType);
    });

    collapsed = true;
  }

  function expandMenuItems() {
    var buttonPosition = firstButtonExpandPosition,
      animationTime = animationTimeOffset;

    navigationButtons.forEach(function (button) {
      var buttonPath = button.attr('path');

      transformedButton = Raphael.transformPath(buttonPath, 'T' + buttonPosition + ',' + expandedButtonCoordinateY);

      button.show().animate({ path: transformedButton }, animationTime, animationType);

      buttonPosition += buttonsOffset;
      animationTime += animationTimeOffset;
    });

    collapsed = false;
  }
});