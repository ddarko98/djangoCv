
window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealTop < windowheight - revealpoint) {
            reveals[i].classList.add('aktiviraj');
        } else {
            reveals[i].classList.remove('aktiviraj');
        }
    }
}
