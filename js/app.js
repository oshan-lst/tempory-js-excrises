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
    {name:"bun", inStock:"true",price:"100"},
    {name:"milk", inStock:"true",price:"200"},
    {name:"egg", inStock:"false",price:"300"},
    {name:"bread", inStock:"true",price:"400"},
    {name:"butter", inStock:"false",price:"500"},

];

console.log(ProductList);

// let inStockProducts = ProductList.filter(
//     function(product){
//         return product.inStock == "true";
//     }
// );
// console.log(inStockProducts);

//3rd step

let inStockProducts = ProductList.filter(product => product.inStock === "true");

console.log(inStockProducts);












