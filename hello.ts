// import * as truncate from 'lodash.truncate';
import truncate = require('lodash.truncate');

const longStr = "sdfdsfsdfdsfsdfdsfsdfdsf";

const short = truncate(longStr, {
  length: 10,
  omission: '...'
})

console.log(short);
