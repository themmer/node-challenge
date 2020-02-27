const parse = require('csv-parse/lib/sync');
const assert = require('assert');

const input = `
"key_1","key_2"
"value 1","value 2"
`;

const records = parse(input, {
  columns: true,
  skip_empty_lines: true
});
console.log(records);