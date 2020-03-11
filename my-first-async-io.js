const fs = require('fs')
fs.readFile(process.argv[2],'utf-8',(err, content) => {
    if(err){
        throw err
    }
    let x = content.split('\n')
    console.log(x.length - 1)
})