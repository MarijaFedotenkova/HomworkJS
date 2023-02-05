"use strict"

console.log("Connected!")

// - Написать программу, которая получает два числа и выводит информацию:
// –- если первое число больше, то “Первое число больше второго”
// –- если второе число больше, то “Второе число больше первого”
// –- если числа равны, то информацию о том, что они равны.
// ДОПОЛНИТЕЛЬНО: можно добавить проверку, а числа ли вообще мы получили от пользователя.
const firstNum = prompt('Введите первое число');
const secondNum = prompt('Введите второе число');

if(firstNum > secondNum){
    console.log('Первое число больше второго')
} else if (firstNum < secondNum){
    console.log('Второе число больше первого')
} else {
    console.log('Эти два числа равны')
}

// Объявите две переменные: admin и username. Запишите строку со своим именем в переменную username. Скопируйте значение из переменной username в admin. Выведите в консоль значение admin.

let userName = 'Marija';
let admin = userName;
console.log(admin)

// Сравните строки (больше/меньше): "оливье" и "ананас", "кодировка" и "котировка", "22" и "222". Опишите в комментариях, почему получился именно такой результат.

console.log('оливье' > 'ананас');
console.log('кодировка' > 'котировка');
console.log('22' > '222'); //две 2 меньше чем три 2 

// Напишите программу, которая считывает значение из prompt и выводит фразу “Это значение можно преобразовать в число” или “Это значение преобразовать в число не получится. Получится NaN”
let val = prompt()

if(Number.isNaN(Number(val))){
   console.log('Это значение преобразовать в число не получится. Получится NaN')
} else {
    console.log('Это значение можно преобразовать в число')
}

//Написать цикл, который выводит только четные числа массива (подсказка: посмотрите в сторону математических операций и взятия остатка от деления).

let num = '20';
for (let i = 2; i <= num; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

// Задача со *: Вывести значения произвольного массива (например, Ваши любимые музыкальные исполнители) справа налево с шагом два

let myFavoritePerformers = ['Skillet', 'Miyagi','durmus serhat', 'Mary Kraimbreri', 'Ruki Vverh', 'Mary Gu']
for (let i = myFavoritePerformers.length -1; i >=0; i -= 2){
    console.log(myFavoritePerformers[i])
}

// Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.

let arrNum = [1,2,3,4,5,6,7,8,9]; 
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i < arrNum.length; i++){
    if(arrNum[i] % 2 === 0){
        evenSum +=arrNum[i];
    }else{
        oddSum += arrNum[i];
    }
}
console.log(Math.max(evenSum, oddSum) - Math.min(evenSum, oddSum))

// Задание со *: найти максимальное число в массиве

let array = [1,2,3,4,5,6,7,8,9];
let max = array[0];
for (let i = 1; i < array.length; i++) {
    if(array[i] > max){
        max = array[i];
    }  
}

console.log(max)

