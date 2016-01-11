var args = process.argv.slice(2);

result = args.reduce(function(previousValue, currentValue, currentIndex, arr) {
	return parseFloat(previousValue) + parseFloat(currentValue);
}, 0);

console.log(result);