import fs from "fs"

let filename = "writefile . txt"
let data = "a"

fs.writeFile(filename,data,(err,result)=>{
    console.log(err)
 })

 fs.readFile(filename,"UTF-8",(err, result)=>{console.log(result)})

 fs.unlink(filename,(err)=>{console.error(err)})
