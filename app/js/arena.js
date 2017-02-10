const Game = require('../lib/game');
const Ball = require('../lib/ball');
const Paddle = require('../lib/paddle');
const Player = require('../lib/player');
const $ = require('jquery');

function init () {
  const player1 = new Player({id: 1});

  const player2 = new Player({id: 2});

  const ball = new Ball({
    el: $('.ball'),
    x: 600,
    y: 600,
    diameter: 10,
    speedVectorX: -5
  });

  const paddle1 = new Paddle({
    el: $('.paddle.player1'),
    y: 500,
    side: 'left',
    indent: 50,
    length: 200,
    player: player1
  });

  const paddle2 = new Paddle({
    el: $('.paddle.player2'),
    y: 500,
    side: 'right',
    indent: 50,
    length: 200,
    player: player2
  });

  const game = new Game({
    objects: [ ball, paddle1, paddle2 ]
  });

  setInterval(() => {
    game.render();
    game.tick();
  }, 10);
}

window.onload = init;
