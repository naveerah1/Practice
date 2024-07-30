//Print numbers from 1 to 10
for(let i=1;i<=10;i++){
  console.log(i);
}

//print first 10 even numbers using while loop
let i=1 
while (i<=10){
  if(i%2==0){
  console.log(i)
  }
  i++
}

//factorial of a number
let n = 5; 
function factorial(n) { 
    let ans = 1; 

    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}
console.log(factorial(n));