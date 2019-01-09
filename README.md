# webpack-tutorial


 This configuration of webpack allows you to run es6 function for older browser with the help of babel. To check this out you can run it:
 $(npm bin)/babel ./src/greeting.js

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
