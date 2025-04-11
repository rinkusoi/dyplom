// Бургер-меню

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

// Зміна блоку при натисканні на кнопку у Our Works

function switchWorks(index, clickedBtn) {
    document.querySelectorAll('.our-works-items').forEach(item => {
        item.style.display = 'none';
    });

    document.getElementById(`works-set-${index}`).style.display = 'block';

    document.querySelectorAll('.works-headline button').forEach(btn => {
        btn.classList.remove('active');
    });

    clickedBtn.classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); 
        }
    });
    }, {
        threshold: 0.1 
    });

    elements.forEach(el => {
        observer.observe(el);
    });
});
