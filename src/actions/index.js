const API_KEY = 'AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM';

export function searchWord(searchKey = 'surfboards') {

	console.log(searchKey);


	$.get(
        "https://www.googleapis.com/youtube/v3/search",{
        part : 'snippet', 
        q : searchKey,
        key: 'AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM'},
        function(data) {
        	videos = data.items[0];
        }
    );

	console.log('videos after: ', videos);
	return {
		type: 'videolist',
		payload: searchKey 
	}

}