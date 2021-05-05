import './App.css';
import {Header, SimpleList} from './components/';
import { useDispatch, useSelector} from 'react-redux';
import {INITIAL_STATE_TYPE} from '../src/redux/mainReducer/main.reducer';
import { Image } from '../src/components/Image';
import { ImageAndPrice } from '../src/components/ImageAndPrice';
import StoriesPicturesComponent from "./components/StoriesPictures";

const App = () => {
  const {products, choosenProducts} = useSelector((state: INITIAL_STATE_TYPE )  => state)

  return (
      <div style={{display:'flex', flexDirection: 'column'}}>
          <div style={{display:'flex',flex:0.1, width:'100%'}}>
              <Header  bgColor={'#e6e8e7'}></Header>
          </div>
          <StoriesPicturesComponent />
          {/*<PayPalComponent></PayPalComponent>*/}
          <div style={{display:'flex',flex:0.3,alignItems:'center', justifyContent:'center'}}>
              <SimpleList childComp={<ImageAndPrice/> } pricesList={products}></SimpleList>
          </div>
          <div style={{display: 'flex', flex:0.4, justifyContent:'center', alignItems:'center'}}>
              <ImageAndPrice product={choosenProducts}/>
          </div>
      </div>

  )
}

export default App;


