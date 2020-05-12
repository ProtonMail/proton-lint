# Proton Lint

Modern eslint config for a more civilized age

## Install

```
npm i https://github.com/ProtonMail/proton-lint.git \
      eslint-config-airbnb-typescript@^7.2.1 \
      eslint-config-prettier@6.11.0 \
      --save-dev
```

Then, put this in .eslintrc in your project:

```
module.exports = {
  extends: ['proton-lint'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
```
