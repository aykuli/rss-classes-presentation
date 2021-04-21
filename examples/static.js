class Song {
  constructor(name, author, genre) {
    this.name = name;
    this.state = 'stopped';
  }
  static startPlay() {
    this.state = 'play';
    // console.log('Song started to play');
  }
  getFav() {
    return this.favorite;
  }
  static addToFav = function (song, favs) {
    // console.log('this: ', this);
    favs.push(song);
    return favs;
  };
}

Song.addToFavAuthor = function (author, favAuths) {
  favAuths.push(author);
  return favAuths;
};

const song0 = new Song('Love', 'Arthur', 'pop');
console.log(Song.startPlay());
console.log('song0.state: ', song0.state);

const favs = [];
Song.addToFav('000', favs);
// console.log(favs);

const favAuths = ['Rolling Stones'];
Song.addToFavAuthor('Freddy', favAuths);
// console.log(favAuths);

class PopSong extends Song {
  static genre = 'pop';
}
// console.log(PopSong.genre);

const popFavs = [];
PopSong.addToFav('pop0', popFavs);
// console.log('popFavs: ', popFavs);

for (val in Song) {
  // console.log('Song val: ', val);
}
