window.addEventListener("load", function () {
    var Q = window.Q = Quintus({development: true})
        .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX")
        // add game objects modules
        .include("player, enemy, bullet")
        .setup({
            //width: 320,
            //height: 180,
            //scaleToFit: true
            maximize: true
        })
        .controls(true).touch();

    Q.setImageSmoothing(false);

    Q.SPRITE_PLAYER = 1;
    Q.SPRITE_BULLET = 2;
    Q.SPRITE_ENEMY = 3;

    //define scene
    Q.scene("level", function (stage) {
        var player;
        Q.stageTMX("small-level.tmx", stage);
        // play camera
        player = Q("Player").first();
        stage.add("viewport").follow(player, {x: true, y: true});
    });

    // load assets
    Q.loadTMX("small-level.tmx, sprites.json, sprites.png", function () {
        Q.compileSheets("sprites.png, sprites.json");
        Q.stageScene("level");
    });
});
