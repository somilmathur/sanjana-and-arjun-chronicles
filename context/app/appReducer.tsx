/* eslint-disable no-unsafe-optional-chaining */
import { SET_LOADING, SET_UUID } from "./types";

const reducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, Loading: action.payload };
		case SET_UUID:
			return { ...state, UUID: action.payload };
		default:
			return state;
	}
};
export default reducer;
