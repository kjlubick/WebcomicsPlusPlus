/*global Mousetrap*/

Mousetrap.bind('z', function() { 
	$('#previouslink')[0].click();
});
Mousetrap.bind('c', function() { 
	$('#nextlink')[0].click();
});
Mousetrap.bind('x', function() { 
	$('#randomlink')[0].click();
});