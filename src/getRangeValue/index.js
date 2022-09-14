/**
 * @param { number } value 输入的数值
 * @param { [number, number] } range [最小值, 最大值]
 * @returns { number } 符合范围要求的数字
*/
export function getRangeValue(value, [min, max]) {
  if (value < min) {
      return min;
  }
  if (value > max) {
      return max;
  }
  return value;
}

console.log( getRangeValue(100, [20, 50]) ); // 50
console.log( getRangeValue(0, [20, 50]) ); // 20
console.log( getRangeValue(40, [20, 50]) ); // 40
