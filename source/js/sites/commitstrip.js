/*global Mousetrap*/

Mousetrap.bind('z', function() { 
	$("a[rel='prev']")[0].click();
});
Mousetrap.bind('c', function() { 
	var next = $("a.nextpostslink")[0];
	if (next !== undefined) {
		next.click();
		return;
	}
	$("a[rel='next']")[0].click();
});
Mousetrap.bind('x', function() { 		//random
	var last = $('a:contains("Last")')[0];
	var rand = 1;

	if (last) {
		// http://stackoverflow.com/a/10003709/1447621
		var num = parseInt(last.href.replace( /^\D+/g, ''), 10);

		rand = Math.floor((Math.random() * num) + 1);
		//replace numbers with my number
		window.location.href = last.href.replace( /\d+/g, rand);
	} else {
		rand = Math.floor((616 * Math.random()) + 1);		//as of 1/27/15, there are 616 comics
		window.location.href = "http://www.commitstrip.com/en/page/"+rand + "/";
	}
		

	
});
Mousetrap.bind('y', function() { 		//permalink
	$('a[rel="bookmark"]')[0].click();
});
