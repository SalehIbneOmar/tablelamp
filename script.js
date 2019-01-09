/* 
Written by: Saleh Ibne Omar
Date created: 9 January 2019
*/
window.onload= function(){

    var lightON = document.getElementById("bttn1");
    function ON(){
        document.getElementById("bttn1").style.display = "none";
        document.getElementById("bttn2").style.display = "block";
        document.getElementById("bg-color").style.backgroundColor = "#34495e";
        document.getElementById("blb").style.backgroundColor = "#f6e58d";
        document.getElementById("bk-1").style.display = "block";
        document.getElementById("bk-2").style.display = "block";
        document.getElementById("pn-vessel").style.display = "block";
    }
    lightON.addEventListener("click", ON);

    var lightOFF = document.getElementById("bttn2");
    function OFF(){
        document.getElementById("bttn1").style.display = "block";
        document.getElementById("bttn2").style.display = "none";
        document.getElementById("bg-color").style.backgroundColor = "#1e272e";
        document.getElementById("blb").style.backgroundColor = "#34495e";
        document.getElementById("bk-1").style.display = "none";
        document.getElementById("bk-2").style.display = "none";
        document.getElementById("pn-vessel").style.display = "none";
    }
    lightOFF.addEventListener("click", OFF);

}