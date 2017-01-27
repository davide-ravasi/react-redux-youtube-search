import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM';

export default function(state = null, action) {

		console.log('action payload: ' + action.payload);

		YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
			console.log(videos);
		});	


	//const videoSearch = this.videoSearch('surfboard');
	console.log('videos reducer');
	console.log('reducer state: ' + videoList);

	return state;
}