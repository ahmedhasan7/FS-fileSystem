import fs from "fs/promises";

let main = async() => {
    try {
       console.clear();
       let fileName = "writeFileUsingPromises.txt";
       let data = "HEllo I am Tony Stark ";
       await fs.writeFile(fileName, data);
       console.log("File write hui");
       
       let read = await fs.readLine(fileName, "utf-8");
       console.log(read);
       console.log("File Read hui");

       await fs.mkdir("TEST");

    } catch (error) {
        console.log(error);
        }
};
main();