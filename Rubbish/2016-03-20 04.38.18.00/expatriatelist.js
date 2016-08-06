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
xhr.setRequestHeader("origin", "http//blocgame.com");
xhr.setRequestHeader("upgrade-insecure-requests", "1");
xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("dnt", "1");
xhr.setRequestHeader("referer", "http//blocgame.com/intelligence.php?agent=3283");
xhr.setRequestHeader("accept-encoding", "gzip, deflate");
xhr.setRequestHeader("accept-language", "en-US,en;q=0.8");
xhr.setRequestHeader("cookie", "ajs_user_id=null; ajs_group_id=null; ajs_anonymous_id=%229ed435d1-8c2e-47ca-8520-36c97d346307%22; _hp2_id.1532377119=6439647574351530.2398327503.0764943473; _ga=GA1.2.1500487255.1442293430; __utma=262948319.1500487255.1442293430.1443928141.1455635235.95; __utmc=262948319; __utmz=262948319.1442293430.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); SMFCookie980=a%3A4%3A%7Bi%3A0%3Bs%3A3%3A%22632%22%3Bi%3A1%3Bs%3A40%3A%22310d631efe8f9b96d5ff51bc8704c756c8438c13%22%3Bi%3A2%3Bi%3A1631856809%3Bi%3A3%3Bi%3A0%3B%7D; ajs_user_id=null; ajs_group_id=null; ajs_anonymous_id=%229ed435d1-8c2e-47ca-8520-36c97d346307%22; _chartbeat2=xHnt1D7iQUXBEBBX0.1443928172335.1443928172335.1; _hp2_id.1532377119=6439647574351530.2398327503.0764943473; olfsk=olfsk9892177740111947; hblid=eieIJxJITOpJU0jO6T6pC1U8JTOE0JQO; _ga=GA1.2.1500487255.1442293430; PHPSESSID=0d3c19a74f746642909f3856a605811d; __utma=262948319.1500487255.1442293430.1443928141.1455635235.95; __utmc=262948319; __utmz=262948319.1442293430.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
