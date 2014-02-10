# coffee-strip [![NPM version](https://badge.fury.io/coffee/coffee-strip.png)](http://badge.fury.io/coffee/coffee-strip)

> Strip comments from code. Remove both line comments and block comments.

## Quickstart

```bash
 npm i coffee-strip --save
 ```

## Usage

```coffee
var strip = require('coffee-strip');
```

### all comments

```coffee
strip( str );
```
Removes all comments:

```coffee
###
comments like
this
###
doNothing: () ->
    ###
    and  like
    this
    ###

# or like this
class myClass
    # and like this
    doNothing: () ->
```

### line comments

```coffee
strip.line( str );
```
Removes all line comments:

```coffee
# This comment
```
but not block comments

```coffee
###
this
comment
###
```

### block comments

```coffee
strip.block( str );
```
Removes all block comments:

```coffee
###
this
comment
###
```
but not line comments

```coffee
# This comment
```

## Tests

```bash
mocha -R spec
```


## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License
Copyright (c) 2014 Jon Schlinkert, contributors.
Released under the MIT license