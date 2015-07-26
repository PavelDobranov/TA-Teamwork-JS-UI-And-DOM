Quintus.player = function (Q) {

    Q.Sprite.extend("Player", {
        init: function (prop) {
            this._super(prop, {
                sheet: "spritesheet",
                frame: 21,
                jumpSpeed: -300,
                speed: 100,
                type: Q.SPRITE_PLAYER,
                collisionMask: Q.SPRITE_ENEMY

            });

            this.add("2d, platformerControls, animation");
            Q.input.on("fire", this, "shoot");
        },

        shoot: function () {
            var p = this.p;
            var update = 200;

            if (Q.inputs['right']) {
                update *= -1
            }

            this.stage.insert(new Q.Bullet({
                x: p.x,
                y: p.y,
                vx: update
            }))
        }
    });
};