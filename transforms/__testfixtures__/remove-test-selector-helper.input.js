import testSelector from 'ember-test-selectors';

let selector = testSelector('some-name');

let moreSelectors = {
  short: testSelector('short'),
  long: testSelector('lots-of-hyphens-in-this-one'),
  withValue: testSelector('key-name', 'value'),
  withLongValue: testSelector('key-name', 'value-is-longer-here'),
};

let k = 'key';
let v = 'value';

testSelector(k);
testSelector(k, 'value');
testSelector('key', v);
testSelector(k, v);

let array = ['a', 'b', 'c'];
array.forEach((item) => {
  testSelector('key', item.get('id'));
});
