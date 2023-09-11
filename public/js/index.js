const socket = io();
const productsList = document.getElementById("cart-container");

// Escucha el evento 'cart' desde el servidor
socket.on('cartRender', (dataCart) => {
  // Parsea los datos del carrito desde JSON
  const cartData = JSON.parse(dataCart);
  showCart(cartData)
})


const showCart = (products) => {
    productsList.innerHTML = "";
    products.forEach((product) => {
        const productElement = createProductElement(product);
        productsList.appendChild(productElement);
    });
}


const createProductElement = (product) => {
    const div = document.createElement("div");
    div.classList.add("cart");
    div.id = product.id; 
    div.innerHTML = `
        <h1>Nombre del producto: ${product.title}</h1>
        <p>Descripción: ${product.description}</p>
        <p>Categoría: ${product.category}</p>`;
        return div;
}