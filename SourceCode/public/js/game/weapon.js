Quintus.weapon = function (Q) {
  'use strict';

  Q.component('weapon', {
    added: function () {
      this.entity.p.canShoot = true;
    },
    extend: {
      launchBullet: function () {
        var entity = this,
          directionAsNumber = entity.p.direction === 'right' ? 1 : -1,
          bulletX = entity.p.x + Q.FIRE_GUN_DISTANCE * directionAsNumber,
          bulletY = entity.p.y,
          bulletVelocity = Q.BULLET_VELOCITY * directionAsNumber,
          bulletType = entity.p.type,
          bulletCollisionMask = entity.p.collisionMask | Q.SPRITE_DEFAULT,
          bulletDirection = entity.p.direction,
          bullet;

        bullet = new Q.Bullet({
          x: bulletX,
          y: bulletY,
          vx: bulletVelocity,
          type: bulletType,
          collisionMask: bulletCollisionMask,
          direction: bulletDirection
        });

        this.stage.insert(bullet);

        entity.p.canShoot = false;
        setTimeout(function () {
          entity.p.canShoot = true;
        }, Q.SHOOTING_INTERVAL_IN_MS);
      }
    }
  });
};