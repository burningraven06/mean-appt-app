## MEAN App

- Backend - Express (REST API) in JS
- Frontend - Angular 4 SPA in TS
- Frontend Design - Twitter Bootstrap 4
- Database - Mongo + Mongoose(ORM) 
- Authentication - JWT
- File Storage - Multer (API Mode)
- Backend Hosted - *Heroku*
- Frontend Hosted - *Firebase*
- Database Hosted - *MLAB*

## To Test This

#### Install Package Dependencies
```sh
# Install Backend Dependencies
$ cd mean-jrcp
$ yarn install 
#or with npm
$ npm install

#Install Frontend Dependencies
$ cd mean-jcrp/frontend
$ yarn install 
#or with npm
$ npm install
```

#### Setup ENV Files

```sh
$ cd mean-jrcp
$ touch env/keys.js
```

#### Provide DB INFO
```sh
#Update env/keys.js

module.exports = {
  MONGODB_LOCAL_URL: <YOUR_MONGODB_URL>,
  MLAB_DBURI : <YOUR_MONGODB_URL>,
  JWT_SECRET : <YOUR_JWT_SECRET>
}
```

#### RUN APP -> PROD MODE
```sh
$ cd mean-jrcp
$ yarn run start-app

#Or with npm 
$ npm run start-app
```

#### RUN APP (in Angular Dev Mode)
```sh
# Start Backend API

$ cd mean-jcrp
$ yarn run start-app

#Start Frontend SPA in Dev Mode, in another tab
$ cd mean-jrcp/frontend
$ ng serve

#Remeber to run : ng build  after updating the angular source
``` 

