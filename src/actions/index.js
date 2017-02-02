import axios from 'axios';
const API_KEY = 'AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM';

export function searchWord(searchKey) {

	const url = 'https://www.googleapis.com/youtube/v3/search?q=' + searchKey + '&part=snippet&order=rating&type=video&videoEmbeddable=true&key=AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM';	


	console.log('searchWord');


	// $.get(
 //        "https://www.googleapis.com/youtube/v3/search",{
 //        part : 'snippet', 
 //        q : searchKey,
 //        key: 'AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM'},
 //        function(data) {
 //        	videos = data.items[0];
 //        }
 //    );

	return {
		type: 'VIDEO_LIST',
		payload: axios.get(url) 
	}
}


export function selectBook(video) {

	console.log('inside actions: ');
	console.log(video.id.videoId);


	return {
		type: 'SELECT_BOOK',
		payload: video.id.videoId 
	}
}


