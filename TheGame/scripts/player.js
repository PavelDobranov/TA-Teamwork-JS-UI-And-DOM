Quintus.player = function (Q) {
  Q.Sprite.extend('Player', {
    init: function(p) {
      this._super(p, {
        sheet: 'player',
        jumpSpeed: -480,
        speed: 100
      });

      this.add('2d, platformerControls');
    }
  });
};
