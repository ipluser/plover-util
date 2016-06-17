# plover-util


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]


【核心模块】核心模块中常用工具模块。

**注: 核心中没用到的模块不放到此包中**


## Usage
```js
const PloverUtil = require('plover-util');
const ArrayUtil = PloverUtil.Array;

let desArray = [1, 2, 3];
let srcArray = [4, 5];

ArrayUtil.pushAll(desArray, srcArray);  // [1, 2, 3, 4, 5]
// desArray -> [1, 2, 3, 4, 5]
```

## List
 - [Array](docs/array.md) - 提供数组相关的常用方法。
 - [Delegate](docs/delegate.md) - 将目标对象的方法添加到指定的对象中。
 - [Lang](docs/lang.md) - 提供JS语言基础类型的常用方法。
 - [RouteInfo](docs/route-info.md) - 提供`Route`相关的常用方法。
 - [SafeString](docs/safe-string.md) - 安全字符串对象。


[npm-image]: https://img.shields.io/npm/v/plover-util.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/plover-util
[travis-image]: https://img.shields.io/travis/plover-modules/plover-util/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/plover-modules/plover-util
[coveralls-image]: https://img.shields.io/codecov/c/github/plover-modules/plover-util.svg?style=flat-square
[coveralls-url]: https://codecov.io/github/plover-modules/plover-util?branch=master
