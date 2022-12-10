import { createContext, useContext } from "react";
import { UserType } from "./types";

export interface AppContextInterface {
	SetLoading: (payload: boolean) => void;
	SetUUID: (payload: string) => void;
	SetUser: (payload: UserType) => void;
	Loading: boolean,
	UUID: string,
	GetUser: (UUID: string) => void,
	User: null | UserType
}

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 */
function createCtx<A extends {} | null>() {
	const ctx = createContext<A | undefined>(undefined);
	/**
	 *
	 */
	function useCtx() {
		const c = useContext(ctx);
		if (c === undefined) {
			throw new Error("useCtx must be inside a Provider with a value");
		}
		return c;
	}
	return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

export const [useAppContext, AppContextProvider] = createCtx<
	AppContextInterface
>();
