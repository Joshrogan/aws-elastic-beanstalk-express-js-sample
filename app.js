const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Dummy Pipeline! try again! manual review. Testing webhook now'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
