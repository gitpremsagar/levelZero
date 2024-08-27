console.log("A2_MCR");

console.log("----------------------");

console.log("Payment Details:");

console.log("----------------------");
let freelancer1 = "Sneha";
let freelancer2 = "Vikram";

let jobDescription1 = "App Developer";
let jobDescription2 = "SEO Specialist";

let hourlyRate1 = 400;
let hourlyRate2 = 350;

let hoursWorked1 = 78;
let hoursWorked2 = 45;

let ratings1 = 88;
let ratings2 = 78;

let isEligibleForBonus1 = hoursWorked1 > 50 || ratings1 > 80;
let isEligibleForBonus2 = hoursWorked2 > 50 || ratings2 > 80;

let totalPayment1 = hourlyRate1 * hoursWorked1;
let totalPayment2 = hourlyRate2 * hoursWorked2;

console.log("Freelnacer: ", freelancer1);
console.log("Job Description: ", jobDescription1);
console.log("Hourly Rate ", hourlyRate1);
console.log("Hours Worked: ", hoursWorked1);
console.log("Total Payment: ", totalPayment1);
console.log("Is eligible for bonus: ", isEligibleForBonus1, "\n");

console.log("----------------------");

console.log("Freelnacer: ", freelancer2);
console.log("Job Description: ", jobDescription2);
console.log("Hourly Rate ", hourlyRate2);
console.log("Hours Worked: ", hoursWorked2);
console.log("Total Payment: ", totalPayment2);
console.log("Is eligible for bonus: ", isEligibleForBonus2);
