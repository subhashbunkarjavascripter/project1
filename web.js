 var tl = gsap.timeline({scrollTrigger : {
    trigger: "#home",
    start: "top top",
    // markers: true,
    pin: true,
    scrub: 1

 }

});


tl
.to("#home #overlay #center",{
    left:"50%",
    ease: Power1,
    
},"same same same")


.to("#home #overlay #center span",{
    opacity:0,
    ease: Power1,
    
},"same")
.to("#home #overlay #center img",{
    scale:0,
    delay: .05,
    ease: Power1,
    
},"same")
.to("#home #overlay #blue",{
    top:"50%",
    width: "8vw",
    height: "8vw",
    ease: Power1,
    
},"same")
.to("#home #overlay #blue",{
    opacity:0,
    ease: Power1,
},"same same")
.to("#circle",{
    scale: .2,
    ease: Power1,
},"same")
 
.to("#circle #btm img",{
    rotate: "-180deg",
    ease: Power1,
    stagger: .05,
},"same")
.to("#smcircle",{
    scale:.6,
    ease: Power1,
    
},"same")
.to("#circle",{
    scale: .0002,
    ease: Power1,
},"same same")
.to("#smcircle",{
    scale:.002,
    ease: Power1,
    
},"same same")
.to("#home #overlay h1",{
    top: "110%",
    delay: .02,
    ease: Power1,
    
},"same")
.to("#home h2",{
    top: "60%",
    rotate:"0", 
    ease: Power1,
    
},"same")
.to("#home #card",{
    top: "10%", 
    ease: Power1,
    
},"same same")
 

.to("#home #card",{
    top: "-150%", 
    ease: Power1,
    
})
 
 var tl =gsap.timeline({scrollTrigger:{
    trigger:"#secend",
    start: "top top",
    pin: true,
    // markers: true,
    scrub: 1,
}});
tl
.to(".circle",{
    top:"50%",
    stagger: .1,
    width:"18vw",
    height: "18vw",
    ease: Power1,
})
.to(".circle",{
    left:"50%",
    ease: Power1,
})
.to(".circle",{
    scale: .5,
    ease: Power1,
})
.to(".circle",{
    scale: 10,
    ease: Power1,
})

.to("#count h1",{
    top:"-110%",
    ease: Power1,
})
.to("#count h2",{
    top:"-10%",
    ease: Power1,
},'a')
.to("#count h2",{
    top:"-110%",
    ease: Power1,
},'b')
.to("#count h3",{
    top:"50%",
    ease: Power1,
},'b')
.to("#stop h1",{
    left:"0%",
    ease: Power1,
},'a')
.to("#stop h1",{
    left:"-150%",
    delay: .5,
    ease: Power1,
},'b')
.to(".circle",{
    background:`linear-gradient(to right,rgb(16, 82, 158),rgba(15, 220, 168, 0.623), rgba(153, 189, 168, 0.623))`,
    ease: Power1,
},'a')

.to("#stop #satter .box",{
    top:"0%",
    stagger: .2,
    ease: Power1,
},)