const a = [1, 2, 3];

const c = {
  a: '1',
  b: '2',
};

function ex(arg) {
  for (x in arg) {
    console.log(x);
  }
}

console.log('msgA');
const msgA = ex(a);

console.log('\nmsgB');
const msgB = ex(c);
