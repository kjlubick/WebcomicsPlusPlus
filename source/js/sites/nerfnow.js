/*global Mousetrap*/

Mousetrap.bind('z', function() { 
	$('a:contains("Previous")')[0].click();
});
Mousetrap.bind('c', function() { 
	$('a:contains("Next")')[0].click();
});

var listOfComics = [];

function getComicsFromNerfNowAndStore() {
	$.ajax({
		  url: "http://www.nerfnow.com/archives",
		  success: function(data) {
		  	console.log("grabbing nerf now comic list");
		  	var newList = [];
		  	var table = $(data).find('#archives');
		  	table.find('a').each(function(i, element) {
		  		newList.push(element.href);
		  	});
		  	listOfComics = newList;
		  	localStorage.setItem("nerf_now_comics_list", newList);
		  	localStorage.setItem("nerf_now_comics_updated", (new Date()).getTime());
		  },
		  dataType: "html"
		});
}

var updatedTime = localStorage.getItem("nerf_now_comics_updated");
if (updatedTime === undefined || updatedTime === null) {
	getComicsFromNerfNowAndStore();
}
else {
	//put something there temporarily
	listOfComics = localStorage.getItem("nerf_now_comics_list").split(',');
	var lastUpdateDelta = (new Date()).getTime() - updatedTime;
	if (lastUpdateDelta > 604800000) { //milliseconds in a week
		//update
		getComicsFromNerfNowAndStore();
	} 
} 

Mousetrap.bind('x', function() { 
	var rand = Math.floor((listOfComics.length * Math.random()));
	window.location.href = listOfComics[rand];
});