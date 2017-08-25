let selector = '[data-test-some-name]';

let moreSelectors = {
  short: '[data-test-short]',
  long: '[data-test-lots-of-hyphens-in-this-one]',
  withValue: '[data-test-key-name="value"]',
  withLongValue: '[data-test-key-name="value-is-longer-here"]',
};

let k = 'key';
let v = 'value';

`[data-test-${k}]`;
`[data-test-${k}="value"]`;
`[data-test-key="${v}"]`;
`[data-test-${k}="${v}"]`;
