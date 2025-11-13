const sidebar = document.getElementById('sidebar');
document.getElementById('openSidebar')?.addEventListener('click', () => sidebar.classList.add('open'));
document.getElementById('closeSidebar')?.addEventListener('click', () => sidebar.classList.remove('open'));

const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});