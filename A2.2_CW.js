console.log("A2.2_CW");

console.log("---- ---- ----");

console.log("Exercise 1");

console.log("---- ---- ----");

console.log("1.1");
let rohitAge = 22;
let rahulAge = 23;

let isRohitOlder = rohitAge > rahulAge;

console.log("is Rohit older than Rahul? ", isRohitOlder);

console.log("---- ---- ----");

console.log("1.2");
let isRohitYounger = rohitAge < rahulAge;

console.log("Is Rohit younger than Rahul? ", isRohitYounger);

console.log("---- ---- ----");

console.log("1.3");
let romaAge = 22;

let isRohitEqualRoma = rohitAge === romaAge;

console.log("Are Rohit and Roma are of the same age? ", isRohitEqualRoma);

console.log("---- ---- ----");

console.log("1.4");
let ninaAge = 23;

let isNinaOlderOrSameAsRuhul = ninaAge >= rahulAge;

console.log(
  "Is Nina older or equal to Rauhl's age? ",
  isNinaOlderOrSameAsRuhul
);

console.log("---- ---- ----");

console.log("1.5");
console.log("Is Nina older or equal to Rohit? ", isNinaOlderOrSameAsRuhul);

console.log("---- ---- ----");

console.log("1.6");

let isRomaYoungerOrSameAsNina = romaAge <= ninaAge;
console.log("Is Roma youger or eqaul to Nina?, ", isRomaYoungerOrSameAsNina);

console.log("---- ---- ----");
console.log("Exercise 2");
console.log("---- ---- ----");

console.log("2.1");
let product1Price = 499;
let product2Price = 699;
let budget = 1199;

let totalPrice = product1Price + product2Price;

let areBothUnderBudget = budget > totalPrice;

console.log("Can I afford both products? ", areBothUnderBudget);

console.log("---- ---- ----");

console.log("2.2");
let math = 87;
let english = 33;
let science = 43;
let passingAverage = 60;
let average = (math + english + science) / 3;
let isPass = average > passingAverage;

console.log("did I pass? ", isPass);

console.log("---- ---- ----");

console.log("2.3");
let number = 50;

let isNumberDivisibleBy3 = number % 3 === 0;
let isNumberDivisibleBy7 = number % 7 === 0;

console.log("Divisible by 3? ", isNumberDivisibleBy3);

console.log("Divisible by 7? ", isNumberDivisibleBy7);
