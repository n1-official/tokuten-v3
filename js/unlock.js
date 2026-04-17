// unlock.js

const UNLOCK_KEY = 'n1_tokuten_unlocked'
const UNLOCK_PASSWORD = 'N1MASTERY'

function isUnlocked() {
  return localStorage.getItem(UNLOCK_KEY) === 'true'
}

function tryUnlock(input) {
  if (input.trim().toUpperCase() === UNLOCK_PASSWORD) {
    localStorage.setItem(UNLOCK_KEY, 'true')
    return true
  }
  return false
}

function applyUnlockState() {
  if (!isUnlocked()) return
  document.querySelectorAll('.course-card--locked').forEach(card => {
    card.classList.remove('course-card--locked')
    const lock = card.querySelector('.course-card__lock')
    if (lock) {
      const play = document.createElement('div')
      play.className = 'course-card__play'
      play.innerHTML = `<svg viewBox="0 0 16 16"><path d="M4 2l10 6-10 6z"/></svg>`
      lock.replaceWith(play)
    }
    const badge = card.querySelector('.course-card__badge--locked')
    if (badge) {
      badge.className = 'course-card__badge course-card__badge--free'
      badge.textContent = '無料'
    }
    const link = card.closest('a') || card.querySelector('a')
    if (card.dataset.href) {
      const wrapper = document.createElement('a')
      wrapper.href = card.dataset.href
      card.parentNode.insertBefore(wrapper, card)
      wrapper.appendChild(card)
    }
  })
}

function initUnlockModal() {
  const overlay = document.getElementById('unlock-modal')
  const openBtn = document.getElementById('unlock-open-btn')
  const closeBtn = document.getElementById('unlock-close-btn')
  const form = document.getElementById('unlock-form')
  const input = document.getElementById('unlock-input')
  const error = document.getElementById('unlock-error')

  if (!overlay || !openBtn) return

  openBtn.addEventListener('click', () => {
    overlay.classList.add('is-open')
    setTimeout(() => input.focus(), 100)
  })

  closeBtn?.addEventListener('click', () => overlay.classList.remove('is-open'))

  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('is-open')
  })

  form?.addEventListener('submit', e => {
    e.preventDefault()
    const val = input.value
    if (tryUnlock(val)) {
      overlay.classList.remove('is-open')
      applyUnlockState()
      showUnlockSuccess()
    } else {
      input.classList.add('is-error')
      error.classList.add('is-visible')
      input.value = ''
      input.focus()
    }
  })

  input?.addEventListener('input', () => {
    input.classList.remove('is-error')
    error.classList.remove('is-visible')
  })
}

function showUnlockSuccess() {
  const banner = document.querySelector('.unlock-banner')
  if (!banner) return
  banner.innerHTML = `
    <div style="text-align:center;width:100%">
      <div style="font-size:2rem;margin-bottom:8px">&#10003;</div>
      <p style="font-weight:700;font-size:1.1rem;color:var(--color-primary)">全動画が解放されました</p>
      <p style="font-size:14px;color:var(--color-text-muted);margin-top:6px">下のコース一覧からすべてのパートにアクセスできます</p>
    </div>
  `
}

// locked part page guard
function guardLockedPage(partNum) {
  if (partNum <= 2) return
  if (!isUnlocked()) {
    const main = document.querySelector('.part-main')
    if (!main) return
    main.innerHTML = `
      <div style="min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 24px;text-align:center">
        <div style="font-size:3rem;margin-bottom:16px;color:var(--color-locked)">&#128274;</div>
        <h2 style="font-size:1.4rem;font-weight:800;margin-bottom:12px">このパートは予約者限定です</h2>
        <p style="color:var(--color-text-muted);font-size:15px;margin-bottom:32px;max-width:400px;line-height:1.7">
          個別指導塾をご予約後、配布されるパスワードを入力すると<br>全パートが解放されます。
        </p>
        <a href="../index.html" class="btn btn--primary">トップに戻る</a>
      </div>
    `
  }
}
