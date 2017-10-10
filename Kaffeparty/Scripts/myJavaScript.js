
myDate();

function myDate() {
    var d = new Date();
    document.getElementById("footer").innerText = d.toDateString() + " " + document.getElementById("footer").innerText;
}