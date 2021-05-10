import './App.css';
import {Header, SimpleList} from './components/';
import { useDispatch, useSelector} from 'react-redux';
import {INITIAL_STATE_TYPE} from '../src/redux/mainReducer/main.reducer';
import { Image } from '../src/components/Image';
import { ImageAndPrice } from '../src/components/ImageAndPrice';
import  Paypal  from '../src/components/paypal/Paypal';

const App = () => {
  const {products, choosenProducts} = useSelector((state: INITIAL_STATE_TYPE )  => state)
  return (
    <div style={{display:'flex', flexDirection: 'column'}}>
      <div style={{display:'flex',flex:0.1, width:'100%'}}>
        <Header  bgColor={'#e6e8e7'}></Header>
      </div>
       {/* <Paypal></Paypal>  */}
      <div style={{display:'flex',flex:0.3,alignItems:'center', justifyContent:'center'}}>
        <SimpleList childComp={<ImageAndPrice isBig={false}/> } pricesList={products}></SimpleList>
      </div>
      <div style={{display: 'flex', flex:0.3, justifyContent:'center', alignItems:'center'}}>
        <ImageAndPrice isBig={true} product={choosenProducts}/>
      </div> 
      <div style={{marginTop: '15px',alignSelf: 'center', justifySelf: 'center', width:'200px', height:'50px', borderRadius:'15px', backgroundColor:'#ff99ff', color:'white', fontSize:' 22px', display:'flex', justifyContent: 'center', alignItems:'center'}}>
          Order Now 
      </div>
    </div>
  );
}

export default App;
