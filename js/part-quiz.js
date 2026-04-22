/* ===========================
   Part Quiz — 理解度チェック
   対象: n1-official/tokuten-v3
=========================== */

const PART_QUIZ_DATA = {
  1: {
    questions: [
      {
        q: '生成AIの仕組みとして最も正確なものはどれですか？',
        options: [
          'A. 人間の脳を電子的にコピーしたシステム',
          'B. 次に来る言葉を統計的に予測するモデル',
          'C. インターネット全体をリアルタイムで検索するエンジン',
          'D. 専門家の知識をデータベース化したもの',
        ],
        correct: 1,
        explanation: '生成AIは「次にどの言葉が来る確率が高いか」を膨大なテキストから学習した統計モデルです。脳のコピーでも検索エンジンでもありません。',
      },
      {
        q: 'AIが特に得意とすることはどれですか？',
        options: [
          'A. 最新ニュースの正確な事実確認',
          'B. 感情を持った相手への共感的な傾聴',
          'C. 文章の要約・翻訳・言い換え',
          'D. 数十年先の株価予測',
        ],
        correct: 2,
        explanation: 'AIは大量のテキストを学習しているため、文章の要約・翻訳・言い換えが得意です。最新情報や感情的なつながり、未来予測は苦手とする領域です。',
      },
      {
        q: 'AIが苦手とすることはどれですか？',
        options: [
          'A. 長い文書を短くまとめること',
          'B. 箇条書きで情報を整理すること',
          'C. 複数の文体パターンを提示すること',
          'D. 学習データのカットオフ以降の最新情報を答えること',
        ],
        correct: 3,
        explanation: 'AIには「学習データの締め切り日（カットオフ）」があり、それ以降に起きた出来事は知りません。要約・整理・パターン提示は得意な作業です。',
      },
    ],
  },
  2: {
    questions: [
      {
        q: 'Claude（クロード）の主な特徴として正しいものはどれですか？',
        options: [
          'A. 画像生成に特化した最先端モデル',
          'B. Google検索とリアルタイムで連携している',
          'C. 長文要約・文書作成が得意で安全性を重視した設計',
          'D. プログラムのコード実行環境が標準搭載されている',
        ],
        correct: 2,
        explanation: 'Claudeは長文処理と文書作成に強みを持ち、安全性・倫理性を重視して開発されています。画像生成やリアルタイム検索連携はClaudeの主な特徴ではありません。',
      },
      {
        q: 'AIツールを使いこなすための最も効果的なアプローチはどれですか？',
        options: [
          'A. できるだけ多くのツールを並行して試し続ける',
          'B. まず1つに絞って毎日使い、感覚を掴む',
          'C. 有料プランに課金してから使い始める',
          'D. 使い方のマニュアルをすべて読んでから使う',
        ],
        correct: 1,
        explanation: 'AIツールは「使う量」が上達の鍵です。多くのツールを浅く試すより、1つを毎日使って感覚を身につける方が実力がつきます。',
      },
      {
        q: 'Geminiが他のAIより優れているポイントはどれですか？',
        options: [
          'A. 最もシンプルなUIで初心者に向いている',
          'B. 完全無料で全機能が使える唯一のAI',
          'C. Google検索・Googleドライブとの連携が強い',
          'D. 音声会話に特化したモデルである',
        ],
        correct: 2,
        explanation: 'GeminiはGoogleのサービス群（検索・Gmail・ドライブ等）と深く連携しており、Google系ツールをすでに使っているユーザーにとって特に強力です。',
      },
    ],
  },
  3: {
    questions: [
      {
        q: 'AI副業を始めるとき、最初に選ぶ副業の条件として適切なものはどれですか？',
        options: [
          'A. 市場規模が最も大きいジャンルを選ぶ',
          'B. 今の自分のスキルとAIが重なる領域を選ぶ',
          'C. 単価が最も高いジャンルを選ぶ',
          'D. 競合が少ない新しいジャンルを選ぶ',
        ],
        correct: 1,
        explanation: '「自分がすでに持つスキル × AI」の掛け算が、最短で成果を出せる組み合わせです。まったく知識のない分野でAIだけを使っても差別化は難しくなります。',
      },
      {
        q: 'AI副業の代表的な4カテゴリとして正しいものはどれですか？',
        options: [
          'A. ライティング・画像生成・コード補助・コンサル',
          'B. 動画編集・音楽制作・ECサイト運営・翻訳',
          'C. データ入力・コールセンター・経理・営業',
          'D. ブログ・YouTube・Instagram・TikTok',
        ],
        correct: 0,
        explanation: 'AI副業の代表カテゴリは「ライティング（文章）・画像生成・コード補助・AIコンサル」の4つです。それぞれ異なるスキルベースが求められます。',
      },
      {
        q: '4つのカテゴリの中で、最も高単価になりやすいものはどれですか？',
        options: [
          'A. 画像生成',
          'B. ライティング',
          'C. AIコンサル',
          'D. コード補助',
        ],
        correct: 2,
        explanation: 'AIコンサルは「企業の業務をAIで効率化するための設計・提案・実装」を担うため、単価が高くなりやすい領域です。専門知識と実績が求められます。',
      },
    ],
  },
  4: {
    questions: [
      {
        q: '良いプロンプトを作る「黄金構造」の3要素として正しいものはどれですか？',
        options: [
          'A. 役割・文脈・制約',
          'B. 目的・箇条書き・文字数',
          'C. 丁寧語・具体例・敬語',
          'D. 質問・補足・確認',
        ],
        correct: 0,
        explanation: 'プロンプトの黄金構造は「役割（AIに何者として答えさせるか）・文脈（背景情報）・制約（出力の条件）」の3つです。この3点を揃えると回答の質が大きく変わります。',
      },
      {
        q: 'プロンプトで「役割設定」をする主な目的は何ですか？',
        options: [
          'A. AIの返答速度を上げるため',
          'B. AIに礼儀正しく接するため',
          'C. 専門家の視点・語彙・思考で回答させるため',
          'D. 文字数を節約するため',
        ],
        correct: 2,
        explanation: '「あなたはマーケターです」のように役割を設定すると、AIはその専門家らしい語彙・視点・論理で回答します。汎用的な回答から専門的な回答へシフトさせる技術です。',
      },
      {
        q: 'プロンプトの「制約」として適切な例はどれですか？',
        options: [
          'A. 「できるだけ詳しく教えてください」',
          'B. 「よろしくお願いします」',
          'C. 「200字以内で、箇条書き3つ、初心者向けに」',
          'D. 「あなたはプロです」',
        ],
        correct: 2,
        explanation: '制約は「量・形式・対象読者」などを具体的に指定するものです。「200字以内・箇条書き3つ・初心者向け」はすべて出力を絞り込む制約です。「詳しく」「よろしく」は制約になりません。',
      },
    ],
  },
  5: {
    questions: [
      {
        q: '個別面談で成果を出す人の共通点として正しいものはどれですか？',
        options: [
          'A. 事前に何も考えず、その場の流れに任せる',
          'B. 事前に何を聞くか具体的に決めている',
          'C. 面談時間をできるだけ長くとってもらう',
          'D. 複数の面談を同時にブッキングしている',
        ],
        correct: 1,
        explanation: '成果を出す人は「この面談で〇〇を決める」という目的を事前に決めています。準備なしに臨むと、話が広がるだけで行動につながる結論が出にくくなります。',
      },
      {
        q: 'この特典（個別面談）の目的として最も近いものはどれですか？',
        options: [
          'A. 学習内容を再度講義形式で説明してもらうこと',
          'B. 講師との人脈を作ること',
          'C. 面談当日に自分専用の「次の一手」を持ち帰ること',
          'D. 副業の仕事を直接紹介してもらうこと',
        ],
        correct: 2,
        explanation: 'この個別面談は「あなた専用のアクションプランを作る場」です。一般的な講義の再現ではなく、あなたのスキル・状況に合った次の行動を決めることが目的です。',
      },
      {
        q: '面談を「決断の場」にするために最も重要なことはどれですか？',
        options: [
          'A. 当日にノートを用意してメモを取れるようにしておく',
          'B. 自分のスキルと目標を整理し、具体的な質問を準備しておく',
          'C. 面談前日に改めて教材を見直しておく',
          'D. 面談後に振り返りレポートを書く',
        ],
        correct: 1,
        explanation: '「自分は何者で、何を目指していて、何が障壁か」を整理した上で具体的な質問を持ち込むと、面談がアクション決定の場になります。準備の質が面談の質を決めます。',
      },
    ],
  },
};

