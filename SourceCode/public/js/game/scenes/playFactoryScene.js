/* globals Quintus */

Quintus.playFactoryScene = function (Q) {
  Q.scene('playFactoryScene', function (stage) {
    var player;

    Q.stageTMX('factory.tmx', stage);

    player = Q('Player').first();
    stage.add('viewport').follow(player, { x: true, y: true });
  });
};