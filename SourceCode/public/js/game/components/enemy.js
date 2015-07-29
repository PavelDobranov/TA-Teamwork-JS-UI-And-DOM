/* globals Quintus */
Quintus.enemy = function(Q) {
    'use strict';

    Q.component('enemy', {
        added: function() {
            var entity = this.entity;

            entity.p.defaultDirection = 'right';
            entity.p.type = Q.SPRITE_ENEMY;
            entity.p.collisionMask = Q.SPRITE_FRIENDLY | Q.SPRITE_DEFAULT;

            entity.add('2d, animation, aiBounce');
            entity.add('aiPatrool');
            entity.on('step', 'patrool');
            entity.on('hit');
            entity.on('dead', entity, 'die');
            entity.p.points = entity.p.standingPoints;
            entity.play('walk');
        },
        extend: {
            getDirection: function() {
                if (this.p.vx > 0) {
                    return 'right'
                } else if (this.p.vx < 0) {
                    return 'left';
                }
            },
            hit: function(collision) {
                var entity = this;

                if (collision.obj.p.type === Q.SPRITE_FRIENDLY &&
                    !collision.obj.isA('Player')) {

                    var direction = entity.getDirection();

                    entity.p.vx = 0;
                    entity.p.points = entity.p.deadPoints;
                    entity.p.type = Q.TYPE_NONE;
                    entity.p.sensor = true;
                    entity.play(direction + 'Die');

                    Q.SCORE += 10

                    Q.stageScene('currentScore', 3, Q('Player')
                        .first().p);
                }
            },
            die: function() {
                this.destroy();
            }
        }
    });
};
