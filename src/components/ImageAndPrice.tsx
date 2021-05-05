import {Image} from './Image';
import {PriceLabel} from './PriceLabel';
import Product from '../types/ProductI';

export const ImageAndPrice = (props: Product | any) => {
   
     return (<div>
        <Image {...props}/>
        <PriceLabel {...props}/>
     </div> )
}
    