const http = require('http');
const fs = require('fs'); // short for file system

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const index = fs.readFileSync(`${__dirname}/../client/client.html`); // return absolute file path to current directory
// most of the time do not want to do things synchronously, async functions are best

const onRequest = (request, response) => {
  console.log(request.url);

  // MIMEtype
  response.writeHead(200, { 'Content-Type': 'text/html' });
  // content type can be anything.. media/mpeg loads video
  response.write(index);
  response.end();
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
