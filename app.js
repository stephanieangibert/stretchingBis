const boutons= document.querySelectorAll(".bouton");
let blabla = document.querySelector(".blabla");
let blabla1 = document.querySelector(".blabla1");
let blabla2 = document.querySelector(".blabla2");



    boutons[0].addEventListener("mouseover", (e)=>{
blabla.innerHTML ="Suis tellement nulle à l'orale, je me rattraperai la prochaine fois, je veux un autre crayon...";
    })
    boutons[0].addEventListener("mouseout", (e)=>{
        blabla.innerHTML = "Notre professeur, son histoire,sa passion...";
            })
        
boutons[1].addEventListener("mouseover", (e)=>{
                blabla1.innerHTML ="Curriculum  prof du mardi !";
                    })
boutons[1].addEventListener("mouseout", (e)=>{
                blabla1.innerHTML = "Notre professeur, son histoire,sa passion...";
                            })
boutons[2].addEventListener("mouseover", (e)=>{
                blabla2.innerHTML ="Atmosphère bienveillante le vendredi!!";
                                    })
boutons[2].addEventListener("mouseout", (e)=>{
                blabla2.innerHTML = "Notre professeur, son histoire,sa passion...";
                                            })

const nav = document.querySelector("nav");
let info = document.querySelector(".info");
info.addEventListener("click", ()=>{  
    nav.classList.add("active");
    
    })
const exit = document.querySelector(".fa-backspace");
exit.addEventListener("click", ()=>{
    nav.classList.remove("active");
})

const fleche = document.querySelectorAll(".fa-external-link-alt");
document.querySelector(".tarifs").addEventListener("click", ()=>{
    document.querySelector(".displayTarif").classList.add("activeTarif");
})
// fleche[0].addEventListener("click", ()=>{
//     document.querySelector(".displayTarif").classList.remove("activeTarif");

// })

const bouton = document.querySelectorAll("button");
const tableauBouton = Array.from(bouton);
const tableauCards = Array.from(document.querySelectorAll(".cards"));
const tableauCache = Array.from(document.querySelectorAll(".cache"));

tableauBouton.forEach(element => {
    element.addEventListener("click", ()=>{
    let index =tableauBouton.indexOf(element);
     tableauCards[index].classList.toggle("plusGrand");
     tableauCache[index].classList.toggle("cacheActive");
     document.querySelector("footer").classList.toggle("footerActive");
     if ( tableauBouton[index].innerHTML== "Plus de détail" ) {
        tableauBouton[index].innerHTML = "Moins de détail";
    }
    else if ( tableauBouton[index].innerHTML == "Moins de détail") {
        tableauBouton[index].innerHTML= "Plus de détail";
    }
   
    else {
     
        tableauBouton[index].innerHTML = "Plus de détail";
    }
    
    })
});
console.log(innerWidth);

const cards1 = {
    distance: '15%',
    origin: 'bottom',
    opacity: null,
    reset:true
   
};
const cards2 = {
    distance: '15%',
    origin: 'bottom',
    opacity: null,  
    reset:true
   
};
const cards3 = {
    distance: '15%',
    origin: 'bottom',
    opacity: null,
    reset:true
 
};

const methode = {
    distance: '0%',
    origin: 'top',
    scale:0.8,
    opacity: null,  
    reset:true
   
};
const planning = {
    distance: '0%',
    origin: 'top',
    scale:0.8,
    opacity: null,
    reset:true
 
};
const tarifs= {
    distance: '0%',
    origin: 'top',
    scale:0.8,
    opacity: null,
    reset:true
   
};
const adresse= {
    distance: '0%',
    origin: 'bottom',
    scale:0.8,
    opacity: 0.5,
    reset:true
   
};
const contact= {
    distance: '0%',
    origin: 'bottom',
    scale:0.8,
    opacity: 0.5,
    reset:true
   
};
const ecran= {
    distance: '0%',
    origin: 'bottom',
    scale:0.7,
    opacity: 0.5,
    reset:true
   
};
ScrollReveal().reveal(".cards1",cards1);
ScrollReveal().reveal(".cards2",cards2);
ScrollReveal().reveal(".cards3",cards3);
ScrollReveal().reveal(".methode",methode);
ScrollReveal().reveal(".planning",planning);
ScrollReveal().reveal(".tarifs",tarifs);
ScrollReveal().reveal(".adresse",adresse);
ScrollReveal().reveal(".contact",contact);
ScrollReveal().reveal(".ecran",ecran);





