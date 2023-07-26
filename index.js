// http module
const http = require('http');


const app = http.createServer((req, res) => {


  
  res.write("Hello");

 
  res.end();
});

const port = 3000;

app.listen(port, () => {
  console.log("server is running")
});

// express module