import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
	// Spread the recommended configuration first
	js.configs.recommended,

	{
		files: ["**/*.{js,mjs,cjs}"],
		languageOptions: {
			globals: globals.node,
		},
		rules: {
			"no-unused-vars": "warn",
		},
	},
]);
