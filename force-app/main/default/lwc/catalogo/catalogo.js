import { LightningElement, track } from 'lwc';

export default class Catalogo extends LightningElement {
    @track total = 0; // Para rastrear el total de la compra

    connectedCallback() {
        this.loadTotalFromCart();
    }

    loadTotalFromCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.total = cart.reduce((acc, product) => acc + product.price, 0);
        // No es necesario llamar a updateTotalUI aquí si estás utilizando @track y binding en tu plantilla
    }

    handleBuyClick(event) {
        if (event.target.dataset.price) {
            const productInfo = {
                name: event.target.dataset.name,
                price: parseFloat(event.target.dataset.price),
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(productInfo);
            localStorage.setItem('cart', JSON.stringify(cart));

            this.total += productInfo.price;
            // La actualización del UI es manejada automáticamente por la reactividad de @track
        }
    }

    renderedCallback() {
        // Verifica si el manejador de eventos ya se ha añadido para evitar duplicados
        if (this.isEventListenersAdded) {
            return;
        }
        this.isEventListenersAdded = true;

        this.template.addEventListener('click', (event) => {
            if (event.target.className.includes('buy-btn')) {
                this.handleBuyClick(event);
            }
        });
    }
}
