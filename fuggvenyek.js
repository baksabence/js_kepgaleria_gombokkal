
export function htmlOsszeAllit(lista) {
   //itt allitjuk ossze a html kodot, stringkent
   let txt = "";
   for(let index = 0; index < lista.length; index++){
    txt += `<div class="kep"><img src ="${lista[index].kep}" alt="${lista[index].cim}" >
        </div>`

   }
   console.log(txt);
   return txt
}
