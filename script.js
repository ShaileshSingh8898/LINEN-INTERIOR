var elemA11 =document.querySelectorAll(".elem")
elemA11.forEach(function(elem){
elem.addEventListener("mousemove",function(dets){
    elem.childNodes[3].style.left=dets.x+"px"
    
    
})
elem.addEventListener("mouseenter",function(dets){
    elem.childNodes[3].style.opacity=1
    
})
elem.addEventListener("mouseleave",function(dets){
    elem.childNodes[3].style.opacity=0
    
})


})

var button=document.querySelector("button")
var c=document.querySelector(".c")

button.addEventListener("click",function(){
    c.style.transform=`translateX(15px)`
    c.style.backgroundColor="white"
    button.style.backgroundColor="black"
    body.style.color="black"
    body.style.backgroundColor="white"

})
button.addEventListener("dblclick",function(){
    c.style.transform=`translateX(0px)`
    c.style.backgroundColor="black"
    button.style.backgroundColor="white"
    body.style.color="white"
    body.style.backgroundColor="black"

})
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var circle=document.querySelector(".circle")
  var body=document.querySelector(".wrapper")
  body.addEventListener("mousemove",function(dets){
    gsap.to(circle,{
        left:dets.x-10,
        top:dets.y-10
    })

  })


 var tl=gsap.timeline()

 tl.from( ".page1 h1",{
    x:-200,
    opacity:0,
    duration:0.8,
    delay:0.3,
    stagger:0.5

}
 ) 
 tl.from( ".nav h6,h5,i",{
    x:-70,
    opacity:0,
    duration:0.8,
    delay:0.3,
    stagger:0.3

}
 )

 tl.from( ".page2 h6",{
    
    x:-400,
   
     duration:3.5,
    
     stagger:0.4,
     opacity:0,
     scrollTrigger:{
        trigger:".page2 ",
        scroller:"body",
     
        start:"top 20%",
        end:"top 80%",
        scrub:3,

     }
 
 }
) 

tl.from( ".page2 video ",{
    
   scale:0.7,
   
     duration:3.5,
    
     stagger:0.4,
     opacity:0,
     scrollTrigger:{
        trigger:".page2 ",
        scroller:"body",
     
        start:"top 20%",
        end:"top 80%",
        scrub:3,

     }
 
 }
) 

 tl.from( ".page3 h1,i",{
    
    x:-400,
   
     duration:3.5,
    
     stagger:0.4,
     opacity:0,
     scrollTrigger:{
        trigger:".page3 ",
        scroller:"body",
      
        start:"top 30%",
        end:"top 80%",
        scrub:3,

     }
 
 }
) 

 


tl.from( ".page4 .left1",{
    
    x:-400,
   
     duration:3.5,
     
     stagger:0.3,
     opacity:0,
     scrollTrigger:{
        trigger:".page4 .left1",
        scroller:"body",
      
        start:"top 65%",
        end:"top 80%",
        scrub:3,

     }
 
 }
) 

tl.from( ".page4 .right1",{
    
    x:800,
   
     duration:3.5,
     
     stagger:0.3,
     opacity:0,
     scrollTrigger:{
        trigger:".page4 .right1 ",
        scroller:"body",
      
        start:"top 50%",
        end:"top 80%",
        scrub:3,

     }
 
 }
) 

tl.from( ".page5 .img1",{
    
    x:-400,
   
     duration:3.5,
     
     stagger:0.3,
     opacity:0,
     scrollTrigger:{
        trigger:".page5 ",
        scroller:"body",
     
        start:"top 15%",
        end:"top 80%",
        scrub:3,

     }
 
 }
) 

tl.from( ".page5 .img2",{
    
    x:400,
   
     duration:3.5,
     
     stagger:0.3,
     opacity:0,
     scrollTrigger:{
        trigger:".page5 ",
        scroller:"body",
    
        start:"top -15%",
        end:"top 80%",
        scrub:3,

     }
 
 }
) 



tl.from( ".page6 h1",{
    
    x:-400,
   
     duration:3.5,
     
     stagger:4,
     opacity:0,
     scrollTrigger:{
        trigger:".page6 ",
        scroller:"body",
      
        start:"top 55%",
        end:"top 80%",
        scrub:3,

     }
 
 }
) 




tl.from( ".page6 .elem",{
    
    x:-400,
   
     duration:3.5,
     
     stagger:0.3,
     opacity:0,
     scrollTrigger:{
        trigger:".page6 ",
        scroller:"body",
      
        start:"top 35%",
        end:"top 80%",
        scrub:3,

     }
 
 }
) 

tl.from( ".page7 ",{
    
    x:-400,
   
     duration:3.5,
     
     stagger:0.3,
     opacity:0,
     scrollTrigger:{
        trigger:".page7 ",
        scroller:"body",
     
        start:"top 35%",
        end:"top 80%",
        scrub:3,

     }
 
 }
) 
tl.from( ".page8, h5,h1,p,h3",{
    
    x:-400,
   
     duration:3.5,
     
     stagger:0.3,
     opacity:0,
     scrollTrigger:{
        trigger:".page8 ",
        scroller:"body",
       
        start:"top 55%",
        end:"top 80%",
        scrub:3,

     }
 
 }
) 
