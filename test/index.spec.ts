import { expect } from 'chai';
import 'mocha';
import mappedReplace from '../src';

describe('mappedReplace', function() {
  it('should leave the string untouched when given an empty object', function() {
    expect(mappedReplace('test string', {})).to.be.equal('test string');
    expect(mappedReplace('another', {})).to.be.equal('another');
    expect(mappedReplace('', {})).to.be.equal('');
  });

  it('should not change a string where no key matches any substring', function() {
    expect(mappedReplace('', { 'a': 'b' })).to.be.equal('');
    expect(mappedReplace('test string', { 'key': 'value' })).to.be.equal('test string');
    expect(mappedReplace('testing', { 'tsting': 'no' })).to.be.equal('testing');
    expect(mappedReplace('foo', { 'bar': 'foo', 'baz': 'foob', 'fazbar': 'barfaz' })).to.be.equal('foo');
  });

  it('should replace all matched keys in the object with the value of the property', function() {
    expect(mappedReplace('test string', { 'test': 'testing' })).to.be.equal('testing string');
    expect(mappedReplace('test string', { string: 'str' })).to.be.equal('test str');
    expect(mappedReplace('foo bar baz', {
      'foo': 'a',
      'bar': 'b',
      'baz': 'c'
    })).to.be.equal('a b c');
    expect(mappedReplace('foo bar baz', {
      'foo': 'faz',
      'a': 'o'
    })).to.be.equal('faz bor boz');
    expect(mappedReplace('foo bar baz', {
      'foo': 'faz',
      'h': 'i'
    })).to.be.equal('faz bar baz');
    expect(mappedReplace('foo bar baz', {
      'fo': 'faz',
      't': 'i',
      'g': 'i'
    })).to.be.equal('fazo bar baz');
    expect(mappedReplace('testing string', {
      'i': 'o',
      'unmatched': 'none'
    })).to.be.equal('testong strong');
  });
});
