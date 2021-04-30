import logo from './logo.svg';
import './App.css';
import {Header, PriceButton, SimpleList, EasterEggButtonWithTitle} from './components/';
import Egg from '../src/assets/images/egg2.png';

function App() {
  return (
    <div style={{display:'flex', flexDirection: 'column'}}>
      <div style={{display:'flex',flex:0.1, width:'100%'}}>
        <Header  bgColor={'#e6e8e7'}></Header>
      </div>
      <div style={{display:'flex',flex:0.3,alignItems:'center', justifyContent:'center'}}>
          <SimpleList childComp={<img/>} pricesList={[10,20,50]}></SimpleList>
      </div>
      
      
    </div>
  );
}

export default App;
