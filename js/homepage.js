const login = document.getElementById('login');
const navbar = document.getElementById('navbar');
let homebtn = document.getElementById('homebtn');
let aboutbtn = document.getElementById('aboutbtn');
let contactbtn = document.getElementById('contactbtn');
let faqbtn = document.getElementById('faqbtn');
let loginbtn = document.getElementById('loginbtn');
const main = document.getElementById('main');
let closebtn = document.getElementById('closebtn');
let menubtn = document.getElementById('menubtn');
const left =document.getElementById('left');
const right =document.getElementById('right');
let loginpath = document.getElementById('loginpath');
let homepath = document.getElementById('homepath');
const homeRight =document.getElementById('homeRight');
const contactpage =document.getElementById('contactpage');
const contactpath =document.getElementById('contactpath');




let aboutbtnS = document.getElementById('aboutbtnS');
let loginbtnS = document.getElementById('loginbtnS');
let faqbtnS = document.getElementById('faqbtnS');
let contactbtnS = document.getElementById('contactbtnS');
const homebtnS =document.getElementById('homebtnS');


// for the  menubtn
menubtn.addEventListener('click', function(e){
    navbar.style.display = "flex";
    menubtn.style.display = "none";
    closebtn.style.display = "flex";
});

// for back btn in the navbar
closebtn.addEventListener('click', function(e){
    navbar.style.display = "none";
    menubtn.style.display = "flex";
    closebtn.style.display = "none";
});


// for the login btn
loginbtn.addEventListener('click', function(e){
    login.style.display = "block";
    homepath.style.display = "none";
    homeRight.style.display = "none";
    loginpath.style.display = "flex";
    left.style.display = "flex";
    contactpage.style.display = "none";
    contactpath.style.display = "none";


});

homebtn.addEventListener('click', function(e){
        login.style.display = "none";
        contactpath.style.display = " none";
        contactpage.style.display = "none";
        homepath.style.display = "flex";
        loginpath.style.display = "none";
        homeRight.style.display = "flex";
});


// For the contact btn
contactbtn.addEventListener('click', function(e){
    navbar.style.display = "none";
    menubtn.style.display = "flex";
    login.style.display = "none";
    contactpath.style.display = " flex";
    contactpage.style.display = "flex";
    homepath.style.display = "none";
    homeRight.style.display ="none";
    loginpath.style.display = "none";

});













































// for the login btn SMALL SCREEN
homebtnS.addEventListener('click', function(e){
    navbar.style.display = "none";
    menubtn.style.display = "flex";
    closebtn.style.display = "none";
    contactpage.style.display = "none";
    login.style.display = "none";
    homeRight.style.display ="flex";

});


loginbtnS.addEventListener('click', function(e){
    navbar.style.display = "none";
    menubtn.style.display = "flex";
    closebtn.style.display = "none"
    login.style.display = "block";
    contactpage.style.display = "none";
    homeRight.style.display ="none";

});

contactbtnS.addEventListener('click', function(e){
    navbar.style.display = "none";
    menubtn.style.display = "flex";
    closebtn.style.display = "none";
    contactpage.style.display = "flex";
    login.style.display = "none";
    homeRight.style.display ="none";


});



aboutbtnS.addEventListener('click', function(e){
    navbar.style.display = "none";
    menubtn.style.display = "flex";
    closebtn.style.display = "none";
    login.style.display = "none";
    contactpage.style.display = "none";
    homeRight.style.display ="none";

});

faqbtnS.addEventListener('click', function(e){
    navbar.style.display = "none";
    menubtn.style.display = "flex";
    closebtn.style.display = "none";
    login.style.display = "none";
    contactpage.style.display = "none";
    homeRight.style.display ="none";


});

// navbtn.onclick = function(event){
//     if (event.target == navbtn) {
//         navbar.style.display = flex;
//       }
// }
