# fe-portfolio-react-ts

## setup

### Change Environment Profile(development, staging, release, uat, production) for webpack dev

Please change the following line of the file [webpack.develop.js](config/webpack.develop.js) if you need different endpoint for your environment.

> path: path.resolve(\_\_dirname, './.env.development'),

E.g. If you want to use production as your endpoint, please change _.env.development_ to _.env.production_ .

### eslint & prettier

https://itnext.io/auto-format-with-eslint-and-prettier-for-react-typescript-project-6526a9d44f81

cra default support eslint. All we need to do is to add custom extends and rules.

```bash
yarn add -D eslint-config-prettier eslint-plugin-prettier prettier @joengsh/eslint-config-react @joengsh/prettier-config
npx install-peerdeps --dev @joengsh/eslint-config-react
npx install-peerdeps --dev @joengsh/prettier-config
```

```javascript
// .prettierrc.js
module.exports = {
  ...require('@joengsh/prettier-config'),
  semi: false,
};

// package.json or .eslintrc.js
module.exports = {
  extends: ['@joengsh/eslint-config-react/cra'],
};
```

### lint-staged and husky

```bash
yarn add -D husky lint-staged
```

Add lint-staged config

```json
{
  /*...*/
  "scripts": {
    "prepare": "husky install",
    "lint-staged": "lint-staged",
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css}'",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint-fix": "eslint --fix . --ext .js,.jsx,.ts,.tsx"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,css,json,md,mdx}": ["prettier --write", "git add"],
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "git add"]
  }
  /*...*/
}
```

Add pre-commit hook

```bash
npx husky add .husky/pre-commit "yarn lint-staged"
```

### storybook

**downgrade to react 17**

since storybook not fully support react 18, so we need to downgrade to react 17 first. We can manually change the version number in package.json and force install again.

```json
{
  // suggested version
  "dependencies": {
    "@testing-library/react": "^12.1.5",
    "@types/react": "^17.0.0",
    "@types/react-dom": "^17.0.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
```

```bash
yarn install --force
```

Then we need to update index.tsx

```typescript
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import ReactDOM from 'react-dom';

const rootNode = document.getElementById('root');
ReactDOM.render(<App />, rootNode);
```

**install storybook**

```bash
npx storybook init
```

## Commit Message

1. Understanding Angular Commit Message
   Link: [https://nitayneeman.com/posts/understanding-semantic-commit-messages-using-git-and-angular]
