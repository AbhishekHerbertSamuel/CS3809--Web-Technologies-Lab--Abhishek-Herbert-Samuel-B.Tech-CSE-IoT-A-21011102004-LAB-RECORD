// app.js
const express = require('express'); const app = express();
const port = 3000;
// Define routes app.get('/', (req, res) => {
res.send('Hello, this is the home route!'); });
app.get('/about', (req, res) => { res.send('This is the about route.');
});
// Start the server app.listen(port, () => {
console.log(`Server is running on port ${port}`); });
