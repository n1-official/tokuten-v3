// main.js

document.addEventListener('DOMContentLoaded', () => {
  initReveal()
  initCounters()
  applyUnlockState()
  initUnlockModal()
  initHeroGSAP()
})

/* scroll reveal (IntersectionObserver) */
function initReveal() {
  const els = document.querySelectorAll('.reveal')
  if (!els.length) return
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible')
        io.unobserve(e.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '-40px' })
  els.forEach(el => io.observe(el))
}

/* counter animation */
function initCounters() {
  const counters = document.querySelectorAll('.counter')
  if (!counters.length) return
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target)
        io.unobserve(e.target)
      }
    })
  }, { threshold: 0.5 })
  counters.forEach(c => io.observe(c))
}
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10)
  const duration = 1400
  const start = performance.now()
  const easeOut = t => 1 - Math.pow(1 - t, 3)
  function tick(now) {
    const p = Math.min((now - start) / duration, 1)
    el.textContent = Math.floor(easeOut(p) * target).toLocaleString()
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

/* GSAP hero animation */
function initHeroGSAP() {
  if (typeof gsap === 'undefined') return
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.from('.header', { y: -24, opacity: 0, duration: 0.6 })
    .from('.hero__badge', { scale: 0.85, opacity: 0, duration: 0.5 }, '-=0.2')
    .from('.hero__title-word', { y: 44, opacity: 0, duration: 0.7, stagger: 0.07 }, '-=0.1')
    .from('.hero__subtitle', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
    .from('.hero__stat', { y: 16, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
    .from('.hero__actions .btn', { scale: 0.92, opacity: 0, duration: 0.5, stagger: 0.1 }, '-=0.2')
}

/* split hero title into word spans */
function splitHeroTitle() {
  const title = document.querySelector('.hero__title')
  if (!title || title.dataset.split) return
  title.dataset.split = 'true'
  title.innerHTML = title.innerHTML
    .split(/(<br\s*\/?>)/gi)
    .map(seg => {
      if (/^<br/i.test(seg)) return seg
      return seg.split(' ').map(w => `<span class="hero__title-word" style="display:inline-block">${w}</span>`).join(' ')
    })
    .join('')
}

// run split before GSAP
document.addEventListener('DOMContentLoaded', splitHeroTitle)
