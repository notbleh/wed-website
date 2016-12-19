var quotations = [
	{
		quote  : "Experience is a hard teacher. First you get the test, and then you get the lesson.",
		author : "Brian D. Krueger"
	},

	{
		quote  : "No one is ever prepared for life. Those who succeed are those who pass the test before they are given the lessons.",
		author : "Unknown"
	},
	{
		quote  : "Love can sweep you off your feet and carry you along in a way you've never known before. But the ride always ends, and you end up feeling lonely and bitter. Wait. It's not love I'm describing. I'm thinking of a monorail.",
		author : "Jack Handey"
	},


];

var lastQuote = 0;
var whichQuote = 0;

var main = function() {
	// Start of with an initial quote.
	whichQuote = Math.floor( Math.random() * quotations.length );
	$( '.quote' ).text( quotations[ whichQuote ].quote );
	$( '.author' ).text( quotations[ whichQuote ].author );

	// Generate a new quote every time the Generate Random Quote button is clicked.
	$( '#generate-quote' ).click( function() {
		lastQuote = whichQuote;

		// Make sure we don't repeat the same quote twice in a row.
		while( lastQuote === whichQuote ) {
		 	whichQuote = Math.floor( Math.random() * quotations.length );
		}

		$( '.quote' ).text( quotations[ whichQuote ].quote );
		$( '.author' ).text( quotations[ whichQuote ].author );
	});
}

$(document).ready( main );
