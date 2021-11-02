// class Customer{
//     constructor (id,Number){
//         this.id = id
//         this.Number = Number
//     }
// }

// class IndCustomer extends Customer{
//     constructor(firstName,id,Number){
//         super(id.Number)
//         this.firstName = firstName
//     }
// }

// let customer = new Customer()
// customer.id = 10
// customer.Number = "12345"
// //prototyping on instance
// customer.name = "Mustafa"
// //prototyping on Class
// Customer.bisey = "Bişey"
// console.log(customer.id)
// console.log(customer.Number)
// console.log(customer.name)
// console.log(Customer.bisey)


let products = [
    {id:1, name:"Laptop1", Price:10000},
    {id:2, name:"Laptop2", Price:11000},
    {id:3, name:"Laptop3", Price:12000},
    {id:4, name:"Laptop4", Price:13000},
    {id:5, name:"Laptop5", Price:14000}
]

console.log("<ul>")
products.map(product=>console.log(`<li>{$product.name}</li>`))
console.log("</ul>")








