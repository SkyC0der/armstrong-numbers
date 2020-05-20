const isArmstrongNumber = (num) => {
 let length = num.toString().length;
 let digit = Array.from(String(num), Number);
 let fixed = digit.map((product) => product**length);
 let value =fixed.reduce((a,b) => a + b);
 let done = parseInt(value,10)
 return num === done;
};
module.exports = isArmstrongNumber;