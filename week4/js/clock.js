function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;

    if((s % 5) == 0){
        setRandomColor();
    }
    var t = setTimeout(startTime, 1000);

}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

function setRandomColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var chars = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}
