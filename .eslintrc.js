module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb',
    ],
    globals: {
        test: 'readonly',
        expect: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: '16.13',
        },
    },
    plugins: [
        'react'
    ],
    rules: {
        'indent': ['error', 4],
        'react/jsx-indent': [2, 4],
        'no-console': 0,
        'no-debugger': 0,
        'no-plusplus': 0,
        'react/jsx-filename-extension': 0,
    },
};
