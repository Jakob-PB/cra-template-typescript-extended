// Rules from "@commitlint/config-conventional":
//     source: node_modules/@commitlint/config-conventional/index.js

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 72],
    "body-max-line-length": [2, "always", 72],
    "footer-max-line-length": [2, "always", 72],
    "subject-case": [2, "never", ["lower-case"]],
  },
};
