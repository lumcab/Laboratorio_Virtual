/* VirtualLab — Gestor de tema claro / oscuro
   Se carga en <head> para evitar flash de tema incorrecto */
(function () {
  var KEY = 'vl-theme';

  function getTheme() {
    var saved = localStorage.getItem(KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setDataAttr(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function updateBtn(theme) {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
    btn.setAttribute('aria-label', btn.title);
  }

  /* Aplicar tema ANTES de que el navegador pinte (evita flash) */
  setDataAttr(getTheme());

  document.addEventListener('DOMContentLoaded', function () {
    /* Inyectar botón en .nav-right de cualquier página */
    var navRight = document.querySelector('.nav-right');
    if (navRight && !document.getElementById('themeToggle')) {
      var btn = document.createElement('button');
      btn.id        = 'themeToggle';
      btn.className = 'v2-btn v2-btn-ghost theme-toggle';
      btn.addEventListener('click', function () {
        var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem(KEY, next);   /* guardar solo cuando el usuario elige */
        setDataAttr(next);
        updateBtn(next);
      });
      navRight.insertBefore(btn, navRight.firstChild);
    }
    updateBtn(document.documentElement.getAttribute('data-theme') || getTheme());
  });

  /* Seguir el sistema cuando no hay preferencia guardada */
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem(KEY)) {
      var t = e.matches ? 'dark' : 'light';
      setDataAttr(t);
      updateBtn(t);
    }
  });
})();
