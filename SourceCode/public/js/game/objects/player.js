/* globals Quintus */

Quintus.Player = function (Q) {
  Q.Sprite.extend('Player', {
    init: function (p) {
      var playerConfig = Q.config.player;

      this._super(p, {
        sheet: playerConfig.sheet,
        sprite: playerConfig.sprite,
        speed: playerConfig.speed,
        jumpSpeed: playerConfig.jumpSpeed,
        type: Q.SPRITE_FRIENDLY,
        collisionMask: Q.SPRITE_ENEMY | Q.SPRITE_DEFAULT | Q.SPRITE_PARTICLE,
        standingPoints: playerConfig.standingPoints,
        deadPoints: playerConfig.deadPoints
      });

      this.add('platformerControls');
      this.add('creature, weapon');
      Q.input.on('fire', this, 'shoot');
      this.on('fired', 'launchBullet');
      this.on('hit');
    },
    step: function (dt) {
      var direction = this.getDirection();

      if (this.p.vx !== 0 && this.p.vy === 0) {
        this.play(direction + 'Walk');
      } else if (this.p.vy < 0) {
        this.play(direction + 'Jump');
      } else if (this.p.vy > 0) {
        this.play(direction + 'Fall');
      } else {
        this.play(direction + 'Idle');
      }

      if (Q.inputs['down']) {
        this.play(direction + 'Duck');
      }
    },
    getDirection: function () {
      return this.p.direction;
    },
    shoot: function () {
      var shootingAnimationPriority = 1,
        direction = this.getDirection();

      if (!this.p.canShoot) {
        return;
      }

      this.play(direction + 'Shoot', shootingAnimationPriority);
    },
    hit: function (collision) {
      if (collision.obj.p.type === Q.SPRITE_PARTICLE) {
        Q.stageScene('levelCompleteScene');
      }

      if (collision.obj.p.type === Q.SPRITE_ENEMY) {
        this.handleDyingAnimation();
      }
    },
    die: function () {
      this.destroy();
      Q.stageScene('gameOverScene');
    }
  });
};