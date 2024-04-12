# Unit Testing Mini Project

This project is associated with the unit testing short course of [Zuitt](https://zuitt.co/).

---

### About the Application

The application being tested is a basic API that features a simple GET and POST routes that will be tested by the test suite inside `./test`.


The GET `/` route returns a JSON with an empty object.

The GET `/rates` route returns all the exchange rates that are inside `./src/util.js`

The POST `/currency` features a set of validations that check if the request body contains all the necessary parameters and that there are no duplicate aliases.

The format of the data being expected by the POST route follows this example:

```
{
    alias: "riyadh",
    name: "Saudi Arabian Riyadh",
    ex: {
        'peso': 0.47,
        'usd': 0.0092,
        'won': 10.93,
        'yuan': 0.065
    }
}
```

While the data inside `./src/util.js` follows the following format:

```
{
    'peso': {
      	'name': 'Philippine Peso',
      	'ex':{
	        'usd': 0.020,
	        'won': 23.39,
	        'yen': 2.14,
	        'yuan': 0.14
      	}
    }
}
```

### About the Testing Suite

The Test Cases were written using Mocha and Chai and tests if all the validations and routes in this simple app is fully functional.

The test cases are inside `./test/routes_test.js`

The test suites check if the routes are running, if the validations that check if properties exist, are of the right type and are not empty, and if there are no conflicting aliases are properly functioning, and if the application returns a 200 OK response if everything is correct.

### Run the Tests

To try this out for yourself, start the server application using

`npm run dev`

Then run

`npm run test`

to run the test suites.