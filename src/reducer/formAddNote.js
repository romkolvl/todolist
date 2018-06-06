import { CHANGE_INPUT, CLEAR_FORM } from '../constatnts';

const initialState = {
	typeInput: '1',
	titleInput: '',
	descriptionInput: ''
}

export default (formState = initialState, action) => {
	const { type, payload } = action;
	switch(type) {
		case CHANGE_INPUT:
			const resultFormState = { ...formState, [payload.name]: payload.value };
			return resultFormState;
			break;

		case CLEAR_FORM:
			return initialState;
			break;

		default:
			return formState;
			break;
	}
}