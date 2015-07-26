Quintus.enemy = function (Q) {
	Q.Sprite.extend('Enemy', {
		init: function (p) {
			this._super(p, {
				// vx: -50,
				// defaultDirection: 'left',
		        sheet: 'enemy-spritesheet',
		        sprite: 'enemy',
			});
			this.add('2d, aiBounce');
		}
	})
};