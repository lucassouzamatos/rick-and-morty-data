export const TYPES = {
	GET_REQUEST: 'character/GET_REQUEST',
	GET_SUCCESS: 'character/GET_SUCCESS',
};

const INITIAL_STATE = {
	loading: false,
	info: {},
	results: []
};

export default function character(state = INITIAL_STATE, action) {
	switch(action.type) {
		case TYPES.GET_SUCCESS:
			return {
				...state,
				info: action.payload.info,
				results: [...state.results, ...action.payload.results] }

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
		payload: data
	})
}
