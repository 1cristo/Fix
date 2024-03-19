import { LightningElement, track } from 'lwc';

export default class Images extends LightningElement {
    @track activeIndex = 0; // Inicializa el índice activo como 0

    connectedCallback() {
        // Configura un intervalo para cambiar el índice activo cada 2 segundos (2000 milisegundos)
        setInterval(() => {
            this.nextSlide();
        }, 2000);
    }

    nextSlide() {
        // Aumenta el índice activo para mostrar el siguiente slide
        this.activeIndex = (this.activeIndex + 1) % 5; // Asume que tienes 5 slides, ajusta este número según sea necesario
    }
}
