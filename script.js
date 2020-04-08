const mapDOM = document.querySelector('#map');
const moreBtn = document.querySelector('#btnMore');
const directBtn = document.querySelector('#directBtn');
const scrollTopBtn = document.querySelector('.homeBtn');

const posLink = "https://www.google.com/maps/place/Poczta+Polska/@50.947845,21.373203,17z/data=!4m5!3m4!1s0x0:0xf6a85261b2a6a2a0!8m2!3d50.9479652!4d21.372462?hl=pl-PL";


//////////////////////
// Google Maps

function initMap(){

    var pos = {lat: 50.947788, lng: 21.372892};

    var map = new google.maps.Map(
        mapDOM,
        {zoom:18,center:pos}
    );

    var contentString = `<h2><a href=${posLink}>Sienkiewicza 80,<br> 27-400, Ostrowiec Świętokrzyski</a></h2>`

    var info = new google.maps.InfoWindow({
        content:contentString
    });

    var marker = new google.maps.Marker({
        position: pos, map:map
    });

    info.open(map,marker);

}

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