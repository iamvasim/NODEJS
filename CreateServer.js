const http = require("http"); // import http for creating server

http.createServer((request, response) => { 

    response.writeHead(200, { "Content-Type": "text/html" }); // good practice to define content type

    response.write("This is wasim Ahmed <br>"); // plain text with line break
    response.write("<h1>This is wasim Ahmed</h1>"); // h1 should be in quotes (string)

    response.end("Hello"); // end is very important to close the response

}).listen(4900, () => {
    console.log("Server is running at http://localhost:4900");
});


