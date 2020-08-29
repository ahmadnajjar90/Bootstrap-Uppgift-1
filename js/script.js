$(document).ready(function() {

    var owl = $('#owl');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    })

    var owl2 = $('#owl2');
    owl2.owlCarousel({
        items: 5,
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    })
})