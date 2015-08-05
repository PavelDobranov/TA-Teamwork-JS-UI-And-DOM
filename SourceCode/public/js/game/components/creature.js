/* globals Quintus */

Quintus.creature = function (Q) {
  Q.component('creature', {
    added: function () {
      var entity = this.entity;

      entity.add('2d, animation');
      entity.on('dead', 'die');
      entity.p.points = entity.p.standingPoints;
    },
    extend: {
      handleDyingAnimation: function () {
        var entity = this,
          dyingAnimationPriority = 2,
          direction = entity.getDirection();

        entity.p.vx = 0;
        entity.p.points = entity.p.deadPoints;
        entity.play(direction + 'Die', dyingAnimationPriority);
      }
    }
  });
};