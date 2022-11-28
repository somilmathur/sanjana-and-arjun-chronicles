/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Script from "next/script";
import Document, { Html, Main, Head, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Manrope:wght@100;200;300;400;500;600;700;800;900&family=Dancing+Script:wght@300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
