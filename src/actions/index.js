//import YTSearch from 'youtube-api-search';
import axios from 'axios';
const API_KEY = 'AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM';

export function searchWord(searchKey) {

	const url = 'https://www.googleapis.com/youtube/v3/search?q=surfboard&part=snippet&order=rating&type=video&videoEmbeddable=true&key=AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM';	

	const request = axios.get(url);


	return {
		type: 'VIDEO_LIST',
		payload: request 
	}

}