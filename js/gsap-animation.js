gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.observe({
    target: window,
    type: "pointer",
    onMove: ({ deltaX, deltaY }) => {
        gsap.to('.pointer-animation', { x: deltaX * 0.4, y: deltaY * 0.4, })
        gsap.to('.pointer-animation-1', { y: deltaX * 0.4, x: deltaY * 0.4, })
        gsap.to('.pointer-animation-2', { y: deltaX * 0.4, x: deltaY * 0.4, })
        gsap.to('.pointer-animation-3', { y: deltaX * 0.4, x: deltaY * 0.4, })
        gsap.to('.pointer-animation-4', { y: deltaX * -0.4, x: deltaY * 0.4, })
    }
})