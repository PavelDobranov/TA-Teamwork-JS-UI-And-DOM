$(function () {
    'use strict';
    var Q = window.Q = Quintus({
        development: true,
        imagePath: '../../img/',
        dataPath: '../../data/',
        audioPath: '../../audio/',
        audioSupported: ['mp3', 'ogg'],
        sound: true
    })
        .include('Scenes, Sprites, 2D, Input, Touch, UI, TMX, Anim')
        .include('player, enemy')
        .setup('game-canvas', {
            maximize: "touch",
            //scaleToFit: true
        })
        .controls()
        .touch();

    // Q.setImageSmoothing(false);

    Q.SPRITE_PLAYER = 1;
    Q.SPRITE_BULLET = 2;
    Q.SPRITE_ENEMY = 3;

    //TODO: MOVE THIS!
    //*********************************************************************
    Q.MovingSprite.extend("Bullet", {
        init: function (p) {
            this._super(p, {
                // TODO: INSERT SPRITE!
                sheet: "level1-spritesheet",
                frame: 15,
                type: Q.SPRITE_BULLET,
                collisionMask: Q.SPRITE_ENEMY,
                gravityY: 0,
                sensor: true
            });

            this.add('2d');
            this.add('animation')
        },

        step: function (dt) {
            if (this.p.x < 50) {
                this.destroy();
            }
        }
    });
    //*********************************************************************

    // define scene
    Q.scene('level1', function (stage) {
        var player;
        Q.stageTMX('level1.tmx', stage);
        player = Q('Player').first();
        stage.add('viewport').follow(player, {x: true, y: true});
    });

    // load assets
    Q.loadTMX('level1.tmx', function () {
        // Q.compileSheets('player-spritesheet.png', 'player.json');
        // Q.compileSheets('enemy-spritesheet.png', 'enemy.json');

        Q.animations("player", {
            rightIdle: {frames: [0, 1, 2], rate: 1 / 2, flip: false, loop: true},
            leftIdle: {frames: [0, 1, 2], rate: 1 / 2, flip: 'x', loop: true},
            rightRun: {frames: [4, 5, 6, 7, 8, 9, 10, 11, 12], rate: 1 / 6, flip: false, loop: true},
            leftRun: {frames: [4, 5, 6, 7, 8, 9, 10, 11, 12], rate: 1 / 6, flip: 'x', loop: true},
            rightJump: {frames: [23], rate: 1 / 2, flip: false, loop: true},
            leftJump: {frames: [23], rate: 1 / 2, flip: 'x', loop: true},
            rightFall: {frames: [25], rate: 1 / 2, flip: false, loop: true},
            leftFall: {frames: [25], rate: 1 / 2, flip: 'x', loop: true},
            rightDuck: {frames: [18, 19, 20, 21], rate: 1 / 2, flip: false, loop: true},
            leftDuck: {frames: [18, 19, 20, 21], rate: 1 / 2, flip: 'x', loop: true},
            rightFire: {frames: [14, 15, 16], rate: 1 / 2, flip: false, loop: true},
            leftFire: {frames: [14, 15, 16], rate: 1 / 2, flip: 'x', loop: true}
        });

        Q.animations('enemy', {
            walk: {frames: [0, 1, 2, 3, 4, 5, 6, 7, 8], rate: 1 / 9, loop: true}
        });

        Q.stageScene('level1');
    });
});