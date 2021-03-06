# Mapped Replace
![build status](https://travis-ci.com/luvies/mapped-replace.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/luvies/mapped-replace/badge.svg?branch=master)](https://coveralls.io/github/luvies/mapped-replace?branch=master) [![npm version](https://badge.fury.io/js/mapped-replace.svg)](https://www.npmjs.com/package/mapped-replace)

Given a string and an object, will replace all the keys of the object found in the string with the values of the object. TypeScript definitions are shipped with the package.

## Examples
```ts
mappedReplace('test string', {}) // -> 'test string'

mappedReplace('foo', { 'foo': 'bar' }) // -> 'bar'

mappedReplace('foo bar baz', {
    'foo': 'a',
    'bar': 'b',
    'baz': 'c'
}) // -> 'a b c'

mappedReplace('hello', { 'l': 'w', 'o': 'o uwu' }) // -> 'hewwo uwu'
```
