$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    })
});



//first typing animation
/*var typed = new Typed(".typing", {
  strings: ["WEBDEVSKI", "WEBDEVSKI", "WEBDEVSKI"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});*/
