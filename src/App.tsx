import './App.css';
import {Header, SimpleList} from './components/';
import { useDispatch, useSelector} from 'react-redux';
import {INITIAL_STATE_TYPE} from '../src/redux/mainReducer/main.reducer';
import { Image } from '../src/components/Image';
import { ImageAndPrice } from '../src/components/ImageAndPrice';
import  Paypal  from '../src/components/paypal/Paypal';
import { ScrollableLayout } from '../src/components/ScrollableLayout';

const App = () => {
  const {products, choosenProducts} = useSelector((state: INITIAL_STATE_TYPE )  => state)
  return (
    <div style={{height:window.outerHeight,width:window.outerWidth, display:'flex', flexDirection:'row'}}>
      <div style={{display:'flex', flexDirection:'column', flex:0.7}}>
      <div style={{display:'flex',flex:0.15, width:'100%',height: '2vh', position:'fixed'}}>
        <Header  bgColor={'#e6e8e7'}></Header>
      </div>
       {/* <Paypal></Paypal>  */}
      <div style={{display:'flex',flex:0.4,alignItems:'center', justifyContent:'center'}}>
        <SimpleList childComp={<ImageAndPrice isBig={false}/> } pricesList={products}></SimpleList>
      </div>
      <div style={{display: 'flex', flex:0.35, justifyContent:'center', alignItems:'center'}}>
        <ImageAndPrice isBig={true} product={choosenProducts}/>
      </div> 
      <div style={{display:'flex', flex:0.15,marginTop: '15px',alignSelf: 'center', justifySelf: 'center', width:'200px', height:'50px', borderRadius:'15px', backgroundColor:'#ff99ff', color:'white', fontSize:' 22px', justifyContent: 'center', alignItems:'center'}}>
          Order Now 
      </div>
      </div>
      <div style={{display: 'flex', flex: 0.3}}>
      <ScrollableLayout>
        
      </ScrollableLayout>
      </div>
    </div>
  );
}

export default App;
