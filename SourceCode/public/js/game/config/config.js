/* globals Quintus */

Quintus.config = function (Q) {
  Q.config = {
    player: {
      sheet: 'player-spritesheet',
      sprite: 'player',
      speed: 200,
      jumpSpeed: -480,
      standingPoints: [[-10, 25], [-10, -18], [10, -18], [10, 25]],
      deadPoints: [[-12, 25], [-11, 25], [11, 25], [12, 25]],
      animations: {
        rightIdle: { frames: [0, 1, 2], rate: 1 / 2, flip: false, loop: true },
        leftIdle: { frames: [0, 1, 2], rate: 1 / 2, flip: 'x', loop: true },
        rightWalk: { frames: [4, 5, 6, 7, 8, 9, 10, 11, 12], rate: 1 / 6, flip: false, loop: true },
        leftWalk: { frames: [4, 5, 6, 7, 8, 9, 10, 11, 12], rate: 1 / 6, flip: 'x', loop: true },
        rightJump: { frames: [23], rate: 1 / 2, flip: false, loop: true },
        leftJump: { frames: [23], rate: 1 / 2, flip: 'x', loop: true },
        rightFall: { frames: [25], rate: 1 / 2, flip: false, loop: true },
        leftFall: { frames: [25], rate: 1 / 2, flip: 'x', loop: true },
        rightDuck: { frames: [18, 19, 20, 21], rate: 1 / 2, flip: false, loop: true },
        leftDuck: { frames: [18, 19, 20, 21], rate: 1 / 2, flip: 'x', loop: true },
        rightShoot: { frames: [14, 15, 16], rate: 1 / 20, flip: false, loop: false, trigger: 'fired' },
        leftShoot: { frames: [14, 15, 16], rate: 1 / 20, flip: 'x', loop: false, trigger: 'fired' },
        rightDie: { frames: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], rate: 1 / 20, flip: false, loop: false, trigger: 'dead' },
        leftDie: { frames: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45], rate: 1 / 20, loop: false, filp: 'x', trigger: 'dead' }
      }
    },
    marine: {
      sheet: 'marine-spritesheet',
      sprite: 'marine',
      vx: 50,
      standingPoints: [[-12, 20], [-12, -16], [12, -16], [12, 20]],
      deadPoints: [[-12, 20], [-11, 20], [11, 20], [12, 20]],
      animations: {
        walk: { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8], rate: 1 / 5, loop: true },
        shoot: { frames: [10, 11, 12], rate: 1 / 20, flip: false, trigger: 'fired' },
        rightDie: { frames: [14, 15, 16, 17, 18, 19, 20, 21], rate: 1 / 5, flip: false, loop: false, trigger: 'dead' },
        leftDie: { frames: [14, 15, 16, 17, 18, 19, 20, 21], rate: 1 / 5, loop: false, filp: 'x', trigger: 'dead' }
      }
    },
    mummy: {
      sheet: 'mummy-spritesheet',
      sprite: 'mummy',
      vx: 20,
      standingPoints: [[-13, 25], [-13, -18], [13, -18], [13, 25]],
      deadPoints: [[-13, 25], [-12, 25], [12, 25], [13, 25]],
      animations: {
        walk: { frames: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], rate: 1 / 5, loop: true },
        rightDie: { frames: [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66], rate: 1 / 10, flip: false, loop: false, trigger: 'dead' },
        leftDie: { frames: [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66], rate: 1 / 10, loop: false, flip: 'x', trigger: 'dead' }
      }
    },
    bullet: {
      sheet: 'bullet-spritesheet',
      sprite: 'bullet',
      vx: 500,
      gravity: 0,

      animations: {
        right: { frames: [0, 1], rate: 1 / 5, loop: true },
        left: { frames: [0, 1], rate: 1 / 5, flip: 'x', loop: true }
      }
    },
    weapon: {
      shiitingPointOffset: 10,
      reloadingTime: 500
    },
    grinder: {
      sheet: 'deadly-ground-spritesheet',
      sprite: 'grinder',
      gravity: 0,
      animations: {
        run: { frames: [0, 1, 2, 3, 4], rate: 1 / 5, loop: true }
      }
    },
    teleport: {
      sheet: 'teleport-spritesheet',
      sprite: 'teleport',
      points: [[-9, 25], [-9, -18], [-7, -18], [-7, 25]],
      animations: {
        run: { frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], rate: 1 / 5, loop: true }
      }
    },
    UI: {
      fillColor: '#FFA500',
      shadowColor: 'rgba(0,0,0,0.5)',
      color: '#000',
      border: 5,
      shadow: 10,
      containerPositionY: 200,
      containerPadding: 20
    }
  };
};