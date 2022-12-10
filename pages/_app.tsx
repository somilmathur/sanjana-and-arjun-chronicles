import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppState from "../context/app/appState";

function MyApp({ Component, pageProps }: AppProps) {	
	
	return <AppState><Component {...pageProps} /></AppState>;
}

export default MyApp;
