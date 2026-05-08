// Welcome video modal
(function () {
  'use strict';

  function closeModal() {
    const overlay = document.getElementById('video-modal');
    overlay.classList.remove('is-open');
    // Stop video by clearing src
    const iframe = document.getElementById('welcome-video');
    iframe.src = iframe.src;
  }

  function todayKey() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('video-modal');
    const closeBtn = document.getElementById('video-modal-close');

    // 1日1回だけ表示（同じブラウザで当日2回目以降はスキップ）
    const STORAGE_KEY = 'welcomeVideoLastShown';
    const lastShown = localStorage.getItem(STORAGE_KEY);
    const today = todayKey();

    if (lastShown !== today) {
      setTimeout(function () {
        overlay.classList.add('is-open');
        localStorage.setItem(STORAGE_KEY, today);
      }, 400);
    }

    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  });
})();
