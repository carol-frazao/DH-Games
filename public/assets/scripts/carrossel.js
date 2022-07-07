var counter = 1;

setInterval(function () {
    document.getElementById('radio' + counter + '-carousel').checked = true;
    counter++;
    if (counter > 5) {
        counter = 1
    }
}, 4000);