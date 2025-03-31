
gsap.from(".text1",{
    x:-200,
    opacity:0,
    duration:1,

})




gsap.from(".nno",{
    x:-200,
    opacity:0,
    duration:1,

})


gsap.from(".links a",{
    y:200,
    opacity:0,
    duration:1,
    stagger:0.3,
})

gsap.from(".up",{
    x:-200,
    opacity:0,
    duration:1.8,
    stagger:0.3,
})


gsap.from(".firstbox", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".firstbox",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})




gsap.from(".translating", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".translating",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})



gsap.from(".years", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".years",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})


gsap.from(".serheading", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".serheading",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})
gsap.from(".brand1", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".brand1",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})

gsap.from(".andtwo", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".andtwo",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})






gsap.from(".head1", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".head1",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})



gsap.from(".testheading", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".testheading",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})






gsap.from(".testbox1", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".testbox1",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})


gsap.from(".testbox2", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".testbox2",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})




gsap.from(".conttt", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".conttt",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})


gsap.from(".formbox", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".formbox",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})











gsap.from(".postonebox", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".postonebox",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})



gsap.from(".posttwobox", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".posttwobox",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})



gsap.from(".postthreebox", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".postthreebox",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})



gsap.from(".stt", {
    x:-200,
    opacity: 0,
    duration: 3,
    scrollTrigger:{
        trigger: ".stt",
        // markers: true,
        start: "top center",
        end: "center center",
        scrub: 1
    }
})






let arrow = document.getElementById("arrow");

window.addEventListener("mousemove",function(e){
     gsap.from("#arrow",{
        y:e.clientY,
        x:e.clientX,
        duration:5,
        ease: "back.out(1.7)",
     })
})