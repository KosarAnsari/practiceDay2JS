// Array methods
let num = [67,53,98,42,1,4,3];
num.push(10);

let colors = ["red","green","blue"];
let new_colors=colors.pop();

let animals =["dog","cat"];
animals.unshift("elephant");

num.unshift(2,5,6);
let new_num=num.shift();

const people=["Alice","Bob","Charlie"];
people.shift();
people.shift();

let arr =[];
arr.push("task1","task2","task3");
arr.shift();

let arr2 =[];
arr2.push("item1","item2","item3");
arr2.pop();

num.forEach((val) => {
  console.log(val);
});

let double = num.map((val1) => {
     return val1*2;
});
console.log(double);

let even = num.filter((val2) =>{
    return val2%2 ==0;
});
console.log(even);

let sum = num.reduce((prev , curr ) => {
    return prev + curr ;
});
console.log(sum);

let items =["apple","Banana","Orange","Strawberries"];
items.forEach((fruit) => {
   console.log(fruit);
});

let age = num.some((a) => {
    return a > 18;
})
console.log(age);

let even2 = num.find((ev) => {
    return ev%2 ==0;
})
console.log(even2);

let users = [
    {id : 1, name : "Ali"},
    {id : 2, name : "Sarah"},
    {id : 3, name : "Rahul"}
    ];
let result = users.find((user) =>{
  return user.name =="Sarah"
});    
console.log(result);

const new_numbers=[9,0,8,3,-4,7,-3,-6];
let negative=new_numbers.find((neg) => {
    return neg < 0;
    
});
console.log(negative);

let letters = ["a","b","c"];
letters.map((letter) => {
    console.log(letter.toUpperCase());
});

let greater = [3,6,9,12];
let more =greater.filter((great) => {
   return great > 6;
});
console.log(more);

let f = [10,15,20,25];
let max = f.find((value) =>{
   return value > 18;
});
console.log(max);

let pets = ["cat","dog","elephant"];
let anm = pets.find((pet) => {
    return pet.startsWith("d");
});
console.log(anm);

// functions
function hello(){
    console.log("Hello World!");
}
hello();

function user(){
    let name = prompt("enter your name");
    console.log("Hello",name);
};
user();

function num_sum(){
    let a = 2;
    let b = 6;
    let c = a+b;
    console.log(c);
}
num_sum();

function num_type(){
    let num1 = prompt("enter the number");
    if(num1 % 2 == 0){
        console.log("num is even");
    }else{
        console.log("num is odd");
    }

};
num_type();

function fact(){
    let n =prompt("enter the number");
    let result = 1;
    for(let i = 1; i <= n; i++){
     result = result*i;
     console.log(result);
    }
};
fact();

function rev_str(){
    let str1 = "abc";
    let new_str = str1.split("").reverse().join("");
    console.log(new_str);
}
rev_str();

function palindrome(){
    let str = 1223;
    let pal = str.toString().split("").reverse().join("");
    console.log(pal);
}
palindrome();

function maximum(){
    let one_num = 23;
    let sec_num = 45;
    if(one_num > sec_num){
        console.log("first number is greater");
    }else{
        console.log("second number is greater");
    }
};
maximum();

/*let count = 0;
function countvowels(str){
    for(char of str){
        if(char ==="a" || char ==="e" || char ==="i" || char==="o" || char==="u"){
        count++;
        console.log(count);
        }
    }
}
countvowels("kosar");

let arr = [1,2,3,4,5];
let sum =0;
function sum_arr(){
    for(i of arr){
       sum = sum+i;
       
    }
}
sum_arr();

function power(){
    let base =prompt("enter any number");
    let exponent = prompt("enter the power");
    let result = base ** exponent;
    console.log(result);
}
power();

function fib_series(n){
    let a = 0, b = 1;
    console.log("fibonacci Series");
    for(let i = 0; i < n; i++){
        console.log(a);
        let next = a+b;
        a = b;
        b = next;
        
    }
}
fib_series(10);

let num_arr = [2,2,4,5,6,78,87,78,32,23,9];
let new_result = num_arr.filter((dup_val , ind , self ) => {
    return self.indexOf(dup_val) !== ind;
}) 
console.log(num_arr);
console.log(new_result);

function capital_arr(strr){
    let result2 = strr[0].toUpperCase();
    for (let i=1; i<strr.length; i++){
        if(strr[i-1] === " "){
            result2 += strr[i].toUpperCase();
           

        }else{
            result2 += strr[i];
            
        }
    }

console.log(result2);
}

capital_arr("welcome to javascript");*/






