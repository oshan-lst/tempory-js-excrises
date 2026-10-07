console.log("Hello JS");


//let, var , const

// {
//     var name = "John";
//     let age = 30;

//     console.log(age);

// }

// log
// console.log(age);

//const

// let age = 30;
// console.log(age);

// age = 25;
// console.log(age);

// const number = 1;
// console.log(number);

// number = 2;
// console.log(number);

//arrys - const

// let customerList = ["Samn","Nimal","Kamal"];
// console.log(customerList);

// customerList = "Kumara";
// console.log(customerList);

const customerList = ["Saman","Nimal","Kamal"];
console.log(customerList);

customerList.push("Kumara");
 console.log(customerList);
 
//push
const number = [];

number.push(1);
number.push(2);
number.push(3);
number.push(4);
number.push(5);
console.log(number);
number.reverse();
console.log(number);

//filter

const ProductList = [
    {name:"bun", inStock:true,price:"100"},
    {name:"milk", inStock:true,price:"200"},
    {name:"egg", inStock:false,price:"300"},
    {name:"bread", inStock:true,price:"400"},
    {name:"butter", inStock:false,price:"500"},

];

console.log(ProductList);

// let inStockProducts = ProductList.filter(
//     function(product){
//         return product.inStock == true;
//     }
// );
// console.log(inStockProducts);

//3rd step

let inStockProducts = ProductList.filter(product => product.inStock == true);

console.log(inStockProducts);

//function add 

// - 1 method

function addNumber(num1, num2){
    return num1 + num2;
}
console.log(addNumber(5,10));


// - 2 method
let getSum = function(num1 , num2){
    return num1 + num2;
}
console.log(getSum(5,10));

// -3 mothod arrow function

let getTotal = (num1,num2) => {
    return num1 + num2;
}
console.log(getTotal(5,10));

// -4 method - anonymous arrow function
(num1,num2) => {
    return num1 + num2;
}

let txtValue = txtValue =>{
    return txtValue;
}

console.log(txtValue("Hello word"));

//arrow function with single parmeter - short hand
let smaple = txtValue1 => txtValue1;
console.log(smaple("Hello word 2 "));

//sorting array of object

const leterList = ["D","A","C","B","E","Z","L","I","O"];

console.log(leterList);

const sortArray = leterList.sort();
console.log(sortArray);

//map
const salaryList = [5000,6000,7000,8000,9000];
console.log(salaryList);

// let doubleSalary = salaryList.map(salary => salary *2);
// console.log(doubleSalary);

console.log(salaryList.map(salary => salary * 2));


// find -method

const studentList = [
    {name: "Saman", age: 20, gender: "male"},
    {name: "Nimal", age: 25, gender: "male"},
    {name: "Kamal", age: 30, gender: "male"},
    {name: "Sunil", age: 35, gender: "male"},
    {name: "Kumara", age: 40, gender: "male"},
]

let foundStudent = studentList.find(student => student.name === "Kamal");
console.log(foundStudent);



















