# GH Pages Steps

- https://create-react-app.dev/docs/deployment/#github-pages
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

# Useful Links

- Github Pages Setup Link
  `https://create-react-app.dev/docs/deployment/#github-pages`
- Enable Emmet in React, JSX, VSCode
  `https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c`

- React Developer Tool Extension
  `https://extension.remotedev.io/`

- Switch between Dark / Light Theme
  `https://adityanaik.dev/blog/2020/05/20/material-ui-how-to-easily-set-up-dark-theme-toggle-in-react/`

# Firebase Config Update

- To avoid sharint the config in public repository, this file is not part of git repository.
- If you are cloning this project in new location, make sure, create `src/config/fire.config.js` refer the content from firebase project console.
