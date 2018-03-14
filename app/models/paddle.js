class Paddle {

  constructor (options) {
    this.el = options.el;
    this.y = options.y || 0;
    this.side = options.side || 0;
    this.indent = options.indent || 0;
    this.length = options.length || 0;
    this.speed = options.speed || 0;
    this.powerUps = options.powerUps || [];
    this.player = options.player || null;
  }

  render () {
    const css = {
      top: this.y,
      height: this.length
    };

    css[this.side] = this.indent;

    this.el.css(css);
  }
}

module.exports = Paddle;
