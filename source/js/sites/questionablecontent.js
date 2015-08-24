/*global Mousetrap, $*/

Mousetrap.bind('z', function() { 
	$('a:contains("Previous")')[0].click();
});
Mousetrap.bind('c', function() { 
	$('a:contains("Next")')[0].click();
});
Mousetrap.bind('x', function() { 
	$('a:contains("Random")')[0].click();
});