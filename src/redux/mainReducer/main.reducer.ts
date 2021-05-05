import MainActionTypes from './main.types';
import Small_Egg from '../../assets/images/egg1.png';
import Medium_Egg from '../../assets/images/egg2.png';
import Big_Egg from '../../assets/images/egg3.png';
import Product from '../../types/ProductI';

export interface INITIAL_STATE_TYPE {
    products: Product[];
    choosenProducts: Product;
	stories: any;
	showStories: boolean;
}

export const INITIAL_STATE: INITIAL_STATE_TYPE = {
    products: [
        { uuid: 'install-uuid-egg1', price: 10, imageSrc: Small_Egg, cssProperties: {width: 70, height: 70}},
        { uuid: 'install-uuid-egg2', price: 20, imageSrc: Medium_Egg, cssProperties: {width: 100, height: 100}},
        { uuid: 'install-uuid-egg3', price: 50, imageSrc: Big_Egg, cssProperties: {width: 120, height: 120}},
    ],
    choosenProducts: { uuid: 'install-uuid-egg1', price: 10, imageSrc: Small_Egg, cssProperties: {width: 450, height: 450}},
	stories : [{key: 1, src: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350", show: 0},
        {key: 2, src: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", show: 1},
        {key: 3, src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", show: 0}],
    showStories: false
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
		case MainActionTypes.TOGGLE_SHOWN_STORIES:
            return {
                ...state,
                showStories: !state.showStories
            };
        default:
            return state;
    }
};

export default mainReducer;
