const doc = document;
//const print = console.log;
const productsList = [
    { id: 1, name: "T-Shirt", price: 20, quantity: 50, image: "images/tshirt.jpg", description: "Comfortable cotton T-shirt." },
    { id: 2, name: "Jeans", price: 50, quantity: 40, image: "images/jeans.jpg", description: "Stylish slim-fit jeans." },
    { id: 3, name: "Sneakers", price: 75, quantity: 30, image: "images/sneakers.jpg", description: "Durable and comfortable sneakers." },
    { id: 4, name: "Jacket", price: 100, quantity: 20, image: "images/jacket.jpg", description: "Warm and cozy jacket." },
    { id: 5, name: "Backpack", price: 35, quantity: 25, image: "images/backpack.jpg", description: "Spacious and durable backpack." },
    { id: 6, name: "Cap", price: 15, quantity: 60, image: "images/cap.jpg", description: "Trendy cotton cap." },
    { id: 7, name: "Sunglasses", price: 25, quantity: 35, image: "images/sunglasses.jpg", description: "UV-protected stylish sunglasses." },
    { id: 8, name: "Watch", price: 120, quantity: 15, image: "images/watch.jpg", description: "Elegant analog watch." },
    { id: 9, name: "Sweater", price: 45, quantity: 30, image: "images/sweater.jpg", description: "Soft and warm sweater." },
    { id: 10, name: "Scarf", price: 20, quantity: 50, image: "images/scarf.jpg", description: "Lightweight and fashionable scarf." },
    { id: 11, name: "Gloves", price: 25, quantity: 30, image: "images/gloves.jpg", description: "Warm woolen gloves." },
    { id: 12, name: "Belt", price: 18, quantity: 40, image: "images/belt.jpg", description: "Classic leather belt." },
    { id: 13, name: "Socks", price: 8, quantity: 100, image: "images/socks.jpg", description: "Comfortable cotton socks." },
    { id: 14, name: "Shoes", price: 90, quantity: 20, image: "images/shoes.jpg", description: "High-quality leather shoes." },
    { id: 15, name: "Hat", price: 22, quantity: 45, image: "images/hat.jpg", description: "Stylish summer hat." },
    { id: 16, name: "Shorts", price: 30, quantity: 35, image: "images/shorts.jpg", description: "Casual summer shorts." },
    { id: 17, name: "Hoodie", price: 60, quantity: 25, image: "images/hoodie.jpg", description: "Cozy fleece hoodie." },
    { id: 18, name: "Dress", price: 70, quantity: 15, image: "images/dress.jpg", description: "Elegant evening dress." },
    { id: 19, name: "Blazer", price: 150, quantity: 10, image: "images/blazer.jpg", description: "Smart tailored blazer." },
    { id: 20, name: "Skirt", price: 40, quantity: 20, image: "images/skirt.jpg", description: "Chic midi skirt." },
    { id: 21, name: "Leggings", price: 25, quantity: 50, image: "images/leggings.jpg", description: "Stretchable and comfy leggings." },
    { id: 22, name: "Tank Top", price: 15, quantity: 60, image: "images/tanktop.jpg", description: "Breathable cotton tank top." },
    { id: 23, name: "Sportswear", price: 80, quantity: 18, image: "images/sportswear.jpg", description: "Premium quality sportswear." },
    { id: 24, name: "Pajamas", price: 35, quantity: 40, image: "images/pajamas.jpg", description: "Comfortable sleepwear." },
    { id: 25, name: "Slippers", price: 20, quantity: 55, image: "images/slippers.jpg", description: "Soft and cozy slippers." },
    { id: 26, name: "Beanie", price: 12, quantity: 50, image: "images/beanie.jpg", description: "Warm knitted beanie." },
    { id: 27, name: "Wallet", price: 45, quantity: 30, image: "images/wallet.jpg", description: "Genuine leather wallet." },
    { id: 28, name: "Bracelet", price: 25, quantity: 35, image: "images/bracelet.jpg", description: "Stylish charm bracelet." },
    { id: 29, name: "Earrings", price: 50, quantity: 40, image: "images/earrings.jpg", description: "Elegant gemstone earrings." },
    { id: 30, name: "Necklace", price: 80, quantity: 25, image: "images/necklace.jpg", description: "Beautiful pendant necklace." },
    { id: 30, name: "Necklace", price: 80, quantity: 25, image: "images/necklace.jpg", description: "Beautiful pendant necklace." },
    { id: 30, name: "Necklace", price: 80, quantity: 25, image: "images/necklace.jpg", description: "Beautiful pendant necklace." }
  ];
  function display(){
    let products = doc.getElementById('shop');
    products.innerHTML='';
    productsList.forEach(element => {
       console.log("Shop Open")
        products.innerHTML += `  <div class="col-3 card my-card" style="width: 18rem;">
            <img src="images/tshirt.jpg" class="card-img-top mt-2 card-image"" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              
              
               <div class="d-flex justify-content-between align-items-center card_button dd">
                        <span class=" fw-bold">$ ${element.price}</span>
                        <button onclick="AddToCart(${element.id}, '${element.name}', ${element.price})"  class="btn my-button">Add to Cart</button>
                    </div>
            </div>
          </div>`
       
    });
    console.log("Product loaded");
  }
