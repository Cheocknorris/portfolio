(function() {
    console.log("social network sanity check");
    gsap.from('.social-sub', { duration: .5, yPercent: 105, delay: .5 })
    gsap.from('.social-line', { duration: .5, xPercent: -100, delay: .8 })

}());
