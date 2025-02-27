
function btnClick(a) {
    var getInp = document.getElementById("inp")
    getInp.value += a
}

function eq() {
    var getInp = document.getElementById('inp')
    getInp.value = eval(getInp.value)
}

function clrall() {
    var getInp = document.getElementById('inp')
    getInp.value = ''
}

function clr() {
    var getInp = document.getElementById('inp')
    getInp.value = getInp.value.slice(0, -1)
}

function removeZero() {
    var getInp = document.getElementById("calcInput");
    if (getInp.value === "0") {
        getInp.value = "";
    }
}

function checkZero() {
    let getInp = document.getElementById("calcInput");
    if (getInp.value === "") {
        getInp.value = "0";
    }
}