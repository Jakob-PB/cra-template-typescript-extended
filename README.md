# cra-template-typescript-extended

A modified (but not ejected) version of creat-react-app's TypeScript template. Adds helpful development tools like ESLint, Prettier, and commitlint as well as some personal linting rule changes.

### Creating a New Project

To use this template, add `--template typescript-extended` when creating a new app via create-react-app.

For example:

```sh
npx create-react-app my-app --template typescript-extended

# or

yarn create react-app my-app --template typescript-extended
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

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [commitlint](https://commitlint.js.org/#/)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)

### Git Hooks

Note: You must set the Git Hooks up manually. See "Setting Up Git Hooks" above.

- **Pre-Commit**: Uses Prettier for formatting, `tsc --noEmit`, ESLint, and stylelint for linting, and runs tests via `npm run test`.
- **Commit-Msg**: Runs commitlint on the commit message.

---

## Template Development

To test this template locally:

```sh
npx create-react-app my-app --template file:./path/to/folder/cra-template-typescript-extended
```
