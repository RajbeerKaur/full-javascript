//declare the variable
var a;

//assigned
var b=2;

//casesensitive in variable
var studyCamp;
var rajbeerKaur;



//add two no
var sum =10+2;
console.log(sum)


var a=5;
b=10;
c="i am a ";

a=a+1;
b=b+5;
c= c+"string"
console.log(c)

var sum =20*4;
console.log(sum)
//add no
var myName=70;
myName=myName+80;
console.log(myName)
//incerement
var ourName=90;
ourName++;
console.log(ourName)
//decerment
var ourName=90;
ourName--;

console.log(ourName)

//decimals
var sum=2.0*2.5;
console.log(sum)

//remender
var sum=2%7;
console.log(sum)
//+operatore
var myStr ="start " + "end. "
console.log(myStr)

var myStr ="start ";
myStr+= "end";
console.log(myStr)

//length of a string
var myNameLength=0;
var firstName="rajbeer";
myNameLength+=firstName.length;
console.log(myNameLength);

var firstName="";
var lastName="kaur";
firstName=lastName[3];
console.log(firstName);

//change the style 
var mySTr ="jello";
myStr[0];
var myStr="hello";
console.log(myStr)

//how to write a array
var myArray = [ "rajbeer" , 34 ];
console.log(myArray);

//nest array (inside the array have another array)
var myArray = [ ["rajbeer" , 34] , ["john" , 34]];
console.log(myArray);

//access array data
var myArray = [ 40,60 , 34 ];
var myData = myArray[1];
console.log(myData);

//modify array
var ourArray=[40,30,10];
ourArray[1] = 100;
ourArray[1] = "hello";
console.log(ourArray);

//push array
var ourArray =[["raj" ,1  ] ,["hello" , 2]];
ourArray.push(["by" ,3]);
console.log(ourArray );

//pop()
var ourArray =[["hello" , 2],["by" ,3] ];
var removeFromArray=ourArray.pop();
console.log(ourArray );

//shift()  it remove the first function in the array
var ourArray =[ ["by"] ,["hello" , 2] , [56] ,["by" ,3] ];
var removeFromArray=ourArray.shift();
console.log(ourArray );

//unshift()array   add the function in the begging in the array
var ourArray=["rajbeer","a","b"];
ourArray.shift();  //ans is ["a","b"];
ourArray.unshift();// ans is["b"];

//reusable with function
function reusable(){
  console.log("hello");
}
reusable();

//arguments
function array(a,c){
console.log(a-c);
}
array(80,20);

//global vs local
var outWear="shop";  //global

function myWear(){
  var outWear="shopApple";
  return outWear;
}
  console.log(myWear());

//return value
var changed =0;
function change(num){
  return(num+5) /3;
}
changed=change(10);
console.log(changed);

//if statement
function trueOrFalse(rajbeer) {
  if (rajbeer) {
    return "hi";
  }
  return "by";
}
console.log(trueOrFalse (true));
function mySure(kaur) {
  if (kaur) {
    return "no";
  }
  return "sure";
}
console.log(mySure (true));

//equal operater
function testEqual(val)
{
  if (val = 10)
{
  return "Equal";
}
  return "Not Equal";
}

console.log(testEqual(15));
///===
function compareEqual(a ,b){
  if (a === b){
  return "true";
}
  return "false";
}

console.log(compareEqual (10 ,"10"));

//and  or

function test(val){
  if(val<=50 && val>=20){
    return "yes";
  }
  return "no";
}
console.log (test(70));

//else if
function sumTest(val){
  if (val<10){
    return "less";
  }
  else if (val > 5) {
    return "less 5";
  }
  else{
  return "greater";
  }
  }
console.log (sumTest(7));

//object
var firstName = {      //myname is object
  "name": "raj",   //name ia a property //raj is a value
  "age": 34,
  "friends" : ["everthing"]
  
};
firstName.name ="kaur";
console.log(firstName.name);

//use new property in a object 
firstName.class =12;

console.log(firstName.class);

//delete a property from obj

delete myName.age;
console.log(firstName.age);

//lookup obj
function phoneLookup (val) {
  var result = "";
  var lookup = {
  "alpha":"adams",
  "bravo":"boston",
};
result =  lookup[val];
return result;
}
console.log(phoneLookup("bravo"));

