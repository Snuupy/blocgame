var data = [
	"kick=test1",
	"kick=test2",
	"kick=test3"
];

for (i=0; i<data.length; i++){

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
	  }
	});

	xhr.open("POST", "http://blocgame.com/alliancestats.php?allianceid=2045");
	xhr.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
	xhr.setRequestHeader("upgrade-insecure-requests", "1");
	xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader("accept-language", "en-US,en;q=0.8");
	xhr.setRequestHeader("cache-control", "no-cache");

	xhr.send(data[i]);
	console.log(data[i]);
}
