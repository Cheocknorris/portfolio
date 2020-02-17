(function() {
    console.log("sanity check");
    gsap.from('.intro-title-left', { duration: 1, xPercent: 110, delay: .5 })
    gsap.from('.intro-title-right', { duration: 1, xPercent: -110, delay: .5 })
    gsap.from('.intro-line', { duration: 1, yPercent: 100, delay: .5 })
    gsap.from('.intro-sub-left', { duration: .5, yPercent: 100, delay: 1.25 })
    gsap.from('.intro-sub-right', { duration: .5, yPercent: 100, delay: 1.25 } )
    gsap.from('.intro-bottom', { duration: 1.5, opacity: 0, delay: 1.25 } )


    function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }


    var workTitle = document.querySelector('.work-title');
    var workTitleOffset = offset(workTitle);
    console.log( 'workTitleOffset:', workTitleOffset.left, workTitleOffset.top);

    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({
        // triggerElement: '.sub'
        offset: 800
    })
    .setClassToggle('.sub', 'up')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 850
    })
    .setClassToggle('.work-line', 'right')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 1100
    })
    .setClassToggle('.project-container-one', 'show')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 1100
    })
    .setClassToggle('.project-container-two', 'show')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 1100
    })
    .setClassToggle('.project-container-three', 'show')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 1100
    })
    .setClassToggle('.project-container-four', 'show')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 1100
    })
    .setClassToggle('.project-container-five', 'show')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 1100
    })
    .setClassToggle('.project-container-six', 'show')
    .reverse(false)
    .addTo(controller);

}());
