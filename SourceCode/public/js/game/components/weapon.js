/* globals Quintus */

Quintus.weapon = function (Q) {
  Q.component('weapon', {
    added: function () {
      this.entity.p.canShoot = true;
    },
    extend: {
      launchBullet: function () {
        var entity = this,
          directionAsNumber = entity.p.direction === 'right' ? 1 : -1,
          bulletX = entity.p.x + Q.config.weapon.shiitingPointOffset * directionAsNumber,
          bulletY = entity.p.y,
          bulletVelocity = Q.config.bullet.vx * directionAsNumber,
          bulletType = entity.p.type,
          bulletCollisionMask = entity.p.collisionMask,
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
        }, Q.config.weapon.reloadingTime);
      }
    }
  });
};
