/* globals Quintus */
Quintus.aiPatrool = function(Q) {
    'use strict';

    Q.component('aiPatrool', {
        extend: {
            patrool: function() {
                var dirX = this.p.vx / Math.abs(this.p.vx);
                var ground = Q.stage().locate(this.p.x, this.p.y +
                    this.p.h / 2 + 1, Q.SPRITE_DEFAULT);
                var nextElement = Q.stage().locate(this.p.x +
                    dirX * this.p.w / 2 + dirX, this.p.y +
                    this.p.h / 2 + 1, Q.SPRITE_DEFAULT);
                var nextTile;

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
