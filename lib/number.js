'use strict';

// FUNCTIONS //

var exp = Math.exp;

// PDF //

/**
* FUNCTION: pdf( x, mu, beta )
*	Evaluates the probability density function (PDF) for a Gumbel distribution with location parameter `mu` and scale parameter `beta` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} mu - location parameter
* @param {Number} beta - scale parameter
* @returns {Number} evaluated PDF
*/
function pdf( x, mu, beta ) {
	var z = ( x - mu ) / beta;
	return ( 1 / beta ) * exp( -z - exp( -z ) );
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
