Quintus.player = function (Q) {
    'use strict';

    Q.MovingSprite.extend('Player', {
        init: function (p) {
            this._super(p, {
                sheet: 'player-spritesheet',
                sprite: 'player',
                jumpSpeed: -480,
                speed: 200,
                type: Q.SPRITE_PLAYER,
                collisionMask: Q.SPRITE_ENEMY
            });

            this.add('2d, platformerControls, animation');

            Q.input.on("fire", this, "shoot");
        },
        step: function (dt) {
            if (this.p.vx !== 0 && this.p.vy === 0) {
                this.play(this.p.direction + 'Run');
            } else if (this.p.vy < 0) {
                this.play(this.p.direction + 'Jump');
            } else if (this.p.vy > 0) {
                this.play(this.p.direction + 'Fall');
            } else {
                this.play(this.p.direction + 'Idle');
            }

            if (Q.inputs['down']) {
                this.play(this.p.direction + 'Duck');
            }
            if (Q.inputs['fire']) {
                this.play(this.p.direction + 'Fire');
            }
        },

        shoot: function () {
            var gamePlayer = this.p;
            var updateX = gamePlayer.w,
                updateVX = 300;

            if (this.p.direction === 'left') {
                updateX *= -1;
                updateVX *= -1
            }

            var currentBullet = new Q.Bullet({
                x: gamePlayer.x + updateX,
                y: gamePlayer.y,
                vx: updateVX
            });

            this.stage.insert(currentBullet);
        }
    });
};