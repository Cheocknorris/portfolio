(function() {

// INTRO ANIMATIONS /////////////////////////////////////////////////////////
    gsap.from('.intro-title-left', { duration: 1, xPercent: 110, delay: .5 })
    gsap.from('.intro-title-right', { duration: 1, xPercent: -110, delay: .5 })
    gsap.from('.intro-line', { duration: 1, yPercent: 100, delay: .5 })
    gsap.from('.intro-sub-left', { duration: .5, yPercent: 100, delay: 1.25 })
    gsap.from('.intro-sub-right', { duration: .5, yPercent: 100, delay: 1.25 } )
    gsap.from('.intro-bottom', { duration: .8, opacity: 0, delay: 1.25 } )
/////////////////////////////////////////////////////////////////////////

// CALCULATE TOP OF ELEMENTS FOR SCROLLING ANIMATIONS /////////////////////////////////////////////
    function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop }
    }
/////////////////////////////////////////////////////////////////////////////////////

// ABOUT SECTION SCROLLING ANIMATIONS///////////////////////////////////////////////
    var aboutFirst = document.querySelector('.about-text-one');
    var aboutFirstOffset = offset(aboutFirst);
    var aboutLast = document.querySelector('.about-text-seven');
    var aboutLastOffset = offset(aboutLast);
    // console.log('aboutFirstOffset', aboutFirstOffset.top);
    // console.log('aboutLastOffset', aboutLastOffset.top);

    var controller = new ScrollMagic.Controller();

    var aboutOneAnimation = new ScrollMagic.Scene({
        offset: 300
    })
    .setClassToggle('.about-text-one', 'up')
    .reverse(false)
    .addTo(controller);

    var aboutTwoAnimation = new ScrollMagic.Scene({
        offset: 350
    })
    .setClassToggle('.about-text-two', 'up')
    .reverse(false)
    .addTo(controller);

    var aboutThreeAnimation = new ScrollMagic.Scene({
        offset: 400
    })
    .setClassToggle('.about-text-three', 'up')
    .reverse(false)
    .addTo(controller);

    var aboutFourAnimation = new ScrollMagic.Scene({
        offset: 450
    })
    .setClassToggle('.about-text-four', 'up')
    .reverse(false)
    .addTo(controller);

    var aboutFiveAnimation = new ScrollMagic.Scene({
        offset: 500
    })
    .setClassToggle('.about-text-five', 'up')
    .reverse(false)
    .addTo(controller);

    var aboutSixAnimation = new ScrollMagic.Scene({
        offset: 550
    })
    .setClassToggle('.about-text-six', 'up')
    .reverse(false)
    .addTo(controller);

    var aboutSevenAnimation = new ScrollMagic.Scene({
        offset: 600
    })
    .setClassToggle('.about-text-seven', 'up')
    .reverse(false)
    .addTo(controller);


/// WORK TITLE SCROLLING ANIMATION ///////////////////////////////////////////////////////

    var workTitle = document.querySelector('.work-title');
    var workTitleOffset = offset(workTitle);
    console.log( 'workTitleOffset:', workTitleOffset.top);

    var workTitleAnimation = new ScrollMagic.Scene({
        // triggerElement: '.sub'
        offset: 685
    })
    .setClassToggle('.sub', 'up')
    .reverse(false)
    .addTo(controller);

    var workUnderlineAnimation = new ScrollMagic.Scene({
        offset: 750
    })
    .setClassToggle('.work-line', 'right')
    .reverse(false)
    .addTo(controller);
///////////////////////////////////////////////////////////////////////////////


// PROJECTS SCROLLING ANIMATIONS ////////////////////////////////////////////////

    var projectOneAnimation = new ScrollMagic.Scene({
        offset: 900
    })
    .setClassToggle('.project-container-one', 'show')
    .reverse(false)
    .addTo(controller);

    var projectTwoAnimation = new ScrollMagic.Scene({
        offset: 920
    })
    .setClassToggle('.project-container-two', 'show')
    .reverse(false)
    .addTo(controller);

    var projectThreeAnimation = new ScrollMagic.Scene({
        offset: 940
    })
    .setClassToggle('.project-container-three', 'show')
    .reverse(false)
    .addTo(controller);

    var projectFourAnimation = new ScrollMagic.Scene({
        offset: 1200
    })
    .setClassToggle('.project-container-four', 'show')
    .reverse(false)
    .addTo(controller);

    var projectFiveAnimation = new ScrollMagic.Scene({
        offset: 1220
    })
    .setClassToggle('.project-container-five', 'show')
    .reverse(false)
    .addTo(controller);

    var projectSixAnimation = new ScrollMagic.Scene({
        offset: 1240
    })
    .setClassToggle('.project-container-six', 'show')
    .reverse(false)
    .addTo(controller);

}());
