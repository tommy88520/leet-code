const map1 = new Map();

map1.set('0', 'foo');
map1.set(1, 'bar');

const iterator1 = map1.values();

console.log(iterator1.next().value);
// Expected output: "foo"

console.log(iterator1.next().value);
// Expected output: "bar"

new Map([
  ['foo', 3],
  ['bar', {}],
  ['baz', undefined],
]).forEach((value, key)=>{
  console.log(`m[${key}] = ${value}`);
});

