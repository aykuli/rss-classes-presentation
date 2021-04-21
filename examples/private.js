class Relations {
  #lubimaya = 'Luba';
  getNewLoveName() {
    return this.#lubimaya;
  }
  #changeLove(name) {
    this.#lubimaya = name;
  }
  setnewLove(newName) {
    this.#changeLove(newName);
    return this.#lubimaya;
  }
}

const myRelations = new Relations();

// console.log(myRelations.getNewLoveName());
myRelations.setnewLove('Olya');
// console.log(myRelations.getNewLoveName());
