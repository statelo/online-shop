# Online Shop

This project is still in development mode. Online shop is a simple
project where some list of clothes will be displayed and some add to 
basket, buy function, delete from basket functions will be implemented.
In this project were used 3 main technologies: **React.js for Front-End** and
**Node.js, MongoDB for Back-End**. Online shop project was developed for personal use. This site
has not been deployed, but you can download and try out this
project. You can read about core technologies, project structure 
and installation processes in the next sections.

**Note: This instructions must completely work on UNIX (macOS, Linux). Instructions
for Windows will be applied soon.**

## Technologies Used

Following technologies were used for this project:

###### Front-End
-	[create-react-app](https://github.com/facebookincubator/create-react-app)
- [react](https://github.com/facebook/react)
- [react-redux](https://github.com/reactjs/react-redux)
- [redux](https://github.com/reactjs/redux)
- [redux-thunk](https://github.com/gaearon/redux-thunk)
- [redux-logger](https://github.com/evgenyrodionov/redux-logger)
- [sass](https://github.com/webpack-contrib/sass-loader)
- [react-router](https://github.com/ReactTraining/react-router)
- [axios](https://github.com/mzabriskie/axios)
- [webpack](https://github.com/webpack/webpack)
- [bootstrap](https://github.com/twbs/bootstrap)

###### Back-End
- [nodejs](https://github.com/nodejs/node)
- [mongodb](https://github.com/mongodb/node-mongodb-native)
- [nodemon](https://github.com/remy/nodemon)
- [express](https://github.com/expressjs/express)
- [express-session](https://github.com/expressjs/session)
- [bcrypt-nodejs](https://github.com/shaneGirish/bcrypt-nodejs)
- [body-parser](https://github.com/expressjs/body-parser)
- [serve-favicon](https://github.com/expressjs/serve-favicon)
- [passport](https://github.com/jaredhanson/passport)
- [passport-local](https://github.com/jaredhanson/passport-local)
- [passport-facebook](https://github.com/jaredhanson/passport-facebook)
- [passport-twitter](https://github.com/jaredhanson/passport-twitter)
-	[passport-google](https://github.com/jaredhanson/passport-google-oauth2)

## Project Structure

This project was splitted on 2 folders: **online-shop/backend** and **online-shop/frontend**. 
Frontend folder was created with **create-react-app** project. Check link in technologies
section. Backend folder just using **server.js** as main file. 

Project structure can be described as following:

```
online-shop/
  backend/
    routes
  frontend/
    config
    public
    scripts
    src/
      actions
      components
      containers
      images
      reducers
```

**Note: Front-End folder was ejected with `npm run eject` command. Check out create-react-app repository.**

## Getting Started

To run this project on your local machine you need:
1. Prerequisites.
	- Node.js ^6.8.1
	- MongoDB ^3.4.6
	- npm ^3.10.8

2. Clone repository from GitHub.
	```sh
	git clone https://github.com/statelo/online-shop.git
	```

3. Install dependencies in Front-End folder.
	```sh
	cd online-shop
	cd frontend
	npm install / yarn install
	cd ..
	```

4. Install dependencies in Back-End folder.
	```sh
	cd backend
	npm install / yarn install
	```

**Note: To make your servers run you have to run scipts for Back-End and Front-End folders separately.**

5. Run Front-End and Back-End servers.
	```sh
	npm start
	```

## Thank You

If you have any questions you can email me to **statelo1992@gmail.com**
















