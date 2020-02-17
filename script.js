(function() {
    console.log("sanity check");
    gsap.from('.intro-title-left', { duration: 1, xPercent: 110, delay: .5 })
    gsap.from('.intro-title-right', { duration: 1, xPercent: -110, delay: .5 })
    gsap.from('.intro-line', { duration: 1, yPercent: 100, delay: .5 })
    gsap.from('.intro-sub-left', { duration: .5, yPercent: 100, delay: 1.25 })
    gsap.from('.intro-sub-right', { duration: .5, yPercent: 100, delay: 1.25 } )
    gsap.from('.intro-bottom', { duration: 1.5, opacity: 0, delay: 1.25 } )

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        triggerElement: '.sub'
    })
    .setClassToggle('.sub', 'show')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.sub'
    })
    .setClassToggle('.work-line', 'show')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        triggerElement: '.project-container'
    })
    .setClassToggle('.project-container', 'show')
    .reverse(false)
    .addTo(controller);

}());
