/*global Mousetrap*/

Mousetrap.bind('z', function() { 
	$("a.navi-prev")[0].click();
});
Mousetrap.bind('c', function() { 
	$("a.navi-next")[0].click();
});
Mousetrap.bind('x', function() { 
	$('a.navi-random')[0].click();
});
