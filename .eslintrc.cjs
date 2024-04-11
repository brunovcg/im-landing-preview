module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:security/recommended',
    'prettier',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        paths: [''],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: {
        paths: [''],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'prettier', 'security', 'sonarjs'],
  rules: {
    'sonarjs/cognitive-complexity': 'error',
    'sonarjs/no-identical-expressions': 'error',
    'import/no-unresolved': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    'space-before-function-paren': 'off',
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        offsetTernaryExpressions: true,
        ignoredNodes: ['TemplateLiteral > *'],
      },
    ],
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    'prefer-arrow-callback': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.ts'] }],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
      },
    ],
  },
};

