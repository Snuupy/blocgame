var data = "id=62965&infiltrate=&spy=3081";

function delayedSend() {
    setTimeout(function() {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
            if (this.readyState === 4) {
                //console.log(this.responseText);
                console.log(data);
            }
        });

        xhr.open("POST", "http://blocgame.com/stats.php?id=62965");
        xhr.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
        xhr.setRequestHeader("upgrade-insecure-requests", "1");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("accept-language", "en-US,en;q=0.8");
        xhr.setRequestHeader("cache-control", "no-cache");

        xhr.send(data);

    }, 500);
}

for (i = 0; i < 100; i++) {
    delayedSend();
}