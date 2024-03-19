import { LightningElement, track } from 'lwc';

export default class Carrito extends LightningElement {
    @track cart = [];
    @track total = 0;

    connectedCallback() {
        this.loadCart();
    }

    loadCart() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.total = this.cart.reduce((acc, product) => acc + product.price, 0);
    }
}
