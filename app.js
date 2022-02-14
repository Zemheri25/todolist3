let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");
let d6 = document.getElementById("d6");
let d7 = document.getElementById("d7");
let d8 = document.getElementById("d8");
let d9 = document.getElementById("d9");


let d11 = document.getElementById("d11");
let d21 = document.getElementById("d21");
let d31 = document.getElementById("d31");
let d41 = document.getElementById("d41");
let d51 = document.getElementById("d51");
let d61 = document.getElementById("d61");
let d71 = document.getElementById("d71");
let d81 = document.getElementById("d81");
let d91 = document.getElementById("d91");

let span1 = document.querySelector(".span1")

d1.addEventListener("click", check1);
d2.addEventListener("click", check2);
d3.addEventListener("click", check3);
d4.addEventListener("click", check4);
d5.addEventListener("click", check5);
d6.addEventListener("click", check6);
d7.addEventListener("click", check7);
d8.addEventListener("click", check8);
d9.addEventListener("click", check9);




function check1() {
    if(d1.checked) {
        d11.style.textDecoration = "line-through"
        span1.innerHTML ++
    } else {
        d11.style.textDecoration = "none"
        span1.innerHTML --
    }
}

function check2() {
    if(d2.checked) {
        d21.style.textDecoration = "line-through"
        span1.innerHTML ++
    } else {
        d21.style.textDecoration = "none"
        span1.innerHTML --
    }
}

function check3() {
    if(d3.checked) {
        d31.style.textDecoration = "line-through"
        span1.innerHTML ++
    } else {
        d31.style.textDecoration = "none"
        span1.innerHTML --
    }
}

function check4() {
    if(d4.checked) {
        d41.style.textDecoration = "line-through"
        span1.innerHTML ++
    } else {
        d41.style.textDecoration = "none"
        span1.innerHTML --
    }
}

function check5() {
    if(d5.checked) {
        d51.style.textDecoration = "line-through"
        span1.innerHTML ++
    } else {
        d51.style.textDecoration = "none"
        span1.innerHTML --
    }
}

function check6() {
    if(d6.checked) {
        d61.style.textDecoration = "line-through"
        span1.innerHTML ++
    } else {
        d61.style.textDecoration = "none"
        span1.innerHTML --
    }
}

function check7() {
    if(d7.checked) {
        d71.style.textDecoration = "line-through"
        span1.innerHTML ++
    } else {
        d71.style.textDecoration = "none"
        span1.innerHTML --
    }
}

function check8() {
    if(d8.checked) {
        d81.style.textDecoration = "line-through"
        span1.innerHTML ++
    } else {
        d81.style.textDecoration = "none"
        span1.innerHTML --
    }
}

function check9() {
    if(d9.checked) {
        d91.style.textDecoration = "line-through"
        span1.innerHTML ++
    } else {
        d91.style.textDecoration = "none"
        span1.innerHTML --
    }
}
    


