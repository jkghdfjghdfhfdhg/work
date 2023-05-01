//Triangle

// var triangle = "#";

// do {
//     console.log(triangle);
//     triangle += "#";
// } while (triangle.length <= 7);

//Triangle

//FizzBuzz

// for (var i = 1; i <= 100; i++) {
//     if ( !(i % 3) && !(i % 5) ) {
//         console.log(i, "FizzBuzz");
//     } else if ( !(i % 3) ) {
//         console.log(i, "Fizz");
//     } else if ( !(i % 5) ) {
//         console.log(i, "Buzz");
//     }
// }

//FizzBuzz

//шахматная доска

// const chessboard = 8;

// for (let y = 0; y<chessboard; y++) {
//   let line = '';
//   for (let x=0; x<chessboard; x++) {
//     line += ((x+y)%2) ? ' ' : '#';
//   }
//   console.log(line);
// }

// function createLine(deskSize, flag) {
//     var result = "";
//     for (var i = 0; i < deskSize; i++) {
//         (i % 2) ? result += "#" : result += " ";
//     }
//     if (flag) {
//         result = reverseString(result);
//     }
//     return result;
// }

// function reverseString(str) {
//     var result = "";
//     for (var i = str.length - 1; i > 0; i--) {
//         result += str[i];
//     }
//     return result;
// }


// for (var i = 1; i <= deskSize; i++) {
//     if (flag) {
//         flag = false;
//     } else {
//         flag = true;
//     }
//     console.log(createLine(deskSize, flag));
// }

//шахматная доска
//Второе задание (Дополнительное)

//6 задача

// let arr1 = [1, true, false, undefined];
// let arr2 = ['Sasha', 'Alina', false, undefined];

// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] !== undefined) {
//     arr1[i] = arr2[i];
//   }
// }

// console.log(arr1);

//5 задача

// let array =  ['Алина', 'Саша', 'Алекс'];
// console.log(array [0]);

//4 Задача

// const mass = ['Alex', 'Anna', 'Oleg', '1', '2', '3', true]
// console.log(mass);