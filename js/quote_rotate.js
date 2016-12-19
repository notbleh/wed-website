var quotations = [
	{
		quote  : "I choo choo choose you.",
		author : "Ralph Wigum"
	},

	{
		quote  : "Love can sweep you off your feet and carry you along in a way you've never known before.<br> But the ride always ends, and you end up feeling lonely and bitter.<br> Wait. It's not love I'm describing. I'm thinking of a monorail.",
		author : "Jack Handey"
	}


];

var lastQuote = 0;
var whichQuote = 0;

var main = function() {
	// Start of with an initial quote.
	whichQuote = Math.floor( Math.random() * quotations.length );
	$( '.quote' ).html( quotations[ whichQuote ].quote );
	$( '.author' ).html( quotations[ whichQuote ].author );

	// Generate a new quote every time the Generate Random Quote button is clicked.
	$( '#generate-quote' ).click( function() {
		lastQuote = whichQuote;

		// Make sure we don't repeat the same quote twice in a row.
		while( lastQuote === whichQuote ) {
		 	whichQuote = Math.floor( Math.random() * quotations.length );
		}

		$( '.quote' ).html( quotations[ whichQuote ].quote );
		$( '.author' ).html( quotations[ whichQuote ].author );
	});
}

$(document).ready( main );
