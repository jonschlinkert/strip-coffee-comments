const expect = require('chai').expect;
const strip = require('../');


describe('empty:', function () {
  it('should not throw an error at an empty string.', function () {
    var actual = strip();
    var expected = '';
    expect(actual).to.eql(expected);
  });
});

describe('CoffeeScript comments:', function () {
  var fixture = [
    '###',
    'This is a coffee block comment',
    'Released under the MIT License',
    '###',
    'html = """',
    '       This',
    '       is not a ',
    '       comment',
    '       """',
    '# this is a line comment',
  ].join('\n');

  it('should strip block comments from CoffeeScript.', function () {
    var actual = strip.block(fixture);
    var expected = [
      '',
      'html = """',
      '       This',
      '       is not a ',
      '       comment',
      '       """',
      '# this is a line comment',
    ].join('\n');
    expect(actual).to.eql(expected);
  });

  it('should strip block comments from CoffeeScript.', function () {
    var actual = strip.block('# this is a comment###\nvar bar = function() {return;};\n###this is a block comment###');
    var expected = '# this is a comment###\nvar bar = function() {return;};\n';
    expect(actual).to.eql(expected);
  });

  it('should strip block comments from CoffeeScript.', function () {
    var actual = strip.line('# this is a comment###\nvar bar = function() {return;};\n###this is a block comment###');
    var expected = '\nvar bar = function() {return;};\n###this is a block comment###';
    expect(actual).to.eql(expected);
  });

  it('should strip line comments from CoffeeScript.', function () {
    var actual = strip.line('# this is a line comment\nvar bar = function() {return;};');
    expect(actual).to.eql('\nvar bar = function() {return;};');
  });

  it('should strip line comments from CoffeeScript.', function () {
    var expected = [
      '###',
      'This is a coffee block comment',
      'Released under the MIT License',
      '###',
      'html = """',
      '       This',
      '       is not a ',
      '       comment',
      '       """',
      '',
    ].join('\n');
    var actual = strip.line(fixture);
    expect(actual).to.eql(expected);
  });

  it('should strip line comments from CoffeeScript.', function () {
    var actual = strip.line(fixture);
    var expected = [
      '###',
      'This is a coffee block comment',
      'Released under the MIT License',
      '###',
      'html = """',
      '       This',
      '       is not a ',
      '       comment',
      '       """',
      '',
    ].join('\n');
    expect(actual).to.eql(expected);
  });


  it('should strip indented bock comments from CoffeeScript.', function () {
    var fixture = [
      'method with block comment\': fooBar """',
      '    class myClass',
      '        # this is a line comment',
      '        ###',
      '        A block comment',
      '        ###',
      '        doNothing: () ->',
      '"""',
    ].join('\n');
    var expected = [
      'method with block comment\': fooBar """',
      '    class myClass',
      '        # this is a line comment',
      '',
      '        doNothing: () ->',
      '"""',
    ].join('\n');
    var actual = strip.block(fixture);
    expect(actual).to.eql(expected);
  });

  it('should strip indented bock comments from CoffeeScript.', function () {
    var fixture = [
      'method with block comment\': fooBar """',
      '    class myClass',
      '        # this is a comment',
      '        ###        A block comment        ###',
      '        doNothing: () ->',
      '"""',
    ].join('\n');
    var expected = [
      'method with block comment\': fooBar """',
      '    class myClass',
      '        # this is a comment',
      '',
      '        doNothing: () ->',
      '"""',
    ].join('\n');
    var actual = strip.block(fixture);
    expect(actual).to.eql(expected);
  });
});
