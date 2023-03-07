const http = require('http');
const url = require('url');

const server = http.createServer((req, res) =>{
    const queryObject = url.parse(req.url, true).query;
    const name = queryObject.name;
    if(name) {
        res.end(`Hello, ${name}!`);
    }else{
        res.end('Please Enter the name in the URL.');
    }
});

const port = 3000;
server.listen(port, () =>{
    console.log(`Server running at http://localhost:${port} `);
});