const addon = require('./build/Release/nodeprime');

addon.getPrimes(1000, function (err, primes) {
		console.log('1o result:', {primes_size: primes.length});
	 });
addon.getPrimes(100, function (err, primes) {
		console.log('2o result:', {primes_size: primes.length});
	 });
addon.getPrimes(10, function (err, primes) {
		console.log('3o result:', {primes_size: primes.length});
	 });
