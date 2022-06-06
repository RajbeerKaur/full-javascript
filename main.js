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