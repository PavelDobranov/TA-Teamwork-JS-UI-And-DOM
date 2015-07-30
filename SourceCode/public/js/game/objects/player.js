/* globals Quintus */
Quintus.Player = function(Q) {
    Q.Sprite.extend('Player', {
        init: function(p) {
            var playerConfig = Q.config.player;

            this._super(p, {
                sheet: playerConfig.sheet,
                sprite: playerConfig.sprite,
                speed: playerConfig.speed,
                jumpSpeed: playerConfig.jumpSpeed,
                type: Q.SPRITE_FRIENDLY,
                collisionMask: Q.SPRITE_ENEMY | Q.SPRITE_DEFAULT,
                health: 200,
                damagePoints: 10
            });

            this.add('2d, platformerControls, animation');
            this.add('weapon');

            Q.HEALTH = this.p.health;
            Q.input.on('fire', this, 'shoot');
            this.on('fired', this, 'launchBullet');
            this.on('hit.sprite', 'die');
        },

        shoot: function() {
            var that = this;

            if (!that.p.canShoot) {
                return;
            }

            this.play(this.p.direction + 'Shoot', 1);
        },

        step: function(dt) {
            if (this.p.vx !== 0 && this.p.vy === 0) {
                this.play(this.p.direction + 'Walk');
            } else if (this.p.vy < 0) {
                this.play(this.p.direction + 'Jump');
            } else if (this.p.vy > 0) {
                this.play(this.p.direction + 'Fall');
            } else {
                this.play(this.p.direction + 'Idle');
            }

            if (this.p.y > Q.height - 40) {
                //    console.log(Q.SCORE);
                Q.stageScene('endGame', 1, this.p);
                this.destroy();
            }

            if (Q.inputs['down']) {
                this.play(this.p.direction + 'Duck');
            }
        },

        die: function(collision) {
            if (collision.obj.p.type === Q.SPRITE_ENEMY) {
                this.p.health -= collision.obj.p.damagePoints;
                if (this.p.health < 0) {
                    this.p.health = 0
                }

                Q.HEALTH = this.p.health;
                Q.stageScene('currentScore', 3, Q('Player').first().p);

                if (this.p.health <= 0) {
                    Q.stageScene('endGame', 1, this.p);
                    this.destroy();
                }
            }
        }
    });
};
