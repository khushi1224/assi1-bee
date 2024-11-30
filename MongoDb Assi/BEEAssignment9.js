const express = require('express');
const app = express();
const port = 8000;


app.use(express.static('public'));


const products = [
    { name: 'Product 1', description: 'Description for Product 1', image: '/images/product1.jpg' },
    { name: 'Product 2', description: 'Description for Product 2', image: '/images/product2.jpg' },
    { name: 'Product 3', description: 'Description for Product 3', image: '/images/product3.jpg' }
];


app.get('/products', (req, res) => {
    let productHtml = `
        <html>
        <head>
            <title>Product Catalog</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; }
                .product { display: inline-block; margin: 20px; border: 1px solid #ddd; padding: 10px; border-radius: 8px; width: 200px; }
                .product img { width: 100%; height: auto; border-radius: 4px; }
                .product h2 { font-size: 1.5em; margin: 10px 0; }
                .product p { color: #555; }
            </style>
        </head>
        <body>
            <h1>Product Catalog</h1>
            <div class="catalog">
    `;

    products.forEach(product => {
        productHtml += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
            </div>
        `;
    });

    productHtml += `
            </div>
        </body>
        </html>
    `;

    res.send(productHtml);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
