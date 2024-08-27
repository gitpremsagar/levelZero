console.log("A2.3_CW");

console.log("---- ---- ----");

console.log("Exercise 1");

console.log("---- ---- ----");

console.log("1.1");
let totalAverage = 87;
let hasSportsEndorsment = true;

let isEligibleForscholarship = totalAverage > 85 || hasSportsEndorsment;

console.log(
  "Is the student eligible for scholatship? ",
  isEligibleForscholarship
);

console.log("---- ---- ----");

console.log("1.2");
let shippingAmount = 1250;
let hasPrimeMembership = true;

let qualifiesForFreeShipping = shippingAmount > 999 || hasPrimeMembership;
console.log(
  "Does the user qualifies for free shipping? ",
  qualifiesForFreeShipping
);

console.log("---- ---- ----");

console.log("1.3");
let sbiBalance = 5000;
let hdfcBalance = 3000;
let sareeCost = 2500;
let kurtiCost = 1500;
let jewelryCost = 100;

let totalCost = sareeCost + kurtiCost + jewelryCost;

let isAffordable = totalCost <= sbiBalance || totalCost <= hdfcBalance;

console.log("Can you afford the purchase? ", isAffordable);

console.log("---- ---- ----");

console.log("Exercise 2");

console.log("---- ---- ----");

console.log("2.1");
let selectedNumber = 85;
let isInRange = selectedNumber >= 75 && selectedNumber <= 100;

console.log("Is the selected number between 75 and 100? ", isInRange);

console.log("---- ---- ----");
console.log("2.2");
let shirtColor = "red";
let shirtSize = "L";
let shirtBrand = "Jockey";

let matchesFilter =
  shirtColor === "red" &&
  shirtSize === "L" &&
  (shirtBrand === "Jockey" || shirtBrand === "USPA");

console.log("Does the shirt matches the filter? ", matchesFilter);

console.log("---- ---- ----");

console.log("2.3");
let remainingItems = 4;
let itemSize = "M";
let itemBrand = "Nike";

let isDiscountApplicable =
  remainingItems < 5 &&
  itemSize === "M" &&
  (itemBrand === "Nike" || itemBrand === "Adidas");

console.log("Is discount applicable? ", isDiscountApplicable);
