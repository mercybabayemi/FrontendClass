const PRODUCT_URL = "https://fakestoreapi.com/products";

const productsContainer = document.querySelector(".products");
// const productWrapper = document.getElementsByClassName("products")
// console.log(PRODUCT_URL)
// console.log(productWrapper)
// console.log(productsContainer)

// const getProducts = (url) => {
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => {console.log(data)})
//         .catch((error) => console.log(error));
// };

const getProducts = async (url) => {
    try{
      const response = await fetch(url);
      const data = await response.json();
      displayProducts(data);
    } catch (error){
        console.log("" + error)
    }
}

getProducts(PRODUCT_URL)

function displayProducts(products){
    products.forEach(product => {
        const {title, price, description, image} = product;
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        createInnerHTML(productDiv, image, title, price, description);
        productsContainer.appendChild(productDiv);
    })
}

function createInnerHTML(productDiv, image, title, price, description){
    productDiv.innerHTML = `
            <img src="${image}" alt="">
            <div>
                <p>${title}</p>
                <p>price: &#8358 ${price}</p>
            </div>
            <p>${description}</p>
        `;
}