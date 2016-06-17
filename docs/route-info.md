# RouteInfo
提供`Route`相关的常用方法。

```js
const RouteInfo = require('plover-util').RouteInfo;

RouteInfo.parse(parent, url);
```

## parse
解析url构造一个`Route`信息，用于定位一个资源。

### parameters
| name | description |
|:-----|:------------|
| parent | 父`Route`信息 |
| url | 路径 |

### return
`Route`信息。


## regular
规范化`Route`对象。

### parameters
| name | description |
|:-----|:------------|
| route | `Route`对象 |

### return
规范后的`Route`信息。