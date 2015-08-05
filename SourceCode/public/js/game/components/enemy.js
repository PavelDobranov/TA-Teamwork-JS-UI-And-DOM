/* globals Quintus */

Quintus.enemy = function (Q) {
  Q.component('enemy', {
    added: function () {
      var entity = this.entity;

      entity.p.defaultDirection = 'right';
      entity.p.type = Q.SPRITE_ENEMY;
      entity.p.collisionMask = Q.SPRITE_FRIENDLY | Q.SPRITE_DEFAULT;

      entity.add('aiBounce');
      entity.add('aiPatrool');
      entity.on('step', 'patrool');
      entity.on('hit');
      entity.play('walk');
    },
    extend: {
      getDirection: function () {
        if (this.p.vx > 0) {
          return 'right'
        } else if (this.p.vx < 0) {
          return 'left';
        }
      },
      hit: function (collision) {
        var entity = this;

        if (collision.obj.p.type === Q.SPRITE_FRIENDLY && !collision.obj.isA('Player')) {
          entity.handleDyingAnimation();
        }
      }
    }
  });
};
