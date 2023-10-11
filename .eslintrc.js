module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "jest/globals": true, 
        "es2021": true
    },
    "extends": "eslint:recommended",
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
    "plugins": ["jest"],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "node/no-missing-require": "off", 
        "node/no-unpublished-require": "off",
    }
}
