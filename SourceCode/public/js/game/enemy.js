Quintus.enemy = function (Q) {
	Q.Sprite.extend('Enemy', {
		init: function (p) {
			this._super(p, {
				vx: 50,
				defaultDirection: 'right',
				sheet: 'enemy-spritesheet',
				sprite: 'enemy',
			});
			this.add('2d, aiBounce, animation');
			console.log(this.p);
		},
		step: function (dt) {
			this.play('walk');
		}
	})
};