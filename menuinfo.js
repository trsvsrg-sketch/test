

// ==========================================
// 1. АВТОМАТИЧЕСКАЯ ВСТАВКА ВЕРХНЕЙ ШАПКИ
// ==========================================
const headerContainer = document.getElementById('dynamic-header');
if (headerContainer) {
    headerContainer.innerHTML = `
    <nav class="navbar navbar-expand-lg border-bottom shadow-sm mb-4">
        <div class="container">
            <a class="navbar-brand fw-bold text-body" href="#">
                <i class="fa-solid fa-graduation-cap me-2 text-primary"></i>Эксперт ЕГЭ Тарасов Сергей Олегович
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto header-nav align-items-center">
                    <li class="nav-item">
                        <a class="nav-link text-body active" href="#"><i class="fa-solid fa-house me-1"></i>Главная</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-body" href="#"><i class="fa-solid fa-book me-1"></i>Теория</a>
                    </li>
                    <li class="nav-item me-lg-3">
                        <a class="nav-link text-body" href="#"><i class="fa-solid fa-user me-1"></i>Войти</a>
                    </li>
                    <!-- Специальное место, куда ниже вставится кнопка темы -->
                    <li id="theme-toggle-container" class="nav-item mt-2 mt-lg-0"></li>
                </ul>
            </div>
        </div>
    </nav>
    `;
}

// ==========================================
// 2. ВСТАВКА ЛЕВОГО МЕНЮ (ДЕРЕВО ТЕМ)
// ==========================================
const sidebarContainer = document.getElementById('dynamic-sidebar');
if (sidebarContainer) {
    sidebarContainer.innerHTML = `
    <div class="sidebar">
        <h5 class="mb-3"><i class="fa-solid fa-list me-2"></i>Номера информатика</h5>
        <div class="list-group list-group-flush">

            <div class="ms-3">
                <a href="#" class="list-group-item list-group-item-action">1 Графы и города</a>
                <a href="#" class="list-group-item list-group-item-action">
2. Логика</a>


   <a href="#" class="list-group-item list-group-item-action">
3.Таблицы </a>

   <a href="#" class="list-group-item list-group-item-action">
4.Фано </a>

   <a href="5_INFO.html" class="list-group-item list-group-item-action">
5.Алгоритм </a>

   <a href="#" class="list-group-item list-group-item-action">
6.ЧЕРЕПаха </a>


   <a href="#" class="list-group-item list-group-item-action">
7.Цвет и Музыка </a>


   <a href="#" class="list-group-item list-group-item-action">
8.Алфавиты и комбинаторика </a>


   <a href="9INFO.html" class="list-group-item list-group-item-action">
9.Анализ строк таблицы </a>


   <a href="#" class="list-group-item list-group-item-action">
10.IP adress </a>



   <a href="#" class="list-group-item list-group-item-action">
11. Пароли</a>


   <a href="#" class="list-group-item list-group-item-action">
12. Лента Тьюринга </a>

   <a href="#" class="list-group-item list-group-item-action">
13. Рекурсивный алгоритм </a>

   <a href="#" class="list-group-item list-group-item-action">
14.Системы счиления </a>

   <a href="#" class="list-group-item list-group-item-action">
15.Сложная логика </a>


   <a href="#" class="list-group-item list-group-item-action">
16. Рекурсия </a>


   <a href="#" class="list-group-item list-group-item-action">
17. Анализ последовательности</a>


   <a href="#" class="list-group-item list-group-item-action">
18.Робот-монетчик </a>


   <a href="#" class="list-group-item list-group-item-action">
19-21. Давай сыграем в игру</a>



   <a href="#" class="list-group-item list-group-item-action">
22. Парралельные процессоры </a>

   <a href="#" class="list-group-item list-group-item-action">
23.Графы </a>


   <a href="#" class="list-group-item list-group-item-action">
24. Файл и алгоритм</a>


   <a href="#" class="list-group-item list-group-item-action">
25.Поиск чисел </a>


   <a href="#" class="list-group-item list-group-item-action">
26.Файл и алгоритм </a>



   <a href="#" class="list-group-item list-group-item-action">
27. Анализ файла </a>







            </div>




            <a href="#mathSubmenu" class="list-group-item list-group-item-action" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="mathSubmenu">
                <i class="fa-solid fa-angle-right me-1"></i> Математика
            </a>
            <div class="collapse ms-3" id="mathSubmenu">
                <a href="1.html" class="list-group-item list-group-item-action">1Алгебра</a>
                <a href="#" class="list-group-item list-group-item-action">1Геометрия</a>
                <a href="#" class="list-group-item list-group-item-action">1Тригонометрия</a>
            </div>
            <a href="#submenu2" class="list-group-item list-group-item-action" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="submenu2">
                <i class="fa-solid fa-angle-right me-1"></i> 2
            </a>
            <div class="collapse ms-3" id="submenu2">
                <a href="#" class="list-group-item list-group-item-action">11 Алгебра</a>
                <a href="#" class="list-group-item list-group-item-action">12 Геометрия</a>
                <a href="#" class="list-group-item list-group-item-action">13 Тригонометния</a>
            </div>




        </div>
    </div>
    `;
}







// ==========================================
// 3. СОЗДАНИЕ КНОПКИ ТЕМЫ И ЕЕ ЛОГИКА
// ==========================================
const toggleContainer = document.getElementById('theme-toggle-container');
if (toggleContainer) {
    toggleContainer.innerHTML = `
        <button id="theme-toggle" class="btn btn-sm">
            <i class="fa-solid fa-moon me-1"></i><span>Тема</span>
        </button>
    `;
}

const toggleBtn = document.getElementById('theme-toggle');

function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun me-1"></i><span>Светлая</span>';
        toggleBtn.className = 'btn btn-sm btn-outline-warning';
    } else {
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon me-1"></i><span>Темная</span>';
        toggleBtn.className = 'btn btn-sm btn-outline-secondary';
    }
}

// Проверяем память браузера при загрузке страницы
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Отслеживаем клик по кнопке темы
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
}




// ==========================================
// 5. КНОПКА "НАВЕРХ" (SCROLL TO TOP)
// ==========================================
// 1. Создаем кнопку динамически на странице
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scroll-to-top';
scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.body.appendChild(scrollBtn);

// 2. Отслеживаем прокрутку страницы
window.addEventListener('scroll', () => {
    // Если страница прокручена вниз больше чем на 300 пикселей — показываем кнопку
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

// 3. Логика плавного клика наверх
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Отвечает за плавную анимацию скролла
    });
});









// ==========================================
// АВТОМАТИЧЕСКАЯ ВСТАВКА НИЖНЕГО ФУТЕРA
// ==========================================
const footerContainer = document.getElementById('dynamic-footer');
if (footerContainer) {
    footerContainer.innerHTML = `
    <footer class="border-top py-4 mt-5 bg-body-tertiary">
        <div class="container text-center text-muted small">
            <div>&copy; 2026 Эксперт ЕГЭ. Все права защищены.</div>
            <div class="mt-1 text-secondary">База задач для индивидуальной подготовки учеников к экзаменам.</div>
        </div>
    </footer>
    `;
}
