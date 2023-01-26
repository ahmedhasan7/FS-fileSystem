import fs from "fs/promises"
let main =async ()=>{
    console.log("hello")
    let filename = "writefile.txt"
    let data = ("hi univers")
    fs.writeFile(filename,data,(err,result)=>{})
}
main()