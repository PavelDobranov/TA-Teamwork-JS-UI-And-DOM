window.onload = (function () {
  var paper = Raphael('nav'),
    menuData = {
      name: 'Menu',
      svgPath: 'm2,6h28v6h-28l0,-6zm0,8h28v6h-28l0,-6zm0,8h28v6h-28l0,-6z',
      items: [
        {
          name: 'Home',
          svgPath: 'm32,18.451l-16,-12.42l-16,12.42v-5.064l16,-12.42l16,12.42l0,5.064zm-4,-0.451v12h-8v-8h-8v8h-8v-12l12,-9l12,9zs',
          url: '/home',
        }, {
          name: 'Play',
          svgPath: 'm30.148001,5.588c-2.934,-3.42 -7.288,-5.588 -12.148001,-5.588c-8.837,0 -16,7.163 -16,16s7.163,16 16,16c4.860001,0 9.212999,-2.167 12.148001,-5.587999l-10.148001,-10.412001l10.148001,-10.412l0,0zm-8.148001,-1.819c1.232,0 2.231001,0.999 2.231001,2.231s-0.999001,2.231 -2.231001,2.231s-2.231001,-0.999 -2.231001,-2.231c0,-1.232 0.999001,-2.231 2.231001,-2.231z',
          url: '/play',
        }, {
          name: 'Requirements',
          svgPath: 'm29.884001,25.139999l-9.884001,-16.469999v-6.671h1c0.549999,0 1,-0.45 1,-1s-0.450001,-1 -1,-1h-10c-0.55,0 -1,0.45 -1,1s0.45,1 1,1h1v6.671l-9.884,16.469999c-2.263999,3.773001 -0.516,6.860001 3.884,6.860001h20c4.4,0 6.147999,-3.087 3.884001,-6.860001zm-22.352001,-5.139999l6.468,-10.779v-7.221h4v7.221l6.468,10.779h-16.935l-0.001,0z',
          url: '/requirements'
        }, {
          name: 'Documentation',
          svgPath: 'm28,4v26h-21c-1.657,0 -3,-1.343 -3,-3s1.343,-3 3,-3h19v-24h-20c-2.2,0 -4,1.8 -4,4v24c0,2.200001 1.8,4 4,4h24v-28h-2l0,0z',
          url: '/documentation'
        }
      ]
    },
    buttonFillColor = '#FFA500',
    buttonStrokeColor = 'rgba(0, 0, 0, 0)',
    buttonStrokeWidth = 15,
    buttonCursorType = 'pointer',
    buttonsOffset = 50,
    animationTimeOffset = 200,
    animationType = 'elastic',
    menuBbuttons = [],
    collapsed = true;

  (function generateButtons() {
    var buttonAttributes = {
    		fill: buttonFillColor,
      stroke: buttonStrokeColor,
      'stroke-width': buttonStrokeWidth,
      cursor: buttonCursorType
    }

    paper
      .path(menuData.svgPath)
      .attr(buttonAttributes)
      .click(function (argument) {
        collapsed ? expandMenuItems() : collapseMenuItems();
      });

    menuData.items.forEach(function (menuItem) {
      buttonAttributes.href = menuItem.url;
      var button = paper
        .path(menuItem.svgPath)
        .attr(buttonAttributes)
        .hide();

      button.transform('T-100,-100');
      menuBbuttons.push(button);
    });
  } ());

  function collapseMenuItems() {
    menuBbuttons.forEach(function (button, index) {

      // var buttonPath = button.attr('path'),
        transformedButton = menuData.items[index].svgPath;

      button.animate({ path: transformedButton }, animationTimeOffset, animationType, function () {
	      	this.hide();
      });

    });

    collapsed = true;
  }

  function expandMenuItems() {
    var buttonPosition = buttonsOffset + 100,
      animationTime = animationTimeOffset;

    menuBbuttons.forEach(function (button) {
      var buttonPath = button.attr('path'),
        transformedButton = Raphael.transformPath(buttonPath, 'T' + buttonPosition + ',100');

      button.show().animate({ path: transformedButton }, animationTime, animationType);

      buttonPosition += buttonsOffset;
      animationTime += animationTimeOffset;

    });

    collapsed = false;
  }
});