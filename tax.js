// Import the 'prompt-sync' library to take user input.
let prompt = require ('prompt-sync')();
// Prompt the user to input their salary and store it as a string.
let input = prompt('input salary: ')
// Convert the input string to a floating-point number.
let salary = parseFloat(input)


// Define a constant 'pay' equal to the salary.
const pay = salary  ;
// Define a function 'netTax' to calculate the income tax based on salary.
function netTax () {

  
if (pay <= 24000) return (pay * 0.1) 
else if (24001<= pay  && pay <= 32333) return (pay * 0.25)
else if (32334<= pay && pay <=500000 ) return (pay * 0.3)
else if (500001 <= pay && pay <=800000) return (pay * 0.325)
else if (pay > 800000) return (pay * 0.35) 
}

// Print the calculated net tax.
console.log (("Net tax: ")+(netTax(salary)))
// Define a function 'nhif' to calculate National Hospital Insurance Fund (NHIF) deductions.
function nhif () { 
  
    if (pay < 5999) return 150
    if (6000 <= pay && pay <=7999) return 300
    if (8000 <= pay && pay <= 11999) return 400
    if (12000 <= pay && pay <= 14999) return 500
    if (15000 <= pay && pay <= 19999) return 600
    if (20000 <= pay && pay <= 24999) return 750
    if (25000 <= pay && pay <= 29999) return 850
    if (30000 <= pay && pay <= 34999) return 900
    if (35000 <= pay && pay <= 39999) return 950
    if (40000 <= pay && pay <= 44999) return 1000
    if (45000 <= pay && pay <= 49999) return 1100
    if (50000 <= pay && pay <= 59999) return 1200
    if (60000 <= pay && pay <= 69999) return 1300
    if (70000 <= pay && pay <= 79000) return 1400
    if (80000 <= pay && pay <= 89999) return 1500
    if (100000 <= pay && pay <= 99999) return 1600
    else if (pay > 100000) return 1700

}

// Print the calculated NHIF deduction.
console.log(("NHIF: ") + (nhif(salary)))
// Define a function 'nssf' to calculate National Social Security Fund (NSSF) deductions.
function nssf() { 
// Calculate the pension as 6% of the salary and return it.
    const pension = (pay * 0.06)
    return pension

}
// Print the calculated pension (NSSF) deduction.
console.log (("Pension: ") +(nssf()))

// Calculate and print the net income, which is the salary minus the sum of netTax, nhif, and nssf.
console.log (("Net Income: ") + (salary - (netTax() + nhif() + nssf())))

return  + (salary - (netTax()+ nhif() +nssf()))
// The 'return' statement appears to be returning a value, but it's not assigned to a variable or used elsewhere in the code.