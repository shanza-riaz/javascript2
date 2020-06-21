                  //(chapter 21-25)

//(question 1)
var first_name = prompt("enter your first name","");
var second_name = prompt("enter your second name","");
var full_name = first_name + second_name;
document.write("welcome to this page "+"<br>"+full_name);
//(question 2)
var favrouit = prompt("enter your favroit mobile","");
document.write("My favroite phone is: "+favrouit+"<br>");
document.write("Length of string: "+favrouit.length);
//(question 3)
var name = "Pakistani";
document. write("String: "+name+"<br>");
var indexing = name.indexOf("n");
document. write("Index of 'n': "+indexing);
//(question 4)
var greeting = "Hello World";
document.write("String: "+greeting+"<br>");
var n = greeting.lastIndexOf("l");
document.write("Last index of 'l': "+n);
//(question 5)
var country = "pakistani";
document.write("String: "+country+"<br>");
var letter = country.charAt(3);
document.write("Character at index 3: "+letter);
//(question 6)
var str1 = "Hello ";
var str2 = "world!";
var result = str1.concat(str2);
document.write(result);
//(question 7)
var city = "Hyderabad";
var res = city.replace("Hyder", "Islam");
document.write("City: "+city+"<br>"+"After replacement: "+res);
//(question 8)
var message = "Ali and Sami are best friends. They play cricket and football together.";
var res = message.replace(/and/g, "&" );
document.write(res);
//(question 9)
var inte = parseInt("472");
document.write("value: 472"+"<br>"+"Type: String"+"<br>"+
"Value: "+inte+"<br>"+"Type: number");
//(question 10)
var input = prompt("enter value");
var res = input.toUpperCase();
document.write(res);
//(question 11)
var input = prompt("Enter value","");
var title = input.charAt(0).toUpperCase()+input.substr(1).toLocaleLowerCase();
document.write("User input: "+input+"<br>"+"Title case: "+title);
//(question 12)
var d = 35.36;
var s = d + '';
s =s.replace('.', '');
s = parseInt(s);
document.write("Number: "+d+"<br>"+"Result: "+s);
//(question 13)
var user = prompt("enter your name");

    if (user.charCodeAt(0) = "33") {
        alert(" not allowed !");
    }
    else if (user.charCodeAt(0) = "44") {
        alert(" not allowed ,");
    }
    else if (user.charCodeAt(0) = "46") {
        alert(" not allowed .");
    }
    else if (user.charCodeAt(0) = "64") {
        alert(" not allowed @");
    }
else{
    document.write(user);
}
//(question 14)
var input = prompt("enter your item");
input = input.toLocaleUpperCase();
input = input.toLocaleLowerCase();
var arr = ["cake","apple pie","cookie","chips","patties"];
var bakeryindex = arr.indexOf(input);
    if(arr.indexOf(input) != -1){
        document.write(input +" is available at index "+bakeryindex+"in our bakery");
    }
    else{
        document.write("We are sorry."+input+" is not available in our bakery");
}
//(question 15)
var password, message;
var whileCounter = 0;
var CFAL = false;
while (whileCounter != 1) {
    password = prompt("Enter Password");
    if (password.length <= 5) {
        alert("Must be 6 or more characters long");
    }
    else {
        if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
            alert("Number not allowed in start");
        }
        else {
            for (var i = 0; i <= password.length-1; i++) {
                if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57) {
                    CFAL = true;
                    whileCounter = 1;
                    break;
                }
                else {
                    continue;
                }
            }
            if (CFAL == true) {
                whileCounter = 1;
                message = "Password is OK.";
            }
            else {
                whileCounter = 0;
                message = "Invalid Password!\nYou must enter both lettes and numbers in your password.";
            }
            alert(message);
        }
    }
}
//(question 16)
var university = "university of karachi";
var res = university.split(" "+"<br>");
document.write(res);
//(question 17)
var input = prompt("enter value");
var res = input.charAt(input.length-1);
document.write(res);
//(question 18)
function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
document.write(count("The quick brown fox jumps over the lazy dog", 'the'));

                             //(chapter 26-30)
