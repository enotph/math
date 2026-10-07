class Character {
  constructor(baseAttack) {
    this.baseAttack = baseAttack;
    this._stoned = false;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    return this.baseAttack;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  getAttack(distance) {
    let attack = this.baseAttack * (1 - (distance - 1) * 0.1);

    if (this._stoned) {
      attack -= Math.log2(distance) * 5;
    }

    return attack;
  }
}

export class Magician extends Character {
  constructor(baseAttack = 100) {
    super(baseAttack);
    this.type = 'Magician';
  }
}

export class Daemon extends Character {
  constructor(baseAttack = 100) {
    super(baseAttack);
    this.type = 'Daemon';
  }
}

export default Character;
