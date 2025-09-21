const http = require('http');
const arg = process.argv;

// Get port from command line argument
const port = arg[2];

if (!port) {
    console.log("Please provide a port number as a command-line argument.");
    process.exit(1); // Exit if no port is provided
}

console.log("Port provided:", port);
console.log("All command-line arguments:", arg);

http.createServer((request, resp) => {
    resp.write('Testing input from command');
    resp.end();
}).listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
