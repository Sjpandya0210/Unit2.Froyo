
// Prompt the user for a list of integers separated by commas.
const flavors = prompt(
    "Please enter some froyo flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  
  // Split the string of numbers into an array of strings.
  const arrayOfFlavors = flavors.split(",");
  
  // Convert the array of strings into an array of numbers.
 // const numbers = [];
  //for (let i = 0; i < stringArray.length; i++) {
   // const str = stringArray[i];
    //const number = parseInt(str);
    //numbers.push(number);
  //}
  
  // Peform some calculations on the numbers.
  //console.log(`You have given ${getLength(numbers)} numbers.`);
  
 

  /*console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
  */

  const orderSummary = {
        vanilla : 0,
        strawberry : 0,
        coffee: 0
  }


function countFlavors(anyArray) {
    for (let i = 0; i < anyArray.length; i++){
     if (anyArray[i] === "vanilla") {
        //console.log(anyArray[i] = "vanilla")
        orderSummary.vanilla++
     }
     else if(anyArray[i] === "strawberry") {
        orderSummary.strawberry++
     }
     else if(anyArray[i] === "coffee") {
        orderSummary.coffee++
     }
        }
        console.log(`You ordered ${orderSummary.vanilla} vanilla froyos,${orderSummary.strawberry} strawberry froyos and ${orderSummary.coffee} coffee froyos`);
    }
    
    countFlavors(arrayOfFlavors);

