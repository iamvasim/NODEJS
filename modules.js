const fs = require('fs');
const os = require('os'); // tells about operating system 

fs.writeFileSync("dummy.txt","hello this is  ceated from modules file ");


console.log(os.platform())
console.log(os.hostname())
console.log(os.cpus())


