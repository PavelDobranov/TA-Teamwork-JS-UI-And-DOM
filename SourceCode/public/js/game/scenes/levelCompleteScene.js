/* globals Quintus */

Quintus.levelCompleteScene = function (Q) {
  Q.scene('levelCompleteScene', function (stage) {
    var container = stage.insert(new Q.UI.Container({
      fill: Q.config.UI.fillColor,
      border: Q.config.UI.border,
      shadow: Q.config.UI.shadow,
      shadowColor: Q.config.UI.shadowColor,
      y: Q.config.UI.containerPositionY,
      x: Q.width / 2
    }));

    stage.insert(new Q.UI.Text({
      label: 'Next Level Coming Soon ...',
      color: Q.config.UI.color
    }), container);

    container.fit(Q.config.UI.containerPadding);

    stage.insert(new Q.UI.Button({
      label: 'Play Again',
      x: Q.width / 2,
      y: Q.height / 2,
      fill: Q.config.UI.fillColor,
      border: Q.config.UI.border,
      shadow: Q.config.UI.shadow,
      shadowColor: Q.config.UI.shadowColor
    }, function () {
      Q.stageScene('playFactoryScene');
    }));
  });
};