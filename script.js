// Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
let arr = [1, 2, 3]
function reverseArray(arr) {
    return arr.reverse()
}
console.log(reverseArray(arr))

// Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null. * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
arr = [0, 1, false, 2, undefined, '', 3, null]
function cleanArray(arr) {
    return arr.filter(item => item)
}
console.log(cleanArray(arr))

// Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
arr = [1, 2, 3, 1, 2]
let arrCount = {}
for (let i of arr) {
    arrCount[i] = arrCount[i] ? arrCount[i] + 1 : 1
}
let result = Object.keys(arrCount).filter((i => arrCount[i] >= 1))
console.log(result)