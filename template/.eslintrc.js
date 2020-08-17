// NOTE: If you update this config you will need to restart the CRA dev server before seeing
// any changes take effect. If all else fails try the steps provided here:
// https://github.com/facebook/create-react-app/issues/9007#issuecomment-629118033

// Rules from "react-app":
//     package: https://www.npmjs.com/package/eslint-config-react-app
//     source: /node_modules/eslint-config-react-app/index.js
// Plugins from "react-app":
//     'import', 'flowtype', 'jsx-a11y', 'react', 'react-hooks', '@typescript-eslint'

// Rules from "eslint:recommended":
//     source: /node_modules/eslint/conf/eslint-recommended.js

// Rules from "plugin:react/recommended":
//     source: /node_modules/eslint-plugin-react/index.js

module.exports = {
  // "react-app" need to be last or the config will be overridden
  extends: ["eslint:recommended", "plugin:react/recommended", "react-app"],
  rules: {
    "max-len": "off", // Prettier is handling line length, no need for warnings
    "no-else-return": "off", // Favor clarity over slightly less typing
    "no-plusplus": [
      "warn",
      {
        allowForLoopAfterthoughts: true, // Allow i++ in classic-style for loops
      },
    ],
    "operator-assignment": "off", // Forcing shorthand is too restricting on style
  },
};
