# cra-template-typescript-extended

A modified (but not ejected) version of creat-react-app's TypeScript template. Adds helpful development tools like ESLint, Prettier, and commitlint as well as some personal linting rule changes.

To use this template, add `--template typescript-extended` when creating a new app via create-react-app.

For example:

```sh
npx create-react-app my-app --template typescript-extended

# or

yarn create react-app my-app --template typescript-extended
```

To test this template localally:

```sh
npx create-react-app my-app --template file:./path/to/folder/cra-template-typescript-extended
```

## Tools Added to the Template

- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [stylelint](https://stylelint.io/)
- [commitlint](https://commitlint.js.org/#/)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)

### Git Hooks

- **Pre-Commit**: Uses Prettier for formatting, `tsc --noEmit`, ESLint, and stylelint for linting, and runs tests via `npm run test`.
- **Commit-Msg**: Runs commitlint on the commit message.

*These git hooks are implemented via husky and lint-staged.*
