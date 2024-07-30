//function to add two numbers
function sum (a,b){
  return a+b;
}
let result = sum(5,5);
console.log(result);

//string and reverse it
function reversestring(str){
  return str.split('').reverse().join('');
}
let originalstring = 'naveerah';
let reversedstring = reversestring(originalstring);
console.log(reversedstring);

//check if number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let number = 7;
let res = isPrime(number);
console.log(res); 
