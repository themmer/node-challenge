There are going to be two branches develop and master
Master will have the solution. Develop branch is where the workshop will start
`git checkout develop`

# Requires node install
`npm install`

Post install of express npm package:
Edit `server.js`
https://expressjs.com/en/starter/hello-world.html

Run node file to start node server:
`node server.js`

If you visit here the browser will show 'Hello World!'
http://localhost:3000/

Use a generator to keep things simple:
- https://expressjs.com/en/starter/generator.html
- You only need to run this `npx express-generator --view=hbs`

In package.json, replace the value of "scripts" with below
```
    "start": "node app.js",
    "reload": "nodemon DEBUG=myapp:* npm start"
```
Once added you can run auto reload: `npm run reload`

Adding endpoings (routes):
https://expressjs.com/en/starter/basic-routing.html

Serving Static Files:
https://expressjs.com/en/starter/static-files.html

Extra things to read if time:
https://expressjs.com/en/starter/faq.html

