const fs = require('fs')
fs.readdir(process.argv[2],(err, content)=>{
    if(err){
        throw err
    }
})