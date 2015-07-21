'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( mu, beta )
*	Partially applies location parameter `mu` and scale parameter `beta` and returns a function for evaluating the probability density function (PDF) for a Gumbel distribution.
*
* @param {Number} mu - location parameter
* @param {Number} beta - scale parameter
* @returns {Function} PDF
*/
function partial( mu, beta ) {

	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Gumbel distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
