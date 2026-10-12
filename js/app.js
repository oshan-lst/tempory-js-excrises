fetch('https://fakestoreapi.com/products/1')
  .then(res => res.json())
  .then(data => {
    console.log(data);

    let tblItems = document.getElementById("tblItems");

    
    let tblBody = `
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price ($)</th>
          <th>Category</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${data.id}</td>
          <td>${data.title}</td>
          <td>${data.price}</td>
          <td>${data.category}</td>
          <td>${data.description}</td>
          <td><img src="${data.image}" width="50" alt="Product Image"></td>
        </tr>
      </tbody>
    `;

    tblItems.innerHTML = tblBody;
  })
  .catch(error => console.error('Error:', error));

  // localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");
// localStorage.setItem("city", "New York");

// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");
// let city = localStorage.getItem("city");
// console.log(name, age, city);

let customer = [{
    name : "Amal",
    age : 25,
    isMarried: true,

},
{
    name : "Amali",
    age : 21,
    isMarried: false,
},
{
    name : "malith",
    age : 30,
    isMarried: true,
}]

//localStorage.clear();
let stringCustomer = JSON.stringify(customer);
localStorage.setItem("customer",stringCustomer);

let getcustomer = localStorage.getItem("customer");
let parsedCustomer = JSON.parse(getcustomer);
console.log(parsedCustomer);