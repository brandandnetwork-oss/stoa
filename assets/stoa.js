/* ============================================================
   STOA CONSULTING · Comportamiento compartido
   Header (transparent ↔ solid + autohide en cover)
   Drawer móvil · Banner de cookies
   ============================================================ */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');

  /* ---------- Header: transparent ↔ solid + autohide ---------- */
  if (header) {
    var autohide = header.dataset.autohide === 'true';
    var SOLID_AT = 80;

    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      header.classList.toggle('solid', y > SOLID_AT);
      if (autohide) {
        // En la home: oculto sobre la escena de portada, aparece al avanzar.
        header.classList.toggle('hidden-header', y < window.innerHeight * 0.6);
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  }

  /* ---------- Drawer móvil ---------- */
  var burger = document.querySelector('.hamburger');
  var drawer = document.querySelector('.drawer');
  var overlay = document.querySelector('.drawer-overlay');
  var closeBtn = document.querySelector('.drawer-close');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  if (burger) burger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);
  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ---------- Banner de cookies ---------- */
  var banner = document.querySelector('.cookie-banner');
  var KEY = 'stoa_cookie_consent';

  function setConsent(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    if (banner) banner.classList.remove('show');
  }
  if (banner) {
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) {}
    if (!stored) {
      setTimeout(function () { banner.classList.add('show'); }, 900);
    }
    var accept = banner.querySelector('[data-cookie="accept"]');
    var reject = banner.querySelector('[data-cookie="reject"]');
    if (accept) accept.addEventListener('click', function () { setConsent('all'); });
    if (reject) reject.addEventListener('click', function () { setConsent('essential'); });
  }
})();
