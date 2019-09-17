module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended' // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
    ],
    parserOptions: {
        project: 'tsconfig.json',
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'quotes': ['warn', 'single', { 'avoidEscape': true, allowTemplateLiterals: true }],
        'no-trailing-spaces': 'warn',
        'semi': ['warn', 'always'],
        'semi-spacing': 'warn',
        'semi-style': ['warn', 'last'],
        'curly': 'error',
        'quote-props': ['error', 'as-needed'],
        'no-console': 'warn',
        'space-before-blocks': 'warn',
        'no-whitespace-before-property': 'warn',
        'block-spacing': 'warn',
        'arrow-spacing': 'warn',
        'keyword-spacing': ['warn', { 'before': true }],
        'array-bracket-spacing': ['warn', 'never', { 
            'objectsInArrays': false,
            'arraysInArrays': false
         }],
        'func-call-spacing': ['warn', 'never'],
        'no-extra-parens':'warn',
        'max-len': ['warn', { 'code': 120 }],
        'new-cap': ['warn', {
            'newIsCap': true,
            'capIsNew': false
        }],
        'new-parens': 'warn',
        'space-in-parens': ['warn', 'never'],
        'no-lone-blocks': 'warn',
        'no-return-await': 'warn',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', { 'before': false, 'after': true }], 
        'switch-colon-spacing': 'error',
        'default-case': 'error',
        'await-promise': true,
        'class-name': true,
        'brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
        'object-curly-spacing': ['warn', 'always'],
        'no-multiple-empty-lines': ['warn', {
            'max': 2,
            'maxBOF': 0,
            'maxEOF': 1
        }],
        'padded-blocks': ['warn', 'never'],
        'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
        'key-spacing': ['warn', {
            'beforeColon': false,
            'afterColon': true,
            'mode': 'strict'
        }],
        'eol-last': ['warn', 'always'],
        'padded-blocks': ['error', 'never'],
        '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
        '@typescript-eslint/no-angle-bracket-type-assertion': false,
        '@typescript-eslint/no-parameter-properties': false,
        '@typescript-eslint/explicit-member-accessibility': true,
        '@typescript-eslint/indent': false,
        '@typescript-eslint/no-object-literal-type-assertion': false,
        '@typescript-eslint/prefer-for-of': true,
        "jsdoc-format": [true, "check-multiline-start"]
    }
};