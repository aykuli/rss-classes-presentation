class WashingMachine {
  #result = '';

  constructor(name, type) {
    this._name = name;
    this._type = type;
  }
  get name() {
    return this._name;
  }

  set name(newName) {
    const { isValid, msg } = this.checkName(newName);
    if (!isValid) {
      this.#result = msg;
      return;
    }
    this._name = newName;
    this.#result = 'Имя успешно изменено';
  }

  get type() {
    return this._type;
  }

  set type(newType) {
    this._type = newType;
  }

  checkName(value) {
    const len = value.length;
    if (len < 4) {
      return { isValid: false, msg: 'Короткое имя' };
    }
    const isContainIncorrectSymbol = value.includes('~');
    if (isContainIncorrectSymbol) {
      return { isValid: false, msg: 'Имя не может содержать невалидный символ ~' };
    }
    return { isValid: true, msg: '' };
  }
  getResult() {
    return this.#result;
  }
}

const mach0 = new WashingMachine('name0', 'disches', 'AAA');
// console.log(mach0.name);
// console.log(mach0.type);
mach0.name = 'newName0';
// console.log(mach0.name);
// console.log(mach0.getResult());
// console.log('-----');
mach0.type = 'clothes';
mach0.name = '0';
// console.log(mach0.getResult());
// console.log(mach0.name);
// console.log(mach0.type);
