import React from 'react'
import Lottie from 'react-lottie';

interface LottieContainerI {
  animationDataPathName: any;
}

class LottieContainer extends React.Component<LottieContainerI,{}> {
  
  render() {

    const { animationDataPathName } = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: require('../assets/lottie-files/' + animationDataPathName + '.json'),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

  return (
    <div>
      <Lottie options={defaultOptions}
        height={'100%'}
        width={'100%'}>
      </Lottie>
    </div>
  )
  }
}

export default LottieContainer;
