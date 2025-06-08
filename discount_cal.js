function calculateDiscountedPrice(products) {
    return products.map(product => {
        const discount = product.isOnSale ? product.price * 0.2 : 0;
        const discountedPrice = product.price - discount;
        return {
            name: product.name,
            originalPrice: product.price,
            discountedPrice: discountedPrice
        };
    });
}


const items = [
    { name: "Laptop", price: 50000, isOnSale: true },
    { name: "Mouse", price: 1500, isOnSale: false }
];

console.log(calculateDiscountedPrice(items));
