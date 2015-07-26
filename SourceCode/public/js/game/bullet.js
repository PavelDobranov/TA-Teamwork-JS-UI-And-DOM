Quintus.bullet = function(Q){

    Q.MovingSprite.extend("Bullet",{
        init: function (p) {
            this._super(p, {
                frame: 15,
                type: Q.SPRITE_BULLET,
                collisionMask: Q.SPRITE_ENEMY,
                gravityY: 0,
                sensor: true
            });

            this.add("2d");
        },

        step: function (dt) {
            if (this.p.x < 35 || this.p.x > 760) {
                this.destroy();
            }
        }
    })
};