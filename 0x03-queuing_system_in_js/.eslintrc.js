module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
	"node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended",
	"eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
	"project": "./tsconfig.json"
    },
    "plugins": [
	"@typescript-eslint",
        "react"
    ],
    "rules": {
    }
}
