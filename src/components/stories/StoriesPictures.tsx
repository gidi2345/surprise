import {useDispatch, useStore, useSelector} from "react-redux";
import {INITIAL_STATE_TYPE} from '../../redux/mainReducer/main.reducer';
import StoriesComponent from './Stories';

import './StoriesPictures.css';

const StoriesPicturesComponent: any = () => {
    const dispatch = useDispatch();
    const {stories} = useSelector((state: INITIAL_STATE_TYPE )  => state);

    const style_1 = { border : '2px solid black' }
    const style_2 = { border : '2px solid white' }
    return(
        <div>
            {stories.map((story: any) => (
                <img key={story.key}
                     style={story.show ? style_2 : style_1}
                     className='storyImage'
                     src={story.src}
                     onClick={() => dispatch({type: 'TOGGLE_SHOWN_STORIES', payload: story.key})}/>
            ))}
        </div>
    )
};

export default StoriesPicturesComponent;
