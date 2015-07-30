/* globals Quintus */
Quintus.Mummy = function(Q) {
    'use strict';

    Q.Sprite.extend('Mummy', {
        init: function(p) {
            var mummyConfig = Q.config.mummy;

            this._super(p, {
                vx: mummyConfig.vx,
                sheet: mummyConfig.sheet,
                sprite: mummyConfig.sprite,
                standingPoints: mummyConfig.standingPoints,
                deadPoints: mummyConfig.deadPoints,
                health: mummyConfig.health,
                damagePoints: mummyConfig.damagePoints,
                scorePoints: mummyConfig.scorePoints
            });

            this.add('enemy');
        }
    });
};
