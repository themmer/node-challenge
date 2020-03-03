Build a node.js script that parses a csv (comma separated values)

CSV parse npm dependency already added to package.json dependencies

- https://csv.js.org/parse
- https://csv.js.org/parse/api/sync

If you have extra time (bonus points) consider doing stats (count, average, percentage of types, etc) from your chosen csv file

The UI is not needed for the beginner workshop

To setup and run (requires node to be installed)

`npm install` or `yarn` if installed
For a setup test you can run `node test.js`
Main file to run/edit: `node parse.js` or for auto reload `npm run reload`

Example Code
- https://github.com/adaltas/node-csv-parse/tree/master/samples
- https://repl.it/@JadeSlade/CSV-Sample

npm package for csv parsing (already included in package.json)
https://csv.js.org/parse/
https://github.com/adaltas/node-csv

Details
- CSV File provided or find/create your own
./marvel_characters_info.csv
- The goal would be to be able to read the csv file in
Make sure it is read into an object
- Output the first object in the list from the csv
- Challenge yourself to output a stat like total count and Gender count  / percentage
- Remember to use your resources. We have people helping, other members, and searching on the web for node samples
- If you are stuck and looking for hints there is a working solution: solution.js

