/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#2563eb",
					secondary: "#7dd3fc",
					accent: "#1FB2A6",
					neutral: "#191D24",
					"base-100": "#1f2937",
					info: "#3ABFF8",
					success: "#36D399",
					warning: "#FBBD23",
					error: "#F87272",
				},
			},
		],
	},
	plugins: [require("daisyui")],
}
