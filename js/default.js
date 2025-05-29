const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const toggleBtn = document.getElementById('toggleSidebar');

// Abrir a sidebar
toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

// Fechar a sidebar ao clicar no overlay
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

const lupa = document.getElementById('lupa');
const search = document.getElementById('search');
const sesi = document.getElementById('sesi');

lupa.addEventListener('click', () => {
    lupa.classList.add('teste');
    sesi.classList.add('sesi-ativi');
    search.classList.remove('d-none');
    search.focus();
});

search.addEventListener('blur', () => {
    lupa.classList.remove('teste');
    sesi.classList.remove('sesi-ativi');
    search.classList.add('d-none');
});
