import './App.css';
import {Header, InfiniteList, InfiniteScrollC} from './components/';
import {useDispatch, useSelector} from 'react-redux';
import {INITIAL_STATE_TYPE} from '../src/redux/mainReducer/main.reducer';
import StoriesPicturesComponent from "./components/StoriesPictures";
import StoriesComponent from "./components/Stories";
import Paypal from '../src/components/paypal/Paypal';
import {ScrollableLayout} from '../src/components/ScrollableLayout';
import ChooseEgg from './components/compositeComponents/ChooseEgg';

const App = () => {
    const {products, choosenProducts, showStories} = useSelector((state: INITIAL_STATE_TYPE) => state);
    const dispatch = useDispatch();

    return (
        <div style={{height: window.outerHeight, width: window.outerWidth, display: 'flex',flex:1, flexDirection: 'row'}}>
          <div style={{display: 'flex',flex:0.7, flexDirection: 'column'}}>
           <div style={{display: 'flex', flex: 0.3, width: '100%', height: '4vh', position: 'fixed', flexDirection:'column'}}>
                    <Header bgColor={'blue'}></Header>         
          </div>
          <StoriesPicturesComponent/>
            <div style={{display: 'flex', flexDirection: 'column', flex: 0.5}}>    
                <div style={{display: 'flex', flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
                    {
                        showStories ?
                            <div className="row align-items-center" style={{}}>
                                <div className="row">
                                    <h2 className="col" onClick={() => dispatch({type: 'TOGGLE_SHOWN_STORIES'})}>X</h2>
                                    <div className="col">
                                        <StoriesComponent/>
                                    </div>
                                </div>
                            </div> :
                       <ChooseEgg></ChooseEgg>
                    }
                 </div>
            </div>
            </div>
            <div style={{display: 'flex', flex: 0.3, overflowY:'auto'}}>
                   <InfiniteScrollC></InfiniteScrollC>
                   {/* <InfiniteList></InfiniteList> */}
                </div>
            </div>
    )
}
export default App;


