// external imports
const child_process = require('child_process')

child_process.exec('electron ./dist/main.js')

console.log('hello')
