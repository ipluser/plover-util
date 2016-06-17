# Array
提供数组相关的常用方法。

```js
const ArrayUtil = require('plover-util').Array;

let desArray = [1, 2, 3];
let srcArray = [4, 5];

ArrayUtil.pushAll(desArray, srcArray);  // [1, 2, 3, 4, 5]
// desArray -> [1, 2, 3, 4, 5]
```

## pushAll
合并一个数组的元素到目标数组的末尾，并返回目标数组。

### parameters
| name | description |
|:-----|:------------|
| des | 目标数组 |
| src | 被添加到目标数组末尾的数组元素 |

### return
目标数组
