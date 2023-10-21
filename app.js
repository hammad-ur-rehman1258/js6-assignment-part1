/////////////////////         chp 35-38
// //1. Write a function that displays current date & time in your browser.
// function Time(){
//     var date=new Date();
//     document.write(date);
// }
// Time();

//2. Write a function that takes first & last name and then it greets the user using his full name.
// function Greet(){
//     var firstName=prompt("Enter your first name");
//     var lastNAme=prompt("Enter your last name");
//     alert("Welcome "+firstName+" "+lastNAme);
// }
// Greet();

// function Greet(a,b){
//     alert("Welcome "+a+" "+b);
// }
// var a=prompt("Enter your first name");
// var b=prompt("Enter your last name");
// Greet(a,b);

// //3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function Sum(a,b){
//     var sum=a+b;
//     return sum;
// }
// var a=+prompt("Enter first number");
// var b=+prompt("Enter second number");
// document.write(Sum(a,b));


// //4. Calculator:
// function result(num1,opr,num2){
//     if(opr=="+"){
//     var sum=num1+num2;
//     return sum;} 

//     if(opr=="-"){
//     var sub=num1-num2;
//     return sub;}

//     if(opr=="*"){
//     var mul=num1*num2;
//     return mul;}
    
//     if(opr=="/"){
//     var div=num1/num2;
//     return div;}
// }
// var num1=+prompt("Enter num 1");
// var opr=prompt("Enter operator");
// var num2=+prompt("Enter num 2");
// document.write(result(num1,opr,num2));

// //5. Write a function that squares its argument.
// function square(num){
//     var sqr=num*num;
//     return sqr;
// }
// var num=+prompt("Enter number");
// document.write(square(num));

// //6. Write a function that computes factorial of a number.
// function factorial(num){
//     var i;
//     var fact=1;
//     for(i=num;i>=1;i--){
//         fact=fact*i;}
//         return fact;
    
// }
// var num=+prompt("Enter number");
// document.write(factorial(num));

// //7. Write a function that take start and end number as inputs & display counting in your browser.
// function counting(start,end){
//     var i,start,end;
//     for (i=start;i<=end;i++){
//         document.write(i+"<br>");
//     }
// }
// var start=+prompt("Enter starting num");
// var end=+prompt("Enter ending num");
// counting(start,end);

// //8. Write a nested function that computes hypotenuse of a right angle triangle.
// function calculateHypotenuse(hyp){
//     function calculateSquare(x){
//         return x*x;
//     function sumOfSq(base,perp){
       
//         return calculateSquare(base)+calculateSquare(perp);
    
//      hyp=Math.sqrt(sumOfSq(base,perp));
// }}}
// var base=+prompt("Enter base");
// var perp=+prompt("Enter perpendicular");
// document.write(calculateHypotenuse(hyp));

// //9. Write a function that calculates the area of a rectangle.
// //i
// // function area(a,b){
// //   var Area=a*b;
// //   return Area;
// // }
// // document.write("Area of triangle: "+area(2,5));
// //ii
// function area(a,b){
//     var Area=a*b;
//     return Area;
// }
// var a=+prompt("Enter height");
// var b=+prompt("Enter width");
// document.write("Area of triangle: "+area(a,b));

// //10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// function strCheck(str){
//     var revStr='';
//     for(var i=(str.length-1);i>=0;i--){
//         revStr=revStr+str[i];
//     }
//     if(revStr===str){
//         return "This is a palindrome";
//     }
//     else{
//         return "This is not a palindrome";
//     }
// }
// var str=prompt("Enter a string");
// alert(strCheck(str));
    

// //11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// function upperCaseString(str){
//     resStr='';
//     for(var i=0;i<str.length;i++){
//      if(i==0|| str[i-1]==' '){
//         resStr+=str[i].toUpperCase();
//      }
//      else{
//         resStr+=str[i];
//      }
//     }
//     return resStr;
// }
// var str=prompt("Enter a string");
// document.write("Example string: "+str+"<br>Expected output: "+upperCaseString(str));


// //12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// function longestStr(str){
//    var sepWord=str.split(' ');
//    var longestWord='';
//    var word;
//    for(var i=0;i<sepWord.length;i++){
//       word=sepWord[i];
//       if(word.length>longestWord.length){
//          longestWord=word;
//       } 
//    }
//    return longestWord;
// }
// var str=prompt("Enter a string");
// document.write("Example string: "+str+"<br>Expected output: "+longestStr(str));

// //Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// function letterCount(str,letter){
//     var count=0;
//     for(var i=0;i<=str.length;i++){
//         if(str[i]==letter){
//             count++;
//         }
//     }
//     return count;
// }
// var str=prompt("Enter a string");
// var letter=prompt("Enter a letter whose occurense you want to find");
// document.write("The letter "+letter+" has occured "+letterCount(str,letter)+" times in the string: "+str);

//14. The Geometrizer
function calcCircumference(radius){
    var circum=(2*3.142*radius);
    return circum;
}
var radius=+prompt("Enter radius");
document.write("The circumference of circle is: "+calcCircumference(radius));

function calcArea(radius){
    var area=(3.142*radius*radius);
    return area;
}
var radius=+prompt("Enter radius");
document.write("The area of circle is: "+calcArea(radius));
