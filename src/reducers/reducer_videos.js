export default function(state = [], action) {

		console.log(action.payload);

		switch (action.type) {
			case 'VIDEO_LIST':

			return state.concat([action.payload.data]);
		}



	return state;
}