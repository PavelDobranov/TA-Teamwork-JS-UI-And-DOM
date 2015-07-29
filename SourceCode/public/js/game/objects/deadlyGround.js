/* globals Quintus */
Quintus.deadlyGround = function(Q) {
    'use strict';

    Q.Sprite.extend('DeadlyGround', {
        init: function(p) {
            var deadlyGroundConfig = Q.config.deadlyGround;

            this._super(p, {
                sheet: deadlyGroundConfig.sheet,
                sprite: deadlyGroundConfig.sprite,
                gravity: deadlyGroundConfig.gravity,
                type: Q.SPRITE_ENEMY,
                collisionMask: Q.SPRITE_FRIENDLY,
                sensor: true
            });

            this.add('2d, animation');
        },
        step: function() {
            this.play('circle');
        },
    });
};
