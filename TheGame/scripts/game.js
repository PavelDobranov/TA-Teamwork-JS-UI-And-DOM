window.addEventListener('load', function() {
  var Q = window.Q = Quintus({
      development: true
    })
    .include('Scenes, Sprites, 2D, Input, Touch, UI, TMX, Audio')
    .include('player')
    .setup({
      width: 320,
      height: 180,
      scaleToFit: true
    })
    .controls()
    .touch();

  Q.setImageSmoothing(false);

  //define scene
  Q.scene('testMap', function(stage) {
    var player;

    Q.stageTMX('testMapWithPlayer.tmx', stage);

    player = Q('Player').first();
    stage.add('viewport').follow(player, {x: true, y: true});
  });

  //load assets
  Q.loadTMX('testMapWithPlayer.tmx, player.json', function() {
    Q.compileSheets('player-spritesheet.png', 'player.json');
    Q.stageScene('testMap');
  });
});
