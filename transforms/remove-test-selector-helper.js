module.exports = (file, api, options) => {
  let source = file.source;
  let j = api.jscodeshift;
  let root = j(source);

  root.find(j.ImportDeclaration, isTestSelectorRequire)
    .remove();

  root.find(j.CallExpression, isTestSelectorCall)
    .replaceWith(nodePath => {
        let {node} = nodePath;
        let selector = testSelector(...node.arguments.map(argument => argument.value));
        return j.literal(selector);
      }
    );

  return root.toSource({quote: 'single'});

  function isTestSelectorRequire(node) {
    return (
      node.type === 'ImportDeclaration' &&
      node.source.value === 'ember-test-selectors'
    );
  }

  function isTestSelectorCall(node) {
    return (
      node.type === 'CallExpression' &&
      node.callee.name === 'testSelector'
    );
  }

  function testSelector(key, value) {
    return (value === null || value === undefined) ? `[data-test-${key}]` : `[data-test-${key}="${value}"]`;
  }
};
