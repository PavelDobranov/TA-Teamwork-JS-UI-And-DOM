/* globals Quintus */
Quintus.Marine = function(Q) {
    'use strict';

    Q.Sprite.extend('Marine', {
        init: function(p) {
            var marineConfig = Q.config.marine;

            this._super(p, {
                vx: marineConfig.vx,
                sheet: marineConfig.sheet,
                sprite: marineConfig.sprite,
                standingPoints: marineConfig.standingPoints,
                deadPoints: marineConfig.deadPoints
            });

            this.add('enemy');
        }
    });
};
