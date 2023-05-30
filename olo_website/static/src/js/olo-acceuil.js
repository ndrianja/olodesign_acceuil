window.onload = function () {
    console.log(document.querySelector('i.bx-menu'))
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
}