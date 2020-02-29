const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const fileContents = fs.readFileSync(__dirname + '/marvel_characters_info.csv', 'utf-8')

const records = parse(fileContents, {
  columns: true,
  skip_empty_lines: true
});

console.log(records[0]);
console.log();

const totalCount = records.length;
let maleCount = 0;
let femaleCount = 0;
let otherCount = 0;

console.log('Number of records: ', totalCount);

records.forEach(record => {
  if (record.Gender === 'Male') {
    maleCount++;
  } else if (record.Gender === 'Female') {
    femaleCount++;
  } else {
    otherCount++;
  }
})

console.log();
console.log('Gender:');
console.log('Male ', Number(maleCount / totalCount * 100).toFixed(2), '%');
console.log('Female ', Number(femaleCount / totalCount * 100).toFixed(2), '%');
console.log('Other ', Number(otherCount / totalCount * 100).toFixed(2), '%');
