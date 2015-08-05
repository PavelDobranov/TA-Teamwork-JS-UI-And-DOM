/* globals Quintus */

Quintus.Mummy = function (Q) {
  Q.Sprite.extend('Mummy', {
    init: function (p) {
      var mummyConfig = Q.config.mummy;

      this._super(p, {
        vx: mummyConfig.vx,
        sheet: mummyConfig.sheet,
        sprite: mummyConfig.sprite,
        standingPoints: mummyConfig.standingPoints,
        deadPoints: mummyConfig.deadPoints
      });

      this.add('creature, enemy');
    },
    die: function () {
      this.destroy();
    }
  });
};
