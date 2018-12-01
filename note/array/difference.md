**创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中**

### MAP
* **difference** 取非重
  * **baseDifference** 实现基本的比较
    * **SetCache**
    * **arrayIncludes** 将传入的array变为有效数组值，不支持指定要搜索的索引
      * **baseIndexOf** 判断是否自身相等以执行严格 indexOf
        * **baseFindIndex** `findIndex`和`findLastIndex`的基本实现。
        * **baseIsNaN** 如果传入参数为 NaN 则返回 true， 其余的为 false
        * **strictIndexOf** 使用严格等于的 indexOf 查找
    * **arrayIncludesWith**
    * **map**
    * **cacheHas**
  * **baseFlatten**
    * **isFlattenable**
  * **isArrayLikeObject** 判断是一个类数组对象
    * **isArrayLike** 检查 value 是否是类数组。 如果一个值被认为是类数组，那么它不是一个函数，并且value.length是个整数，大于等于 0，小于或等于 Number.MAX_SAFE_INTEGER
      * **isLength** 检查 value 是否为有效的类数组长度
    * **isObjectLike** 检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"


### STYLE
!! 双取反可以直接判断是否有值,省去了多次判断null、undefined和空字符串的冗余代码

可以用对象解构的方式取一个 Array 的长度，前提是确定该解构变量为 Array
const { length } = array

### POINT
#### IN baseDifference

`outer:` javascript 标签
continue 语句（带有或不带标签引用）只能用在循环中。

break 语句（不带标签引用），只能用在循环或 switch 中。

通过标签引用，break 语句可用于跳出任何 JavaScript 代码块

#### IN isLength
9,007,199,254,740,991 为JS中最大的数组有效长度

#### IN baseIsNaN
`return value !== value` 来判断 NaN, 如果传入参数为 NaN 则返回 true， 其余的为 false