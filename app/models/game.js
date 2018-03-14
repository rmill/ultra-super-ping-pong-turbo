const PhysicsManager = require('./physics-manager');

class Game {
  constructor (options) {
    this.objects = options.objects || [];
    this.physicsManager = new PhysicsManager(this);
  }

  tick () {
    this.physicsManager.tick();
  }

  render () {
    for(let object of this.objects) {
      object.render();
    }
  }
}

module.exports = Game;
