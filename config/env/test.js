module.exports = {
	env: 'test',
	db: 'mongodb://localhost/contatooh_test',
	sauceTestName: '@rpeleias Contatooh test',
	sauceUser: process.env.SAUCE_USERNAME,
	sauceKey: process.env.SAUCE_ACCESS_KEY,
	travisJobNumber: process.env.TRAVIS_BUILD_NUMBER,
	travisBuild: process.env.TRAVIS_BUILD_NUMBER,
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	seleniumUser: process.env.SELENIUM_USER,
	seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD
};