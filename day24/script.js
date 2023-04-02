//using for loop
function fibonacciForLoop(num) {
    const fib = [0, 1];
    
    for (let i = 2; i <= num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib.slice(0, num + 1);
  }
  
  console.log(fibonacciForLoop(10))

  //using while loop

  function fibonacciWhileLoop(num) {
    const fib = [0, 1];
    let i = 2;
  
    while (i <= num) {
      fib[i] = fib[i - 1] + fib[i - 2];
      i++;
    }
  
    return fib.slice(0, num + 1);
  }
  
  console.log(fibonacciWhileLoop(10)); 

  //Using a do-while loop

  function fibonacciDoWhileLoop(num) {
    const fib = [0, 1];
    let i = 2;
  
    do {
      fib[i] = fib[i - 1] + fib[i - 2];
      i++;
    } while (i <= num);
  
    return fib.slice(0, num + 1);
  }
  
  console.log(fibonacciDoWhileLoop(10)); 
  
  