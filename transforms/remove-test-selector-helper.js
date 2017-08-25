module.exports = (file, api, options) => {
  let source = file.source;
  let j = api.jscodeshift;
  let root = j(source);

  root.find(j.ImportDeclaration, isTestSelectorRequire)
    .remove();

  root.find(j.CallExpression, isTestSelectorCall)
    .replaceWith(nodePath => {
        let {node} = nodePath;

        let key = node.arguments[0];
        if (node.arguments.length === 1) {
          if (key.type === 'Literal') {
            return j.literal(`[data-test-${key.value}]`);
          } else if (key.type === 'Identifier') {
            let first = '[data-test-';
            let second = ']';
            let quasis = [j.templateElement({cooked: first, raw: first}, false), j.templateElement({cooked: second, raw: second}, true)];
            return j.templateLiteral(quasis, [key]);
          }
        } else {
          let value = node.arguments[1];
          if (key.type === 'Literal' && value.type === 'Literal') {
            return j.literal(`[data-test-${key.value}="${value.value}"]`);
          } else if (key.type === 'Literal' && value.type === 'Identifier') {
            let first = `[data-test-${key.value}="`;
            let second = '"]';
            let quasis = [j.templateElement({cooked: first, raw: first}, false), j.templateElement({cooked: second, raw: second}, true)];
            return j.templateLiteral(quasis, [value]);
          } else if (key.type === 'Identifier' && value.type === 'Literal') {
            let first = '[data-test-';
            let second = `="${value.value}"]`;
            let quasis = [
              j.templateElement({cooked: first, raw: first}, false),
              j.templateElement({cooked: second, raw: second}, true)];
            return j.templateLiteral(quasis, [key]);
          } else if (key.type === 'Identifier' && value.type === 'Identifier') {
            let first = '[data-test-';
            let second = '="';
            let third = '"]';
            let quasis = [
              j.templateElement({cooked: first, raw: first}, false),
              j.templateElement({cooked: second, raw: second}, true),
              j.templateElement({cooked: third, raw: third}, true)];
            return j.templateLiteral(quasis, [key, value]);
          }
        }
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
};
