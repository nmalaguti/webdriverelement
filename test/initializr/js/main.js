function increment() {
    doincrement(document.getElementById("counter"));
}

function dblincrement() {
    doincrement(document.getElementById("dblcounter"));
}

function doincrement(element) {
    var value = parseInt(element.innerHTML, 0);
    element.innerHTML = (value + 1).toString();
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
