/*======================toggle navbar icon========================*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
};

/*====================Active classname==========================*/ 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    /*======================sticky navbar========================*/ 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                if (document.querySelector('header nav a[href*=' + id + ']')) {
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                }
            });
        }
    });
    
    /*======================remove toggle navbar on click========================*/ 
    menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active');
};

/*======================text animation========================*/ 
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .heading', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content p', { origin: 'right' });

/*======================smooth scrolling========================*/ 
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/*======================CV Download Function========================*/ 
 
function downloadCV() {
    const cvSelect = document.getElementById('cvSelect');
    const downloadLink = document.getElementById('downloadLink');

    let fileUrl = '';
    switch (cvSelect.value) {
        case 'sde':
            fileUrl = 'https://drive.google.com/uc?export=download&id=1g498CNtkC4kFk6nXnadQUFUJ5cENZNDz'; // SDE CV link
            downloadLink.download = 'SDE_CV.pdf';
            break;
        case 'da':
            fileUrl = 'https://drive.google.com/uc?export=download&id=1aNPlIK3Qjs4k7mhDLk8RUdBqi2FIatG1'; // DA CV link
            downloadLink.download = 'DA_CV.pdf';
            break;
        case 'core':
            fileUrl = 'https://drive.google.com/uc?export=download&id=1d_3D8YXGZO8WXH-erJ_kd623KOgfzBrA'; // CORE CV link
            downloadLink.download = 'CORE_CV.pdf';
            break;
        default:
            alert('Please select a CV type.');
            return;
    }

    downloadLink.href = fileUrl;
    downloadLink.click();
}
