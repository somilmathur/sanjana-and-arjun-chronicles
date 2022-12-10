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
import { SET_LOADING, SET_UUID, SET_USER, StateTypes, StateDefaultValue, UserType } from './types';
import { v4 as uuidv4 } from "uuid";

const AppState = ({
	children,
}: {
	children: boolean | ReactNode | ReactFragment | ReactPortal;
}) => {


	const initialState: StateTypes = StateDefaultValue;

	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Check if the user is opening the site for the first time. If so, we assign him a UUID and store the data in the app context.
	useEffect(() => {
    const UUID = localStorage.getItem("UUID")
		if (UUID) SetUUID(UUID);
    else SetUUID(uuidv4())
	}, []);

  useEffect(() => {
    if(state.UUID) {
      GetUser(state.UUID)
    }
  }, [state.UUID])
  

	// For setting the global loading state
	const SetLoading = (value: boolean) => {
		dispatch({ type: SET_LOADING, payload: value });
	};

	// For setting the UUID of the user
	const SetUUID = (value: string) => {
    localStorage.setItem("UUID", value)
		dispatch({ type: SET_UUID, payload: value });
	};

  // For setting the user details in global state
	const SetUser = (user: UserType) => {
    console.log("setting the following user from client --> ", user)
		dispatch({ type: SET_USER, payload: user });
	};

  // To get the user details from the database 
  const GetUser = async (UUID: string) => {
    console.log()
    const user = await fetch(`/api/getUser?UUID=${UUID}`, {
      method: "GET"    
    }).then(res => res.json().then((res: UserType | null) => {
      return res
    }));
    if(user) SetUser(user[0])
	};

	const context: AppContextInterface = {
		SetLoading,
		Loading: state.Loading,
		SetUUID,
    SetUser,
    GetUser,
    User: state.User,
		UUID: state.UUID,
	};

	return <AppContextProvider value={context}>{children}</AppContextProvider>;
};
export default AppState;
