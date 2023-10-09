const prompt = require('prompt-sync')();
const salary = parseFloat(prompt('Enter your salary: '));

function calculateIncomeTax(salary) {
  if (salary <= 24000) {
    return salary * 0.1;
  } else if (salary <= 32333) {
    return salary * 0.25;
  } else if (salary <= 500000) {
    return salary * 0.3;
  } else if (salary <= 800000) {
    return salary * 0.325;
  } else {
    return salary * 0.35;
  }
}

function calculateNHIF(salary) {
  const nhifRates = [
    { min: 0, max: 5999, rate: 150 },
    { min: 6000, max: 7999, rate: 300 },
    { min: 8000, max: 11999, rate: 400 },
    { min: 12000, max: 14999, rate: 500 },
    { min: 15000, max: 19999, rate: 600 },
    { min: 20000, max: 24999, rate: 750 },
    { min: 25000, max: 29999, rate: 850 },
    { min: 30000, max: 34999, rate: 900 },
    { min: 35000, max: 39999, rate: 950 },
    { min: 40000, max: 44999, rate: 1000 },
    { min: 45000, max: 49999, rate: 1100 },
    { min: 50000, max: 59999, rate: 1200 },
    { min: 60000, max: 69999, rate: 1300 },
    { min: 70000, max: 79000, rate: 1400 },
    { min: 80000, max: 89999, rate: 1500 },
    { min: 100000, max: Infinity, rate: 1600 }
  ];

  for (const rate of nhifRates) {
    if (salary >= rate.min && salary <= rate.max) {
      return rate.rate;
    }
  }

  return 1700; // Default rate for salaries above 100,000
}

function calculatePension(salary) {
  return salary * 0.06;
}

const incomeTax = calculateIncomeTax(salary);
const nhifDeduction = calculateNHIF(salary);
const pensionDeduction = calculatePension(salary);
const netIncome = salary - incomeTax - nhifDeduction - pensionDeduction;

console.log(`Net tax: ${incomeTax}`);
console.log(`NHIF: ${nhifDeduction}`);
console.log(`Pension: ${pensionDeduction}`);
console.log(`Net Income: ${netIncome}`);