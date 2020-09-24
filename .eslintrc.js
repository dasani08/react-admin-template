module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["./src"],
        "extensions": [".js"]
      }
    }
  },
  "extends": ["eslint-config-airbnb", "prettier", "prettier/react"],
  "plugins": ["react", "react-hooks", "import"],
  "rules": {
    "max-len": "off",
    "no-plusplus": "off",
    "prefer-const": "off",
    "one-var": "off",
    "no-param-reassign": "off",
    "no-mixed-operators": [
      "error",
      {
        "groups": [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        "allowSamePrecedence": false
      }
    ],
    "class-methods-use-this": "off",
    "no-restricted-globals": ["error"],
    "no-underscore-dangle": "off",
    "prefer-destructuring": "off",
    "no-restricted-syntax": [
      "error",
      "ForOfStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "ignoreRestSiblings": false,
        "argsIgnorePattern": "^_"
      }
    ],
    "import/no-named-as-default-member": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { "devDependencies": ["!src/**/*.js"] }
    ],
    "react/static-property-placement": "off",
    "react/state-in-constructor": "off",
    "react/jsx-props-no-spreading": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-did-update-set-state": "off",
    "react/no-multi-comp": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-no-duplicate-props": "error",
    "react/no-find-dom-node": "off",
    "react/no-array-index-key": "off",
    "react/no-string-refs": "off",
    "react/prefer-stateless-function": "off",
    "react/destructuring-assignment": "off",
    "react/default-props-match-prop-types": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/forbid-foreign-prop-types": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js"]
      }
    ],
    "react/require-default-props": "off",
    "consistent-return": "off",
    "prefer-template": "off",
    "spaced-comment": "off",
    "react/prop-types": "off",
    "react/jsx-curly-brace-presence": "off",
    "react/button-has-type": "off",
    "import/order": "off",
    "dot-notation": "off",
    "react/jsx-boolean-value": "off"
  },
  "overrides": [
    {
      "files": ["tools/*"],
      "env": {
        "node": true,
        "browser": false
      },
      "rules": {
        "global-require": "off",
        "no-console": "off"
      }
    }
  ]
};
