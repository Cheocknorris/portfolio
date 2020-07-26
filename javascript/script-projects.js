(function() {
    console.log("social network sanity check");

    gsap.from('.menu', { duration: 1, opacity: 0, delay: .5 } )

    gsap.from('.social-sub', { duration: .5, yPercent: 105, delay: .5 })
    gsap.from('.social-line', { duration: .5, xPercent: -100, delay: .8 })

    gsap.from('.image-sub', { duration: .5, yPercent: 105, delay: .5 })
    gsap.from('.image-line', { duration: .5, xPercent: -100, delay: .8 })

    gsap.from('.petition-sub', { duration: .5, yPercent: 105, delay: .5 })
    gsap.from('.petition-line', { duration: .5, xPercent: -100, delay: .8 })

    gsap.from('.github-sub', { duration: .5, yPercent: 105, delay: .5 })
    gsap.from('.github-line', { duration: .5, xPercent: -100, delay: .8 })

    gsap.from('.spotify-sub', { duration: .5, yPercent: 105, delay: .5 })
    gsap.from('.spotify-line', { duration: .5, xPercent: -100, delay: .8 })

    gsap.from('.connect-sub', { duration: .5, yPercent: 105, delay: .5 })
    gsap.from('.connect-line', { duration: .5, xPercent: -100, delay: .8 })

    gsap.from('.project-content', { duration: 1, opacity: 0, delay: .5 } )

    gsap.from('footer', { duration: 1, opacity: 0, delay: .5 } )

}());
