const http = require('http');

const usersData = [
    { name: "wasim", age: "21", email: "joinvasim45@gmail.com" },
    { name: "samim", age: "20", email: "joinsasim45@gmail.com" },
    { name: "mobin", age: "30", email: "joimobin45@gmail.com" }
];

http.createServer((request, response) => {
    response.setHeader("Content-Type", "application/json"); // ✅ Correct MIME type
    response.write(JSON.stringify(usersData)); // Convert array to JSON string
    response.end();
}).listen(4800, () => {
    console.log("✅ Server running at http://localhost:4800");
});
