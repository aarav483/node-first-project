const requesthandler=(req,res){
    const url=req.url;
    const method=req.method;




if (url === '/') {
    // Show the form on the root route
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
    res.write('</html>');
    return res.end();
}

if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const msg = parsedBody.split('=')[1];

        // Write the message to 'message.txt' and then redirect to display it
        fs.writeFile('message.txt', msg, (err) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/html');
                res.write('<html><body><h1>Error writing file!</h1></body></html>');
                return res.end();
            }
            res.statusCode = 302;
            res.setHeader('Location', '/message');
            return res.end();
        });
    });
} else if (url === '/message' && method === 'GET') {
    // Read and display the message from the file
    fs.readFile('message.txt', 'utf-8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/html');
            res.write('<html><body><h1>Error reading file!</h1></body></html>');
            return res.end();
        }

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>Message:</h1>');
        res.write('<p>' + data + '</p>'); // Display the message content
        res.write('<a href="/">Go Back</a>'); // Link to go back to form
        res.write('</body>');
        res.write('</html>');
        return res.end();
    });
}
}
module.exports=requesthandler;