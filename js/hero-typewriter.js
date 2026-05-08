/* ===========================
   Hero Typewriter (v2)
   元の h1 構造を保ったまま、各文字を span でラップして
   1 文字ずつ opacity 表示。カーソルは表示済み末尾に追従。
=========================== */

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const title = document.querySelector('.hero__title');
  if (!title) return;

  const hero = title.closest('.hero');
  const subtitle = document.querySelector('.hero__subtitle');
  const actions = document.querySelector('.hero__actions');

  // 元の文字列を aria-label に保存（スクリーンリーダー用）
  title.setAttribute('aria-label', title.textContent.trim().replace(/\s+/g, ' '));

  // 各文字を span でラップ（br と em はそのまま保持）
  function wrap(node) {
    const children = Array.from(node.childNodes);
    children.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const text = child.textContent;
        const frag = document.createDocumentFragment();
        for (const ch of text) {
          if (ch === '\n' || ch === '\r' || ch === '\t') continue;
          const s = document.createElement('span');
          s.className = 't-char';
          s.textContent = ch;
          frag.appendChild(s);
        }
        if (frag.childNodes.length > 0) {
          child.parentNode.replaceChild(frag, child);
        } else {
          child.parentNode.removeChild(child);
        }
      } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
        wrap(child);
      }
    });
  }

  wrap(title);
  hero.classList.add('is-typewriter');

  // カーソル
  const cursor = document.createElement('span');
  cursor.className = 'hero__cursor';
  cursor.textContent = '|';
  cursor.setAttribute('aria-hidden', 'true');
  // 最初の文字の前に配置
  const firstChar = title.querySelector('.t-char');
  if (firstChar) {
    firstChar.parentNode.insertBefore(cursor, firstChar);
  } else {
    title.appendChild(cursor);
  }

  const chars = title.querySelectorAll('.t-char');
  const CHAR_DELAY = 95;
  const START_DELAY = 550;

  let i = 0;
  function reveal() {
    if (i >= chars.length) {
      onDone();
      return;
    }
    const c = chars[i];
    c.classList.add('is-revealed');
    // カーソルをこの文字の直後に移動
    if (c.nextSibling !== cursor) {
      c.parentNode.insertBefore(cursor, c.nextSibling);
    }
    i++;
    setTimeout(reveal, CHAR_DELAY);
  }

  function onDone() {
    if (subtitle) subtitle.classList.add('is-typed-in');
    if (actions) actions.classList.add('is-typed-in');
    setTimeout(() => cursor.classList.add('is-fading'), 1800);
  }

  setTimeout(reveal, START_DELAY);
})();
