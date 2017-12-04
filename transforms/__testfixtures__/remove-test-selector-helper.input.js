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

let selectors = {
  a: 'a',
};

// MemberExpressions for key and value
testSelector(selectors.a);
testSelector('key', selectors.a);
testSelector(selectors.a, 'value');
testSelector(selectors.a, selectors.a);
testSelector(this.a);
testSelector('key', this.a);
testSelector(this.a, 'value');
testSelector(this.a, this.a);

// NewExpression
testSelector(new A());
testSelector(new A(), 'value');
testSelector('key', new A());
testSelector(new A(), new A());

// value: UnaryExpression
testSelector('key', -1);
