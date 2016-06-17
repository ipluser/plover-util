# delegate
将目标对象的方法添加到指定的对象中。

## Usage
```js
const Delegate = require('plover-util').Delegate;

let obj = {};
let target = {
  say() {
    console.log('hello');
  }
};

Delegate(obj, target, ['say']);
obj.say();  // 'hello'
```

### parameters
| name | description |
|:-----|:------------|
| o | 指定对象 |
| target | 目标对象 |
| methods | 目标对象的方法 |

### return
指定对象
