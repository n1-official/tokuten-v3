// Course card hover popup
(function () {
  'use strict';

  const popup = document.createElement('div');
  popup.className = 'course-popup';
  popup.innerHTML = `
    <p class="course-popup__label">このコースについて</p>
    <p class="course-popup__title"></p>
    <p class="course-popup__desc"></p>
    <div class="course-popup__meta"></div>
  `;
  document.body.appendChild(popup);

  let hideTimer;

  function show(card) {
    clearTimeout(hideTimer);

    const title = card.querySelector('.course-card__title')?.textContent?.trim() || '';
    const duration = card.querySelector('.course-card__duration')?.textContent?.trim() || '';
    const tags = [...card.querySelectorAll('.course-card__tag')].map(t => t.textContent.trim());
    const desc = card.dataset.desc || '講座の詳細説明がここに入ります。コースの内容・目標・対象者などを記載します。';

    popup.querySelector('.course-popup__title').textContent = title;
    popup.querySelector('.course-popup__desc').textContent = desc;

    const metaEl = popup.querySelector('.course-popup__meta');
    const items = [];
    if (duration && duration !== '0:00:00') items.push('⏱ ' + duration);
    tags.forEach(t => items.push(t));
    metaEl.innerHTML = items.map(m => `<span>${m}</span>`).join('');

    // Positioning: prefer right of card, fall back to left
    const rect = card.getBoundingClientRect();
    const pw = 280;
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let left = rect.right + scrollX + 14;
    let top  = rect.top  + scrollY;

    if (left + pw > scrollX + window.innerWidth - 12) {
      left = rect.left + scrollX - pw - 14;
    }
    if (left < scrollX + 8) left = scrollX + 8;

    popup.style.left = left + 'px';
    popup.style.top  = top  + 'px';
    popup.classList.add('is-visible');
  }

  function hide() {
    hideTimer = setTimeout(() => popup.classList.remove('is-visible'), 120);
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.course-card').forEach(card => {
      card.addEventListener('mouseenter', () => show(card));
      card.addEventListener('mouseleave', hide);
    });
    popup.addEventListener('mouseenter', () => clearTimeout(hideTimer));
    popup.addEventListener('mouseleave', hide);
  });
})();
