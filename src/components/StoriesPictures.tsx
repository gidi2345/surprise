import {useDispatch, useStore} from "react-redux";

import StoriesComponent from './Stories';

import './StoriesPictures.css';

const StoriesPicturesComponent: any = () => {
    const dispatch = useDispatch();
    const store = useStore();
    const state = store.getState();
    const stories = state.stories;

    const style_1 = { border : '2px solid black' }
    const style_2 = { border : '2px solid white' }
    return(
        <div>
            {stories.map((story: any) => (
                <img key={story.key}
                     style={story.show ? style_2 : style_1}
                     className='storyImage'
                     src={story.src}
                     onClick={() => dispatch({type: 'TOGGLE_SHOWN_STORIES'})}/>
            ))}
        </div>
    )
};

export default StoriesPicturesComponent;
