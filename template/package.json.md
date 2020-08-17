# Packages Managed by CRA

### CRA-Managed Dependencies
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- @types/jest
- @types/node
- @types/react
- @types/react-dom
- react
- react-dom
- react-scripts
- typescript

# How to Update CRA-managed Packages

The best way to avoid breaking anything with package updates is to create a new
CRA typescript project:

`npx create-react-app test-deps --template typescript --use-npm`

Then inspect the generated `package.json` to see the package versions that are
used for the latest version of CRA. You can use these new package versions and
`npm install` to update the project with new package versions that are tested to
work with each other.

**Note:** It's worth avoiding running a `npm update` as this will
unintentionally bump versions of the packages managed by CRA. It's better to
update a particular package instead of the entire project anyways.
