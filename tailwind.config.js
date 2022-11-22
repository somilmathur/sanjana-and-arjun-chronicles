const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	important: true,
	variants: {
		extend: {
			rotate: ["group-focus"],
			textColor: ["group-focus"],
			maxHeight: ["group-focus"],
			translate: ["group-hover"],
		},
	},
	theme: {
		extend: {		
			fontFamily: {
				sans: ['Raleway', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				xxs: "0.6rem",
			},
			boxShadow: {
				"custom-card":
					"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 0px 24px -1px rgba(0, 0, 0, 0.06) !important",				
			},
			backgroundColor: {
				"white-opacity-30": "#F3F6FE",
				"white-opacity-40": "#F9F9F9C4",
				"white-opacity-50": "#ffffff70",
				"white-opacity-60": "#FAFAFA",
				"white-opacity-80": "#ffffffc0",
				"white-opacity-90": "#ffffffe6",
				glass: "rgba(0, 0, 0, 0.5)",			
			},									
			colors: {
				primary: "#5359ea",						
			},									
			scale: {
				101: "1.01",
				80: "0.80",
				103: "1.03",
			},
			filter: {
				"drop-shadow": "drop-shadow(16px 16px 20px #5359ea)",
			},
		},
		screens: {
			xxs: "300px",
			xs: "370px",
			sm: "576px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
	},	
	purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
};
