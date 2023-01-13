# react-webpack-template

## Introduction

Thi is a template of a react project bundling using webpack. Here are the feature of this template:

- use storybook for component showcase and documentation
- use jest for unit test
- use cypress for component test and e2e test
- coverage report combining jest and cypress component test
- enforce convertional commit message
- eslint and prettier for code rules and styling
- import tailwindcss with tw-element
- support [universal-dotenv](https://github.com/sebastian-software/universal-dotenv) logic.

## Setup

To setup and run the project. Simply run the following:

```bash
#npm
npm install
npm start
#yarn
yarn
yarn start
```

## Build

To build the project, run the `build` script
To preview the project, you can use `serve`, or run `preview` script
To analyse the build files, run the `report` script

## Storybook

When developing a component. You may run the storybook while coding.

```bash
#npm
npm run storybook
#yarn
yarn storybook
```

Storybook can be build by using the `build-storybook` script.

## Test

| script           | when to use                           | description                                                              |
| ---------------- | ------------------------------------- | ------------------------------------------------------------------------ |
| jest:staged      | when commit (husky)                   | run test cases corresponding to the modified src                         |
| jest             | merge to release & uat & production   | run all the jest test                                                    |
| cy:run-unit      | merge to release & uat & production   | run all cypress component test                                           |
| test             | merge to release & uat & production   | run all jest and cypress component test                                  |
| coverage         | merge to release & uat & production   | run all jest and cypress component test and generate the coverage report |
| cy:run-e2e:smoke | merge to release & uat & production   | run all cypress e2e smoke test                                           |
| cy:run-e2e       | uat or production env when applicable | run all cypress e2e smoke test                                           |

## convertional commit message

https://www.conventionalcommits.org/en/v1.0.0/ <br />
https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional

## src folder structure

The src folder follows the structure of an [atomic redesign](https://github.com/takefumi-yoshii/atomic-redesign). Similar to atomic design described in [here](https://medium.com/yemeksepeti-teknoloji/atomic-design-system-in-frontend-bdbb919290b4) and also [here](https://paulonteri.com/thoughts/atomic-design-react).

Main difference is that atomic design focus on the UI component while atomic redesign also take the props, state and context into account.

## alias

```json
{
  "@/*": ["src/*"],
  "@assets/*": ["src/assets/*"],
  "@components/*": ["src/components/*"],
  "@utils/*": ["src/utils/*"]
}
```

## Reference:

- [React re-renders guide](https://www.developerway.com/posts/react-re-renders-guide)
- [use-context-selector](https://dev.to/romaintrotard/use-context-selector-demystified-4f8e)
- [Framer motion](https://www.framer.com/motion/)
- [tailwindcss dashboard sample](https://tailwindcomponents.com/component/responsive-admin-template)
- [tailwind components](https://dev.to/cruip/25-places-where-you-can-get-free-tailwind-css-components-47lm)
- [hyperui](https://www.hyperui.dev/)
- [mambaui](https://mambaui.com/components)
- [datepicker](https://react-tailwindcss-datepicker.vercel.app/demo)
- [merge coverage report](https://dev.to/penx/combining-storybook-cypress-and-jest-code-coverage-4pa5)
- [storybook testrunner](https://storybook.js.org/addons/@storybook/test-runner)
