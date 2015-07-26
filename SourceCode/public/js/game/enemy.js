Quintus.enemy = function (Q) {

    Q.Sprite.extend('Enemy', {
        init: function (p) {
            this._super(p, {
                vx: 50,
                defaultDirection: 'right',
                sheet: 'enemy-spritesheet',
                sprite: 'enemy',
                type: Q.SPRITE_ENEMY,
                collisionMask: Q.SPRITE_BULLET | Q.SPRITE_PLAYER
                //skipCollide: false
            });
            this.add('2d, aiBounce, animation');

            this.on("hit");
            console.log(this.p);
        },
        step: function (dt) {
            this.play('walk');
            var dirX = this.p.vx / Math.abs(this.p.vx);
            var ground = Q.stage().locate(this.p.x, this.p.y + this.p.h / 2 + 1, Q.SPRITE_DEFAULT); // Q.SPRITE_DEFAULT??
            var nextElement = Q.stage().locate(this.p.x + dirX * this.p.w / 2 + dirX, this.p.y + this.p.h / 2 + 1, Q.SPRITE_DEFAULT); // Q.SPRITE_DEFAULT??
            var nextTile;

            if (nextElement instanceof Q.TileLayer) {
                nextTile = true;
            }

            if (!nextTile && ground) {
                if (this.p.vx > 0) {
                    // if (this.p.defaultDirection === 'right') {
                    // 	this.p.flip = 'x'
                    // } else {
                    // 	this.p.flip = false;
                    // }
                    this.p.flip = 'x';
                } else {
                    if (this.p.defaultDirection = 'left') {
                        this.p.flip = false;
                    }
                }
                this.p.vx = -this.p.vx;
            }
        },

        hit: function(col) {
            // If "Enemy" collides with a "Bullet", they die.
            if (col.obj.isA("Bullet")) {
                this.destroy();
                col.obj.destroy();
            }
        }
    })
};