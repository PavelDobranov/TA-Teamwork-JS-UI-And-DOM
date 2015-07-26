Quintus.ActionPlatformerEnemy = function (Q) {
	Q.Sprite.extend('GroundEnemy', {
		init: function (p) {
			this._super(p, {
				vx: -50,
				defaultDirection: 'left',
        sheet: 'enemy',
        sprite: 'GroundEnemy',
			});
			this.add('2d, aiBounce');
		}
	})
};