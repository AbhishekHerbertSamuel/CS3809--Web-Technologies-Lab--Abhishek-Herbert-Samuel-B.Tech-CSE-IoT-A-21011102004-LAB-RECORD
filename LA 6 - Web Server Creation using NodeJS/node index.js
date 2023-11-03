const http = require('http');
const fs = require('fs');
const { parse } = require('querystring');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => { console.log(`Received request: ${req.method} ${req.url}`);
if (req.method === 'GET') { if (req.url === '/') {
// Route for the home page with a link to /datetime res.writeHead(200, { 'Content-Type': 'text/html' }); res.end(`
<h1>Hello, this is your NodeJS web server!</h1>
<p>Click <a href="/datetime">here</a> to see the current date and time in IST.</p> `);
} else if (req.url === '/datetime') {
// Route for displaying the current date and time in IST
const currentDate = new Date();
const options = { timeZone: 'Asia/Kolkata', hour12: true, timeStyle: 'full', dateStyle: 'full'
};
const istDate = currentDate.toLocaleString('en-IN', options);
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(`<h1>Current date and time in IST:</h1><p>${istDate}</p>`); } else {
// Handle 404 Not Found
res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('404 Not Found');
}
} else if (req.method === 'POST' && req.url === '/upload') {
// Route for handling file uploads (example) let body = '';
req.on('data', (chunk) => {
body += chunk.toString();
});
req.on('end', () => {
const postData = parse(body);
// Handle file upload logic here res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('File uploaded successfully!');
});
} else {
// Handle 405 Method Not Allowed res.writeHead(405, { 'Content-Type': 'text/plain' }); res.end('405 Method Not Allowed');
} });
server.listen(port, () => {
console.log(`Server running at http://localhost:${port}/`);
});
