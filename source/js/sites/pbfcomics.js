/*global Mousetrap*/

Mousetrap.bind('z', function() { 
	$('img[src="/images/Older.jpg"]').closest('a')[0].click();
});
Mousetrap.bind('c', function() { 
	$('img[src="/images/Newer.jpg"]').closest('a')[0].click();
});
Mousetrap.bind('x', function() { 
	$('img[src="/images/Random.jpg"]').closest('a')[0].click();
});