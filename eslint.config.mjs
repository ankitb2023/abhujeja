import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
 
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    ignores:["node_modules/*","build/*","dist/*"]
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];