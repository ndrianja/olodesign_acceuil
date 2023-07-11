function reveal() {
    var reveals = document.querySelectorAll(".forScrollUp, .forScrollLeft, .forScrollRight");

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
