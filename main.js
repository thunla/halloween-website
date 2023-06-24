let menu = document.querySelectorAll(".menu li");
menu.forEach((item, i)=>{
    gsap.fromTo(
        item,
        {x: -30, opacity: 0},
        {x: 0, opacity: 1, duration: 0.5, ease: "ease", delay: i*0.1}
    )
})
gsap.fromTo(
    "#logo img",
    {x: -100},
    {x: 0, duration: 1, ease: "ease"}
)

gsap.fromTo(
    ".bat",
    {scale: 0},
    {scale: 1, duration: 1, delay: 1.2}
)
gsap.fromTo(
    ".face__ghost",
    {rotate: 180, scale: 0, y: 300},
    {rotate: 0, scale: 1, y: 0, delay: 2, duration: 1}
)
gsap.fromTo(
    ".hill",
    {y: 500},
    {y: 0, duration: 0.5, ease: "ease", delay: 1}
)
gsap.fromTo(
    ".ghost",
    {x: -600},
    {x: 0, duration: 1.5, ease: "ease", delay: 2}
)
gsap.fromTo(
    ".ghost",
    {y: -10},
    {y: 0, duration: 1, delay: 1.5, ease: "ease",repeat: -1, yoyo: true}
)
gsap.fromTo(
    ".screen",
    {y: 500},
    {y: 0, duration: 1, ease: "ease", delay: 1.5}
)
gsap.fromTo(
    ".fence",
    {y: 600},
    {y: 0, duration: 1, ease: "ease", delay: 1.5}
)
gsap.fromTo(
    ".ghost__2",
    {opacity: 0, rotate: -360},
    {opacity: 1, rotate: 0, duration: 1, ease: "slow", delay: 0.7}
)

let star = document.querySelectorAll(".star");
star.forEach((star, i)=>{
    gsap.fromTo(
        star,
        {scale: 0.5},
        {scale: 1, duration: 1, ease: "slow", repeat: -1, yoyo: true, delay: i * 0.5}
    )
})

let contentRight = document.querySelectorAll(".toTop");
contentRight.forEach((item, i)=>{
    gsap.fromTo(
        item,
        {opacity: 0, y: 100},
        {opacity: 1, y: 0, ease: "slow", delay: i * 0.1}
    )
})