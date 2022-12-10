/* eslint-disable no-unsafe-optional-chaining */
import { SET_LOADING, SET_UUID, SET_USER } from "./types";

const reducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, Loading: action.payload };
		case SET_UUID:
			return { ...state, UUID: action.payload };
			case SET_USER:
			return { ...state, User: action.payload };
		default:
			return state;
	}
};
export default reducer;
