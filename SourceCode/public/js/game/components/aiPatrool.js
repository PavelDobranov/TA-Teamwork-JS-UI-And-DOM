/* globals Quintus */

Quintus.aiPatrool = function (Q) {
  Q.component('aiPatrool', {
    extend: {
      patrool: function () {
        var directionX = this.p.vx / Math.abs(this.p.vx),
          ground = Q.stage().locate(this.p.x, this.p.y + this.p.h / 2 + 1, Q.SPRITE_DEFAULT),
          nextElement = Q.stage().locate(this.p.x + directionX * this.p.w / 2 + directionX, this.p.y + this.p.h / 2 + 1, Q.SPRITE_DEFAULT),
          nextTile;

        if (nextElement instanceof Q.TileLayer) {
          nextTile = true;
        }

        if (!nextTile && ground) {
          if (this.p.vx > 0) {
            this.p.flip = 'x';
          } else {
            if (this.p.defaultDirection = 'left') {
              this.p.flip = false;
            }
          }

          this.p.vx = -this.p.vx;
        }
      }
    }
  });
};