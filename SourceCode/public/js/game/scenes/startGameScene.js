/* globals Quintus */

Quintus.startGameScene = function (Q) {
  Q.scene('startGameScene', function (stage) {
    stage.insert(new Q.UI.Button({
      label: 'Start Game',
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
