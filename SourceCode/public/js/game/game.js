$(function () {
  'use strict';

  var Q = Quintus({
    development: true,
    imagePath: '../../img/',
    dataPath: '../../data/',
    audioPath: '../../audio/',
    audioSupported: ['mp3', 'ogg'],
    sound: true
  })
    .include('Scenes, Sprites, 2D, Input, Touch, UI, TMX, Anim')
    .include('player')
    .setup('game-canvas', { maximize: "touch" })
    .controls()
    .touch();

  // Q.setImageSmoothing(false);

  Q.scene('testMap', function (stage) {
    var player;

    Q.stageTMX('testMapWithPlayer.tmx', stage);

    player = Q('Player').first();
    stage.add('viewport').follow(player, { x: true, y: true });
  });


  Q.loadTMX('testMapWithPlayer.tmx, player.json', function () {
    Q.compileSheets('player-spritesheet.png', 'player.json');
    Q.animations("player", {
      rightIdle: { frames: [0, 1, 2], rate: 1 / 2, flip: false, loop: true },
      leftIdle: { frames: [0, 1, 2], rate: 1 / 2, flip: 'x', loop: true },
      rightRun: { frames: [4, 5, 6, 7, 8, 9, 10, 11, 12], rate: 1 / 6, flip: false, loop: true },
      leftRun: { frames: [4, 5, 6, 7, 8, 9, 10, 11, 12], rate: 1 / 6, flip: 'x', loop: true },
      rightJump: { frames: [23], rate: 1 / 2, flip: false , loop: true},
      leftJump: { frames: [23], rate: 1 / 2, flip: 'x' , loop: true},
      rightFall: { frames: [25], rate: 1 / 2, flip: false , loop: true},
      leftFall: { frames: [25], rate: 1 / 2, flip: 'x' , loop: true},
      rightDuck: { frames: [18, 19, 20, 21], rate: 1 / 2, flip: false , loop: true},
      leftDuck: { frames: [18, 19, 20, 21], rate: 1 / 2, flip: 'x' , loop: true},
      rightFire: { frames: [14, 15, 16], rate: 1 / 2, flip: false , loop: true},
      leftFire: { frames: [14, 15, 16], rate: 1 / 2, flip: 'x' , loop: true}
    });

    Q.stageScene('testMap');
  });
});