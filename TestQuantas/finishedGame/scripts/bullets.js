Quintus.bullet = function (Q) {

    // TODO: BUGS
    // 1. Wrong bullet direction
    // 2. Bullets must disappear after hit background (sesnsor: false) elements
    // 3. Bullets stops if they hit player?!?

    Q.MovingSprite.extend("Bullet", {
        init: function (p) {
            this._super(p, {
                sprite: "bullet",
                sheet: "spritesheet",
                frame: 15,
                type: Q.SPRITE_BULLET,
                collisionMask: Q.SPRITE_ENEMY,
                gravityY: 0,
                sensor: true,
            });

            this.add("2d");
        },

        /*
         * Overriding step method to destroy bullets.
         * Every bullet outside the canvas should be destroyed. If I don't destroy
         * them, the bullet is still alive and can kill enemies outside canvas where
         * the player cannot see anything.
         */
        step: function (dt) {
            if (this.p.x < 35 || this.p.x > 760) {
                this.destroy();
            }
        },

        //step: function(dt) {
        //    if(!Q.overlap(this,this.stage)) {
        //        this.destroy();
        //    }
        //}

    });
};