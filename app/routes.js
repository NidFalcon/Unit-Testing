const { exchangeRates } = require('../src/util.js');

module.exports = (app) => {
	app.get('/', (req, res) => {
		return res.send({'data': {} });
	});

	app.get('/rates', (req, res) => {
		return res.send({
			rates: exchangeRates
		});
	})

	app.post('/currency', (req, res) => {

		// ADD YOUR IF CONDITIONS IN THIS FUNCTION

		if(!req.body.hasOwnProperty("name")){
			return res.status(400).send({
				"error" : "Missing Parameter NAME"
			});
		}

		if (typeof req.body.name !== "string"){
			return res.status(400).send({
				"error" : "NAME is not a String"
			});
		}

		if (req.body.name === ""){
			return res.status(400).send({
				"error" : "NAME must not be empty"
			});
		}

		if(!req.body.hasOwnProperty("ex")){
			return res.status(400).send({
				"error" : "Missing Parameter EX"
			});
		}

		if (typeof req.body.ex !== 'object'){
			return res.status(400).send({
				"error" : "EX must be an object"
			});
		}

		if (Object.keys(req.body.ex).length === 0){
			return res.status(400).send({
				"error" : "EX must not be empty"
			});
		}

		if(!req.body.hasOwnProperty("alias")){
			return res.status(400).send({
				"error" : "Missing Parameter ALIAS"
			});
		}

		if (typeof req.body.alias !== "string"){
			return res.status(400).send({
				"error" : "ALIAS is not a String"
			});
		}

		if (req.body.alias === ""){
			return res.status(400).send({
				"error" : "ALIAS must not be empty"
			});
		}

		if (exchangeRates.hasOwnProperty(req.body.alias)) {
			return res.status(400).send({
				"error" : "Duplicate Found"
			})
		}
		
		return res.status(200).send();
	})
}
