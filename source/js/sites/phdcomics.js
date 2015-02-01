/*global Mousetrap*/

Mousetrap.bind('z', function() { 
	var normal = $('img[src="images/prev_button.gif"]').closest('a')[0];
	if (normal)
		normal.click();
	// in incognito mode
	$('a:contains("previous")')[0].click();

});
Mousetrap.bind('c', function() { 
	var normal = $('img[src="images/next_button.gif"]').closest('a')[0];
	if (normal)
		normal.click();
	// in incognito mode
	$('a:contains("next")')[0].click();
});
Mousetrap.bind('b', function() { 
	$('img[src="../images/emergency.gif"]').closest('a')[0].click();
});
Mousetrap.bind('x', function() { 		//random
	var rand = Math.floor((1777 * Math.random()) + 1);		//as of 1/31/15, there are 1777 comics
	//replace numbers with my number
	window.location.href = window.location.href.replace( /\d+/g, rand);
	
});