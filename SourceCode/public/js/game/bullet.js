Quintus.bullet = function (Q) {

    Q.MovingSprite.extend("Bullet", {
        init: function (p) {
            this._super(p, {
                sheet: 'bullet-spritesheet',
                frame: 0,
                type: Q.SPRITE_BULLET,
                collisionMask: Q.SPRITE_ENEMY,
                gravityY: 0,
                sensor: true
            });

            this.add('2d');
            this.add('animation');
            this.on('hit');
        },

        hit: function (col) {
            this.destroy();
        }
    });
};