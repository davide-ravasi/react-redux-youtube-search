export default function(state = [], action) {


		switch (action.type) {
			case 'VIDEO_LIST':
			state = [];
			return state.concat(action.payload.data);
		}


	//console.log('reducer state: ' + videoList);
	//console.log(state);
	console.log('state at the end of reducer ',state);
	return state;
}


/*

https://www.googleapis.com/youtube/v3/search?q=surfboard&part=snippet&order=rating&type=video&videoEmbeddable=true&key=AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM

https://www.googleapis.com/youtube/v3/searchpart=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyDhAE6OYXooquMA7AmyN8iUactQ2EnsGzM



*/