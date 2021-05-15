import './App.css';
import {Header, SimpleList} from './components/';
import { useDispatch, useSelector} from 'react-redux';
import {INITIAL_STATE_TYPE} from '../src/redux/mainReducer/main.reducer';
import { Image } from '../src/components/Image';
import { ImageAndPrice } from '../src/components/ImageAndPrice';
import StoriesPicturesComponent from "./components/StoriesPictures";
import StoriesComponent from "./components/Stories";

const App = () => {
  const {products, choosenProducts, showStories} = useSelector((state: INITIAL_STATE_TYPE )  => state);
  const dispatch = useDispatch();

  return (
      <div style={{display:'flex', flexDirection: 'column'}}>
          <div style={{display:'flex',flex:0.1, width:'100%'}}>
              <Header  bgColor={'#e6e8e7'}></Header>
          </div>
          <StoriesPicturesComponent />
          {/*<PayPalComponent></PayPalComponent>*/}
          <div style={{display:'flex',flex:0.3,alignItems:'center', justifyContent:'center'}}>
              {
                showStories ?  
                <div className="row align-items-center" style={{}}>
                    <div className="row">
                        <h2 className="col"  onClick={() => dispatch({type: 'TOGGLE_SHOWN_STORIES'})}>X</h2>        
                        <div className="col">
                            <StoriesComponent />
                        </div>
                    </div>
                </div> :
              <SimpleList childComp={<ImageAndPrice/> } pricesList={products}></SimpleList>
                
              }
            
          </div>
          <div style={{display: 'flex', flex:0.4, justifyContent:'center', alignItems:'center'}}>
              <ImageAndPrice product={choosenProducts}/>
          </div>
      </div>

  )
}

export default App;


