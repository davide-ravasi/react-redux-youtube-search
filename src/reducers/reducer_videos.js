import YTSearch from 'youtube-api-search';
import axios from 'axios';
const API_KEY = 'AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM';

export default function(state = [], action) {

		//console.log('action payload: ' + action.payload);

	// YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
	// 	console.log(videos);
	// });	



	// $.get(
 //        "https://www.googleapis.com/youtube/v3/search",{
 //        part : 'snippet', 
 //        q : 'surfboards',
 //        key: 'AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM'},
 //        function(data) {
 // 			return state.concat([data]);
 //        }
 //    );

	//const videos = [];

	// axios.get('https://www.googleapis.com/youtube/v3/search?q=surfboard&part=snippet&order=rating&type=video&videoEmbeddable=true&key=AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM').then(function (result) {
	// 	//if (result.isResolved) {
	// 	     //console.log(result.data.items);

	// 	    videos.push(result.data.items);
			
	// 	//}
 //  });
	//const videoSearch = this.videoSearch('surfboard');

	//console.log('reducer state: ' + videoList);
	//console.log(state);
	return state;
}


/*

https://www.googleapis.com/youtube/v3/search?q=surfboard&part=snippet&order=rating&type=video&videoEmbeddable=true&key=AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM

https://www.googleapis.com/youtube/v3/searchpart=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM



*/