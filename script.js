(function() {
    console.log("sanity check");
    gsap.from('.intro-title-left', { duration: 1, xPercent: 110, delay: .5 })
    gsap.from('.intro-title-right', { duration: 1, xPercent: -110, delay: .5 })
    gsap.from('.intro-line', { duration: 1, yPercent: 100, delay: .5 })
    gsap.from('.intro-sub-left', { duration: .5, yPercent: 100, delay: 1.25 })
    gsap.from('.intro-sub-right', { duration: .5, yPercent: 100, delay: 1.25 } )
    gsap.from('.intro-bottom', { duration: .8, opacity: 0, delay: 1.25 } )



    function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop }
    }


    var workTitle = document.querySelector('.work-title');
    var workTitleOffset = offset(workTitle);
    console.log( 'workTitleOffset:', workTitleOffset.top);


    var aboutFirst = document.querySelector('.about-text-one');
    var aboutFirstOffset = offset(aboutFirst);
    var aboutLast = document.querySelector('.about-text-seven');
    var aboutLastOffset = offset(aboutLast);
    console.log('aboutFirstOffset', aboutFirstOffset.top);
    console.log('aboutLastOffset', aboutLastOffset.top);


    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        offset: 310
    })
    .setClassToggle('.about-text-one', 'up')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 365
    })
    .setClassToggle('.about-text-two', 'up')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 425
    })
    .setClassToggle('.about-text-three', 'up')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 480
    })
    .setClassToggle('.about-text-four', 'up')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 535
    })
    .setClassToggle('.about-text-five', 'up')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 580
    })
    .setClassToggle('.about-text-six', 'up')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 635
    })
    .setClassToggle('.about-text-seven', 'up')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        // triggerElement: '.sub'
        offset: 690
    })
    .setClassToggle('.sub', 'up')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 750
    })
    .setClassToggle('.work-line', 'right')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 900
    })
    .setClassToggle('.project-container-one', 'show')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 920
    })
    .setClassToggle('.project-container-two', 'show')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 940
    })
    .setClassToggle('.project-container-three', 'show')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 1200
    })
    .setClassToggle('.project-container-four', 'show')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 1220
    })
    .setClassToggle('.project-container-five', 'show')
    .reverse(false)
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
        offset: 1240
    })
    .setClassToggle('.project-container-six', 'show')
    .reverse(false)
    .addTo(controller);

}());
