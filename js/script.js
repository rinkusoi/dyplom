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