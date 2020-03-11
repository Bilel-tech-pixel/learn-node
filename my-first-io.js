const fs = require('fs')
let fg =  fs.readFileSync(process.argv[2])
let fgs = fg.toString().split('\n')
console.log(fgs.length-1)