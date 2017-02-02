export default function(state = [], action) {

	switch (action.type) {
		case 'SELECT_BOOK':
		state = [];
		return state.concat(action.payload);
	}

	return state;
}