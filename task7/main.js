// let name = prompt("Adiniz");
// let reversedName = name.split("").reverse().join("")
// console.log(reversedName);
// let eded = prompt(" eded daxil edin");
// console.log(eded.length);
// if (eded.length == 5){
// eded = parseInt(eded);
// let a = Math.floor(eded / 10000) % 10;//5ci reqemim
// let b = Math.floor(eded / 1000) % 10;//4cu reqemim
// let c = Math.floor(eded / 100) % 10;//3cu reqemim
// let d = Math.floor(eded / 10) % 10;//2ci
// let e = Math.floor(eded / 1) % 10;//1ci


// let arr=[a,b]
// if (a == e && b == d) {
//     console.log('eded palindromdur');
//     //12321 22422
// }
// else {
//     console.log('eded palindrom deyil');
// }
// }
// else{
//     console.log('duzgun daxil etmeyibsiniz');
// }
//1221

// for (let i = 0; i < eded.length; i++) {
//     // arr[i]
//     let x = 1
//     let arr = []
//     let num = parseInt(eded)

//     arr.push(Math.floor(num / (x *= 10) % 10))
//     console.log(num);
//     console.log(arr);
//     console.log(x);
// }


//1221

//1
//122

//12
//12
function isPalindrome(number) {
    let originalNumber = number;
    let reversedNumber = 0;

    while (number > 0) {
        console.log(reversedNumber);
        reversedNumber = (reversedNumber * 10) + (number % 10);
        number = Math.floor(number / 10);
    }

    return originalNumber === reversedNumber;
}

let eded = prompt("eded daxil edin");
eded = parseInt(eded);

if (isPalindrome(eded)) {
    console.log(eded + " is a palindrome.");
} else {
    console.log(eded + " is not a palindrome.");
}