module.exports = function zeros(expression) {
  // your solution
  let factorialArray = [];
  let counterZeroes = 0;

  factorialArray = expression.split('*');

  for(let i = 0; i< factorialArray.length;i++){
    counterZeroes += calculatZeroes(factorialArray[i]);
    console.log("\ncounterZeroes = " + counterZeroes + "\n");
  }
  return counterZeroes;
}

function calculatZeroes(factorialString){

  let counterFact = 0;
  let intFactorial = parseInt(factorialString,10);
  let willReturn = 0;

  for(let i = factorialString.length-1;i>=0;i--){
    if(factorialString[i] == "!"){
      counterFact++;
    }
    else {
      break
    }
  }

  if(counterFact == 1){
    while(intFactorial > 0){
      intFactorial /= 5;
      willReturn +=Math.floor(intFactorial);
    }
  }
  else if (counterFact == 2){
    if(intFactorial % 2 == 0){
      while(intFactorial > 0){
        if (intFactorial >= 50){
          willReturn++;
        }
        intFactorial /= 10;
        willReturn +=Math.floor(intFactorial);
      }
    }
    else {
      for(let i = 1;i<=intFactorial;i+=2){
        if(i%25 == 0){
          willReturn++;
        }
        if(i%5 == 0){
          willReturn++;
        }
      }
    }
  }
  return willReturn;
}