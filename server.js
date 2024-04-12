const express = require('express');

const app = express();

const PORT = 5001;

app.use(express.json());

require('./app/routes')(app, {});

app.listen(PORT, () => {
	console.log('Running on port ' + PORT);
})