const QUIZ_STORAGE_KEY = 'n1.tokuten.quiz';

function loadQuizState() {
  try {
    return JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveQuizState(state) {
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(state));
}

function initPartQuiz(partNum) {
  const container = document.querySelector('[data-part-quiz]');
  if (!container) return;

  const data = PART_QUIZ_DATA[partNum];
  if (!data) return;

  const state = loadQuizState();
  const partKey = `part${partNum}`;
  const passed = state[partKey]?.passed || false;

  if (passed) handleUnlock(partNum);

  renderQuiz(container, partNum, data, passed);
}

function renderQuiz(container, partNum, data, alreadyPassed) {
  const questionsEl = container.querySelector('[data-quiz-questions]');
  const submitBtn = container.querySelector('[data-quiz-submit]');
  const resultEl = container.querySelector('[data-quiz-result]');
  const answeredCountEl = container.querySelector('[data-answered-count]');
  const totalCountEl = container.querySelector('[data-total-count]');

  if (!questionsEl) return;

  const total = data.questions.length;
  if (totalCountEl) totalCountEl.textContent = total;

  const selections = {};

  data.questions.forEach((q, qi) => {
    const qEl = document.createElement('div');
    qEl.className = 'part-quiz__question';
    qEl.innerHTML = `
      <div class="part-quiz__q-meta">
        <span class="part-quiz__q-num">${qi + 1}</span>
        <p class="part-quiz__q-text">${q.q}</p>
      </div>
      <div class="part-quiz__options" data-qi="${qi}">
        ${q.options.map((opt, oi) => `
          <button class="part-quiz__option" data-qi="${qi}" data-oi="${oi}" type="button">
            <span class="part-quiz__opt-label">${String.fromCharCode(65 + oi)}</span>
            <span class="part-quiz__opt-text">${opt.replace(/^[A-D]\.\s*/, '')}</span>
          </button>
        `).join('')}
      </div>
    `;
    questionsEl.appendChild(qEl);
  });

  questionsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.part-quiz__option');
    if (!btn || btn.disabled) return;

    const qi = parseInt(btn.dataset.qi);
    const oi = parseInt(btn.dataset.oi);

    questionsEl.querySelectorAll(`.part-quiz__option[data-qi="${qi}"]`).forEach(b => {
      b.classList.remove('is-selected');
    });
    btn.classList.add('is-selected');
    selections[qi] = oi;

    const answeredCount = Object.keys(selections).length;
    if (answeredCountEl) answeredCountEl.textContent = answeredCount;

    if (submitBtn) {
      submitBtn.disabled = answeredCount < total;
    }
  });

  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      submitQuiz(partNum, data, selections, container, questionsEl, submitBtn, resultEl);
    });
  }

  if (alreadyPassed && resultEl) {
    showPassedBadge(resultEl, data, partNum);
  }
}

