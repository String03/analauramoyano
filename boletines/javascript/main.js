
//DOM
/*
let links = document.querySelectorAll("a");
links.forEach(function(link){
    console.log(link);
});
*/

/*
let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this);
    });
});*/


//Obtener los elementos de la clase .close
/*let links = document.querySelectorAll(".close");
links.forEach(function(link){
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        return false;
    });
});*/

//Recorrerlos
//Agregar un evento click a cada uno de ellos

let links = document.querySelectorAll("a");
links.forEach(function(link){
    link.addEventListener("click",function(ev){
        ev.preventDefault();

        setTimeout(function(){
            location.href="/boletines";
        },600);
        return false;

    });
});