# webpack-tutorial

This configuration of webpack allows you to run es6 function for older browser with the help of babel. To check this out you can run it:
\$(npm bin)/babel ./src/greeting.js

To run development mode run: npm run dev
To run production mode run: npm run build

00-react-config

For this part I added in:

- dependencies: react, react-dom and prop-types
- devDependecies: @babel/preset-react

And included @babel/preset-react in presets in webpack.config.js, this is required to understand jsx

added html-webpack-plugin

webpack-dev-server added, webpack.dev and webpack.prod files added

webpack-bundle-analyzer added to analyze production build, cmd: npm run build

react CDN links added, and externalized react and react-dom in webpack-config-prod

to check browserslist: npx browserslist "last 2 versions, not dead, not < 2%"

Asynchronously Load webpack Bundles through Code-splitting and React Suspense
for Asynchronously we need @babel/plugin-syntax-dynamic-import to add to plugins

new packages needed to test react components with jest: npm i -D react-testing-library jest-dom
and
npm i -D babel-jest babel-core@bridge

Configure Prettier to Automatically Format Code: npm i -D prettier pretty-quick and added new script "format": "pretty-quick" in package.json

Configure Prettier to Automatically Format Code with:
npm i -D prettier pretty-quick
pretty-quick and prettier and added .prettierrc and .prettierignore files


Avoid Common JavaScript Errors with ESLint:
added a picture how to init eslint in eslint-pic with cmds: npx eslint --init

needed: .eslintrc.json, .eslintignore


Check for Accessibility Issues in JSX with the jsx-a11y ESLint Plugin:
npm i -D eslint-plugin-jsx-a11y
