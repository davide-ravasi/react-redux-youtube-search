import { combineReducers } from 'redux';
import VideoList from './reducer_videos';
import SelectedVideo from './reducer_selectedVideo';

const rootReducer = combineReducers({
  videos: VideoList,
  selectedVideo: SelectedVideo
});

export default rootReducer;
