$(".bar").click(function(){
   $(".phone1").fadeToggle();
})
$(".closingbar").click(function(){
    $(".phone1").fadeToggle();
 })
 gsap.registerPlugin(ScrollTrigger);
  gsap.from(".thirdbannerimg",{
   scrollTrigger:{
      trigger:".thirdbannersecond",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
   
   
   duration:1,y:100,scale:0.5});
  gsap.to(".cloud2",{
   scrollTrigger:{
      trigger:".thirdbannersecond",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
   
   
   duration:3,x:100})
  gsap.to(".cloud1",{
   scrollTrigger:{
      trigger:".thirdbannersecond",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
   
   duration:3,x:100})
  gsap.to(".parachute",{
   scrollTrigger:{
      trigger:".thirdbannersecond",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
   
   
   duration:5,x:100})
  gsap.to(".thirdbannersecond h1",{
   scrollTrigger:{
      trigger:".fifthbannerfirstcontent",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
   
   
   
   duration:3,scale:0.8,ease:"power4.out",x:100})
  gsap.to(".coincloud1container",{
   scrollTrigger:{
      trigger:".fifthbannerfirstcontent",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
   
   duration:8,opacity:2,scale:0.5,x:100})
  gsap.to(".coincloud2container",{
   scrollTrigger:{
      trigger:".fifthbannerfirstcontent",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
   
   
   duration:8,opacity:2,scale:0.5,x:100})
  gsap.to(".plaincontainer",{
   scrollTrigger:{
      trigger:".fifthbannerfirstcontent",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
   
   
   duration:2,x:100})
  gsap.to(".mancontainer",{
   scrollTrigger:{
      trigger:".faqbanner",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
   
   duration:1.5,y:200})
 gsap.from(".phonedivimgcontainer",{
   scrollTrigger:{
      trigger:".phonediv",
      start:"top center",
      // markers:true,
      toggleActions:"restart none none reverse"

      
      
      },
   
   
   
   duration:0.5,scale:0.5,y:100})
   gsap.from(".vancontainer",{
      scrollTrigger:{
         trigger:".tenbanner",
         start:"top center",
         // markers:true,
         toggleActions:"restart none none reverse"
   
         
         
         },
      duration:2,x:300,ease:"slow"
   })