function submitQuiz(partNum, data, selections, container, questionsEl, submitBtn, resultEl) {
  let correct = 0;
  const results = [];

  data.questions.forEach((q, qi) => {
    const chosen = selections[qi];
    const isCorrect = chosen === q.correct;
    if (isCorrect) correct++;
    results.push({ qi, chosen, isCorrect, q });
  });

  questionsEl.querySelectorAll('.part-quiz__option').forEach(btn => {
    btn.disabled = true;
    const qi = parseInt(btn.dataset.qi);
    const oi = parseInt(btn.dataset.oi);
    const r = results[qi];
    btn.classList.remove('is-selected');
    if (oi === r.q.correct) {
      btn.classList.add('is-correct');
    } else if (oi === r.chosen && !r.isCorrect) {
      btn.classList.add('is-wrong');
    }
  });

  questionsEl.querySelectorAll('.part-quiz__q-num').forEach((numEl, qi) => {
    numEl.style.background = results[qi].isCorrect ? 'var(--color-primary)' : '#ef4444';
    numEl.style.borderColor = results[qi].isCorrect ? 'var(--color-primary)' : '#ef4444';
    numEl.style.color = '#fff';
  });

  submitBtn.disabled = true;

  const isPerfect = correct === data.questions.length;

  if (isPerfect) {
    const state = loadQuizState();
    state[`part${partNum}`] = { passed: true, score: correct };
    saveQuizState(state);
    handleUnlock(partNum);
  }

  showResult(resultEl, correct, data.questions.length, results, partNum, isPerfect, container, questionsEl, submitBtn);
}

