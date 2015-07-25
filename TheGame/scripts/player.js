Quintus.player = function (Q) {
  Q.Sprite.extend('Player', {
    init: function(p) {
      this._super(p, {
        sheet: 'player-spritesheet',
        sprite: 'player',
        jumpSpeed: -480,
        speed: 200
      });


      this.add('2d, platformerControls, animation');
    },
    step: function (dt) {
      this.play("walk_right");
    }
  });
};
