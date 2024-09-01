import globals from "globals";
// import pluginJs from "@eslint/js";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
          tsx: true,
        },
      },
      globals: {
        ...globals.browser
      }
    },
    plugins: {
      "@typescript-eslint": tseslintPlugin,
      react: pluginReact,
    },
    rules: {
      // JavaScript rules
      "eqeqeq": "off",
      "no-unused-vars": "warn", //warn || error
      "max-len": ["warn", { code: 200 }],
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
      "no-use-before-define": "off",
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_", // Ignore variables that start with an underscore
          caughtErrorsIgnorePattern: "^_", // Ignore caught errors that start with an underscore
          ignoreRestSiblings: true, // Ignore rest siblings of destructured variables
        },
      ],
      "@typescript-eslint/no-use-before-define": ["error"],

      // React-specific rules
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      "react/react-in-jsx-scope": "off",
    },
  },
];
