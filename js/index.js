let hacker1 = "Vladimir";
console.log("the driver's name is" + " " + hacker1);

let hacker2 = "Kevin";
console.log( "The navigatos name is" + " " + hacker2);





if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}





console.log(hacker1.toUpperCase());

let result = "";
for (let i = 0; i < hacker1.length; i++) {
    result += hacker1[i].toUpperCase();
    if (i !== hacker1.length - 1) {
        result += " ";
    }
}
console.log(result);
// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops