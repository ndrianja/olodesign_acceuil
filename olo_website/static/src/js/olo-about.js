window.onload = function () {
    document.querySelector('i.bx-menu').onclick = function () {
        document.querySelector('.menu-toogle ul').classList.add('active');
        document.querySelector('.menu-toogle ul').classList.remove('inactive');
        document.querySelector('i.bx-menu').classList.add('d-none');
        document.querySelector('i.bx-chevron-up').classList.remove('d-none');
    }
    document.querySelector('i.bx-chevron-up').onclick = function () {
        document.querySelector('.menu-toogle ul').classList.add('inactive');
        document.querySelector('.menu-toogle ul').classList.remove('active');
        document.querySelector('i.bx-chevron-up').classList.add('d-none');
        document.querySelector('i.bx-menu').classList.remove('d-none');
    }
    $('#carouselExampleControls').carousel();
    // Sélectionnez toutes les images à l'intérieur du carousel
    var carouselImages = document.querySelectorAll('.carousel img');

    // Parcourez les images et supprimez l'attribut loading
    carouselImages.forEach(function (image) {
        image.removeAttribute('loading');
    });
}
function reveal() {
    var reveals = document.querySelectorAll(".forScrollUp, .forScrollDown, .forScrollLeft, .forScrollRight");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("scrollActive");
        } else {
            reveals[i].classList.remove("scrollActive");
        }
    }
}

window.addEventListener("scroll", reveal);