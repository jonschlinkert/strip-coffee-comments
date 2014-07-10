/**
 * strip-coffee-comments <https://github.com/jonschlinkert/strip-coffee-comments>
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */


/**
 * Strip all comments
 * @param   {String}  str
 * @return  {String}
 */

var strip = module.exports = function(str) {
  return str ? strip.block(strip.line(str)) : '';
};

/**
 * Strip block comments
 * @param   {String}  str
 * @return  {String}
 */

strip.block = function(str) {
  return str ? str
  .replace(/\/\*(?:(?!\*\/)[\s\S])*\*\//g, '')
  .replace(/^\s*#{3}(?:(?!#)[\s\S])*#{3}/gm, '') : '';
};

/**
 * Strip line comments
 * @param   {String}  str
 * @return  {String}
 */

strip.line = function(str) {
  return str ? str
  .replace(/^#{1}[^#{2,}][^\n|\r]*/gm, '')
  .replace(/\/\/[^\n|\r]*/g, '') : '';
};