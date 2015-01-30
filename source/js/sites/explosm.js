/*global Mousetrap*/

Mousetrap.bind('z', function() { 
	$('a.previous-comic')[0].click();
});
Mousetrap.bind('c', function() { 
	$('a.next-comic')[0].click();
});
Mousetrap.bind('x', function() { 
	$('a.random-comic-link')[0].click();
});
