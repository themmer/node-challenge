Create a web server endpoint to call another web service (proxy) to return fetched data to the client

Go to advanced directory in git checkout and get npm dependencies
`npm install`

See the intermediate README.md for setting up a server and creating an endpoint

Run program: 
- Check path to your file and something like here `node filepath/bin/www` or for auto reload `npm run reload` if you set up the path on the package.json/scripts object. Look at intermediate package.json

API to call for meetup events:
- http://api.meetup.com/nebraskajs/events

Requirement:
- Return the first event in the array of events (the latest event)

Docs on Http for node:
- https://nodejs.org/api/http.html#http_http_request_options_callback

If you have free time check out faker.js and create an endpoing that utlizes faker.js. The endpoint would return a json payload using fake data that will change on each call.

https://github.com/marak/Faker.js/

Hit the endpoint multiple times to see the responses change. This is useful for prototyping or working ahead of the server when you have an api contract

If you are stuck and looking for hints there is a working solution in the solutions folder