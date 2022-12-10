/* eslint-disable max-len */
import React, {
	useReducer,
	ReactFragment,
	ReactPortal,
	ReactNode,
	useEffect,
} from "react";
import AppReducer from "./appReducer";
import { AppContextInterface, AppContextProvider } from "./appContext";
import { SET_LOADING, SET_UUID, StateTypes, StateDefaultValue } from "./types";
import { v4 as uuidv4 } from "uuid";

const AppState = ({
	children,
}: {
	children: boolean | ReactNode | ReactFragment | ReactPortal;
}) => {
	// Check if the user is opening the site for the first time. If so, we assign him a UUID and store the data in the app context.
	useEffect(() => {
		if (localStorage.getItem("UUID") !== null) SetUUID(localStorage.getItem("UUID"));
    else SetUUID(uuidv4())
	}, []);

	const initialState: StateTypes = StateDefaultValue;

	const [state, dispatch] = useReducer(AppReducer, initialState);

	// For setting the global loading state
	const SetLoading = (value: boolean) => {
		dispatch({ type: SET_LOADING, payload: value });
	};

	// For setting the UUID of the user
	const SetUUID = (value: string | null) => {
    localStorage.setItem("UUID", value)
		dispatch({ type: SET_UUID, payload: value });
	};

	const context: AppContextInterface = {
		SetLoading,
		Loading: state.Loading,
		SetUUID,
		UUID: state.UUID,
	};

	return <AppContextProvider value={context}>{children}</AppContextProvider>;
};
export default AppState;
