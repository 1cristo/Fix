import { LightningElement, track } from 'lwc';

export default class YoutubeVideoGallery extends LightningElement {
    @track videos = [
        {
            id: '1',
            title: 'Cómo usar el compresor de aire',
            url: 'https://www.youtube.com/embed/QhOurmtSXQc&t=7s' // Reemplaza VIDEO_ID con el ID real del video
        },
        {
            id: '2',
            title: 'Cómo Facturar',
            url: 'https://www.youtube.com/embed/EkxKc0729-Q' // Reemplaza VIDEO_ID con el ID real del video
        }
        // Puedes agregar más videos aquí
    ];
}
