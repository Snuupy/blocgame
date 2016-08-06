var data = "expatriate=&otheragent=2862";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "http://blocgame.com/intelligence.php?agent=3283");
xhr.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
xhr.setRequestHeader("upgrade-insecure-requests", "1");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("accept-language", "en-US,en;q=0.8");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
