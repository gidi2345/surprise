import logo from './logo.svg';
import './App.css';
import StoriesPicturesComponent from './components/StoriesPictures';
import StoriesComponent from './components/Stories';
import {Header, PriceButton, SimpleList, EasterEggButtonWithTitle} from './components/';
import Egg from '../src/assets/images/egg2.png';
import {useStore} from "react-redux";
import {useState} from "react";

function App() {
    // const stories = [{key: 1, src: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"},
    //                  {key: 2, src: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"},
    //                  {key: 3, src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}];
    const store = useStore();
    const state = store.getState();

    const b = state.showStories;
    console.log(b);
  return (
    <div style={{display:'flex', flexDirection: 'column'}}>
      <div style={{display:'flex',flex:0.1, width:'100%'}}>
        <Header  bgColor={'#e6e8e7'}></Header>
      </div>
        <StoriesPicturesComponent />
        {/*<StoriesComponent />*/}
      <div style={{display:'flex',flex:0.3,alignItems:'center', justifyContent:'center'}}>
          <SimpleList childComp={<img/>} pricesList={[10,20,50]}></SimpleList>
          <StoriesComponent />
      </div>
    </div>
  )
}

export default App;
