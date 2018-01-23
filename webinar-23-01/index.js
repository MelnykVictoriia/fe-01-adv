'use strict';

/*
 * Scope - это доступность переменных, функций и объектов
 * в определенной части вашего кода во время выполнения.
 *
 * Принцип наименьшего доступа.
 *
 * В чем смысл ограничения видимости переменных и отсутствия
 * доступна ко всем данным в любом месте кода? Одно из
 * преимуществ заключается в том, что область видимости
 * обеспечивает определенный уровень безопасности. Наши функции
 * должны иметь доступ только к тем переменным которые им необходимы.
 *
 * Scope также решает проблему именования, когда у вас есть
 * переменные с тем же именем, но в разных областях видимости.
 *
 * В JavaScript есть два типа области видимости: глобальная и локальная.
 * Переменные, определенные внутри функции, находятся в ее
 * локальной области видимости, в то время как переменные,
 * определенные вне функции, находятся в глобальной области видимости.
 *
 * Каждая функция при вызове создает новую область видимости.
 */

/**
 * Context
 *
 * Многие разработчики часто путают область видимости и контекст.
 * Можно с уверенностью сказать, что ключевое слово this является одной
 * из самых запутанных частей JavaScript. Многие начинающие разработчики,
 * подставляют this методом научного тыка до тех пор, пока скрипт
 * не сработает. 🤦‍
 *
 * Контекст в JavaScript похож на контекст в предложении:
 *
 * «Петя бежит быстро, потому что Петя пытается поймать поезд.»
 *
 * «Петя бежит быстро, потому что он пытается поймать поезд.»
 *
 * Предметом предложения является Петя, и мы можем сказать, что контекст
 * предложения - это Петя, потому что он в центре внимания в это конкретное
 * время в предложении. Даже местоимение «кто» относится к Пете.
 *
 * И точно так же, мы можем иметь объект, который является текущим
 * контекстом исполнения функции.
 */

// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(petya.name);
//   }
// };

// petya.showName();

/**
 * Во-первых, надо знать, что все функции JavaScript имеют свойства,
 * так же как объекты имеют свойства, потому что функции это тоже объекты.
 *
 * И когда функция выполняется, она получает свойство this - переменную со
 * ссылкой на объект, в контексте которого вызывается функция,
 * в которой используется this. this всегда ссылается на объект.
 *
 * this нам нужен для доступа к методам и свойствам объекта, который вызывает
 * функцию, тем более, что мы не всегда знаем, имя вызывающего объекта.
 */

// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(this.name);
//   }
// };

// petya.showName();

/**
 * Вам нужно усвоить всего одно правило для определения this:
 * значение this, внутри функции, определятся не в момент создания функции,
 * а в момент ее вызова.
 *
 * Значение this определяет то, как вызывается функция.
 * Несмотря на то, что кажется как будто this ссылается
 * на объект внутри которого был определен метод объекта.
 */

/**
 * В глобальной области видимости, контекст ссылается
 * на объект Window, если скрипт не находится в строгом режиме.
 *
 * Когда мы используем строгий режим, значение this, в глобальной
 * области видимости (в глобальных функциях и анонимных функциях),
 * будет undefined.
 */

// function a() {
//   console.log(this);
// }

// a();

/**
 * Если функция была вызвана как метод объекта, то контекст
 * будет ссылаться на объект, частью которого является метод.
 */

// const petya = {
//   name: 'Petya',
//   showName() {
//     console.log(this.name);
//   }
// };

// petya.showName();

// function showName() {
//   console.log('this inside showName: ', this);
//   console.log(this.name);
// }

// const user = {
//   name: 'Mango'
// };

// user.show = showName;

// user.show();

/**
 * this в стрелочных функциях
 */

// const showName = () => console.log('inside showName: ', this);

// const user = {
//   name: 'Mango'
// };

// user.show = showName;

// user.show();

/**
 * this функциях обратного вызова
 *
 * Когда мы передаем метод (который использует this) в качестве параметра,
 * который будет использоваться как функция обратного вызова,
 * мы получим проблему.
 */

// const user = {
//   name: 'Mango',
//   showName() {
//     console.log(this.name);
//   }
// };

// function a(callback) {
//   callback();
// }

// a(user.showName);

// function User(name) {
//   this.name = name;
// }

// const user_1 = new User('Mango');
// console.log(user_1);

// const user_2 = new User('Poly');
// console.log(user_2);

/**
 * Изменение контекста: call, apply, bind
 */

// const manager_1 = {
//   name: 'manager_1',
//   sales: 10
// };

// const manager_2 = {
//   name: 'manager_2',
//   sales: 15
// };

// function addSales(val, a, b, c) {
//   console.log(a, b, c);
//   this.sales += val;
// }

// addSales.call(context, arg1, arg2, arg3);
// console.log(manager_1);
// addSales.call(manager_1, 30, 1, 2, 3);
// console.log(manager_1);

// console.log(manager_2);
// addSales.call(manager_2, 30);
// console.log(manager_2);

// addSales.apply(context, [arg1, arg2, arg3]);
// console.log(manager_1);
// addSales.apply(manager_1, [30, 4, 1, 8]);
// console.log(manager_1);

// const addSalesWithContext = addSales.bind(manager_1, 10, 6, 4, 9);

// console.log(manager_1);
// addSalesWithContext();
// console.log(manager_1);

/**
 * Closure (замыкание)
 * Замыкание это характеристика функции, которая позволяет этой функции запоминать
 * свое лексическое окружение и продолжать получать доступ к переменным в нем,
 * даже если она исполняется вне этого лексического окружения.
 */

// function a() {
//   const x = 1;

//   return function() {
//     console.log(x);
//   };
// }

// const b = a();

// b();

// function protectedCounter() {
//   let counter = 0;

//   return function() {
//     console.log(counter++);
//   };
// }
// const counter_1 = protectedCounter();
// const counter_2 = protectedCounter();

// counter_1();
// counter_1();
// counter_1();
// counter_1();

// counter_2();
// counter_2();
// counter_2();

/**
 * this в замыкании
 */

// const users = ['Mango', 'Poly', 'Ajax'];

// for (var i = 0; i < users.length; i += 1) {
//   (function(index) {
//     setTimeout(params => console.log(users[index]), 1000);
//   })(i);
// }

// const users = ['Mango', 'Poly', 'Ajax'];

// users.forEach(user => {
//   console.log(user);
//   console.log(this);
// });

/**
 * IIFE
 */

// (function() {
//   // logic here
// })();

// Named function declaration
// function myFunction() {
//   /* logic here */
// }

// // Assignment of a function expression to a variable
// var myFunction = function() {
//   /* logic here */
// };

// Anything within the parentheses is part of an expression
// (function() {
//   console.log('hello');
// })();

// (function() {
//   const x = 5;
// })();

// (function(val) {
//   console.log(val);
// })(1231235);

// const x = {
//   b: 10
// };

// function a(obj) {
//   obj = null;
// }

// a(x);

// console.log(x);
