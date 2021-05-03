import MainActionTypes from './main.types';
import Small_Egg from '../../assets/images/egg1.png';
import Medium_Egg from '../../assets/images/egg2.png';
import Big_Egg from '../../assets/images/egg3.png';

interface CssProperties {
    width: number;
    height: number;
}

interface Product {
    uuid: string;
    price: number;
    imageSrc: string;
    cssProperties: CssProperties 
}

export interface INITIAL_STATE_TYPE {
    products: Product[];
    choosenProducts: Product;
}

export const INITIAL_STATE: INITIAL_STATE_TYPE = {
    products: [
        { uuid: 'install-uuid-egg1', price: 10, imageSrc: Small_Egg, cssProperties: {width: 70, height: 70}},
        { uuid: 'install-uuid-egg2', price: 20, imageSrc: Medium_Egg, cssProperties: {width: 100, height: 100}},
        { uuid: 'install-uuid-egg3', price: 50, imageSrc: Big_Egg, cssProperties: {width: 120, height: 120}},
    ],
    choosenProducts: { uuid: 'install-uuid-egg1', price: 10, imageSrc: Small_Egg, cssProperties: {width: 450, height: 450}}
};

const mainReducer: any = (state: INITIAL_STATE_TYPE = INITIAL_STATE, action : any) => {
    const { products, choosenProducts} = state;
    switch (action.type) {
        case MainActionTypes.CHANGE_CHOOSEN_EGG: 
        const product: Product | undefined = products.find((item: Product) => item.uuid === action.payload);
        return {
            ...state,
            choosenProducts: product ? {...product, cssProperties: {width: 450, height: 450}} : choosenProducts
        }
        default:
            return state;
    }
};

export default mainReducer;