//(question 1)
var input = +prompt("enter  integer number");
var round = Math.round(input);
var flor = Math.floor(input);
var cil = Math.ceil(input);
document.write("number: "+input+"<br>"+"round of value: "+round+"<br>"
+"floor value: "+flor+"<br>"+"ceil value: "+cil);
//(question 2)
var input = +prompt("enter negative floating point number");
var round = Math.round(input);
var flor = Math.floor(input);
var cil = Math.ceil(input);
document.write("number: "+input+"<br>"+"round of value: "+round+"<br>"
+"floor value: "+flor+"<br>"+"ceil value: "+cil);
//(question 3)
var input = +prompt("enter number");
var absolute = Math.abs(input);
document.write("The absolut value of "+input+" is "+absolute);
//(question 4)
var input = +prompt("roll dice");
var ran = Math.floor(Math.random()*6);
document.write("Random dice value: "+ran);
//(question 5)
var head = prompt("enter head users");
var tail = prompt("enter tail users");
var ran = Math.random*2;
var floor = Math.floor(ran);
if(floor === 0){
    document.write("Random coin value: haeds");
}
else{
    document.write("Random coin value: tails");
}
//(question 6)
var ran = Math.random()*100;
var flor = Math.floor(ran);
document.write("Random number between 1 and 100: "+flor);
//(question 7)
var input = prompt("enter weight");
var ran = Math.floor(Math.random()*50);
document.write(ran);

//(question 8)

var input = prompt("enter number between 1 and 10");
var ran = 7;
if (ran == input){
    alert("congratulation!");
}
else if(ran != input){
    alert("try again!");
}
                        //(chapter 31-34)
//(question 1)
var date = new Date();
document.write(date);
//(question 2)
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const current = new Date();
document.write("The current month: " + monthNames[current.getMonth()]);
//(question 3)
const dayNames = ["saturday","sunday","monday","tuesday","wednesday","thursday","friday"
];

const current = new Date();
var day = dayNames[current.getDay()];
document.write("Today is: " +day.slice(0, 3));
//(question 4)
const dayNames = ["saturday","sunday","monday","tuesday","wednesday","thursday","friday"
];

const current = new Date();
var day = dayNames[current.getDay()];
if(day == "sunday" || day == "saturday"){ 
document.write("it's fun day ");
}
else{
    document.write("it's other day");
}

//(question 5)
var d = new Date();
var date=d.getDate();
if (date<16){
alert("First fifteen days of the month")
}
else{
     alert("Last days of the month")
}
//(question 6)
var since = new Date( "Jan 1, 1970" );
var minut = since.getTime();
var now = new Date();
var nowminut = now.getTime();
var diff = nowminut-minut;
var min = diff/(1000*60*60);
document.write("Current date"+since+"<br>"+"Elapsed milisecond since january"
+diff+"<br>"+"Elapsed minutes since january"+min);

//(question 7)
var d = new Date();
var theHr = d.getHours();

if (theHr<12){
alert("it's AM")
}
else{
     alert("it's PM")
}
//(question 8)
var later = new Date( "dec 31, 2020" );
document.write("Later date: "+later);
//(question 9)
var dob = new Date("June 18, 2015");
var mili = dob.getTime();
var today = new Date("April 23, 2020");
var tmili = today.getTime();
var diff = tmili-mili;
var day = Math.floor(diff/(1000*60*60*24));
document.write(day + " days have passed since "+dob);
//(question 10)
var since = new Date();
var mili = since.getTime();
var start = new Date("jan 1, 2020");
var tmili = start.getTime();
var diff = mili-tmili;
var day = Math.floor(diff/(1000*60));
document.write("on referance date "+since+"<br>"+day+
" second had passed since bigning of 2020");
//(question 11)
var d = new Date();
var ago = new Date();
ago.setHours(1);
document.write("Current date is: "+d+"<br>"+"1 hour ago: "+ago);
//(question 12)
var since = new Date();
var back = new Date(100);
document.write("Current date "+since+"<br>"+"100 years back,it was "+back);
//(question 13)
var dob = new Date(prompt("enter your birth date", "dec 31, 1997"));
var mili = dob.getTime();
var today = new Date();
var tmili = today.getTime();
var diff = tmili-mili;
var age = Math.floor(diff/(1000*60*60*24*30*12));
document.write(age);
//(question 14)
var customer = prompt("enter your name");
var month = prompt("enter month");
var unit = prompt("enter unit");
var char = 16;
var charges = unit*char;
var netammount = charges;
var late =  350;
var gross = charges + late;


