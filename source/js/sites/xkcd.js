/*global Mousetrap*/

Mousetrap.bind('z', function() { 
	$("a[rel='prev']")[0].click();
});
Mousetrap.bind('c', function() { 
	$("a[rel='next']")[0].click();
});
Mousetrap.bind('x', function() { 
	$('a:contains("Random")')[0].click();
});
