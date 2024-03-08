import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";


/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const GALMEGFOG = document.getElementsByClassName("galeria")[0]
GALMEGFOG.innerHTML += htmlOsszeAllit(KEPEK)
/* írd bele az összeálíltott html képsorozatot */




/*2. feladat  A .nagykep divben lévő img elem megfogása */
const NAGYKEPMEGFOG = document.querySelectorAll(".nagykep img")[0]


/* A .nagykep div megfogása */
const NAGYKEPDIV = document.getElementsByClassName("nagykep")


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const KISKEPEK = document.querySelectorAll(".kep img")

for(let index = 0; index < KISKEPEK.length; index++){
    KISKEPEK[index].addEventListener("click", function (event) {
        //barmely html elem attributumat meg tudjuk fogni elem.attrnev
        NAGYKEPMEGFOG.src = event.target.src;
        kepIndex = index;
    });
}

/* eseménykezelő hozzáadása a kisképekhez, ciklussal */

//function katt(event){
    //barmely html elem attributumat meg tudjuk fogni elem.attrnev
//    NAGYKEPMEGFOG.src=event.target.src
//}




/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */




/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
let kepIndex = 0;
const jobbraButton = document.querySelector(".bal");
const balraButton = document.querySelector(".jobb");
jobbraButton.addEventListener("click", function () {
    kepIndex++;
    kepIndex = kepIndex % KEPEK.length;
    NAGYKEPMEGFOG.src = KEPEK[kepIndex].kep;

});

balraButton.addEventListener("click", function () {
    kepIndex++;
    kepIndex = kepIndex % KEPEK.length;
    NAGYKEPMEGFOG.src = KEPEK[kepIndex].kep;

});



