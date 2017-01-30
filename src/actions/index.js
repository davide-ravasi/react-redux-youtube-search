import axios from 'axios';
const API_KEY = 'AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM';

export function searchWord(searchKey) {

	const url = 'https://www.googleapis.com/youtube/v3/search?q=surfboard&part=snippet&order=rating&type=video&videoEmbeddable=true&key=AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM';	

	const request = axios.get(url);



	// $.get(
 //        "https://www.googleapis.com/youtube/v3/search",{
 //        part : 'snippet', 
 //        q : searchKey,
 //        key: 'AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM'},
 //        function(data) {
 //        	videos = data.items[0];
 //        }
 //    );

	console.log('videos after: ', videos);
	return {
		type: 'VIDEO_LIST',
		payload: request 
	}

}