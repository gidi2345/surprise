import Stories from 'react-insta-stories';
import {useDispatch, useSelector} from "react-redux";
import {INITIAL_STATE_TYPE} from '../redux/mainReducer/main.reducer';

const StoriesComponent: any = () => {
    const dispatch = useDispatch();
    const {stories, startStoryKeyToShow} = useSelector((state: INITIAL_STATE_TYPE )  => state);
    let ShowStories = stories.slice(startStoryKeyToShow - 1);
    ShowStories = ShowStories.filter((a: any) => !a.show);
    if (ShowStories.length === 0) {
        ShowStories = [];
        ShowStories.push(stories[startStoryKeyToShow - 1]);
    }
    const storiesSrc = ShowStories.map((a: any) => a.src);

    return(
        <Stories
            stories={storiesSrc}
            defaultInterval={1500}
            width={432}
            height={768}
            onAllStoriesEnd={() => dispatch({type: 'STORIES_END', payload: startStoryKeyToShow})}

        />
    )
};

export default StoriesComponent;