//while loop
var myArray =[];
var i=0;
while(i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

//for loop
//var i =0   (is a initalization)
// i<5  (condition) if the condition is fall after the loop then exprestion
//i++ (exprestion)

var myArray=[];
for( var i=1; i < 5;i++);{
myArray.push(i);
}
console.log(myArray);

//even no
var myArray=[];
for(var i=1;i<10;i+=2){
  myArray.push(i);
}
console.log(myArray);

//low no
var myArray=[];
for(var i=9;i>0;i-=2){
  myArray.push(i);
}
console.log(myArray);

//array lenth
var myArray =[];
var total=0;
for(var i=0;i<myArray.lenth;i++){
  total += myArray[i];
}
console.log(total);

//nesting for loops
function multiplyAll (arr){
  var sum=1;
  for (var i=0; i< arr.lenth;i++){
  for (var j=0; j < arr[i].lenth;j++){
    sum *=arr[1][j];
}
  }
return sum;
}
 var sum= multiplyAll ([[1,2],[3,4],[5,6,7]]);
console.log(sum);

//do while loop
var myArr=[];
var i=0;
while(i<5){                // do{  myArr.push(i);
                              //  i++;
  myArr.push(i);               //     }
                               // while(i<5);
i++;
}
console.log(i,myArr);

//random no
function randomNum(){
  return Math.random();
}
console.log(randomNum());

//if else condition
function checkList(a,b){
if(a===b){
  return true;    //(return a===b ? true:false;  or  return a===b;
}
else{
  return false;
}
}
console.log(checkList(2,2));
//multiple array

const s = [5,7,8];
//function multipleArr(){
  //s = [0] = 16;
 // s = [1] = 2;
 // s = [2] = 3;
//}
//multipleArr();
        //console.log(s);  
//new function
var myAge =30;
console.log(myAge);

//two variable
let yourAge=35;
let humanDogRatio=7;
let count=yourAge*humanDogRatio;
console.log(count);

//increment
let countNum =10;
countNum+=2;
countNum-=2;
console.log(countNum);
//bonus point
let bonusPoint=50;
bonusPoint+=100;
console.log(bonusPoint);
bonusPoint-=25;
console.log(bonusPoint);
bonusPoint+=70;
console.log(bonusPoint);
//incremenmt button// how the button cxan work
function increment(){
  console.log("button is clicked");
}
//invoke the function

function countDown(){
  console.log (42);
}
countDown();

//count with inner
let countEl= document.getElementById("count-el")
let countSum = 10;

function increment(){
  countSum+=12 ;
  countEl.innerText=countSum;
}
  console.log(countSum);
function save(){
  console.log(count);
}
//first string variable

let userName = "rajbeer";
let message = "hello"
let messageToUser="we have locked";
console.log(userName  + "," + message + "," + messageToUser);
//new
let name = "rajbir"
let greeting = "hello"
let myGreeting=name + " ." + greeting;
console.log(myGreeting);
//second challNGE
let welcomeEl=document.getElementById("welcome-el")
  let finame = "rajbeer";
let figreeting = "hello"
//welcomeEl.innerText = finame +  figreeting

console.log();

//use + or =
//increment project

/*let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count=0
 function increment(){
   count+=1
   countEl.inner.text =count
 }
function save(){
  let countstr=count+"-"
  saveEl.inner.Text+=countstr
}*/


//addponts( ) remove points()

let myPoints=0;
function add3Points(){
myPoints += 3
}
function removelPoints(){
  myPoints -= 1
}
console.log(myPoints);

//customer wanna purch something
let errorPara=document.getElementById("error")
function purchase(){
  console.log("button clicked")
  errorPara.textContent = "you are wrong"
}
//
function  add(){
 let result=num1+num2
 sumEl.textContent=sum+result

  
}
console.log(2+4)

//black jet
let firstCard=22
let secondCard=1
let card = firstCard + secondCard;
console.log(card)
if(card < 21){
 
  console.log("not")
}
else if (card === 21)
  {
 console.log ("you win")
  }
else if (card > 21)
  {
   console.log("draw")
  }
console.log(card);

//person age
let age=22
if(age > 27){
  console.log("you cannot")
}
else{
  console.log("welcome")
}
//birthday card
let startAge = 180
if(startAge < 100){
  console.log("not elegible")
}
else if (startAge === 100)
  {
   console.log ("here is your ")
  }
else{
  console.log("not elegible")
}

console.log(startAge)

//if else
let firstCards = 10
let secondPap = 7
let sums = firstCards + secondPap +14
let massage =""

if(sums <= 20){
  console.log("you want draw")
}
else if (sums === 21)
  {
   console.log ("wow" )
  }
else{
  console.log(" you arenot elegible")
}

console.log(sums);
//push
function cardes[]
let cardes =[2,3]
cardes push(6)
console.log(card)

