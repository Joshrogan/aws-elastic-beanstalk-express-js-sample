const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('After you commit, the pipeline starts and will require manual approval before final stage'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
