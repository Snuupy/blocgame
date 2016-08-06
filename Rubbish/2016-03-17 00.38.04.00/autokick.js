//set start point
var start = new Date(); 

var data = [
"kick=Utopia",
"kick=Siwenna",
"kick=Wielkopl",
"kick=Amazonian Union",
"kick=Aryana",
"kick=North Oman",
"kick=Junoma",
"kick=Gallifrey",
"kick=The Deserted",
"kick=Byzantium",
"kick=Zinlandia",
"kick=Dimaster",
"kick=Khebabistan",
"kick=The UCOA",
"kick=Egoria",
"kick=Bahavian",
"kick=Weast America",
"kick=Shatmapants",
"kick=Nautique",
"kick=BOOP",
"kick=Sepidajistan",
"kick=Lorigan",
"kick=Fantastica",
"kick=Yannevia",
"kick=Efren",
"kick=fotamorgana",
"kick=Neechanville",
"kick=Kota Tinggi",
"kick=Kritch",
"kick=Lomar",
"kick=Guadianstan",
"kick=South Minnesota",
"kick=Bantersciz",
"kick=Samsayum",
"kick=the murloc",
"kick=TrumpCity",
"kick=Mzab",
"kick=Rebel Scum",
"kick=Necessidades",
"kick=Dank Weed",
"kick=Oilpotamia",
"kick=Buzir",
"kick=DevilsAndDemons",
"kick=Gumbo",
"kick=Moneymaking",
"kick=Alpha",
"kick=Rafeal",
"kick=El Tahib",
"kick=Canantartica",
"kick=Perullamas",
"kick=Afpakistan",
"kick=Wolfveiria",
"kick=Flower Hippies",
"kick=Niggatopia",
"kick=Whole Grain",
"kick=Rising Dawn",
"kick=Joseon",
"kick=Firestar",
"kick=Al Khalifa",
"kick=Jaymes",
"kick=Sadanca",
"kick=Made of Beans",
"kick=Poorfags",
"kick=Immunidad",
"kick=Mulan",
"kick=Castille",
"kick=macai",
"kick=AllBacon",
"kick=Copilandia"
];

for (i=0; i<data.length; i++){

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
	  }
	});

	xhr.open("POST", "http://www.blocgame.com/alliancestats.php?allianceid=2123");
	xhr.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
	xhr.setRequestHeader("upgrade-insecure-requests", "1");
	xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader("accept-language", "en-US,en;q=0.8");
	xhr.setRequestHeader("cache-control", "no-cache");

	xhr.send(data[i]);
	console.log(data[i]);
}

//done, log time
var end = new Date();
var duration = end - start;
console.log("This alliance kick has taken " + duration +  " milliseconds.");