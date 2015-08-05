/* globals Quintus */

Quintus.Grinder = function (Q) {
  Q.Sprite.extend('Grinder', {
    init: function (p) {
      var grinderConfig = Q.config.grinder;

      this._super(p, {
        sheet: grinderConfig.sheet,
        sprite: grinderConfig.sprite,
        gravity: grinderConfig.gravity,
        type: Q.SPRITE_ENEMY,
        collisionMask: Q.SPRITE_FRIENDLY | Q.SPRITE_DEFAULT
      });

      this.add('animation');
      this.play('run');
    }
  });
};