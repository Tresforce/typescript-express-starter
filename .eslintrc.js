const typescriptRules = {
  // Typescript specific rules
  '@typescript-eslint/semi': ['error'],
  '@typescript-eslint/quotes': [
    'error',
    'single',
    { allowTemplateLiterals: true }
  ],
  '@typescript-eslint/indent': [
    'error',
    2,
    {
      SwitchCase: 1,
      MemberExpression: 1
    }
  ],
  '@typescript-eslint/brace-style': [
    'error',
    '1tbs',
    { allowSingleLine: false }
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/explicit-function-return-type': ['error'],
  '@typescript-eslint/no-inferrable-types': ['warn'],
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-empty-function': 'error',
  '@typescript-eslint/no-extra-parens': ['error'],
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreVoid: true
    }
  ],
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksVoidReturn: false
    }
  ],
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-this-alias': ['error'],
  '@typescript-eslint/strict-boolean-expressions': [
    'error',
    {
      ignoreRhs: true,
      allowNullable: true
    }
  ],
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'error',
  '@typescript-eslint/prefer-string-starts-ends-with': 'error',
  '@typescript-eslint/promise-function-async': [
    'error',
    {
      allowedPromiseNames: ['Thenable'],
      checkArrowFunctions: true,
      checkFunctionDeclarations: true,
      checkFunctionExpressions: true,
      checkMethodDeclarations: true
    }
  ],
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/unified-signatures': 'error'
};
const jestRules = {
  'jest/no-if': 'error',
  'jest/valid-title': 'error',
  'jest/require-top-level-describe': 'error',
  'jest/require-to-throw-message': 'error',
  'jest/prefer-todo': 'error',
  'jest/prefer-strict-equal': 'error',
  'jest/prefer-spy-on': 'error',
  'jest/prefer-hooks-on-top': 'error',
  'jest/no-truthy-falsy': 'error',
  'jest/no-test-return-statement': 'error',
  'jest/no-duplicate-hooks': 'error',
  'jest/consistent-test-it': [
    'error',
    {
      fn: 'test',
      withinDescribe: 'test'
    }
  ],
  'jest/lowercase-name': [
    'error',
    { allowedPrefixes: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] }
  ]
};
const baseRules = {
  // note you must disable the base rule as it can report incorrect errors
  semi: 'off',
  quotes: 'off',
  indent: 'off',
  'import/extensions': 'off',
  'prettier/prettier': ['error', { singleQuote: true }],
  'brace-style': 'off',
  'no-empty-function': 'off',
  'no-extra-parens': 'off',
  'no-useless-constructor': 'off',
  'require-await': 'off',
  'consistent-return': 'off',
  'object-curly-spacing': ['error', 'always'],
  'array-bracket-spacing': ['error', 'never']
};
module.exports = {
  env: {
    node: true,
    jest: true
  },
  extends: [
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'airbnb-base',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    ...baseRules,
    ...jestRules,
    ...typescriptRules
  },
  // allows application to be able to resolve .ts imports
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts']
      }
    }
  }
};
