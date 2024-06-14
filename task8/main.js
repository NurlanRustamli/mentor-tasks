// //task1
// var a = [1,2,3,4,5,6,7];
// function tekEded() {
//     for (let i = 0; i < a.length; i+=2) {
//         console.log(a[i]);
//     }
// }
// tekEded();
// //task2
// var a = [1,2,3,4,5,6,7];
// function cutEded() {
//     for (let i = 1; i < a.length; i+=2) {
//         console.log(a[i]);
//     }
// }
// cutEded();
// //task3
// var a =[1,2,3]
// function sum() {
//     sumNumbers =0;
//     for (let i = 0; i < a.length; i++) {
        
//         sumNumbers+=a[i];      
//     }
//     console.log(sumNumbers);
// }
// sum();
//fibonacci
// function fibonacci(say) {
//     let a = 1;
//     let b = 1;
//     console.log(a);
//     console.log(b);

//     for (let i = 2; i <= say; i++) {
//         let next = a + b;
//         console.log(next);
//         a = b;
//         b = next;
//     }
// }
//task tree
// let star ='*';
// for (let i = 0; i < 5; i+=2) {
//     console.log(star.repeat(5));
    
// }

// for (let i = 1; i <= 7; i++) {
//     const spaces = ' '.repeat(7 - i);
//     const stars = '*'.repeat(2 * i - 1);
//     console.log(spaces + stars);
// }
// task max min
let numbers = [1,2,5,8,12,34];
function max() {
    let maxNumber = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i]; 
        }
    }

    console.log("Maximum value:", maxNumber);
}

max();

function min() {
    let minNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i]< minNumber) {
            minNumber = numbers[i];
        }
    }
    console.log("Minimum value:", minNumber);
}
min();