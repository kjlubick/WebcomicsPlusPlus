/*global Mousetrap*/

Mousetrap.bind('z', function() { 
	$('a.nav-back')[0].click();
});
Mousetrap.bind('c', function() { 
	$('a.nav-next')[0].click();
});
Mousetrap.bind('x', function() { 
	$('a.nav-random')[0].click();
});