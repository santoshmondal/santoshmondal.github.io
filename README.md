# GH Pages Steps

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

# Enable Emmet in React, JSX, VSCode

- https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c
