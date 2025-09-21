const http = require('http');

http.createServer((request, response) => {
    console.log("Host:", request.headers.host);
    console.log("Headers:", request.headers);
    console.log("URL:", request.url);

    response.setHeader("Content-Type", "text/html");

    if (request.url === "/") {
        response.write("<h1>Home Page</h1>");
    } else if (request.url === "/login") {
        response.write("<h1>Login Page</h1>");
    } 
    else if (request.url === "/about") {
        response.write("<h1>About Page</h1>");
    }else {
        response.write("<h1>404 Page Not Found</h1>");
    }
    
    

    response.end();
}).listen(4500, () => {
    console.log("Server running at http://localhost:4500");
});
