# Lang
提供JS语言基础类型的常用方法。

```js
const LangUtil = require('plover-util').Lang;

LangUtil.isGenerator({});  // false
```

## isGenerator
判断某个对象是否为`Generator`对象。

### parameters
| name | description |
|:-----|:------------|
| obj | 需要检测的对象 |

### return
`Boolean`


## isGeneratorFunction
判断某个对象是否为`Generator`函数。

### parameters
| name | description |
|:-----|:------------|
| obj | 需要检测的对象 |

### return
`Boolean`


## isPromise
判断某个对象是否为`Promise`对象。

### parameters
| name | description |
|:-----|:------------|
| obj | 需要检测的对象 |

### return
`Boolean`