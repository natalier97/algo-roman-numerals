//function that takes in an arabic number and returns roman numerals equiv.
function toRomanLazy(num) {
  let output = "";
  const romanNumeralToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanNumeralPriorityOrder = ["M", "D", "C", "L", "X", "V", "I"];
  for (let romanNum of romanNumeralPriorityOrder) {
    let numeralAdder = Math.floor(num / romanNumeralToArabic[romanNum]);
     for (let i = 1; i <= numeralAdder; i++) {
       output += romanNum;
     }
     num = num % (romanNumeralToArabic[romanNum])
  }
  return output
}
 
 /* let leftover = 0;
  let M_adder = Math.floor(num / 1000);
  leftover = num % 1000;
  for (let i = 1; i <= M_adder; i++) {
    output += "M";
  } 
  let D_adder = Math.floor(leftover / 500);
  leftover = leftover % 500;
  for (let i = 1; i <= D_adder; i++) {
    output += "D";
  }
  let C_adder = Math.floor(leftover / 100);
  leftover = leftover % 100;
  for (let i = 1; i <= D_adder; i++) {
    output += "C";
  }
  let L_adder = Math.floor(leftover / 50);
  leftover = leftover % 50;
  for (let i = 1; i <= L_adder; i++) {
    output += "L";
  }
  let X_adder = Math.floor(leftover / 10);
  leftover = leftover % 10;
  for (let i = 1; i <= X_adder; i++) {
    output += "X";
  }
  let V_adder = Math.floor(leftover / 5);
  leftover = leftover % 5;
  for (let i = 1; i <= V_adder; i++) {
    output += "V";
  }
  let I_adder = leftover;
  for (let i = 1; i <= I_adder; i++) {
    output += "I";
  }
  return output;
} */


function toRoman(num) {
  let output = "";
  const romanNumeralToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanNumeralPriorityOrder = ["M", "D", "C", "L", "X", "V", "I"];
  for (let romanNum of romanNumeralPriorityOrder) {
    let numeralAdder = Math.floor(num / romanNumeralToArabic[romanNum]);
    for (let i = 1; i <= numeralAdder; i++) {
      output += romanNum;
    }
    num = num % romanNumeralToArabic[romanNum];
  }
output= output.replace('DCCCC', 'CM');
output = output.replace("CCCC", "CD");
output = output.replace("XXXX", "XL");
output = output.replace("VIIII", "IX");
output = output.replace("IIII", "IV");
  return output;
}

module.exports = { toRoman, toRomanLazy };
