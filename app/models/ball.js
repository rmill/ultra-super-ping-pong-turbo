class Ball {

  constructor(options) {
    this.el = options.el;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.diameter = options.diameter || 0;
    this.speedVectorX = options.speedVectorX || 0;
    this.speedVectorY = options.speedVectorY || 0;
    this.powerUps = options.powerUps || [];
    this.player = options.player || null;
  }

  render() {
      // top: this.y,
      // left: this.x ,
      // height: this.diameter,
      // width: this.diameter
  }
}

module.exports = Ball;