display();
var subtotal = 0;
var cartItems =[];


function AddToCart(id, name, price){
    
    console.log(name, "Is added");
    subtotal += price;
    cartAmount= parseInt(doc.getElementById('cartAmount').innerText);
    cartAmount += 1;
    doc.getElementById('cartAmount').innerText = cartAmount;

    newItem={
        id : id,
        name : name,
        price : price,
        count : 1
    };

    // Check if newItem already exists in cartItems based on its properties
    //The some() method checks if at least one element in the array matches the condition.
    let exists = cartItems.some(item => item.id === newItem.id && item.name === newItem.name);

    if (!exists) {
        console.log(`${id} is not in cartItems.`);
        cartItems.push(newItem); // Add the new item to the list
    } else {
        for(let item of cartItems){
            if(item.id === id ){
                item.count += 1;
            }
        }
    }

   
    doc.getElementById("subtotal").innerText = `$ ${subtotal}`;
    

}


function RemoveToCart(id,price){
    
   
    subtotal -= price;
    cartAmount= parseInt(doc.getElementById('cartAmount').innerText);
    cartAmount -= 1;
    doc.getElementById('cartAmount').innerText = cartAmount;

    // Check if newItem already exists in cartItems based on its properties
    //The some() method checks if at least one element in the array matches the condition.
    let exists = cartItems.some(item => item.id === newItem.id && item.name === newItem.name);

   
    for(let item of cartItems){
        if(item.id === id ){
            item.count -= 1;
        }
        
    }
    doc.getElementById("subtotal").innerText = `$ ${subtotal}`;
}

function Remove(id){

    let index = cartItems.findIndex(item => item.id === id);
    let uPrice = cartItems[index].price;
    let rTotal = uPrice * cartItems[index].count;
    subtotal -= rTotal;
    cartAmount= parseInt(doc.getElementById('cartAmount').innerText);
    cartAmount -= cartItems[index].count;
    doc.getElementById('cartAmount').innerText = cartAmount;

    //console.log(cartItems.index.price );
    // Remove the item if it exists


    if (index !== -1) {
        cartItems.splice(index, 1);
    }
    myCart();
}

function myCart(){
    console.log("My cart Triggered")
    var itemsList = doc.getElementById('itemsList') ;
    itemsList.innerHTML = '';
 cartItems.forEach(item => {
        itemsList.innerHTML += `  <div  class="cart-item d-flex justify-content-between align-items-center mb-3">
            <img src="images/tshirt.jpg" alt="Product" class="img-fluid" style="width: 50px; height: 50px;">
            <div class="cart-details">
                <p class="mb-0">${item.name}</p>
                <small>$ ${item.price}</small>
            </div>
            <div class="quantity-controls d-flex align-items-center">
                <button onclick="minusButton(${item.id}, ${item.price})" class="btn btn-outline-secondary btn-sm">-</button>
                <span class="mx-2" id="${item.id}">${item.count}</span>
                <button onclick="plusButton(${item.id},'${item.name}', ${item.price})" class="btn btn-outline-secondary btn-sm">+</button>
            </div>
            <a href="#" onclick="Remove(${item.id})" class="text-danger">Remove</a>
        </div>   `
    } );
    doc.getElementById("subtotal").innerText = `$ ${subtotal}`;
}

function plusButton(id, name, price){
    let product = doc.getElementById(id).textContent;
    let value =parseInt(product) ;
    value += 1;
    doc.getElementById(id).textContent = value;
    AddToCart(id, name, price);

}

function minusButton(id, price){
    print("plus triggered")
    let product = doc.getElementById(id).textContent;
    let value =parseInt(product) ;
    if (value > 1){
        value -= 1;
        doc.getElementById(id).textContent = value;
        RemoveToCart(id,price);
        
    }
}

function checkout() {
       // Open a new window centered on the screen
       const windowWidth = 400;
       const windowHeight = 300;

       const screenWidth = window.screen.width;
       const screenHeight = window.screen.height;

       const windowLeft = (screenWidth / 2) - (windowWidth / 2);
       const windowTop = (screenHeight / 2) - (windowHeight / 2);

       // Open a new window with the specified dimensions and position
       let newWindow = window.open(
           "",
           "_blank",
           `width=${windowWidth},height=${windowHeight},top=${windowTop},left=${windowLeft}`
       );

       // Add content to the new window
       newWindow.document.write(`
           <h1>Thank You for Your Purchase!</h1>
           <p>Your order has been placed successfully.</p>
           <p>You will be redirected to the home page shortly...</p>
           <style>
               body {
                   font-family: Arial, sans-serif;
                   text-align: center;
                   margin-top: 50px;
               }
               h1 {
                   color: green;
               }
           </style>
       `);

       // Automatically close the new window and redirect to the homepage after 5 seconds
       setTimeout(() => {
           newWindow.close();
           window.location.href = "index.html"; // Replace with your home page URL
       }, 5000);
       itemsList = [];
       doc.getElementById('cartAmount').innerText = 0;
    }

