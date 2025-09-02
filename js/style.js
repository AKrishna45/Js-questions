/* 1.1.Declare variables 
var myName = "krishna";  
let myAge = 20;  
const pi = 3.14159;  
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Value of π:", pi);

//output:krishna,20,3.14159
*/


/*1.2.swap two numbers
let a = 10;
let b = 20;
console.log("Before Swapping:");
console.log("a =", a, "b =", b);
let temp = a;
a = b;
b = temp;
console.log("After Swapping:");
console.log("a =", a, "b =", b);

//output: Before Swapping: a=10 b=20
        After Swapping: a=20 b=10
*/


/*2.3.Rectangle
let length = 10;
let breadth = 5;
let area = length * breadth;
let perimeter = 2 * (length + breadth);
console.log("Length:", length);
console.log("Breadth:", breadth);
console.log("Area of Rectangle:", area);
console.log("Perimeter of Rectangle:", perimeter);

//output:Length:10
        Breadth:5


/*2.4.Data types 
let num1 = 5; 
let num2 = "5"; 
console.log("num1 =", num1, "and num2 =", num2);
console.log("num1 == num2:", num1 == num2);
console.log("num1 == num2:", num1 == num2); 

//output:num1=5 and num2=5
        num1==num2:true
        num1===num2:false
*/

/*2.5.Even or Odd
let number = 7;
if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}

//output:7 is Odd
*/


/*3.6.Largest of three numbers
let age = 16; 
if (age >= 18) {
    console.log("Age:", age, "→ Eligible to Vote 20");
} else {
    console.log("Age:", age, "→ Not Eligible to Vote 16");
}

//output:Age:16 → Not Eligible to Vote 16
*/


/*3.7.Vowel or Consonant
let a = 25;
let b = 42;
let c = 18;
console.log("Numbers are:", a, b, c);
if (a >= b && a >= c) {
    console.log(a + " is the largest number");
} else if (b >= a && b >= c) {
    console.log(b + " is the largest number");
} else {
    console.log(c + " is the largest number");
}
//output:Numbers are: 25 42 18
        42 is the largest number
*/


/*3.8.vowel or Consonant
let char = 'e';  
char = char.toLowerCase();
if (char === 'a' || char === 'e' || char === 'i' |) {
    console.log(char + " is a Vowel");
} 
else if (char >= 'a' && char <= 'z') {
    console.log(char + " is a Consonant ");
} 
else {
    console.log(char + " is not an alphabet");
}

//output:e is a Vowel
*/


/*3.9.Grade Calculation
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        console.log("Result =", result);
        break;

    case "-":
        result = num1 - num2;
        console.log("Result =", result);
        break;

    case "*":
        result = num1 * num2;
        console.log("Result =", result);
        break;

    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
            console.log("Result =", result);
        } else {
            console.log("Error: Division by zero");
        }
        break;

    default:
        console.log("Invalid operator");
}

//output:Result=15
*/


/*4.10.natural numbers
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//output:1,2,3,4,5,6,7,8,9,10
*/


/*4.11.Multiplication
let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(num + " × " + i + " = " + (num * i));
}

//output:5×1=5,5×2=10,5×3=15,5×4=20,5×5=25,5×6=30,5×7=35,5×8=40,5×9=45,5×10=50
*/


/*4.12.sum of digits
let number = 1234;
let sum = 0;
while (number > 0) {
    let digit = number % 10;  // get last digit
    sum += digit;             // add digit
    number = Math.floor(number / 10); // remove last digit
}
console.log("Sum of digits =", sum);

//output:Sum of digits=10
*/


/*4.13.reversing number
let num2 = 1234;
let reversed = 0;
while (num2 > 0) {
    let digit = num2 % 10;  
    reversed = reversed * 10 + digit;  
    num2 = Math.floor(num2 / 10);  
}
console.log("Reversed number =", reversed);

//output:Reversed number=4321
*/


/*4.14.prime numbers 
for (let i = 2; i <= 50; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}

//output:2,3,5,7,11,13,17,19,23,29,31,37,41,43,47
*/


/*5.15.vowels in a string
let str = "I love JavaScript";
let count = 0;
let vowels = "aeiouAEIOU";
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        count++;
    }
}
console.log("Number of vowels =", count);

//output:Number of vowels=6
/*


/*5.16.palindrome
let word = "madam";
let reversedWord = "hello";

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

if (word === reversedWord) {
    console.log(word, "is a Palindrome");
} else {
    console.log(word, "is NOT a Palindrome");
}

//output:madam is a Palindrome
         hello is nota palindrome
*/


