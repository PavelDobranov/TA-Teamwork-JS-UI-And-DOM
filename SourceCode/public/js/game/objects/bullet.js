Quintus.bullet = function (Q) {
  'use strict';

  Q.Sprite.extend('Bullet', {
    init: function (p) {
      this._super(p, {
        sheet: 'bullet-spritesheet',
        sprite: 'bullet',
        gravityY: 0,
        sensor: true
      });

      this.add('2d, animation');
      this.play(this.p.direction);
      this.on('hit');
    },
    hit: function (collision) {
      if (collision.obj.p.collisionMask === Q.SPRITE_NONE) {
        return;
      }

      if (collision.obj.p.collisionMask !== Q.SPRITE_FRIENDLY) {
        this.destroy();
      }
    }
  });
};