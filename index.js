module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint-config-airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "import", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase", "UPPER_CASE"],
      },
      {
        selector: "enum",
        format: ["PascalCase", "UPPER_CASE"],
      },
    ],
    "consistent-return": "off",
    "curly": ["error", "all"],
    "import/default": 2,
    "import/export": 2,
    "import/named": 2,
    "import/namespace": 2,
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": [
      2,
      {
        amd: true,
        commonjs: true,
      },
    ],
    "import/prefer-default-export": "off",
    "no-await-in-loop": "off",
    "no-bitwise": "off",
    "no-console": "warn",
    "no-continue": "off",
    "no-nested-ternary": "warn",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-shadow": "off",
    "no-void": [2, { allowAsStatement: true }],
    "react-hooks/rules-of-hooks": "error",
    "react/display-name": "warn",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "warn",
    "react/require-default-props": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
