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
//
// TestPrime();


// <find left / right shift>
function leftShift(x,y) {
    let result = x * 2**y;
    console.log(result);
}
leftShift(5,6);

function rightShift(x,y) {
    let result = x / 2**y;
    console.log(result);
}
rightShift(5,6);






