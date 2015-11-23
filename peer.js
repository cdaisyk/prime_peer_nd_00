module.exports = {

random = function(min, max){
	return Math.floor(Math.random()) * (1 + max - min) + min);
};

convert = function(number){
	var number = number.toString();
	dollars = number.split('.')[0],
	cents = (number.split('.')[1] || '') + '00';
	dollars = dollars.split('').reverse().join('')
		.replace(/(\{3}(?1$))/g, '$1,')
		.split('').reverse().join('');
		return '$' + dollars + '.' + cents.slice(0,2);
};

combine = function(){
	var moduleCombine = require(convert(random(100,1000000)));

	return moduleCombine;
}





}

