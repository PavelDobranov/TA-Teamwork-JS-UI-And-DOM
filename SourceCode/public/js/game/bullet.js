Quintus.bullet = function(Q){

    Q.MovingSprite.extend("Bullet",{
        init: function (p) {
            this._super(p, {
                frame: 15,
                type: Q.SPRITE_BULLET,
                collisionMask: Q.SPRITE_ENEMY,
                gravityX: 0,
                gravityY: 0,
                sensor: true
            });

            this.add("2d");
        },

        // TODO: Clear bullets:
        // 1. Out of the game field
        // 2. When hit sensor: false elements

        step: function (dt) {
            if (this.p.x < 35 ) {
                this.destroy();
            }
        }
    })
};