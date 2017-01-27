import { combineReducers } from 'redux';
import VideoList from './reducer_videos';

const rootReducer = combineReducers({
  videos: VideoList
});

export default rootReducer;
