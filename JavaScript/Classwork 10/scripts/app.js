async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

async function displayProducts(products) {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';

    for (const product of products) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.id = `product-${product.product_id}`;
        
        // Fetch product image dynamically
        const imageUrl = await getProductImageUrl(product.image);
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = product.name;

        // Create inner HTML for product details
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price}</p>
            <button class="buy-btn">Buy</button>
        `;

        // Append image and details
        productDiv.prepend(img);

        // Add event listener for selecting the product
        productDiv.addEventListener('click', () => selectProduct(productDiv));

        // Add event listener for the Buy button
        const buyButton = productDiv.querySelector('.buy-btn');
        buyButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent triggering the selectProduct event
            addToCart(product);
        });

        productsContainer.appendChild(productDiv);
    }
}

async function getProductImageUrl(imageName) {
    const formats = ['jpg', 'jpeg', 'png', 'gif'];
    for (let format of formats) {
        const imageUrl = `images/${imageName}.${format}`;
        const exists = await checkImageExists(imageUrl);
        if (exists) {
            
            return imageUrl;
        }
    }
    return 'images/default.jpg'; // Fallback image
}

async function checkImageExists(imageUrl) {
    try {
        const response = await fetch(imageUrl, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        return false;
    }
}

// Track selected product
let selectedProduct = null;

function selectProduct(productDiv) {
    // Deselect the previously selected product if any
    if (selectedProduct) {
        selectedProduct.classList.remove('selected');
    }

    // Mark the new product as selected
    selectedProduct = productDiv;
    productDiv.classList.add('selected');
}

// Function to simulate adding the product to the cart
function addToCart(product) {
    console.log(`Added ${product.name} to the cart!`);
    // Here you can add further functionality like updating a cart UI or sending the data to a backend.
}

document.addEventListener('DOMContentLoaded', fetchProducts);
