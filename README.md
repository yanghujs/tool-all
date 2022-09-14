# 安装
```
npm i tool-all
```
## 引用
```
import { reverseObj } from 'tool-all'
```
## 示例
```
/**
 * @param { number } value 输入的数值
 * @param { [number, number] } range [最小值, 最大值]
 * @returns { number } 符合范围要求的数字
*/

// getRangeValue(value, [min, max])

import { getRangeValue } from 'tool-all'

console.log( getRangeValue(100, [20, 50]) ); // 50
console.log( getRangeValue(0, [20, 50]) ); // 20
console.log( getRangeValue(40, [20, 50]) ); // 40
```
## 工具数
符合范围要求的数字
- getRangeValue(value, [min, max])

反转简单数据结构对象
- reverseObj(obj)  
