/* ===========================
   Hero Typewriter
   タイトルを1文字ずつタイプし、終わったらサブタイトル・ボタンをフェードイン
=========================== */

(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const title = document.querySelector('.hero__title');
  const hero = title && title.closest('.hero');
  const subtitle = document.querySelector('.hero__subtitle');
  const actions = document.querySelector('.hero__actions');
  if (!title || !hero) return;

  const segments = [
    { text: 'AIで人生を変える' },
    { br: true },
    { text: '"正しい地図"', em: true },
    { text: 'を、君に。' },
  ];

  const fullText = segments
    .filter((s) => s.text)
    .map((s) => s.text)
    .join('');
  title.setAttribute('aria-label', fullText);

  hero.classList.add('is-typewriter');
  title.innerHTML = '';

  const cursor = document.createElement('span');
  cursor.className = 'hero__cursor';
  cursor.textContent = '|';
  cursor.setAttribute('aria-hidden', 'true');
  title.appendChild(cursor);

  const CHAR_DELAY = 95;
  const BR_DELAY = 280;
  const SEGMENT_GAP = 120;
  const START_DELAY = 550;

  let segIdx = 0;
  let charIdx = 0;
  let container = title;

  function append(node) {
    if (container === title) title.insertBefore(node, cursor);
    else container.appendChild(node);
  }

  function step() {
    if (segIdx >= segments.length) {
      onDone();
      return;
    }
    const seg = segments[segIdx];

    if (seg.br) {
      title.insertBefore(document.createElement('br'), cursor);
      segIdx++;
      charIdx = 0;
      setTimeout(step, BR_DELAY);
      return;
    }

    if (charIdx === 0 && seg.em) {
      const em = document.createElement('em');
      title.insertBefore(em, cursor);
      container = em;
    }

    if (charIdx < seg.text.length) {
      append(document.createTextNode(seg.text[charIdx]));
      charIdx++;
      setTimeout(step, CHAR_DELAY);
    } else {
      container = title;
      segIdx++;
      charIdx = 0;
      setTimeout(step, SEGMENT_GAP);
    }
  }

  function onDone() {
    if (subtitle) subtitle.classList.add('is-typed-in');
    if (actions) actions.classList.add('is-typed-in');
    setTimeout(() => cursor.classList.add('is-fading'), 1800);
  }

  setTimeout(step, START_DELAY);
})();