/*5.17.reverse a string
let text = "JavaScript";
let reversed = "";
for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
}
console.log("Original:", text);
console.log("Reversed:", reversed);

//output:Original:JavaScript
        Reversed:tircSavaJ
*/


/*5.18.replace the space with'-'
let sentence = "I love JS";
let newSentence = "";
for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
        newSentence += "-";
    } else {
        newSentence += sentence[i];
    }
}
console.log(newSentence);

//output:I love JS
*/


/*5.19.no.of Word in a sentence
let line = "JavaScript is fun";
let words = line.trim().split(" ");
console.log("Number of words =", words.length);

//output:Number of words=3
*/


/*6.20largest array element
let arr = [12, 45, 67, 23, 89, 34];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest element =", largest);

//output:89
*/


/*6.21.reverse an array
let arr2 = [1, 2, 3, 4, 5];
let reversedArr = [];
for (let i = arr2.length - 1; i >= 0; i--) {
    reversedArr.push(arr2[i]);
}
console.log("Original:", arr2);
console.log("Reversed:", reversedArr);

//output:5,4,3,2,1
*/


/*6.22.element exists in an array
let arr3 = [10, 20, 30, 40, 50];
let element = 30;
let found = false;
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === element) {
        found = true;
        break;
    }
}
if (found) {
    console.log(element, "exists in the array");
} else {
    console.log(element, "does NOT exist in the array");
}

//output:element exists in an array
*/


/*6.23.adding of two arrays
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
let newArr = [];
for (let i = 0; i < arr4.length; i++) {
    newArr.push(arr4[i]);
}
for (let i = 0; i < arr5.length; i++) {
    newArr.push(arr5[i]);
}
console.log("Concatenated Array:", newArr);

//output:1,2,3,4,5,6
*/


/*6.24.removing duplicate numbers
let arr6 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];
for (let i = 0; i < arr6.length; i++) {
    if (!uniqueArr.includes(arr6[i])) {
        uniqueArr.push(arr6[i]);
    }
}
console.log("Array without duplicates:", uniqueArr);

//output:1,2,3,4,5
*/


/*6.25.sum of numbers
let arr7 = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < arr7.length; i++) {
    sum += arr7[i];
}
console.log("Sum of array elements =", sum);

//output:50
*/


/*7.26.factorial
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log("Factorial of 5 =", factorial(5));

//output:120
*/


/*7.27.maximum number
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log("Max number =", findMax([12, 45, 67, 23, 89, 34]));

//output:89
*/


/*7.28.if a number is prime or not
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Is 7 prime? →", isPrime(7));
 //output:true

console.log("Is 10 prime? →", isPrime(10)); 
//output:false
*/


/*7.29.upper case writting
function toTitleCase(str) {
    let words = str.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}

console.log(toTitleCase("hello world"));
//output: "Hello World"

console.log(toTitleCase("javascript is fun"));
//output: "JavaScript Is Fun"
*/


/*8.30.Create a student object properties
let student = {
    name: "Rahul",
    age: 20,
    marks: 85
};
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Marks:", student.marks);
//output:name:Rahul
         age:20
         marks:85
*/


/*8.31.getDetails()"inside the student object"
let student = {
    name: "Rahul",
    age: 20,
    marks: 85,
    getDetails: function () {
        console.log("Name:", this.name, ", Age:", this.age, ", Marks:", this.marks);
    }
};
student.getDetails();
//output:Name: Rahul , Age: 20 , Marks: 85
*/


/*8.32.Create a nested object
let company = {
    companyName: "pravishre design & co ",
    CEO: {
        name: "yatheswar",
        age: 24
    },
    departments: {
        IT: "Information Technology",
        HR: "Human Resources",
        Finance: "Finance Department"
    }
};
console.log("CEO Name:", company.CEO.name);
console.log("One Department:", company.departments.IT);

//output:CEO Name:yatheswar
         One Department:Information Technology
*/


/*8.33.Object.keys()
function getObjectKeys(obj) {
    return Object.keys(obj);
}
let person = { name: "Kittu", age: 20, city: "anantapuram" };
console.log("Keys:", getObjectKeys(person));

//output:Keys:name,age,city
*/


/*8.34.number of properties in an object
let car = {
    brand: "Toyota",
    model: "Innova",
    year: 2022,
    color: "White"
};
let propertyCount = Object.keys(car).length;
console.log("Number of properties in car object =", propertyCount);

//output:04
*/