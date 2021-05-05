import CssProperties from './CssPropertiesI';

export default interface Product {
    uuid: string;
    price: number;
    imageSrc: string;
    cssProperties: CssProperties 
}