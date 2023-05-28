
let Colorbtn = document.getElementById("Colorbtn");
Colorbtn.addEventListener("click", color)

function color(){
   let colorCod = Math.floor(Math.random() * 16777215);
   let compCode = "#" + colorCod.toString(16);
   console.log(colorCod, compCode);

   document.body.style.background =  compCode;
   document.getElementById("code").innerHTML = compCode;
}
color();