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

let array = ['a', 'b', 'c'];
array.forEach((item) => {
  `[data-test-key="${item.get('id')}"]`;
});

let selectors = {
  a: 'a',
};

// MemberExpressions for key and value
`[data-test-${selectors.a}]`;
`[data-test-key="${selectors.a}"]`;
`[data-test-${selectors.a}="value"]`;
`[data-test-${selectors.a}="${selectors.a}"]`;
`[data-test-${this.a}]`;
`[data-test-key="${this.a}"]`;
`[data-test-${this.a}="value"]`;
`[data-test-${this.a}="${this.a}"]`;

// NewExpression
`[data-test-${new A()}]`;
`[data-test-${new A()}="value"]`;
`[data-test-key="${new A()}"]`;
`[data-test-${new A()}="${new A()}"]`;

// value: UnaryExpression
'[data-test-key="-1"]';
