const chai = require('chai');
const expect = chai.expect;
const http = require('chai-http');
chai.use(http);

describe('forex_api_test_suite', () => {
	
	it('test_api_get_rates_is_running', () => {
		chai.request('http://localhost:5001').get('/rates')
		.end((err, res) => {
			expect(res).to.not.equal(undefined);
		})
	})
	
	it('test_api_get_rates_returns_200', (done) => {
		chai.request('http://localhost:5001')
		.get('/rates')
		.end((err, res) => {
			expect(res.status).to.equal(200);
			done();	
		})		
	})
	
	it('test_api_get_rates_returns_object_of_size_5', (done) => {
		chai.request('http://localhost:5001')
		.get('/rates')
		.end((err, res) => {
			expect(Object.keys(res.body.rates)).does.have.length(5);
			done();	
		})		
	})

	// ADD YOUR UNIT TEST BELOW
	
	//Check if post /currency is running
	it('1_test_api_post_currency_is_running', () => {
		chai.request('http://localhost:5001').post('/currency')
		.end((err, res) => {
			expect(res).to.not.equal(undefined);
		})
	})

	//Check if post /currency returns status 400 if name is missing

	it('2_test_api_post_return_400_if_no_name', (done) => {
		chai.request('http://localhost:5001').post('/currency')
		.send(
			{
				alias: "riyadh",
				ex: {
					'peso': 0.47,
					'usd': 0.0092,
					'won': 10.93,
					'yuan': 0.065
				}
			}
		)
		.end((err, res) => {
			expect(res.status).to.equal(400);
			done();
		})
	})

	// Check if post /currency returns status 400 if name is not a string
	it('3_test_api_post_return_400_if_name_not_a_string', (done) => {
		chai.request('http://localhost:5001').post('/currency')
		.send(
			{
				alias: "riyadh",
				name: 1000,
				ex: {
					'peso': 0.47,
					'usd': 0.0092,
					'won': 10.93,
					'yuan': 0.065
				}
			}
		)
		.end((err, res) => {
			expect(res.status).to.equal(400);
			done();
		})
	})


	// Check if post /currency returns status 400 if name is empty
	it('4_test_api_post_return_400_if_name_is_empty', (done) => {
		chai.request('http://localhost:5001').post('/currency')
		.send(
			{
				alias: "riyadh",
				name: "",
				ex: {
					'peso': 0.47,
					'usd': 0.0092,
					'won': 10.93,
					'yuan': 0.065
				}
			}
		)
		.end((err, res) => {
			expect(res.status).to.equal(400);
			done();
		})
	})

	// Check if post /currency returns status 400 if ex is missing
	it('5_test_api_post_return_400_if_no_ex', (done) => {
		chai.request('http://localhost:5001').post('/currency')
		.send(
			{
				alias: "riyadh",
				name: 'Saudi Arabian Riyadh'
			}
		)
		.end((err, res) => {
			expect(res.status).to.equal(400);
			done();
		})
	})


	// Check if post /currency returns status 400 if ex is not an object
	it('6_test_api_post_return_400_if_ex_not_a_object', (done) => {
		chai.request('http://localhost:5001').post('/currency')
		.send(
			{
				alias: "riyadh",
				name: "Saudi Arabian Riyadh",
				ex: "Object"
			}
		)
		.end((err, res) => {
			expect(res.status).to.equal(400);
			done();
		})
	})

	// Check if post /currency returns status 400 if ex is empty
	it('7_test_api_post_return_400_if_ex_is_empty', (done) => {
		chai.request('http://localhost:5001').post('/currency')
		.send(
			{
				alias: "riyadh",
				name: "Saudi Arabian Riyadh",
				ex: {}
			}
		)
		.end((err, res) => {
			expect(res.status).to.equal(400);
			done();
		})
	})

	//  Check if post /currency returns status 400 if alias is missing
	it('8_test_api_post_return_400_if_no_alias', (done) => {
		chai.request('http://localhost:5001').post('/currency')
		.send(
			{
				name: 'Saudi Arabian Riyadh',
				ex : {
					'peso': 0.47,
					'usd': 0.0092,
					'won': 10.93,
					'yuan': 0.065
				}
			}
		)
		.end((err, res) => {
			expect(res.status).to.equal(400);
			done();
		})
	})

	// Check if post /currency returns status 400 if alias is not an string
	it('9_test_api_post_return_400_if_alias_not_a_string', (done) => {
		chai.request('http://localhost:5001').post('/currency')
		.send(
			{
				alias: 1000,
				name: "Saudi Arabian Riyadh",
				ex: {
					'peso': 0.47,
					'usd': 0.0092,
					'won': 10.93,
					'yuan': 0.065
				}
			}
		)
		.end((err, res) => {
			expect(res.status).to.equal(400);
			done();
		})
	})

	// Check if post /currency returns status 400 if alias is empty
	it('10_test_api_post_return_400_if_alias_is_empty', (done) => {
		chai.request('http://localhost:5001').post('/currency')
		.send(
			{
				alias: '',
				name: 'Saudi Arabian Riyadh',
				ex: {
					'peso': 0.47,
					'usd': 0.0092,
					'won': 10.93,
					'yuan': 0.065
				}
			}
		)
		.end((err, res) => {
			expect(res.status).to.equal(400);
			done();
		})
	})


	// Check if post /currency returns status 400 if all fields are complete but there is a duplicate alias
	it('11_test_api_post_return_400_if_there_is_duplicate_alias', (done) => {
		chai.request('http://localhost:5001').post('/currency')
		.send(
			{
				alias: "peso",
				name: "Saudi Arabian Riyadh",
				ex: {
					'peso': 0.47,
					'usd': 0.0092,
					'won': 10.93,
					'yuan': 0.065
				}
			}
		)
		.end((err, res) => {
			expect(res.status).to.equal(400);
			done();
		})
	})

	// Check if post /currency returns status 200 if all fields are complete and there are no dupicates
	it('12_test_api_post_return_200_if_no_dupes', (done) => {
		chai.request('http://localhost:5001').post('/currency')
		.send(
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
		)
		.end((err, res) => {
			expect(res.status).to.equal(200);
			done();
		})
	})

})
