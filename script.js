const mapDOM = document.querySelector('#map');
const moreBtn = document.querySelector('#btnMore');
const directBtn = document.querySelector('#directBtn');
const scrollTopBtn = document.querySelector('.homeBtn');

const posLink = "https://www.google.com/maps/place/Henryka+Sienkiewicza+80,+27-400+Ostrowiec+%C5%9Awi%C4%99tokrzyski/@50.9477553,21.3707015,17z/data=!4m5!3m4!1s0x47180910bed63b0f:0x1cc70d19b92f7cb!8m2!3d50.9477553!4d21.3728902";


//////////////////////
// Google Maps

//let script = document.createElement('script');


// function initMap(){

//     var pos = {lat: 50.947788, lng: 21.372892};

//     var map = new google.maps.Map(
//         mapDOM,
//         {zoom:17,center:pos}
//     );

//     var contentString = `<h2><a href=${posLink}>Sienkiewicza 80,<br> 27-400, Ostrowiec Świętokrzyski</a></h2>`

//     var info = new google.maps.InfoWindow({
//         content:contentString
//     });

//     var marker = new google.maps.Marker({
//         position: pos, map:map
//     });

//     info.open(map,marker);

// }

///////////////////////////
/////   Rellax Init


let rellax = new Rellax('.rellax');



directBtn.addEventListener('click',()=>{
    window.location.replace(posLink);
});


/////////////////////////
//// Mobile Menu

const menuOpenBtn = document.querySelector(".menuOpen");
const menuCloseBtn = document.querySelector(".menuClose");
const navBar = document.querySelector(".navBar");

menuOpenBtn.addEventListener('click',()=>{

    navBar.classList.toggle('navBarActive');
});

menuCloseBtn.addEventListener('click',()=>{
    navBar.classList.add('navBarClose');
    navBar.classList.remove('navBarActive');
    
});

menuOpenBtn.addEventListener('click',()=>{
    navBar.classList.remove('navBarClose');
    navBar.classList.add('navBarActive');
    console.log("ELO");
    
});

window.onscroll = ()=>{
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    if(scrolled >30.0){
        scrollTopBtn.classList.add('homeBtnIn');
        scrollTopBtn.classList.remove('homeBtnOut');
    }
    else{
        scrollTopBtn.classList.remove('homeBtnIn');
        scrollTopBtn.classList.add('homeBtnOut');

    }
    
}


const redirectBtn = document.querySelectorAll('.navItem');


redirectBtn.forEach((item)=>{
    item.addEventListener('click',()=>{
        console.log("nav");
        
        navBar.classList.add('navBarClose');
        navBar.classList.remove('navBarActive');
    });
});
