// unlock.js — 共通パスワード方式
// 1つのパスワードを入力すれば全Stageが解放される

const UNLOCK_PASSWORD = '1234'
const STAGE_KEY = (stage) => 'n1_tokuten_stage_' + stage + '_unlocked'
const ALL_STAGES = ['2', '3']

function isStageUnlocked(stage) {
  return localStorage.getItem(STAGE_KEY(String(stage))) === 'true'
}

function tryUnlockStage(stage, input) {
  if ((input || '').trim() !== UNLOCK_PASSWORD) return false
  ALL_STAGES.forEach((s) => localStorage.setItem(STAGE_KEY(s), 'true'))
  return true
}

function unlockCard(card) {
  card.classList.remove('course-card--locked')
  const lockIcon = card.querySelector('.course-card__lock-icon')
  if (lockIcon) {
    const play = document.createElement('div')
    play.className = 'course-card__play'
    play.innerHTML = `<svg viewBox="0 0 16 16"><path d="M4 2l10 6-10 6z"/></svg>`
    lockIcon.replaceWith(play)
  }
  if (card.dataset.href && !card.closest('a')) {
    const wrapper = document.createElement('a')
    wrapper.href = card.dataset.href
    card.parentNode.insertBefore(wrapper, card)
    wrapper.appendChild(card)
  }
}

function applyUnlockState() {
  document.querySelectorAll('.course-row[data-stage]').forEach((row) => {
    const stage = row.dataset.stage
    if (isStageUnlocked(stage)) {
      row.querySelectorAll('.course-card--locked').forEach(unlockCard)
    }
  })
}

function openUnlockModal(stage) {
  const overlay = document.getElementById('unlock-modal')
  if (!overlay) return
  const titleEl = overlay.querySelector('.modal__title')
  const descEl = overlay.querySelector('.modal__desc')
  const input = document.getElementById('unlock-input')
  const error = document.getElementById('unlock-error')

  overlay.dataset.stage = String(stage || 2)
  if (titleEl) titleEl.textContent = 'パスワードを入力'
  if (descEl) descEl.textContent = '配布されたパスワードを入力すると、全ステージの講座が解放されます。'
  if (error) error.classList.remove('is-visible')
  if (input) {
    input.value = ''
    input.classList.remove('is-error')
  }
  overlay.classList.add('is-open')
  setTimeout(() => input && input.focus(), 100)
}

function initUnlockModal() {
  const overlay = document.getElementById('unlock-modal')
  if (!overlay) return
  const closeBtn = document.getElementById('unlock-close-btn')
  const cancelBtn = document.getElementById('unlock-cancel-btn')
  const form = document.getElementById('unlock-form')
  const input = document.getElementById('unlock-input')
  const error = document.getElementById('unlock-error')

  // ヒーローのボタン → デフォルトで Stage 2 モーダル
  document.getElementById('unlock-open-btn')?.addEventListener('click', () => openUnlockModal(2))

  // バナー側のボタン群（data-unlock-stage で stage を指定）
  document.querySelectorAll('[data-unlock-stage]').forEach((btn) => {
    btn.addEventListener('click', () => openUnlockModal(btn.dataset.unlockStage))
  })

  // ロック済みカードをクリック → そのカードが属する Stage のモーダル
  document.querySelectorAll('.course-row[data-stage]').forEach((row) => {
    const stage = row.dataset.stage
    if (stage === '1') return
    row.querySelectorAll('.course-card--locked').forEach((card) => {
      card.style.cursor = 'pointer'
      card.addEventListener('click', () => openUnlockModal(stage))
    })
  })

  closeBtn?.addEventListener('click', () => overlay.classList.remove('is-open'))
  cancelBtn?.addEventListener('click', () => overlay.classList.remove('is-open'))
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('is-open')
  })

  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    const stage = overlay.dataset.stage || '2'
    if (tryUnlockStage(stage, input.value)) {
      overlay.classList.remove('is-open')
      applyUnlockState()
      showUnlockSuccess(stage)
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
      <p style="font-weight:700;font-size:1.1rem;color:var(--color-primary)">全ステージが解放されました</p>
      <p style="font-size:14px;color:var(--color-text-muted);margin-top:6px">下のコース一覧からすべてのパートにアクセスできます</p>
    </div>
  `
}

// Part ページのアクセス制限
// Part 1, 2 = Stage 1（自由）
// Part 3, 4 = Stage 2
// Part 5    = Stage 3
function partToStage(partNum) {
  if (partNum <= 2) return 1
  if (partNum <= 4) return 2
  return 3
}

function guardLockedPage(partNum) {
  const stage = partToStage(partNum)
  if (stage === 1) return
  if (!isStageUnlocked(String(stage))) {
    const main = document.querySelector('.part-main')
    if (!main) return
    main.innerHTML = `
      <div style="min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 24px;text-align:center">
        <div style="font-size:3rem;margin-bottom:16px;color:var(--color-locked)">&#128274;</div>
        <h2 style="font-size:1.4rem;font-weight:800;margin-bottom:12px">このパートは Stage ${stage} 限定です</h2>
        <p style="color:var(--color-text-muted);font-size:15px;margin-bottom:32px;max-width:400px;line-height:1.7">
          配布されたパスワードを入力すると<br>このパートが解放されます。
        </p>
        <a href="../index.html" class="btn btn--primary">トップに戻る</a>
      </div>
    `
  }
}
