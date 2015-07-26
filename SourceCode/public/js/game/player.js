Quintus.player = function (Q) {
  'use strict';

  Q.Sprite.extend('Player', {
    init: function (p) {
      this._super(p, {
        sheet: 'player-spritesheet',
        sprite: 'player',
        jumpSpeed: -480,
        speed: 200
      });

      this.add('2d, platformerControls, animation');
    },
    step: function (dt) {
      if (this.p.vx != 0 && this.p.vy === 0) {
        this.play(this.p.direction + 'Run');
      } else if (this.p.vy < 0) {
        this.play(this.p.direction + 'Jump');
      } else if (this.p.vy > 0) {
        this.play(this.p.direction + 'Fall');
      } else {
        this.play(this.p.direction + 'Idle');
      }

      if(Q.inputs['down']) {
        this.play(this.p.direction + 'Duck');
      }
      if(Q.inputs['fire']) {
        this.play(this.p.direction + 'Fire');
      }
    }
  });
};