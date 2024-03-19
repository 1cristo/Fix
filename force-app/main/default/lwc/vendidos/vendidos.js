import { LightningElement } from 'lwc';

export default class Vendidos extends LightningElement {

    // Se ejecuta después de que el componente se ha insertado en el DOM
    renderedCallback() {
        this.addEventListeners();
    }

    // Agrega los event listeners a los productos
    addEventListeners() {
        const products = this.template.querySelectorAll('.product');
    
        products.forEach(product => {
            product.addEventListener('mouseenter', () => {
                // Lógica para cuando el cursor entra en el producto
                product.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            });
    
            product.addEventListener('mouseleave', () => {
                // Lógica para cuando el cursor sale del producto
                product.style.boxShadow = 'none';
            });
        });
    }
}
