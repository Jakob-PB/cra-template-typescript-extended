module.exports = {
  extends: "stylelint-config-recommended",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "import-normalise",
          // Sass @ rules
          "use",
          "forward",
          "import",
          "mixin",
          "include",
          "function",
          "extend",
          "error",
          "warn",
          "debug",
          "at-root",
          "if",
          "else",
          "each",
          "for",
          "while",
          "return",
          "content",
        ],
      },
    ],
  },
};
