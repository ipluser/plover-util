# SafeString
安全字符串对象。

## Usage
```js
const SafeString = require('plover-util'). SafeString;

let safeString = new SafeString(123);
safeString.toString();  // '123'
safeString.toHTML();    // '123'
```