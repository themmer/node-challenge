There are going to be two branches develop and master
Master will have the solution. Develop branch is where the workshop will start
`git checkout develop`

# Requires node install
`npm install`

Post install of express npm package:
proxy.js
https://expressjs.com/en/starter/hello-world.html

Run node file to start node server:
`node proxy.js` or for auto reload `npm run reload`

If you visit here the browser will show 'Hello World!'
http://localhost:3000/

Go through the steps of the generator and modify if you don't feel comfortable adding manual setup
https://expressjs.com/en/starter/generator.html
for a view it says to use `express --view=pug myapp`, I would recommend `express --view=hbs myapp`

Ember (UI) is set up for http://localhost:3000/api (GET Method) as the endpoint for the node server endpoint.


