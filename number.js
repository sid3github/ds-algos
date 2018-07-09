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
function number () {
    for (let num = 0; num <= 20; num ++) {
       if (num %2 == 0) {
           console.log(num + 'even');
       }
    }

}
number();

function number () {
    for (let num = 0; num <= 20; num ++) {
        if (num %2 != 0) {
            console.log(num + 'odd');
        }
    }

}
number();
