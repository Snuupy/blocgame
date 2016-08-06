var postURLs = [
    2262,
    2847,
    2848,
    2849,
    2850,
    2852,
    2853,
    2854,
    2855,
    2856,
    2857,
    2858,
    2859,
    2860,
    2861
];
var data = "expatriate=&otheragent=3081"; //agent to send back


for (i = 0; i < postURLs.length; i++) {
    for (j = 0; j < 10; j++) { //10x per agent
        (function(i) {
            setTimeout(function() {
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function() {
                    if (this.readyState === 4) {
                        //console.log(this.responseText); //idgaf about the html code
                        console.log(postURLs[i] + " " + j); //output agent
                    }
                });

                var postURL = "http://blocgame.com/intelligence.php?agent=" + postURLs[i];
                xhr.open("POST", postURL); //your agent ID
                xhr.setRequestHeader("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
                xhr.setRequestHeader("upgrade-insecure-requests", "1");
                xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                xhr.setRequestHeader("accept-language", "en-US,en;q=0.8");
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.send(data);
            }, 1000 * i);
        })(i);

    }
}
