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
for a view it says to use `npx express-generator`, I would recommend `npx express-generator --view=hbs`

Same thing with the step after
`express --view=hbs myapp`

Auto reload has been setup already `npm run reload`

 If you are looking for more things to do you can find out how to serve content within this tutorial:
 - https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website


