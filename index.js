const cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', (e)=>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

const tl = gsap.timeline();
tl.to(".animation",{
    y:"-100%",
    duration:2,
    delay:1,
    ease:"Expo.easeInOut"
})
tl.fromTo(".logo, .ul, .ul2, .h11, .h12, .heroSection",{
    y:"100%",
    opacity:0
},{
    y:"0%",
    opacity:1,
    duration:2,
    stagger: 0.25
})