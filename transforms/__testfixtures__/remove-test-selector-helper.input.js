import testSelector from 'ember-test-selectors';

let selector = testSelector('some-name');

let moreSelectors = {
  short: testSelector('short'),
  long: testSelector('lots-of-hyphens-in-this-one'),
  withValue: testSelector('key-name', 'value'),
  withLongValue: testSelector('key-name', 'value-is-longer-here'),
};