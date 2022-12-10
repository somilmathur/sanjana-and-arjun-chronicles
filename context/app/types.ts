export const SET_LOADING = "SET_LOADING";
export const SET_UUID = "SET_UUID";
export const SET_USER = "SET_USER";

export type StateTypes = {
	Loading: boolean;
	UUID: string | null;
	User: UserType
};

export type UserType = {
	UUID: string | null
	name: string | null
}

export const StateDefaultValue: StateTypes = {
	Loading: false,
	UUID: null,
	User: {
		UUID: null,
		name: null,
	},
};
