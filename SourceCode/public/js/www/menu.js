$(function () {
  var paper = Raphael("holder", 1000, 600),
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
        }, {
          name: 'GitHub',
          svgPath: 'm16,0.395c-8.836,0 -16,7.163 -16,16c0,7.069 4.585,13.066999 10.942,15.181999c0.799999,0.148001 1.094,-0.347 1.094,-0.77c0,-0.380999 -0.015,-1.641998 -0.022,-2.979c-4.452,0.968 -5.391,-1.887999 -5.391,-1.887999c-0.728,-1.849001 -1.776,-2.341 -1.776,-2.341c-1.452,-0.993 0.11,-0.973001 0.11,-0.973001c1.606,0.113001 2.452,1.649 2.452,1.649c1.427001,2.446001 3.743001,1.739 4.656,1.33c0.143001,-1.034 0.558001,-1.74 1.016001,-2.139999c-3.554,-0.403999 -7.29,-1.777 -7.29,-7.907001c0,-1.747 0.625,-3.174 1.649,-4.295c-0.166,-0.403 -0.714,-2.03 0.155,-4.234c0,0 1.344,-0.43 4.401,1.64c1.276,-0.355 2.645,-0.532 4.004999,-0.539c1.359001,0.006 2.729,0.184 4.008001,0.539c3.053999,-2.07 4.394999,-1.64 4.394999,-1.64c0.871,2.204 0.323,3.831 0.157001,4.234c1.025999,1.120001 1.646999,2.548 1.646999,4.295c0,6.145 -3.743,7.498 -7.306,7.895c0.573999,0.497002 1.084999,1.470001 1.084999,2.963001c0,2.140999 -0.018999,3.864 -0.018999,4.390999c0,0.426001 0.288,0.925001 1.098999,0.768002c6.354,-2.118 10.933001,-8.113001 10.933001,-15.18c0,-8.837 -7.164,-16.000001 -16,-16.000001l0,0.000001z',
          url: 'https://github.com/PavelDobranov/TA-Teamwork-JS-UI-And-DOM'
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