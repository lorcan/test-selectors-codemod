# test-selectors-codemod [![Build Status](https://travis-ci.org/lorcan/test-selectors-codemod.svg?branch=master)](https://travis-ci.org/lorcan/test-selectors-codemod)

A codemode for fixing the ember-test-selectors testSelector helper deprecation.

Recently the [ember-test-selectors](https://github.com/simplabs/ember-test-selectors/pull/134) addon deprecated the `testSelector` function in favour of encoding the selectors directly ([here](https://github.com/simplabs/ember-test-selectors/pull/134)). This codemod automatically addresses the deprecation by transforming your tests to do the replacement automatically.

## Installation

[jscodeshift](https://github.com/facebook/jscodeshift) is required to run this script. To run on your `./tests` directory:

```
npm install -g jscodeshift
jscodeshift -t https://rawgit.com/lorcan/test-selectors-codemod/master/transforms/remove-test-selector-helper.js ./tests
```

## Development

To download and run the code locally:

```
git clone https://github.com/lorcan/test-selectors-codemod
cd test-selectors-codemod
npm install
```

## Run tests
```
npm test
```

## Running the codemod
```
jscodeshift -t transforms/remove-test-selector-helper.js <path.to.test.directory>
```
