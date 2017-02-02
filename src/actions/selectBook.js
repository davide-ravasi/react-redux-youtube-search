export function selectBook(video) {

	console.log('selectBook');


	return {
		type: 'SELECT_BOOK',
		payload: video 
	}
}
