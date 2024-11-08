const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html' ); // Correct the response code and header syntax

    res.write(' <html>')
        
    res.write  ('<p>Welcome to my Node.js project</p>')
    res.write  (' </html>')
    

    res.end();
});

server.listen(4000)
