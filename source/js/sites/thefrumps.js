/*global Mousetrap, $*/

Mousetrap.bind('z', function() { 
	$('.comic-nav-previous')[0].click();
});
Mousetrap.bind('c', function() { 
	$('.comic-nav-next')[0].click();
});
Mousetrap.bind('x', function() { 
	$('.comic-nav-random')[0].click();
});