export const TYPES = {
	GET_REQUEST: 'character/GET_REQUEST',
	GET_SUCCESS: 'character/GET_SUCCESS',
};

const INITIAL_STATE = {
	data: [],
	loading: false
};

export default function character(state = INITIAL_STATE, action) {
	switch(action.type) {
		case TYPES.GET_SUCCESS:
			return { ...state, data: [action.payload.data]}

		default:
			return state;
	}
}

export const Creators = {
	getCharacters: () => ({
		type: TYPES.GET_REQUEST
	}),
	getCharactersSuccess: data => ({
		type: TYPES.GET_SUCCESS,
		payload: {
			data
		}
	})
}
