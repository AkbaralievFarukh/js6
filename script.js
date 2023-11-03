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
function arrClearSameValue() {
    for (let i of arr) {
        arrCount[i] = arrCount[i] ? arrCount[i] + 1 : 1
    }
    return arrCount
}
let result = Object.keys(arrClearSameValue()).filter((i => arrCount[i] >= 1))
console.log(result)

// Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
function combineArray(a, b) {
    return a.concat(b)
}
console.log(combineArray(['a', 'b', 'c'], [1, 2, 3]))

// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
function addEndValueArray(a) {
    a.push(4, 5, 6)
    return a
}
console.log(addEndValueArray([1, 2 ,3]))

//  Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
function addStartValueArray(a) {
    a.unshift(4, 5, 6)
    return a
}

console.log(addStartValueArray([1, 2, 3]))

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
arr = [1, 2, 3, 4, 5]
arr.splice(1, 2)
console.log(arr)

//  Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
let obj = {
    js: 'test',
    jq: 'hello',
    css: 'world'
}
console.log(Object.keys(obj))

// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут разделены запятой. ['Капуста', 'Репа', 'Редиска', 'Морковка']
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка']
console.log(vegetables.join(', '))