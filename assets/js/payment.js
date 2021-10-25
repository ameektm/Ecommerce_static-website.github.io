function credit_form(){
    var w = document.getElementById("credit-form");
    var x = document.getElementById("esewa_Id");
    var y = document.getElementById("Ime_Id");
    var z = document.getElementById("Cash_ON");

    if (w.style.display === "none") {
        w.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        
        document.getElementById("btn-card").classList.add("nav-bg");
        document.getElementById("btn-esewa").classList.remove("nav-bg");
        document.getElementById("btn-ime").classList.remove("nav-bg");
        document.getElementById("btn-cod").classList.remove("nav-bg");
    } else {
        w.style.display = "none";
    }
};
function Esewa_form() {
    var w = document.getElementById("credit-form");
    var x = document.getElementById("esewa_Id");
    var y = document.getElementById("Ime_Id");
    var z = document.getElementById("Cash_ON");
    if (x.style.display === "none") {
        w.style.display = "none";
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        document.getElementById("btn-card").classList.remove("nav-bg");
        document.getElementById("btn-esewa").classList.add("nav-bg");
        document.getElementById("btn-ime").classList.remove("nav-bg");
        document.getElementById("btn-cod").classList.remove("nav-bg");
    } else {

        x.style.display = "none";
    }
 }
function Ime_form() {
    var w = document.getElementById("credit-form");
    var x = document.getElementById("esewa_Id");
    var y = document.getElementById("Ime_Id");
    var z = document.getElementById("Cash_ON");
    if (y.style.display === "none") {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        document.getElementById("btn-card").classList.remove("nav-bg");
        document.getElementById("btn-esewa").classList.remove("nav-bg");
        document.getElementById("btn-ime").classList.add("nav-bg");
        document.getElementById("btn-cod").classList.remove("nav-bg");
    } else {
        y.style.display = "none";
    }
 }
function COD_form() {
    var w = document.getElementById("credit-form");
    var x = document.getElementById("esewa_Id");
    var y = document.getElementById("Ime_Id");
    var z = document.getElementById("Cash_ON");
    if (z.style.display === "none") {
        w.style.display = "none";
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        document.getElementById("btn-card").classList.remove("nav-bg");
        document.getElementById("btn-esewa").classList.remove("nav-bg");
        document.getElementById("btn-ime").classList.remove("nav-bg");
        document.getElementById("btn-cod").classList.add("nav-bg");
    } else {
        z.style.display = "none";
    }
 }
