**将数组拆分成多个 size 长度的块，并组成一个新数组。 如果数组无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。**

* chunk
  * slice

### STYLE
获取 Array.length 的校验
`const length = array == null ? 0 : array.length`

将 ++ += 等运算包含到运算中
`result[resIndex] = slice(array, index, (index + size))`
`resIndex++`
`index += size`

=>

`result[resIndex++] = slice(array, index, (index += size))`

用 while 代替 for

### THINK
1. 传入参数无效的话，返回该函数应返回数据类型的空值

### POINT
`>>>` 无符号右移位运算符
右移表达式的位，不保留符号
`result = expression1 >>> expression2`
运算符将 expression1 的位右移 expression2 中指定的位数。  用零填充右移后左边空出的位。  右移的位被丢弃。

`var temp`
`temp = -14 >>> 2`

变量 temp 具有初始值 -14（二进制补码 11111111 11111111 11111111 11110010）。  其右移两位后，值等于 1073741820（即二进制的 00111111 11111111 11111111 11111100）
