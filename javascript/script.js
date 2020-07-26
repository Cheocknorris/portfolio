(function() {

// INTRO ANIMATIONS /////////////////////////////////////////////////////////
    gsap.from('.intro__title-left', { duration: 1, xPercent: 110, delay: .5 })
    gsap.from('.intro__title-right', { duration: 1, xPercent: -110, delay: .5 })
    gsap.from('.intro__line', { duration: 1, yPercent: 100, delay: .5 })
    gsap.from('.intro__sub-left', { duration: .5, yPercent: 100, delay: 1.25 })
    gsap.from('.intro__sub-right', { duration: .5, yPercent: 100, delay: 1.25 } )
    gsap.from('.intro__bottom', { duration: .8, opacity: 0, delay: 1.25 } )
/////////////////////////////////////////////////////////////////////////

// CALCULATE TOP OF ELEMENTS FOR SCROLLING ANIMATIONS /////////////////////////////////////////////
    function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop }
    }
/////////////////////////////////////////////////////////////////////////////////////

// ABOUT SECTION SCROLLING ANIMATIONS///////////////////////////////////////////////
    var aboutFirst = document.querySelector('.about__text-one');
    var aboutFirstOffset = offset(aboutFirst);
    var aboutLast = document.querySelector('.about__text-seven');
    var aboutLastOffset = offset(aboutLast);
    // console.log('aboutFirstOffset', aboutFirstOffset.top);
    // console.log('aboutLastOffset', aboutLastOffset.top);

    var controller = new ScrollMagic.Controller();

    var aboutOneAnimation = new ScrollMagic.Scene({
        offset: 300
    })
    .setClassToggle('.about__text-one', 'up')
    .reverse(false)
    .addTo(controller);

    var aboutTwoAnimation = new ScrollMagic.Scene({
        offset: 350
    })
    .setClassToggle('.about__text-two', 'up')
    .reverse(false)
    .addTo(controller);

    var aboutThreeAnimation = new ScrollMagic.Scene({
        offset: 400
    })
    .setClassToggle('.about__text-three', 'up')
    .reverse(false)
    .addTo(controller);

    var aboutFourAnimation = new ScrollMagic.Scene({
        offset: 450
    })
    .setClassToggle('.about__text-four', 'up')
    .reverse(false)
    .addTo(controller);

    var aboutFiveAnimation = new ScrollMagic.Scene({
        offset: 500
    })
    .setClassToggle('.about__text-five', 'up')
    .reverse(false)
    .addTo(controller);

    var aboutSixAnimation = new ScrollMagic.Scene({
        offset: 550
    })
    .setClassToggle('.about__text-six', 'up')
    .reverse(false)
    .addTo(controller);

    var aboutSevenAnimation = new ScrollMagic.Scene({
        offset: 600
    })
    .setClassToggle('.about__text-seven', 'up')
    .reverse(false)
    .addTo(controller);


/// WORK TITLE SCROLLING ANIMATION ///////////////////////////////////////////////////////

    var work = document.querySelector('.work');
    var workOffset = offset(work);
    console.log( 'workOffset:', workOffset.top);

    var workTitleAnimation = new ScrollMagic.Scene({
        offset: 685
    })
    .setClassToggle('.work__title', 'up')
    .reverse(false)
    .addTo(controller);

    var workUnderlineAnimation = new ScrollMagic.Scene({
        offset: 750
    })
    .setClassToggle('.work__title-underline', 'right')
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
