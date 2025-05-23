const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 }
];

const shoppingCart = {
    items: [],
    coupon: null,

    // Add a product to the cart
    addToCart: function(productId, quantity) {
        const product = products.find(p => p.id === productId);
        if (!product) {
            console.log("Product not found.");
            return;
        }

        const existingItem = this.items.find(item => item.product.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
        console.log(`${product.name} added to cart (x${quantity}).`);
    },

    // View current items in cart
    viewCart: function() {
        console.log("Cart Contents:");
        if (this.items.length === 0) {
            console.log("Cart is empty.");
            return;
        }
        this.items.forEach(item => {
            console.log(`${item.product.name} - Quantity: ${item.quantity} - Price: $${item.product.price}`);
        });
    },

    // Apply a discount coupon
    applyCoupon: function(couponCode) {
        if (this.coupon) {
            console.log("A coupon has already been applied.");
            return;
        }
        if (couponCode === "DISCOUNT10") {
            this.coupon = "DISCOUNT10";
            console.log("Coupon applied: DISCOUNT10");
        } else {
            console.log("Invalid coupon code.");
        }
    },

    // Calculate total amount payable
    calculateTotalAmount: function() {
        let totalAmount = 0;
        this.items.forEach(item => {
            totalAmount += item.product.price * item.quantity;
        });

        if (this.coupon === "DISCOUNT10") {
            totalAmount *= 0.9; // 10% off
            console.log("Coupon Applied: 10% discount");
        }

        console.log(`Total payable amount: $${totalAmount.toFixed(2)}`);
    }
};

// Example usage:
shoppingCart.addToCart(1, 2);               // Adds 2 units of Product 1
shoppingCart.addToCart(2, 1);               // Adds 1 unit of Product 2
shoppingCart.viewCart();                    // Displays current cart
shoppingCart.applyCoupon("DISCOUNT10");     // Applies 10% discount
shoppingCart.calculateTotalAmount();        // Shows final total

module.exports = shoppingCart;
