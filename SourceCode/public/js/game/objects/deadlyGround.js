Quintus.deadlyGround = function (Q) {
  'use strict';

  Q.Sprite.extend('DeadlyGround', {
    init: function (p) {
      this._super(p, {
        sheet: 'deadly-ground-spritesheet',
        sprite: 'deadlyGround',
        gravityY: 0,
        type: Q.SPRITE_ENEMY,
        collisionMask: Q.SPRITE_FRIENDLY
      });

      this.add('2d, animation');
    },
    step: function () {
      this.play('circle');
    },
  });
};