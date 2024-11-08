const http = require("http");

const server = http.createServer((req, res) => {
   const url=req.url;
   if(url==='/'){
    res.setHeader('Content-Type', 'text/html' ); // Correct the response code and header syntax

    res.write(' <html>')
        
    res.write  ('<body><form action "/message" method="POST"<input type="text"><button type="submit"></button>send</form></body>')
    res.write  (' </html>')
    

    res.end();

   }
    res.setHeader('Content-Type', 'text/html' ); // Correct the response code and header syntax

    res.write(' <html>')
        
    res.write  ('<p>Welcome to my Node.js project</p>')
    res.write  (' </html>')
    

    res.end();
});

server.listen(4000)
