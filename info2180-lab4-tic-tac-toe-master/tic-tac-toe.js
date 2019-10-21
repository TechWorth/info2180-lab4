window.onload = function() {

    for (i = 2; i <= 11; i++) {
        var divs = document.getElementsByTagName("div")[i];
        divs = divs.className = "square"
    }
    this.console.log(divs)
};

var track = Array.from(Array(9).keys());