document.write("<h1>"+"K-Electricity Bill"+"</h1>"+"<br><br>"+
    "Customer name "+customer+"<br>"
+"current month "+month+"<br>"
+"number unit "+unit+"<br>"+
"charges per unit "+char+"<br>"+
"Net Amount Payable (within Due Date) "+charges+
"<br>"+" Late Payment Surcharge "+late+"<br>"
+"Gross Amount Payable (after Due Date) "+gross);



                               //(chapter 35-38)
//(question 1)
var date = new Date();
document.write(date);
//(question 2)
var first = prompt("enter your first name");
var last = prompt("enter your last name");
alert("Welcome! "+first+" "+last);
//(question 3)
var firstnum = +prompt("enter first number");
var secondnum = +prompt("enter last number");
var sum = firstnum + secondnum;
document.write("Sum of numbers is: "+sum)
//(question 4)
var firstnum = +prompt("enter first number");
var operator = prompt("enter operator")
var secondnum = +prompt("enter last number");
if (operator == "+"){
    var sum = firstnum + secondnum;
    document.write("sum of number is: "+sum);
}

else if (operator == "-"){
    var sub = firstnum - secondnum;
    document.write("subtraction of number is: "+sub);
}

else if (operator == "*"){
    var mul = firstnum * secondnum;
    document.write("multiplication of number is: "+mul);
}
else if (operator == "/"){
    var div = firstnum / secondnum;
    document.write("division of number is: "+div);
}
else if (operator == "%"){
    var mod = firstnum % secondnum;
    document.write("modulos of number is: "+mod);
}
//(question 5)
const square = function(x) {
    return x * x;
  };
  
  document.write(square(12));
//(question 6)
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 4;
  answer = factorial(n)
  document.write("The factorial of " + n + " is " + answer);
//(question 7)
var FirstNumber = prompt("enter first number");;
var SecondNumber = prompt("enter second number");
for (var i = FirstNumber; 
    i <= SecondNumber; i++) {
        document.write(i+"<br>");  
}
//(question 8)
var base = prompt("input base value");
var perp = prompt("input perp value");
var res = Math.hypot(base, perp)

document.write(res); 
//(question 9)
var length = prompt("Enter a whole number for the length of your rectangle.");
var width = prompt("Enter a whole number for the width of your rectangle.");
function area(length, width) {
    return length * width;
}
function perimeter(length, width) {
    return 2*( length + width);
}

document.writeln('The area of your rectangle is ' + area(length, width));         
document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));
//(question 10)
function palindrome(text) {
    // Split, reverse and join string to get reversed text
    var reversedText  = text.toLowerCase()
                        .split('').reverse().join('');
    
    
    return text === reversedText;
    
    
    }
    document.write(palindrome('madam'));
//(question 11)
function camelcase(str)
{
  var arr = str.split(' ');
  var newarr = [];
    
  for(var x = 0; x < arr.length; x++){
      newarr.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));
  }
  return newarr.join(' ');
}
document.write(camelcase("the quick brown fox"));
//(question 12)
function lengthy(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(lengthy('Web Development Tutorial'));
//(question 13)
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('w3resource.com', 'o'));
//(question 14)
function calcCircumfrence(radius) {
    var y = (Math.PI * radius) * 2;
  console.log("The circumfrence is " + y + ".");
  }
  function calcArea(radius) {
    var x = (Math.PI * radius) * radius;
  document.write("The area is " + x + ".");
  }
  
  calcCircumfrence(30);
  calcArea(10);