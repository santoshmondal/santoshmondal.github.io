# README

- Hello This is Santosh Mondal Here.
- Hello This is Santosh Mondal Here.

# Steps

- Install the Dev Dependency `yarn add gh-pages -D`
- Update the package.json with following script,

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

- Might need to add the `homepage` in package.json
  `"homepage": "https://santoshmondal.github.io",`

- Crate Repository at Github with username.github.io,
- In repository settings, make sure the branch selected is `gh-pages`
