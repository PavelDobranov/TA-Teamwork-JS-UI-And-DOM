/* globals Quintus */

Quintus.Teleport = function (Q) {
  Q.Sprite.extend('Teleport', {
    init: function (p) {
      var teleportConfig = Q.config.teleport;

      this._super(p, {
        sheet: teleportConfig.sheet,
        sprite: teleportConfig.sprite,
        type: Q.SPRITE_PARTICLE,
        collisionMask: Q.SPRITE_DEFAULT | Q.SPRITE_FRIENDLY,
        points: teleportConfig.points
      });

      this.add('animation');
      this.play('run');
    }
  });
};
