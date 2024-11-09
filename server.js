const http = require('http');
const routes =require('./routes')

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    
});


server.listen(3003, () => {
    console.log('Server is listening on port 3002');
});
