// Importing external package
const colors = require('colors');

// Console colors
console.log(colors.green("my name is wasim"));
console.log(colors.red("my name is wasim"));
console.log(colors.yellow("my name is wasim"));
console.log(colors.black("my name is wasim"));

// Importing http module
const http = require('http');

// Creating server
http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });

    // Sending colored text to browser
    // IMPORTANT: colors only works in console, not in browser HTML.
    // So use inline CSS for browser color.
    response.write('<h1 style="color:red;">hello my name is wasim</h1>');
    
    response.end();

}).listen(4700, () => {
    console.log("Server is running at http://localhost:4700".blue); // using colors here works
});
