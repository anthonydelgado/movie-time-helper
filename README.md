# redux-starter

**NOTE:** Please check out [redux-starter-v2](https://github.com/marcgarreau/redux-starter-v2), which uses `create-react-app`
as its foundation. This repo is not actively maintained. Now back to your regularly scheduled entertainment...

---

Many of the choices made in this starter app are documented in this [blog post](https://quickleft.com/blog/redux-in-plain-english-building-boilerplate/).

Looking to learn Redux? I walk through an example workflow [here](https://quickleft.com/blog/redux-plain-english-workflow/).

### Installation
- Clone this repo.
- Run `npm install` to install dependencies.
- Run `npm start` to start the dev server and visit `http://localhost:5000` to see the app.

Note: `Ctrl + H` hides the Redux DevTools, `Ctrl + W` changes its position on the screen.

### Technologies
This starter app includes my choice configuration for:
- React + Redux
- Routing: react-router + react-router-redux
- Tooling: webpack, babel, eslint, karma, hot loading, redux-devtools
- Testing: mocha, expect, enzyme

### Deployment
This app is ready for deployment on Heroku. After creating a project on Heroku,
configure the remote destination with: `heroku git:remote -a <project-name>`,
then `git push heroku master` your way to glory.

An example deployment lives at https://redux-starter.herokuapp.com/.
