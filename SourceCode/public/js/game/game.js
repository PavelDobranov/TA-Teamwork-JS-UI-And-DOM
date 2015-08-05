/* globals Quintus, $ */

$(function () {
  var Q = window.Q = Quintus({
      imagePath: '../../img/',
      dataPath: '../../data/'
    })
    .setup('game-canvas')
    .include('Scenes, Sprites, 2D, Input, Touch, TMX, UI, Anim')
    .include('config')
    .include('startGameScene, playFactoryScene, gameOverScene, levelCompleteScene')
    .include('creature, enemy, weapon, aiPatrool')
    .include('Player, Marine, Mummy, Bullet, Grinder, Teleport')
    .controls()
    .touch();

  Q.setImageSmoothing(false);

  Q.loadTMX('factory.tmx', function () {
    Q.animations('player', Q.config.player.animations);
    Q.animations('bullet', Q.config.bullet.animations);
    Q.animations('marine', Q.config.marine.animations);
    Q.animations('mummy', Q.config.mummy.animations);
    Q.animations('grinder', Q.config.grinder.animations);
    Q.animations('teleport', Q.config.teleport.animations);

    Q.stageScene('playFactoryScene');
  });
});