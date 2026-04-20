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

  document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('video-modal');
    const closeBtn = document.getElementById('video-modal-close');

    // Show immediately (every time for now)
    setTimeout(function () {
      overlay.classList.add('is-open');
    }, 400);

    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
  });
})();
