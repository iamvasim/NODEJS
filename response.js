const http = require("http");

const PORT = 5500; // ✅ Change to 5500 or 8080
const age =89;

http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.write("This is the understanding of server response <br>");
  response.write("<h2>Hello, I am response server</h2>");
  response.write("Hello my name is wasim<br>");
  response.write("Hello my name is wasim 6869<br>");
  response.write("samim")
  response.write(`
    <html>
    <head>
    <title>
    Code step by step 
    </title>
    </head>
    <body>
      <h1>Hello Wasim Ahmed</h1>
      <h2>
      `+age+`
      </h2>
       <h2>
      `+new Date()+`
      </h2>
    </body>
    </html>
  `);
  response.end();
}).listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});



