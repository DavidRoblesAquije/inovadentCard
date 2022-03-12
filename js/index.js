var tratamiento1 = document.getElementsByClassName("trat1")[0];
var tratamiento2 = document.getElementsByClassName("trat2")[0];
var tratamiento3 = document.getElementsByClassName("trat3")[0];
var tratamiento4 = document.getElementsByClassName("trat4")[0];
var tratamiento5 = document.getElementsByClassName("trat5")[0];
var tratamiento6 = document.getElementsByClassName("trat6")[0];
var tratamiento7 = document.getElementsByClassName("trat7")[0];
var tratamiento8 = document.getElementsByClassName("trat8")[0];

var body = document.getElementsByTagName('body')[0];
var popup_tratamiento = document.getElementsByClassName('popup_tratamiento')[0];
var cerrar = document.getElementsByClassName("cerrar")[0];

tratamiento1.addEventListener('click', function () {
    document.getElementById('tratamiento1').classList.add("info_tratamiento_on");
    popup_tratamiento.classList.add("popup_active");
    body.classList.add("popup_on");
})
tratamiento2.addEventListener('click', function () {
    document.getElementById('tratamiento2').classList.add("info_tratamiento_on");
    popup_tratamiento.classList.add("popup_active");
    body.classList.add("popup_on");
})
tratamiento3.addEventListener('click', function () {
    document.getElementById('tratamiento3').classList.add("info_tratamiento_on");
    popup_tratamiento.classList.add("popup_active");
    body.classList.add("popup_on");
})
tratamiento4.addEventListener('click', function () {
    document.getElementById('tratamiento4').classList.add("info_tratamiento_on");
    popup_tratamiento.classList.add("popup_active");
    body.classList.add("popup_on");
})
tratamiento5.addEventListener('click', function () {
    document.getElementById('tratamiento5').classList.add("info_tratamiento_on");
    popup_tratamiento.classList.add("popup_active");
    body.classList.add("popup_on");
})
tratamiento6.addEventListener('click', function () {
    document.getElementById('tratamiento6').classList.add("info_tratamiento_on");
    popup_tratamiento.classList.add("popup_active");
    body.classList.add("popup_on");
})
tratamiento7.addEventListener('click', function () {
    document.getElementById('tratamiento7').classList.add("info_tratamiento_on");
    popup_tratamiento.classList.add("popup_active");
    body.classList.add("popup_on");
})
tratamiento8.addEventListener('click', function () {
    document.getElementById('tratamiento8').classList.add("info_tratamiento_on");
    popup_tratamiento.classList.add("popup_active");
    body.classList.add("popup_on");
})

///
cerrar.addEventListener('click', function () {
    var tratamientos = document.getElementsByClassName('info_tratamiento_off');
    for (var i = 0; i < tratamientos.length; i++) {
        tratamientos[i].classList.remove("info_tratamiento_on");
    }
    popup_tratamiento.classList.remove("popup_active");
    body.classList.remove("popup_on");
})