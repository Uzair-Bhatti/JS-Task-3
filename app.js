// chapter 12-13 //

// Q1
// var input = +prompt("Enter the character")

// if (input === Number){
//     console.log("Number")
// } 
// else if (input === input.toUppercaseletter()){
//     console.log("Uppercase")
// }
// else if (input === input.toLowercase()){
//     console.log("Lowercase")
// }

// Q2
// var num1 = +prompt("Enter your first integer")
// var num2 = +prompt("Enter your second integer")

// if (num1 > num2) {
//     console.log(num1 + " is larger than " + num2);
//   } else if (num2 > num1) {
//     console.log(num2 + " is larger than " + num1);
//   } else {
//     console.log("Both integers are equal: " + num1);
//   }

// // Q3
// var input = +prompt("Enter the number")

// if(input > 0 ){
//     console.log("the number is positive");
// } else if(input < 0){
//     console.log("the number is negative");
// } else {
//     console.log("the number is zero");
//  }

// // Q4
// var input= prompt("enter the character")

// if(input.length === 1)
// var char = input.toLowerCase();

// if(input === "a" ||input === "i" ||input === "e" ||input === "u" ||input === "o"){
//     console.log("True")
// }
// else {console.log("false")
// }

// // Q5
// var input = +prompt("Enter correct password")
// var input2 = +prompt("Enter password")

// if(input === input2){
//     console.log("Correct! the password you enter matches the original one.")
// } else {
//     console.log("Incorrect password")
// }

// // Q6
// var hour = 13

// if(hour < 18){
//     console.log("Greetings =" + "Good morning")
// } else {
//     console.log("Greetings =" + "Good evening")
// }

// // Q7

// const inputTime = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900):"));

// // Check if the input is a valid 4-digit number
// if (!isNaN(inputTime) && inputTime >= 0 && inputTime <= 2359 && inputTime % 100 < 60) {
//   let hour = Math.floor(inputTime / 100); // Extract the hour part
//   let minute = inputTime % 100; // Extract the minute part
//   let period;

//   // Determine the period (AM or PM)
//   if (hour >= 12) {
//     if (hour > 12) {
//       hour -= 12;
//     }
//     period = "PM";
//   } else {
//     if (hour === 0) {
//       hour = 12; // 12:00 AM should be 12:00 PM
//     }
//     period = "AM";
//   }

//   // Display the time in 12-hour format
//   console.log(`The time in 12-hour clock format is: ${hour}:${minute.toString().padStart(2, '0')} ${period}`);
// } else {
//   console.log("Invalid input. Please enter a valid time in 24-hour format (e.g., 1900).");
// }



// chapter 14-16 //

// // Q1
// var studentNames = [];

// // Q2
// var studentNames = new Array ();

// // Q3
// var fruits = ["Mango", "Apple", "Kela", "Nashpati", "Kharboza"];

// // Q4
// var numbers = ["1","2","3","4","5"]

// // Q5
// var booleanArray = [true, false, true, true, false];

// Q6
// var mixedArray = ["mango","1","true"]

// Q7
//  var qualification = ["SSC","HSC","BCS","BS","B.COM","M.S","M.Phil.","PhD"]

// Q8 
// var studentNames = ["Michael", "John", "Tony"]
// var studentscores = [320, 230, 480]
// var studentpercentage = []

// for (var i = 0; i < studentscores.length; i++) {
//     var percentage = (studentscores[i] / 500) * 100;
//     studentpercentage.push(percentage);
// }

// document.write("Score of Michael is " + "is " + studentscores[0] + ".Percentage:" + studentpercentage[0] + "<br>")
// document.write("Score of John is " + "is " + studentscores[1] + ".Percentage:" + studentpercentage[1] + "<br>")
// document.write("Score of Tony is " + "is " + studentscores[2] + ".Percentage:" + studentpercentage[2])

// Q9

// var newcolors=["orange","yellow","white"];
// document.write(colors);

// //part a)

// var newColor=prompt("Enter a color ")
// var colors=["orange","yellow","white"];
// colors.unshift(newColor);
// document.write(colors);

// //part b)

// var newColor=prompt("Enter a color")
// var newcolors=["orange","yellow","white"];
// colors.push(newColor);
// document.write(colors);

// //part c)

// var colors=["orange","yellow","white"];
// colors.unshift();
// document.write(colors);

// //part d)

// var colors=["orange","yellow","white"];
// colors.shift(numcolors);
// document.write(colors);

// //part e)

// var numcolors=["orange","yellow","white"];
// colors.pop(numcolors);
// document.write(colors);

// //part f)

// var colors = ["orange", "yellow", "white"];
// var numindex = prompt("Enter the index at which you want to add a color:");
// var colorName = prompt("Enter the color name you want to add:");
//  colors.splice(colorName);
//  document.write(colors);

//  //part g)

// var colors = [ "orange", "yellow", "white"];
// var index = prompt("Enter the index at which you want to delete color(s):");
// var ToDelete = prompt("Enter the number of colors you want to delete:");
// colors.splice(ToDelete);
// document.write(colors);

// Q10
// var studentScores = [87, 92, 78, 65, 90, 76, 88, 94, 81, 72];

// studentScores.sort(function(a, b) {
//     return a - b;
// });

// console.log(studentScores);
// console.log("Sorted Student Scores (Ascending Order):");

// Q11
// var cities = ["Karachi", "Lahore", "Islamabad","Sukkur","Peshawar"];
// var sliceArr = cities.slice(1, 4);
// console.log(cities, "Original Array with slice cities");
// console.log(sliceArr, "slice arr");

// Q12
// var arr = ["This ", "is ", "my ", "cat."]
// var joinString = arr.join("")

// console.log(joinString);

// Q13
// var devices = ["keyboard","mouse","printer","monitor"]
// console.log(devices)

// var firstvalue = devices.shift()
// var secondvalue = devices.shift()
// var thirdvalue = devices.shift()
// var fourthvalue = devices.shift()

// console.log(firstvalue)
// console.log(secondvalue)
// console.log(thirdvalue)
// console.log(fourthvalue)

// Q14
// var devices = ["keyboard","mouse","printer","monitor"]
// console.log(devices)

// var firstvalue = devices.pop()
// var secondvalue = devices.pop()
// var thirdvalue = devices.pop()
// var fourthvalue = devices.pop()

// console.log(firstvalue)
// console.log(secondvalue)
// console.log(thirdvalue)
// console.log(fourthvalue)

// Q15
// var company=["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
// var dropdownHTML = '<select id="companySelect">';

// // Iterate through the array and create an option for each manufacturer
// for (var i = 0; i < company.length; i++) {
//     dropdownHTML += '<option value="' + company[i] + '">' + company[i] + '</option>';
// }

// // Close the select element
// dropdownHTML += '</select>';

// // Use document.write() to write the HTML code to the document
// document.write(dropdownHTML);