/* globals Quintus */
Quintus.bullet = function(Q) {
    'use strict';

    Q.Sprite.extend('Bullet', {
        init: function(p) {
            var bulletConfig = Q.config.bullet;

            this._super(p, {
                sheet: bulletConfig.sheet,
                sprite: bulletConfig.sprite,
                gravity: bulletConfig.gravity,
                sensor: true,
                damagePoints: bulletConfig.damagePoints
            });

            this.add('2d, animation');
            this.play(this.p.direction);
            this.on('hit');
        },
        hit: function(collision) {
            if (collision.obj.p.collisionMask === Q.SPRITE_NONE) {
                return;
            }

            if (collision.obj.p.collisionMask !== Q.SPRITE_FRIENDLY) {
                this.destroy();
            }
        }
    });
};