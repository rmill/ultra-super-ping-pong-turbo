class PhysicsManager {

  constructor (game) {
    this.game = game;
  }

  tick () {
    const paddles = [];
    const balls = [];

    for (let object of this.game.objects) {
      switch (object.constructor.name) {
        case 'Ball':
          this.tick_ball(object);
          balls.push(object);
          break;
        case 'Paddle':
          paddles.push(object);
          break;
      }
    }

    if (balls[0].x < 0 || balls[0].x > 1300) {
      balls[0].speedVectorX *= -1;
      balls[0].speedVectorX += balls[0].speedVectorX > 0 ? 5 : -5;
    }
  }

  tick_ball (ball) {
    ball.x += ball.speedVectorX;
    ball.y += ball.speedVectorY;
  }

  checkCollision (object1, object2) {
    var x1 = object1.el.offset().left;
    var y1 = object1.el.offset().top;
    var h1 = object1.el.outerHeight(true);
    var w1 = object1.el.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = object2.el.offset().left;
    var y2 = object2.el.offset().top;
    var h2 = object2.el.outerHeight(true);
    var w2 = object2.el.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }

  collideBallAndPaddle (ball, paddle) {
    if (ball.player == null || !Object.is(ball.player, paddle.player)) {
      ball.player = paddle.player;
      ball.speedVectorX *= -1;
      ball.speedVectorX += ball.speedVectorX > 0 ? 1 : -1;
    }
  }
}

module.exports = PhysicsManager;
