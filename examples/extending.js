class String4 extends String {
  repeatFourTimes(string) {
    return string.repeat(4);
  }
}

const repeet4string = new String4();
// console.log(repeet4string.repeatFourTimes('12'));

Map.prototype.concatKey = function () {
  console.log('this: ', this);
  let res = '';
  for ([key, val] of this) {
    res += key;
  }
  return res;
};
const map0 = new Map();
map0.set('00', 11);
map0.set('11', 22);
// console.log(map0);
// console.log(map0.concatKey());
