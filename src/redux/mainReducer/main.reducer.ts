import MainActionTypes from './main.types';

const INITIAL_STATE = {
    stories : [{key: 1, src: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350", show: 0},
        {key: 2, src: "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", show: 1},
        {key: 3, src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", show: 0}],
    showStories: false
};

const mainReducer = (state = INITIAL_STATE, action : any) => {
    switch (action.type){
        case MainActionTypes.TOGGLE_SHOWN_STORIES:
            return {
                ...state,
                showStories: !state.showStories
            };
        default:
            return state;
    }
};

export default mainReducer;
