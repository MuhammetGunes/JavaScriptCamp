// function addToCart(productName) {
//     console.log("Sepete eklendi : " + productName)
// }

// addToCart("Tencere");

// function addToCart2(productName="Elma",quantity) {
//     console.log("Sepete eklendi : " + productName + " Adet : " + quantity)
// }

// addToCart2(10);
// addToCart2("Armut",10)
// addToCart2(undefined,10)

// let sayHello = ()=>{
//     console.log("Merhaba!")
// }
// sayHello()

// let sayHello2 = function () {
//     console.log("Merhaba2!")
// }
// sayHello2()

// let product1 = {productName:"Elma", quantity:5, price:15}

// function addToCart3(product) {
//     console.log("Ürün : " + product.productName + " Adet : " + product.quantity)
// }
// addToCart3(product1)

let product2 = {productName:"Elma", quantity:5, price:15}
let product3 = {productName:"Elma", quantity:5, price:15}
product2 = product3
product2.productName="Karpuz"
console.log(product3)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi1 = 30
console.log(sayi2)

function addToCart4(x) {
    console.log(products) //console.log(x) aynı yazar
}

let products = [
    {productName:"Elma", quantity:5, price:20},
    {productName:"Armut", quantity:10, price:30},
    {productName:"Karpuz", quantity:15, price:40}
]

addToCart4(products)

function add(...numbers) { //rest // rest ens onda olur(bisey,...numbers)
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total+=numbers[i]
    }
    console.log(total)
}

add(20,30)
add(20,30,40)
add(20,30,40,50)

console.log(Math.max(45,86523,5248))
let nums = [45,86523,5248]
console.log(Math.max(...nums))


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"40M"},
    {name:"Karadeniz",population:"30M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Samsun","Rize"]
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(marmara)
console.log(karadeniz)
//console.log(icAnadoluSehirleri[1])
console.log(marmaraSehirleri)

let newProductName, newQuantity, newPrice
({productName:newProductName, quantity:newQuantity,price:newPrice} = {productName:"Elma", quantity:5, price:20})
console.log(newProductName)