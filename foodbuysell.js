var start = new Date(); 

function buy() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open("POST", "http://www.blocgame.com/policies/buyfood100.php");
    xhr.send();
}

function sell() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open("POST", "http://www.blocgame.com/policies/sellfood100.php");
    xhr.send();
}

for (i = 0; i < 100; i++) {
    buy();
    sell();
}
buy();
var end = new Date();
var duration = end - start;
console.log(duration +  " milliseconds.");