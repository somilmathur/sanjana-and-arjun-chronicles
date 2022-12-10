export const SET_LOADING = "SET_LOADING";
export const SET_UUID = "SET_UUID";

export type StateTypes = {
	Loading: boolean;
	UUID: string | null
};

export const StateDefaultValue: StateTypes = {
	Loading: false,
	UUID: null
};
