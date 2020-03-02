const express = require('express');
const router = express.Router();
const http = require("http");
const faker = require("faker");

// Proxy call
router.get('/', function (req, res, next) {
  const options = new URL('http://api.meetup.com/nebraskajs/events');

  const request = http.request(options, (response) => {
    const chunks = [];
    response.on('data', function (chunk) {
      chunks.push(chunk);
    });
    response.on('end', function () {
      // Buffer to String
      const returnString = Buffer.concat(chunks).toString();
      // String to Array of objects
      const returnValue = JSON.parse(returnString);
      // Return latest event
      res.json(returnValue[0]);
    });

  });
  request.on('error', function (error) {
    res.json({ errors: ['Error occurred on getting data'] });
  });
  request.end();
});

// FAKER endpoint
// http://localhost:3000/faker
router.get('/faker', function (req, res, next) {
  res.json({
    name: faker.name.findName(),
    email: faker.internet.email(),
    jobTitle: faker.name.title()
  });
});

module.exports = router;
