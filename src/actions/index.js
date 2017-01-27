export function searchWord(searchKey) {

	console.log(searchKey);

	return {
		type: 'default',
		payload: searchKey 
	}

}