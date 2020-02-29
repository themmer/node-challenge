There are going to be two branches develop and master
Master will have the solution. Develop branch is where the workshop will start
`git checkout develop`

# Requires node install
`npm install`

Post install of express npm package:
Edit `server.js`
https://expressjs.com/en/starter/hello-world.html

Run node file to start node server (command line):
`node server.js`

If you visit here the browser will show 'Hello World!'
http://localhost:3000/

Use a generator to keep things simple:
Run on the command line: 
- `npm install -g express-generator`
- `express --view=hbs myapp`
- `cd myapp`
- `npm install`

In package.json of myapp folder, replace the value of "scripts" with below
```
    "start": "node app.js",
    "reload": "nodemon DEBUG=myapp:* npm start"
```
In same file (package.json) after dependencies: {}
```
,
  "devDependencies": {
    "nodemon": "^2.0.2"
  }
```

Once both are added you can run auto reload: `npm run reload`

Test on a browser: http://localhost:3000
You should see `Welcome to Express`

Adding endpoints (routes):
https://expressjs.com/en/starter/basic-routing.html
You can skip the first one since there is already a get endpoint on /
Test the endpoints out using Postman

Serving Static Files:
https://expressjs.com/en/starter/static-files.html

Extra things to read if time:
https://expressjs.com/en/starter/faq.html

