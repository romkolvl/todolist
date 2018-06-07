import { LOAD_TYPES_REQUEST, LOAD_TYPES_SUCCESS, LOAD_TYPES_ERROR } from '../constatnts';

const initialState = {
	types: [],
	fetching: false
}

export default (typesState = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case LOAD_TYPES_REQUEST:
			return { types: payload, fetching: true };
			break;

		case LOAD_TYPES_SUCCESS:
			return { types: [...payload], fetching: false };
			break;

		case LOAD_TYPES_ERROR:
			return initialState;
			break;

		default:
			return typesState;
			break;
	}
}
