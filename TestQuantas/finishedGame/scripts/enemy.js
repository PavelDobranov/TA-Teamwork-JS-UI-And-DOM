Quintus.enemy = function (Q) {

    Q.component("enemy", {
        added: function () {
            var entity = this.entity;
            entity.on("bump.left, bump.right, bump. bottom", function (collision) {
                if (collision.obj.isA("Player")) {
                   collision.obj.destroy();
                }
            });
            entity.on("bump.top", function (collision) {
                if (collision.obj.isA("Player")) {
                    // make the player jump:
                    collision.obj.p.vy = -100;

                    // kill the enemy:
                    this.destroy();
                }
            })
        }
    });

    Q.Sprite.extend("GroundEnemy", {
        init: function (prop) {
            this._super(prop, {
                vx: -50,
                sheet: "spritesheet",
                defaultDirection: "left",
                frame: 170,
                type: Q.SPRITE_ENEMY,
                collisionMask: Q.SPRITE_BULLET | Q.SPRITE_PLAYER,
                skipCollide: false
            });
            this.add("2d");
            this.add("aiBounce");
            this.add("enemy");
            this.on("hit");
        },

        hit: function(col) {
             // If "Enemy" collides with a "Bullet", they die.
             if (col.obj.isA("Bullet")) {
                this.destroy();
                col.obj.destroy();
            }
        }
    });
};