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
- https://expressjs.com/en/starter/basic-routing.html
- You can skip the first one since there is already a get endpoint on
- Just put the code samples in the routes/index.js route otherwise a prefix of users will happen on routes/users.js
- Test the endpoints out using Postman
- See: Intermediate.postman_collection.json

Serving Static Files:
- https://expressjs.com/en/starter/static-files.html
- The code has been already added if you did the express generator
- Find an image online and save it to the public/images folder in `myapp`
- Try to get the image resource
- E.G. in the solutions/public folder there is a dog.jpg: http://localhost:3000/images/dog.jpg

Extra things to read if time:
https://expressjs.com/en/starter/faq.html

If you are stuck and looking for hints there is a working solution in the solutions folder
