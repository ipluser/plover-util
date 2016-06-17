# plover-util


[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]


【核心模块】核心模块中常用工具模块。

**注: 核心中没用到的模块不放到此包中**


## Array
提供数组相关的常用方法。

```js
const ArrayUtil = require('plover-util').Array;

const desArray = [1, 2, 3];
const srcArray = [4, 5];

ArrayUtil.pushAll(desArray, srcArray);  // [1, 2, 3, 4, 5]
// desArray -> [1, 2, 3, 4, 5]
```

### pushAll
合并一个数组的元素到目标数组的末尾，并返回目标数组。

##### parameters

| name | description |
|:-----|:------------|
| des | 目标数组 |
| src | 被添加到目标数组末尾的数组元素 |

##### return
目标数组


## delegate
将目标对象的方法添加到指定的对象中。

```js
const Delegate = require('plover-util').Delegate;

const obj = {};
const target = {
  say() {
    console.log('hello');
  }
};

Delegate(obj, target, ['say']);
obj.say();  // 'hello'
```

##### parameters
| name | description |
|:-----|:------------|
| o | 指定对象 |
| target | 目标对象 |
| methods | 目标对象的方法 |

##### return
指定对象


## Lang
提供JS语言基础类型的常用方法。

```js
const LangUtil = require('plover-util').Lang;

LangUtil.isGenerator({});  // false
```

### isGenerator
判断某个对象是否为`Generator`对象。

##### parameters
| name | description |
|:-----|:------------|
| obj | 需要检测的对象 |

##### return
`Boolean`

### isGeneratorFunction
判断某个对象是否为`Generator`函数。

##### parameters
| name | description |
|:-----|:------------|
| obj | 需要检测的对象 |

##### return
`Boolean`

### isPromise
判断某个对象是否为`Promise`对象。

##### parameters
| name | description |
|:-----|:------------|
| obj | 需要检测的对象 |

##### return
`Boolean`


## RouteInfo
提供`Route`相关的常用方法。

```js
const RouteInfo = require('plover-util').RouteInfo;

RouteInfo.parse(parent, url);
```

### parse
解析url构造一个`Route`信息，用于定位一个资源。

##### parameters
| name | description |
|:-----|:------------|
| parent | 父`Route`信息 |
| url | 路径 |

##### return
`Route`信息。

### regular
规范化`Route`对象。

##### parameters
| name | description |
|:-----|:------------|
| route | `Route`对象 |

##### return
规范后的`Route`信息。


## SafeString
安全字符串对象。

```js
const SafeString = require('plover-util'). SafeString;

const safeString = new SafeString(123);
safeString.toString();  // '123'
safeString.toHTML();    // '123'
```


[npm-image]: https://img.shields.io/npm/v/plover-util.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/plover-util
[travis-image]: https://img.shields.io/travis/plover-modules/plover-util/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/plover-modules/plover-util
[coveralls-image]: https://img.shields.io/codecov/c/github/plover-modules/plover-util.svg?style=flat-square
[coveralls-url]: https://codecov.io/github/plover-modules/plover-util?branch=master
