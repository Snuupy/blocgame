function sell() {
    var xhr = new XMLHttpRequest();
    // xhr.addEventListener("readystatechange", function() {
    //     if (this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // });
    xhr.open("POST", "http://www.blocgame.com/policies/sellfood100.php");
    xhr.send();
}
sell();