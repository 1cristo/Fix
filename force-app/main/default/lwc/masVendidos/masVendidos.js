// productCard.js
import { LightningElement, track } from 'lwc';

export default class MasVendidos extends LightningElement {
    @track products = [
        {
            id: '1',
            name: 'Lámparas circulares',
            originalPrice: '$89.00',
            salePrice: '$62.30',
            discount: '30',
            imageUrl: 'url de la imagen 1 aquí',
            productUrl: 'url del producto 1 aquí'
        },
        {
            id: '1',
            name: 'Lámparas circulares',
            originalPrice: '$89.00',
            salePrice: '$62.30',
            discount: '30',
            imageUrl: 'url de la imagen 1 aquí',
            productUrl: 'url del producto 1 aquí'
        },
        {
            id: '1',
            name: 'Lámparas circulares',
            originalPrice: '$89.00',
            salePrice: '$62.30',
            discount: '30',
            imageUrl: 'url de la imagen 1 aquí',
            productUrl: 'url del producto 1 aquí'
        },
        {
            id: '1',
            name: 'Lámparas circulares',
            originalPrice: '$89.00',
            salePrice: '$62.30',
            discount: '30',
            imageUrl: 'url de la imagen 1 aquí',
            productUrl: 'url del producto 1 aquí'
        },
    ];
}
