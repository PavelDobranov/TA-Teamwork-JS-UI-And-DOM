Quintus.player = function (Q) {
    'use strict';

    Q.Sprite.extend('Player', {
        init: function (p) {
            this._super(p, {
                sheet: 'player-spritesheet',
                sprite: 'player',
                type: Q.SPRITE_PLAYER,
                collisionMask: Q.SPRITE_ENEMY,
                jumpSpeed: Q.PLAYER_JUMP_SPEED,
                speed: Q.PLAYER_SPEED
            });

            this.add('2d, platformerControls, animation');
            this.add('weapon');

            Q.input.on('fire', this, 'shoot');
            this.on('fired', this, 'launchBullet');
            this.on('hit.sprite', 'die');
        },

        shoot: function () {
            var that = this;

            if (!that.p.canShoot) {
                return;
            }

            this.play(this.p.direction + 'Shoot', 1);
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

            if (this.p.y > Q.height) {
                Q.stageScene('endGame', 1, this.p);
                this.destroy();
            }

            if (Q.inputs['down']) {
                this.play(this.p.direction + 'Duck');
            }
        },

        die: function (col) {
            if (col.obj.isA('Enemy')) {
                console.log(col);
                Q.stageScene('endGame', 1, this.p);
                this.destroy();
            }
        }
    });
};
