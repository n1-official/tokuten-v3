// courses.js — courses-data.js のデータからカードを描画
// unlock.js より前に実行する必要がある（applyUnlockState がカード生成後の DOM を必要とするため）

const LOCK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>'

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function renderCourseCard(stage, course) {
  const locked = isCourseLocked(stage, course.no)
  const description = course.topics.join('、')
  const titleHtml = escapeHtml(course.title)
  const descAttr = escapeHtml(description)
  const stageNo = `${stage}-${course.no}`

  if (locked) {
    return `
      <div class="course-card course-card--locked" data-course="${stageNo}" data-description="${descAttr}">
        <div class="course-card__thumb">
          <div class="course-card__thumb-placeholder"></div>
          <div class="course-card__lock-icon">${LOCK_SVG}</div>
          <span class="course-card__duration">0:00:00</span>
        </div>
        <div class="course-card__body">
          <p class="course-card__title">${titleHtml}</p>
          <div class="course-card__meta">
            <span class="course-card__tag">カテゴリ</span>
            <span class="course-card__tag">${escapeHtml(course.level)}</span>
          </div>
        </div>
      </div>
    `
  }

  return `
    <a href="course/index.html?stage=${stage}&no=${course.no}" class="course-card" data-course="${stageNo}" data-description="${descAttr}">
      <div class="course-card__thumb">
        <div class="course-card__thumb-placeholder"></div>
        <span class="course-card__duration">0:00:00</span>
      </div>
      <div class="course-card__body">
        <p class="course-card__title">${titleHtml}</p>
        <div class="course-card__meta">
          <span class="course-card__tag">カテゴリ</span>
          <span class="course-card__tag">${escapeHtml(course.level)}</span>
        </div>
      </div>
    </a>
  `
}

function renderCourses() {
  if (typeof COURSES === 'undefined') return
  Object.keys(COURSES).forEach((stage) => {
    const container = document.querySelector(`[data-stage-scroll="${stage}"]`)
    if (!container) return
    container.innerHTML = COURSES[stage].map((c) => renderCourseCard(stage, c)).join('')
  })
}

// DOMContentLoaded より前に呼ばれる可能性に備える
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderCourses)
} else {
  renderCourses()
}
