/* eslint-disable no-unsafe-optional-chaining */
import { SET_LOADING } from "./types";

const reducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, Loading: action.payload };
		default:
			return state;
	}
};
export default reducer;
