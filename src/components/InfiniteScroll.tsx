import InfiniteScroll from 'react-infinite-scroll-component';
import React from 'react';
import { useEffect, useState, useRef  } from 'react';
import egg from '../assets/images/egg1.png';
import LottieContainer from '../components/LottieContainer';
import  lottie_animations from '../assets/lottie-files';

interface InfiniteScrollCI {
    
}

enum JustifyContentEnum {
  'center',
  'space-between',
  'space-around'
}

enum flexDirectionEnum {
  'row',
  'column'
}

enum BackgroundColoeEnum {
  'pink',
  'blue',
  'green',
  'yellow',
  'purple'
}

enum RenderOrNot {
  true,
  false
}

enum LottieFilePathEnum {
    'lottie_easter_egg_bunny',
    'lottie_happy_easter',
    'lottie_question_mark',
    'lottie_smash_an_egg'
}

const randomRange = (range : number ) => {
    return Math.floor(Math.random() * range)
}

const randomRangeToRange = (startRange : number, endRange: number ) => {
  return Math.floor(Math.random() * endRange) + startRange
}

const itemsGenerator = (numberOfItems: number) => {
  const scrollListItems = Array.from(Array(numberOfItems).keys()).map((i) => {
      const randomStyle = { 
         display:'flex',
         justifyContent: JustifyContentEnum[randomRange(3)],
         backgroundColor: BackgroundColoeEnum[randomRange(5)],
         width: randomRangeToRange(100,500).toString() + 'px',
         height: randomRangeToRange(100,500).toString() + 'px'
        }
     return <div style={randomStyle}>
        {
          RenderOrNot[randomRange(2)] ?   <LottieContainer animationDataPathName={LottieFilePathEnum[randomRange(4)]}></LottieContainer>: null
         
        }
     </div>
  });

  return scrollListItems;
}



export const InfiniteScrollC = (props: any) =>  {
    const [state, setPostList] = useState({
        items: itemsGenerator(50),
        hasMore: true
    }); 

    const fetchMoreData = () => {
        if (state.items.length >= 500) {
          setPostList({...state, hasMore: false })
          return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
            setPostList({...state,items:state.items.concat(itemsGenerator(20)) })
      };

   return (
    <div style={{ height: "100%", overflowY: "scroll" , width:'100%'}}>
    <InfiniteScroll
      dataLength={state.items.length}
      next={fetchMoreData}
      hasMore={state.hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >

      {state.items.map((item, index) => (
        <div style={{width:'100%', height:'400px'}}  key={index}>
          {item}
          {/* <div style={{width:'100%', height:'400px', backgroundColor:'lightgreen', flexDirection:'row',display:'flex', justifyContent:'space-between'}}>
                <div>
                <LottieContainer animationDataPathName={'lottie_smash_an_egg'}></LottieContainer>
                </div>
                <div>
                    <img src={egg} height={50} width={50}></img>
                </div>
                <div>
                    <img src={egg} height={50} width={50}></img>
                </div>
          </div> */}
        </div>
      ))}
    </InfiniteScroll>
    </div>
)
}

export default InfiniteScrollC;









