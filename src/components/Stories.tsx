import Stories from 'react-insta-stories';
import {useStore} from "react-redux";

const StoriesComponent: any = () => {
    const store = useStore();
    const state = store.getState();
    const stories = state.stories;

    return(
        <Stories
            stories={stories}
            defaultInterval={1500}
            width={432}
            height={768}
        />
    )
};

export default StoriesComponent;
