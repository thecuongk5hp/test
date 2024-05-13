"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class CartProduct extends Product {
    constructor(id, name, price, quantity) {
        super(id, name, price);
        this.quantity = quantity;
    }
    calculatePrice() {
        return this.price * this.quantity;
    }
    increaseQuantity() {
        this.quantity++;
    }
    decreaseQuantity() {
        if (this.quantity > 0) {
            this.quantity--;
        }
    }
}
class ShopProduct extends Product {
    constructor(id, name, price, stock) {
        super(id, name, price);
        this.stock = stock;
    }
}
class Cart {
    constructor() {
        this.items = [];
    }
    addItem(product, quantity) {
        const cartProduct = this.items.find((item) => item.id === product.id);
        if (cartProduct) {
            if (quantity + cartProduct.quantity <= product.stock) {
                cartProduct.quantity += quantity;
            }
        }
        else {
            if (quantity <= product.stock) {
                this.items.push(new CartProduct(product.id, product.name, product.price, quantity));
            }
        }
    }
    removeItem(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
    getTotal() {
        return this.items.reduce((total, item) => total + item.calculatePrice(), 0);
    }
}
let shopProduct1 = new ShopProduct(1, "bánh", 100, 10);
let shopProduct2 = new ShopProduct(2, "kẹo", 200, 20);
let cart = new Cart();
cart.addItem(shopProduct1, 5);
cart.addItem(shopProduct2, 3);
console.log("..... ", cart.getTotal());