function showResult(resultEl, correct, total, results, partNum, isPerfect, container, questionsEl, submitBtn) {
  if (!resultEl) return;
  resultEl.removeAttribute('hidden');

  const scoreEl = resultEl.querySelector('[data-score-value]');
  const msgEl = resultEl.querySelector('[data-result-msg]');
  const breakdownEl = resultEl.querySelector('[data-breakdown]');
  const explanationsEl = resultEl.querySelector('[data-explanations]');
  const actionsEl = resultEl.querySelector('[data-result-actions]');

  if (scoreEl) {
    scoreEl.innerHTML = `${correct}<span class="part-quiz__score-denom"> / ${total}</span>`;
    if (isPerfect) scoreEl.classList.add('is-perfect');
  }

  if (msgEl) {
    msgEl.textContent = isPerfect
      ? '全問正解！理解度バッチリです。次のパートに進みましょう。'
      : `あと${total - correct}問。解説を読んでもう一度挑戦してみましょう。`;
  }

  if (breakdownEl) {
    breakdownEl.innerHTML = results.map((r, i) => `
      <div class="part-quiz__breakdown-item">
        <span class="part-quiz__breakdown-q">Q${i + 1}</span>
        <span class="part-quiz__breakdown-icon part-quiz__breakdown-icon--${r.isCorrect ? 'correct' : 'wrong'}">
          ${r.isCorrect
            ? '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            : '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
          }
        </span>
      </div>
    `).join('');
  }

  if (explanationsEl) {
    explanationsEl.innerHTML = results.map((r, i) => `
      <div class="part-quiz__explanation ${r.isCorrect ? 'is-correct' : 'is-wrong'}">
        <strong>Q${i + 1} — ${r.isCorrect ? '正解' : '不正解'}</strong>
        ${r.q.explanation}
      </div>
    `).join('');
  }

  if (actionsEl) {
    actionsEl.innerHTML = '';
    if (isPerfect) {
      const nextPartNum = partNum + 1;
      const nextLink = getNextPartLink(partNum);
      if (nextLink) {
        const btn = document.createElement('a');
        btn.href = nextLink;
        btn.className = 'part-quiz__next-btn';
        btn.innerHTML = `次のパートへ <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        actionsEl.appendChild(btn);
      }
    } else {
      const retryBtn = document.createElement('button');
      retryBtn.type = 'button';
      retryBtn.className = 'part-quiz__retry-btn';
      retryBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7a5 5 0 1 1 1.5 3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M2 10.5V7h3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg> もう一度挑戦`;
      retryBtn.addEventListener('click', () => resetQuiz(container, questionsEl, submitBtn, resultEl));
      actionsEl.appendChild(retryBtn);
    }
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      resultEl.classList.add('is-visible');
    });
  });

  resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showPassedBadge(resultEl, data, partNum) {
  resultEl.removeAttribute('hidden');
  resultEl.classList.add('is-visible');

  const scoreEl = resultEl.querySelector('[data-score-value]');
  const msgEl = resultEl.querySelector('[data-result-msg]');
  const actionsEl = resultEl.querySelector('[data-result-actions]');

  if (scoreEl) {
    scoreEl.innerHTML = `${data.questions.length}<span class="part-quiz__score-denom"> / ${data.questions.length}</span>`;
    scoreEl.classList.add('is-perfect');
  }
  if (msgEl) msgEl.textContent = 'このパートは合格済みです。';
  if (actionsEl) {
    const nextLink = getNextPartLink(partNum);
    if (nextLink) {
      actionsEl.innerHTML = `<a href="${nextLink}" class="part-quiz__next-btn">次のパートへ <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`;
    }
  }
}

function resetQuiz(container, questionsEl, submitBtn, resultEl) {
  questionsEl.querySelectorAll('.part-quiz__option').forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('is-selected', 'is-correct', 'is-wrong');
  });

  questionsEl.querySelectorAll('.part-quiz__q-num').forEach(el => {
    el.style.background = '';
    el.style.borderColor = '';
    el.style.color = '';
  });

  if (submitBtn) submitBtn.disabled = true;

  const answeredCountEl = container.querySelector('[data-answered-count]');
  if (answeredCountEl) answeredCountEl.textContent = '0';

  if (resultEl) {
    resultEl.classList.remove('is-visible');
    setTimeout(() => resultEl.setAttribute('hidden', ''), 400);
  }
}

function handleUnlock(partNum) {
  if (partNum === 2) {
    const lockedNav = document.querySelector('.part-nav__link--next.part-nav__locked');
    if (lockedNav) {
      const href = lockedNav.dataset.unlockHref || '../part3/';
      const link = document.createElement('a');
      link.href = href;
      link.className = 'part-nav__link part-nav__link--next';
      link.innerHTML = lockedNav.innerHTML;
      lockedNav.replaceWith(link);
    }
  }
}

function getNextPartLink(partNum) {
  if (partNum >= 5) return null;
  const depth = window.location.pathname.split('/').filter(Boolean).length;
  return depth >= 2 ? `../part${partNum + 1}/` : `part${partNum + 1}/`;
}
