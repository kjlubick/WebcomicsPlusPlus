/*global Mousetrap*/

var listOfComics = [];

function getComicsFromAwkwardZombieAndStore() {
	$.ajax({
		  url: "http://www.awkwardzombie.com/index.php?page=1",
		  success: function(data) {
		  	console.log("grabbing awkward zombie comic list");
		  	var newList = [];
		  	var table = $(data).find('#archive_table');
		  	table.find('tr').each(function(i, element) {
		  		var link = $(element).find('a')[0];
		  		newList.push(link.href);
		  	});
		  	listOfComics = newList;
		  	localStorage.setItem("awkward_zombie_comics_list", newList);
		  	localStorage.setItem("awkward_zombie_comics_updated", (new Date()).getTime());
		  },
		  dataType: "html"
		});
}

var updatedTime = localStorage.getItem("awkward_zombie_comics_updated");
if (updatedTime === undefined) {
	getComicsFromAwkwardZombieAndStore();
}
else {
	//put something there temporarily
	listOfComics = localStorage.getItem("awkward_zombie_comics_list").split(',');
	var lastUpdateDelta = (new Date()).getTime() - updatedTime;
	if (lastUpdateDelta > 604800000) { //milliseconds in a week
		//update
		getComicsFromAwkwardZombieAndStore();
	} 
} 

Mousetrap.bind('z', function() { 
	$('img[alt="Previous Comic"]').closest('a')[0].click();
});
Mousetrap.bind('c', function() { 
	$('img[alt="Next Comic"]').closest('a')[0].click();
});

Mousetrap.bind('x', function() { 
	var rand = Math.floor((listOfComics.length * Math.random()));
	window.location.href = listOfComics[rand];
});
