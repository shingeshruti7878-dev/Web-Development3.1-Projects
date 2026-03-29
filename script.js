// Home text animation
gsap.from(".title",{
y:-50,
opacity:0,
duration:1
})

gsap.from(".subtitle",{
y:50,
opacity:0,
duration:1,
delay:0.5
})

// Navigation animation
gsap.from("nav li",{
opacity:0,
y:-20,
duration:1,
stagger:0.2
})

// Cards animation
gsap.from(".card",{
scrollTrigger:".card",
opacity:0,
y:50,
duration:1,
stagger:0.3
})