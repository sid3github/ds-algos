// <finding positive / negative number>
// function number(n) {
//
//
//     if (n < 0) {
//         console.log('n is negative');
//     }
//     else if(n > 0) {
//         console.log('n is positive');
//     }else{
//         console.log('n is zero');
//     }
// }
// number(0);


//<finding even / odd >
// function number (num) {
//     if(num %2 == 0)
//     {
//         console.log('number is even');
//     }else{
//         console.log('number is odd');
//     }
//
// }
// number();


//<Generate Even and Odd Number less than N>
// function number () {
//     for (let num = 0; num <= 20; num ++) {
//        if (num %2 == 0) {
//            console.log(num + 'even');
//        }
//     }
//
// }
// number();
//
// function number () {
//     for (let num = 0; num <= 20; num ++) {
//         if (num %2 != 0) {
//             console.log(num + 'odd');
//         }
//     }
//
// }
// number();


//<program to decide given N is Prime or not>
// function TestPrime(n)
// {
//         for(let x = 2; x < n; x++)
//         {
//             if(n % x === 0)
//             {
//                 console.log (false);
//             }
//         }
//     }
//     console.log (true);
// TestPrime();


// <find left / right shift>
// function leftShift(x,y) {
//     let result = x * 2**y;
//     console.log(result);
// }
// leftShift(5,6);
//
// function rightShift(x,y) {
//     let result = x / 2**y;
//     console.log(result);
// }
// rightShift(5,6);


//<recursion example>
// function f(n) {
// if(n % 2){
//     return(n++);
// }else{
//     return f(f(n- 1));
// }
// }
// f(30);


//<recursion example>
// function f(n){
//     if(n <= 1){
//         return 1;
//     }
//     if(n % 2 == 0){
//         return f(n/2);
//         return f(n/2) + f(n/2 + 1);
//     }
// }
// f(11);


//<recursion example>
// function f(n) {
// if(n % 2){
//     return n++;
// }else{
//     return f(f(n-1));
// }
// }
// f(200);


// function get (n){
//     if(n<1) return;
//     get (n-1);
//     get (n-3);
//     console.log(n);
// }
// get(6);


//<log function>
// function log(n){
//     if(n == 1){
//         return 0;
//     }else{
//         return 1+log(n/2);
//     }
// };
// log(16);


//<recursion problem solving>
// function fun (n) {
//     if (n == 4) {
//         return n;
//     } else {
//         return 2 * fun (n + 1);
//     }
// }
// fun(2);
// Answer: 16


//<recursion problem solving>
// function fun (x , y) {
//     if (x == 0) {
//         return y;
//     } else {
//         return fun (x - 1 , x + y);
//     }
// }
// fun(4 , 3);
// Answer: 13


//<recursion problem solving>
// function fun (n) {
//     if (n == 0) {
//         return;
//     } else {
//         console.log (n % 2);
//         fun (n / 2);
//     }
// }
// fun(25);
// Answer: 11001


//<recursion problem solving>
// function fun (x , y) {
//     if (y == 0) {
//         return 0;
//     } else {
//         return (x + fun(x, y-1));
//     }
//     }
//     fun(2, 3);
// Answer: 6


//<recursion problem solving>
// function fun2(a,b) {
// if(b == 0){
//     return 1;
// }else{
//     return fun(a,fun2(a,b-1));
// }
// }
// fun2(2,3);
// Answer: x+x*y


//<recursion problem solving>
// function print(n) {
// if (n > 4000){
//     return;
// }else{
//     console.log(n);
//     console.log(2*n);
//     console.log(n);
// }
// }
// print(1000);
// Answer: 1000 2000 1000


//<recursion problem solving>
// function fun(n) {
//     if(n == 0 || n == 1){
//         return n;
//     }
//     if( n%3 !=0){
//         return 0;
//         return fun(n/3);
//     }
// }
// fun(3);
// Answer: 1


//<recursion problem solving>
// function f(n) {
//     if(n<=1){
//         return 1;
//     }
//     if(n%2 == 0){
//         return f(Math.floor(n/2));
//     }
//     return f(Math.floor(n/2)) + f(Math.floor(n/2) + 1);
// }
// console.log(f(11));
// Answer: 5


//<recursion problem solving>






























































