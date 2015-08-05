/* global $, Raphael */

$(function () {
  var logoDataPath = './data/www/logo.json',
    logoElementId = 'game-logo',
    logoFillColor = '#FFA500',
    logoStrokeColor = '#FFF',
    logoStrokeWidth = 3,
    logoPaperWidth = '100%',
    logoPaperHeight = 400,
    animationDelay = 1000,
    animationTime = 1000,
    animationType = 'bounce',
    transformedWordCoordinates = 'T0,400',
    paper,
    word;

  $.getJSON(logoDataPath)
    .done(function (data) {
      drawLogo(data.words);
    });

  function drawLogo(words) {
    paper = Raphael(logoElementId, logoPaperWidth, logoPaperHeight);

    for (word in words) {
      drawWord(words[word].svgPath, { stroke: logoStrokeColor, fill: logoFillColor, 'stroke-width': logoStrokeWidth });
    }
  }

  function drawWord(path, attributes) {
    setTimeout(function () {
      var word = paper.path(path).attr(attributes),
        transformedWordPath = Raphael.transformPath(word.attr('path'), transformedWordCoordinates);

      word.animate({ path: transformedWordPath }, animationTime, animationType);
    }, animationDelay);

    animationDelay += animationTime;
  }
});