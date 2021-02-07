const menuBtn = document.querySelector('#menuBtn');
const sideNav = document.querySelector('#sideNav');
sideNav.style.right = "-250px";
menuBtn.onclick = function(){
    if(sideNav.style.right == '-250px'){
        sideNav.style.right = "0";
    }
    else{
        sideNav.style.right = '-250px';
    }
}
 var scroll = new SmoothScroll('a[href*="#"]',{
     speed: 1000,
    speedAsDuration: true
});

 


    // Things to add
   /*  spanish language translation 
    adding modals for sign up and sign in 
    extending options to two or three page including the courses page
    */
