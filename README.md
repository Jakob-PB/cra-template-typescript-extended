# cra-template-typescript-extended

[![NPM version](https://img.shields.io/npm/v/cra-template-typescript-extended)](https://www.npmjs.com/package/cra-template-typescript-extended)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow)](https://conventionalcommits.org)

This is a modified version of create-react-app's TypeScript template. Adds helpful development tools like Sass, ESLint, Prettier, and commitlint as well as some personal linting rule changes.

## Creating a New Project

To use this template, add `--template typescript-extended` when creating a new app via create-react-app.

### NPM
```sh
npx create-react-app my-app --template typescript-extended --use-npm
```

### Yarn
```sh
yarn create-react-app my-app --template typescript-extended
```

### Setting Up Git Hooks

You will need to manually add your husky hooks settings to `package.json` as seen below if you want to lint before each commit.

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged && tsc --noEmit && npm run test",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
},
```

<details>
  <summary>Why am I doing this manually?</summary>
  Because of the limiting nature of a non-ejected create-react-app project you are forced to have a Git repo initialized for you. This interacts poorly with pre-existing husky and lint-staged configs, and will hang the create-react-app process when creating a new project. There is unfortunately no great way I have found to automatically get around this issue without being hacky.
</details>

## Tools Added to the TypeScript Template

- [Sass](https://sass-lang.com/) - A CSS preprocessor that acts as a superset of CSS.
- [Prettier](https://prettier.io/) - Automatically format project files (html, css, scss, sass, js, jsx, ts, tsx, json, md)
- [ESLint](https://eslint.org/) - Lint TypeScript and JavaScript code
- [stylelint](https://stylelint.io/) - Lint CSS and its extension languages
- [commitlint](https://commitlint.js.org/#/) - Lint commits to fit the Conventional Commit standard
- [standard-version](https://github.com/conventional-changelog/standard-version) - Provides the `npm run release` command for automatic release and changelog generation
- [husky](https://github.com/typicode/husky) - Provides easy Git Hooks configuration for automatic linting, testing, and formatting before each commit
- [lint-staged](https://github.com/okonet/lint-staged) - Extends husky's functionality to run commands on a subset of staged files

### Git Hooks

Note: You must set the Git Hooks up manually. See "Setting Up Git Hooks" above.

- **Pre-Commit**: Uses Prettier for formatting, `tsc --noEmit`, ESLint, and stylelint for linting, and runs tests via `npm run test`.
- **Commit-Msg**: Runs commitlint on the commit message.

## Template Development

To test this template locally (assuming this command is being run from inside the directory that contains this template):

### NPM
```sh
npx create-react-app my-app --template file:./cra-template-typescript-extended --use-npm
```

### Yarn
```sh
yarn create-react-app my-app --template file:./cra-template-typescript-extended
```
