'use client';

import { useEffect } from 'react';

const htmlBody = `
<div class="fairytale-wrap">
<h1>the f<span>AI</span>rytale Mashup</h1>
<p class="subtitle">A real (tiny) language model that learns from whatever text you give it - then generates its own sentences. Paste the fairy tale mashup below, hit Train, and watch it learn.</p>

<textarea id="corpus">Once upon a time the girl lived near the forest. The girl wore a red hood. The girl carried a basket to the cottage. The girl walked through the forest. The girl met the wolf in the forest. The wolf smiled at the girl. The wolf had very large teeth. The wolf followed the girl through the forest. The wolf ran to the cottage. The wolf knocked on the door. The wolf crept inside the cottage. The wolf waited for the girl. The girl arrived at the cottage. The girl knocked on the door. The girl came inside the cottage. The girl saw the wolf and ran. The girl escaped into the forest. The wolf was outsmarted by the girl. The bears lived in the cottage near the forest. The bears made porridge in the cottage. The bears went for a walk in the forest. The girl found the cottage in the forest. The girl went inside the cottage. The girl tasted the porridge. The porridge was too hot for the girl. The girl tasted the porridge again. The porridge was too cold for the girl. The girl tasted the porridge once more. The porridge was just right and the girl ate it all. The girl felt sleepy after the porridge. The girl climbed the stairs in the cottage. The girl found three beds upstairs. The girl tried the big bed. The bed was too hard for the girl. The girl tried the middle bed. The bed was too soft for the girl. The girl tried the small bed. The bed was just right and the girl slept. The bears came home to the cottage. The bears found the porridge eaten. The bears climbed the stairs. The bears found the girl sleeping in the small bed. The girl woke up and jumped from the window. The girl ran into the forest and escaped. Cinderella lived in the cold house. Cinderella swept the hearth every day. Cinderella dreamed of the ball. The sisters laughed at Cinderella. The sisters went to the ball without Cinderella. The fairy appeared before Cinderella. The fairy touched the pumpkin with a wand. The pumpkin became a carriage for Cinderella. Cinderella went to the ball in the carriage. The prince danced with Cinderella at the ball. The prince fell in love with Cinderella at the ball. Cinderella ran from the ball at midnight. The prince searched the kingdom for Cinderella. The prince found the glass slipper at the ball. The prince tried the slipper on every girl. Cinderella tried the slipper and it fit. The prince married Cinderella and they lived happily.</textarea>
<div class="hint">You can edit or replace this text with anything - the more sentences the better!</div>

<button class="go" id="trainbtn" onclick="window._ft_startTraining()">Train the fAIrytale ↗</button>

<div id="training-steps" style="margin-top:14px"></div>

<div id="gen-section" class="gen-section" style="display:none">
  <div class="step-label">Generate a sentence</div>
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px">
    <input type="text" id="seed" placeholder="Start word e.g. once" onkeydown="if(event.key==='Enter')window._ft_generate()">
    <button class="go" onclick="window._ft_generate()">Generate ↗</button>
  </div>
  <div class="gen-out" id="gen-out">Your generated sentence will appear here...</div>
  <div class="hint" id="gen-note"></div>
</div>
</div>
`;

const jsCode = `
(function() {
  let model = {};

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  function addStep(html) {
    const d = document.createElement('div');
    d.innerHTML = html;
    document.getElementById('training-steps').appendChild(d);
  }

  function tokeniseCorpus(text) {
    return text.toLowerCase()
      .replace(/[^a-z\\s']/g, ' ')
      .trim().split(/\\s+/)
      .filter(w => w.length > 0);
  }

  async function startTraining() {
    const corpus = document.getElementById('corpus').value.trim();
    if (!corpus || corpus.length < 20) {
      addStep('<div class="step-box" style="border-color:#F0997B;color:#712B13">Please paste some text first - at least a few sentences!</div>');
      return;
    }
    document.getElementById('trainbtn').disabled = true;
    document.getElementById('training-steps').innerHTML = '';
    document.getElementById('gen-section').style.display = 'none';
    model = {};
    const old = document.getElementById('post-generate-explainers');
    if (old) old.remove();

    addStep('<div class="step-box"><div class="step-label">Step 1 - Reading your text</div>Reading everything you gave me and splitting it into individual words...</div>');
    await sleep(900);

    const words = tokeniseCorpus(corpus);
    const vocab = [...new Set(words)].sort();
    const sample = words.slice(0, 18);
    let tokHtml = sample.map(w => '<span class="token">' + w + '</span>').join(' ');
    if (words.length > 18) tokHtml += ' <span style="font-size:12px;color:#aaa">...and ' + (words.length - 18) + ' more</span>';
    addStep('<div class="step-box"><div class="step-label">Step 1 - Done</div>Found <strong>' + words.length + '</strong> words and <strong>' + vocab.length + '</strong> unique words in the vocabulary.<br><br>' + tokHtml + '</div>');
    await sleep(1000);

    addStep('<div class="step-box"><div class="step-label">Step 2 - Learning word pairs</div>Scanning every pair of words that appear next to each other. This is how the model learns what words tend to follow what...</div>');
    await sleep(1000);

    const bigrams = {};
    for (let i = 0; i < words.length - 1; i++) {
      const a = words[i], b = words[i + 1];
      if (!bigrams[a]) bigrams[a] = {};
      bigrams[a][b] = (bigrams[a][b] || 0) + 1;
    }

    const pairCount = Object.keys(bigrams).reduce((s, k) => s + Object.keys(bigrams[k]).length, 0);
    const samplePairs = words.slice(0, 10).map((w, i) => words[i + 1] ? '<span class="pair">' + w + ' → ' + words[i + 1] + '</span>' : '').join(' ');
    addStep('<div class="step-box"><div class="step-label">Step 2 - Done</div>Learned <strong>' + pairCount + '</strong> word-pair relationships. First few found:<br><br>' + samplePairs + '</div>');
    await sleep(1000);

    addStep('<div class="step-box"><div class="step-label">Step 3 - Calculating probabilities</div>For each word, working out the probability of every word that could follow it. The more times a pair appeared together, the higher the probability...</div>');
    await sleep(1200);

    model = {};
    Object.keys(bigrams).forEach(word => {
      const total = Object.values(bigrams[word]).reduce((s, n) => s + n, 0);
      model[word] = {};
      Object.keys(bigrams[word]).forEach(next => {
        model[word][next] = bigrams[word][next] / total;
      });
    });

    const exWord = Object.keys(model).find(w => {
      const probs = Object.values(model[w]);
      if (probs.length < 3) return false;
      const max = Math.max(...probs), min = Math.min(...probs);
      return (max - min) > 0.1;
    }) || Object.keys(model).find(w => Object.keys(model[w]).length >= 3) || Object.keys(model)[0];
    const exProbs = Object.entries(model[exWord]).sort((a, b) => b[1] - a[1]).slice(0, 5);
    let probHtml = '<div style="margin-top:8px"><span style="font-size:12px;color:#666">After the word <strong style="color:#1a1a1a">"' + exWord + '"</strong>, the model might say:</span><div style="margin-top:6px">';
    exProbs.forEach(([w, p]) => {
      probHtml += '<div class="bar-row"><div class="bar-label">' + w + '</div><div class="bar-track"><div class="bar-fill" style="width:' + Math.round(p * 100) + '%"></div></div><div class="bar-pct">' + Math.round(p * 100) + '%</div></div>';
    });
    probHtml += '</div></div>';
    addStep('<div class="step-box"><div class="step-label">Step 3 - Done</div>Probability table built for all <strong>' + Object.keys(model).length + '</strong> words.' + probHtml + '</div>');
    await sleep(1000);

    addStep('<div class="step-box" style="border-color:#AFA9EC;background:#EEEDFE"><div class="step-label" style="color:#534AB7">Real AI works the same way</div>Calculating these probabilities using billions of words is done using something called a <strong>neural network</strong>. It\'s computer code that looks back at hundreds of words instead of one starting word, and has billions of possible next words to choose from.</div>');
    await sleep(800);

    setupNNExplainer();

    addStep('<div class="step-box" style="border-color:#AFA9EC"><div class="step-label">Step 4 - Training complete!</div>The fAIrytale Mashup has finished learning. It now knows the vocabulary, word patterns, and probabilities from your text. It\'s tiny - but it\'s real. Give it a starting word and it will generate a sentence using everything it just learned.</div>');

    document.getElementById('gen-section').style.display = 'block';
    document.getElementById('trainbtn').disabled = false;
    const firstWord = words[0];
    document.getElementById('seed').placeholder = 'e.g. ' + firstWord;
  }

  function weightedPick(probs) {
    const r = Math.random();
    let cum = 0;
    for (const [word, p] of Object.entries(probs)) {
      cum += p;
      if (r <= cum) return word;
    }
    return Object.keys(probs)[0];
  }

  async function generate() {
    const seedInput = document.getElementById('seed').value.trim().toLowerCase().replace(/[^a-z']/g, '');
    const outEl = document.getElementById('gen-out');
    const noteEl = document.getElementById('gen-note');
    outEl.innerHTML = '';
    noteEl.textContent = '';

    let current = seedInput;
    if (!current || !model[current]) {
      const fallback = Object.keys(model)[Math.floor(Math.random() * Object.keys(model).length)];
      current = fallback;
      noteEl.textContent = '"' + (seedInput || '(empty)') + '" wasn\'t in the vocabulary - starting with "' + current + '" instead.';
    }

    const generated = [current];
    outEl.innerHTML = '<span class="new-word">' + current + '</span>';

    for (let i = 0; i < 19; i++) {
      await sleep(350);
      if (!model[current]) break;
      const next = weightedPick(model[current]);
      generated.push(next);
      current = next;
      const span = document.createElement('span');
      span.className = 'new-word';
      span.textContent = ' ' + next;
      outEl.appendChild(span);
      if (['.', '!', '?'].some(p => next.endsWith(p))) break;
    }

    noteEl.textContent = 'Generated ' + generated.length + ' words using the trained model.';
    showPostGenerateExplainers(generated);
  }

  function showPostGenerateExplainers(generated) {
    const old = document.getElementById('post-generate-explainers');
    if (old) old.remove();

    const wrap = document.createElement('div');
    wrap.id = 'post-generate-explainers';

    const jumpExample = (() => {
      for (let i = 0; i < generated.length - 1; i++) {
        const from = generated[i], to = generated[i + 1];
        if (model[from]) {
          const p = model[from][to] || 0;
          if (p < 0.25 && Object.keys(model[from]).length >= 3) {
            return { from, to, p: Math.round(p * 100), opts: Object.keys(model[from]).length };
          }
        }
      }
      return null;
    })();

    const weirdHtml = jumpExample
      ? 'After <strong>"' + jumpExample.from + '"</strong>, this model had <strong>' + jumpExample.opts + ' words</strong> it could pick next - it chose <strong>"' + jumpExample.to + '"</strong> (' + jumpExample.p + '% likely). It made that choice knowing nothing about what came before "' + jumpExample.from + '", whether the sentence makes grammatical sense, or what the story is actually about.'
      : 'Each word was chosen knowing only the <em>one word before it</em> - nothing about grammar, meaning, or what the sentence is trying to say.';

    wrap.innerHTML += '<div class="step-box" style="margin-top:12px"><div class="step-label">Why does it sound weird?</div><p style="font-size:13px;line-height:1.7;color:#333;margin-bottom:10px">' + weirdHtml + '</p><p style="font-size:13px;line-height:1.7;color:#333;">This model only ever looks back <strong>one word</strong>. So it has no idea whether a sentence is finishing, whether it has gone off-topic, or whether the words are in a sensible order. It is just following the most plausible next word, one step at a time.</p></div>';

    const vocabSize = Object.keys(model).length;
    const rows = [
      ['Trained on <strong>' + vocabSize + ' unique words</strong>', 'Trained on <strong>hundreds of billions</strong> of words'],
      ['Looks back <strong>1 word</strong> for context', 'Looks back <strong>thousands of words</strong> at once'],
      ['Learns <strong>word pairs</strong> only', 'Learns <strong>grammar, facts, tone, and meaning</strong>'],
      ['No sense of a <strong>good or bad</strong> answer', 'Tuned by humans to give <strong>helpful, accurate</strong> responses'],
    ];

    const rowsHtml = rows.map(([a, b]) =>
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' +
      '<div style="background:#f5f4f0;border-radius:8px;padding:8px 10px;font-size:12px;line-height:1.6;color:#555;">' + a + '</div>' +
      '<div style="background:#E1F5EE;border-radius:8px;padding:8px 10px;font-size:12px;line-height:1.6;color:#085041;">' + b + '</div>' +
      '</div>'
    ).join('');

    wrap.innerHTML += '<div class="step-box" style="border-color:#AFA9EC;margin-top:8px"><div class="step-label">What real AI does differently</div><p style="font-size:13px;line-height:1.7;color:#333;margin-bottom:12px">This model and something like ChatGPT are doing the same basic job - predicting the next word. But almost everything else is different.</p><div style="display:grid;gap:6px;"><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:0 10px;margin-bottom:2px;"><span style="font-size:11px;font-weight:600;letter-spacing:0.4px;text-transform:uppercase;color:#888;">This model</span><span style="font-size:11px;font-weight:600;letter-spacing:0.4px;text-transform:uppercase;color:#888;">A real LLM (e.g. ChatGPT)</span></div>' + rowsHtml + '</div><p style="font-size:12px;color:#888;margin-top:10px;line-height:1.6;">The maths underneath is the same idea - probabilities over words. Real AI just does it at a scale that is hard to imagine.</p></div>';

    const genSection = document.getElementById('gen-section');
    genSection.parentNode.insertBefore(wrap, genSection.nextSibling);
  }

  // Neural Network Explainer
  let nnState = { selectedWord: null, currentStep: 0, topPredictions: [], winner: null, hiddenNodes: [] };
  const NN_STEPS = 4;

  function setupNNExplainer() {
    const container = document.getElementById('training-steps');
    const nnDiv = document.createElement('div');
    nnDiv.id = 'nn-section';
    nnDiv.className = 'nn-section';
    nnDiv.innerHTML =
      '<div class="step-label">Step 3b - See it in action</div>' +
      '<p style="font-size:13px;font-weight:600;margin:4px 0 8px;color:#1a1a1a;">How does a neural <span style="color:#534AB7">network</span> predict the next word?</p>' +
      '<p class="subtitle" style="margin-bottom:16px">Pick one of the words your model learned below. Step through how it uses word pairs and probabilities to predict what comes next.</p>' +
      '<div class="step-label" style="margin-bottom:8px">Pick a starting word</div>' +
      '<div class="nn-word-pick" id="nn-word-pick"></div>' +
      '<div class="nn-canvas-wrap"><canvas id="nn-canvas" height="260"></canvas></div>' +
      '<div class="nn-step-indicator" id="nn-dots"></div>' +
      '<div class="nn-explanation" id="nn-explanation">Choose a word above to begin.</div>' +
      '<div class="nn-nav">' +
      '<button class="go" id="nn-prev" onclick="window._ft_nnStep(-1)" disabled>← Back</button>' +
      '<button class="go" id="nn-next" onclick="window._ft_nnStep(1)" disabled>Next →</button>' +
      '<span class="nn-step-label" id="nn-step-label"></span>' +
      '</div>';
    container.appendChild(nnDiv);

    const candidates = Object.keys(model)
      .filter(w => Object.keys(model[w]).length >= 2 && w.length > 2)
      .sort((a, b) => Object.keys(model[b]).length - Object.keys(model[a]).length)
      .slice(0, 6);

    const pick = document.getElementById('nn-word-pick');
    pick.innerHTML = '';
    candidates.forEach(w => {
      const btn = document.createElement('button');
      btn.className = 'nn-word-btn';
      btn.textContent = w;
      btn.onclick = () => selectNNWord(w);
      pick.appendChild(btn);
    });

    const dots = document.getElementById('nn-dots');
    dots.innerHTML = '';
    for (let i = 0; i < NN_STEPS; i++) {
      const d = document.createElement('div');
      d.className = 'nn-dot' + (i === 0 ? ' active' : '');
      dots.appendChild(d);
    }

    document.getElementById('nn-section').style.display = 'block';
    drawNNCanvas(null, 0, [], null);
  }

  function selectNNWord(word) {
    document.querySelectorAll('.nn-word-btn').forEach(b => {
      b.classList.toggle('selected', b.textContent === word);
    });

    const probs = model[word] || {};
    const sorted = Object.entries(probs).sort((a, b) => b[1] - a[1]).slice(0, 3);
    const winner = weightedPick(probs);
    const allPairs = Object.entries(probs).sort((a, b) => b[1] - a[1]);
    const topPairs = allPairs.slice(0, 6);
    while (topPairs.length < 6) topPairs.push(['-', 0]);
    const hiddenNodes = topPairs.map(([w, p]) => ({ base: p, label: w }));

    nnState = { selectedWord: word, currentStep: 0, topPredictions: sorted, winner, hiddenNodes };

    document.getElementById('nn-prev').disabled = true;
    document.getElementById('nn-next').disabled = false;
    updateNNDots(0);
    updateNNExplanation(0, word, sorted, winner);
    drawNNCanvas(word, 0, sorted, winner, hiddenNodes);
  }

  function nnStep(dir) {
    if (!nnState.selectedWord) return;
    const next = nnState.currentStep + dir;
    if (next < 0 || next >= NN_STEPS) return;
    nnState.currentStep = next;
    document.getElementById('nn-prev').disabled = next === 0;
    document.getElementById('nn-next').disabled = next === NN_STEPS - 1;
    updateNNDots(next);
    updateNNExplanation(next, nnState.selectedWord, nnState.topPredictions, nnState.winner);
    drawNNCanvas(nnState.selectedWord, next, nnState.topPredictions, nnState.winner, nnState.hiddenNodes);
  }

  function updateNNDots(step) {
    document.querySelectorAll('.nn-dot').forEach((d, i) => { d.classList.toggle('active', i <= step); });
    document.getElementById('nn-step-label').textContent = 'Step ' + (step + 1) + ' of ' + NN_STEPS;
  }

  const explanations = [
    (word, preds, winner, hiddenNodes) => {
      const total = hiddenNodes.filter(n => n.label !== '-').length;
      return '<strong>Step 1 - Context in.</strong> The word <strong>"' + word + '"</strong> is the context - it\'s the question the model is answering: <em>what word usually comes after "' + word + '"?</em> During training, the model read through your fairytale and recorded every time "' + word + '" appeared. It found <strong>' + total + ' word' + (total !== 1 ? 's' : '') + '</strong> that followed it.';
    },
    (word, preds, winner, hiddenNodes) => {
      return '<strong>Step 2 - What it remembers.</strong> These are the word pairs the model learned from your story - every word that came directly after <strong>"' + word + '"</strong>. The bigger the circle, the more times that pair appeared. You can see the same pairs in the probability table from training above.';
    },
    (word, preds, winner, hiddenNodes) => {
      const options = preds.map(([w, p]) => '<strong>"' + w + '"</strong> (' + Math.round(p * 100) + '%)').join(', ');
      return '<strong>Step 3 - Counts become probabilities.</strong> The model counts how many times each pair appeared, then turns those counts into percentages. The word that followed most often gets the highest score. Top candidates: ' + options + '. These are exactly the same numbers from the probability table in Step 3 of training.';
    },
    (word, preds, winner, hiddenNodes) => {
      const top = preds[0];
      const topPct = top ? Math.round(top[1] * 100) : 0;
      return '<strong>Step 4 - Pick a winner.</strong> The model doesn\'t always pick the highest-scoring word - it picks randomly, weighted by the probabilities. So a word with 60% gets chosen more often than one with 20%, but not every time. This time it chose <strong>"' + winner + '"</strong>. That\'s what keeps the sentences feeling varied rather than robotic.<br><br><span style="color:#666;font-size:12px">💡 Real AI models work the same way - but instead of looking back one word, they look back hundreds. More context means smarter, more coherent predictions.</span>';
    }
  ];

  function updateNNExplanation(step, word, preds, winner) {
    const el = document.getElementById('nn-explanation');
    el.style.opacity = 0;
    setTimeout(() => {
      el.innerHTML = explanations[step](word, preds, winner, nnState.hiddenNodes);
      el.style.opacity = 1;
    }, 150);
  }

  function drawNNCanvas(word, step, preds, winner, hiddenNodes) {
    const canvas = document.getElementById('nn-canvas');
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.parentElement.clientWidth || 360;
    canvas.width = W * dpr;
    canvas.height = 260 * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = '260px';

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, W, 260);

    const COL = { input: W * 0.12, hidden: W * 0.5, output: W * 0.88 };
    const ACTIVE_COLOR = '#534AB7', DIM_COLOR = '#ddd', TEXT_COLOR = '#1a1a1a', MUTED_COLOR = '#999';
    const BG_NODE = '#EEEDFE', BG_NODE_BORDER = '#AFA9EC', WINNER_COLOR = '#1D9E75', WINNER_BG = '#E1F5EE', WINNER_BORDER = '#5DCAA5';

    function drawNode(x, y, r, fillColor, strokeColor, label, sublabel, bold) {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = bold ? 2 : 0.5;
      ctx.stroke();
      if (label) {
        ctx.fillStyle = TEXT_COLOR;
        ctx.font = (bold ? '600 ' : '') + '12px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(truncate(label, 8), x, sublabel ? y - 5 : y);
        if (sublabel) {
          ctx.fillStyle = MUTED_COLOR;
          ctx.font = '10px -apple-system, BlinkMacSystemFont, sans-serif';
          ctx.fillText(sublabel, x, y + 8);
        }
      }
    }

    function truncate(str, n) { return str.length > n ? str.slice(0, n - 1) + '…' : str; }

    function drawLine(x1, y1, x2, y2, color, alpha, width) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();
    }

    const inputY = 130, inputR = 32, numHidden = 6, hiddenR = 18, hiddenYs = [];
    const hiddenSpacing = 220 / (numHidden + 1);
    for (let i = 0; i < numHidden; i++) hiddenYs.push(20 + hiddenSpacing * (i + 1));

    const numOutput = Math.min(3, preds ? preds.length : 0), outputR = 26, outputYs = [];
    if (numOutput > 0) {
      const outputSpacing = 180 / (numOutput + 1);
      for (let i = 0; i < numOutput; i++) outputYs.push(40 + outputSpacing * (i + 1));
    }

    ctx.fillStyle = '#aaa';
    ctx.font = '10px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('INPUT', COL.input, 14);
    ctx.fillText('WORD PAIRS LEARNED', COL.hidden, 14);
    if (numOutput > 0) ctx.fillText('OUTPUT', COL.output, 14);

    const showInput = word !== null, showHidden = step >= 1 && hiddenNodes;
    const showHiddenLines = step >= 1, showOutput = step >= 2 && preds && preds.length > 0;
    const showOutputLines = step >= 2, showWinner = step >= 3;

    if (showOutputLines && outputYs.length > 0) {
      const liveNodes = hiddenNodes ? hiddenNodes.filter(n => n.label !== '-' && n.base > 0) : [];
      hiddenYs.forEach((hy, hi) => {
        outputYs.forEach((oy, oi) => {
          const strength = hiddenNodes ? hiddenNodes[hi].base : 0.3;
          const rank = liveNodes.findIndex(n => n === hiddenNodes[hi]);
          const hNodeR = (rank >= 0) ? Math.round(26 - (rank / Math.max(liveNodes.length - 1, 1)) * 15) : 14;
          const oNodeR = Math.round(32 - (oi / Math.max((preds ? preds.length : 1) - 1, 1)) * 14);
          const isWinner = showWinner && preds && preds[oi] && preds[oi][0] === winner;
          drawLine(COL.hidden + hNodeR, hy, COL.output - oNodeR, oy, isWinner ? WINNER_COLOR : ACTIVE_COLOR, isWinner ? strength * 0.9 : strength * 0.35, isWinner ? strength * 2 : 0.5);
        });
      });
    }

    if (showHiddenLines) {
      const liveNodes2 = hiddenNodes ? hiddenNodes.filter(n => n.label !== '-' && n.base > 0) : [];
      hiddenYs.forEach((hy, i) => {
        const strength = hiddenNodes ? hiddenNodes[i].base : 0.5;
        const rank = liveNodes2.findIndex(n => n === hiddenNodes[i]);
        const hNodeR = (rank >= 0) ? Math.round(26 - (rank / Math.max(liveNodes2.length - 1, 1)) * 15) : 14;
        drawLine(COL.input + inputR, inputY, COL.hidden - hNodeR, hy, ACTIVE_COLOR, strength * 0.6, strength * 2);
      });
    }

    if (showHidden) {
      const liveNodes = hiddenNodes.filter(n => n.label !== '-' && n.base > 0);
      const maxR = 26, minR = 11;
      hiddenYs.forEach((hy, i) => {
        const node = hiddenNodes[i];
        const strength = node.base;
        const isDead = node.label === '-' || strength === 0;
        const alpha = isDead ? 0.1 : 0.2 + strength * 0.8;
        const fill = isDead ? '#f5f4f0' : 'rgba(83,74,183,' + (alpha * 0.15 + 0.05) + ')';
        const stroke = isDead ? DIM_COLOR : 'rgba(83,74,183,' + (alpha * 0.7 + 0.1) + ')';
        const rank = liveNodes.findIndex(n => n === node);
        const r = isDead ? 10 : Math.round(maxR - (rank / Math.max(liveNodes.length - 1, 1)) * (maxR - minR));
        drawNode(COL.hidden, hy, r, fill, stroke, isDead ? null : truncate(node.label, 6), isDead ? null : Math.round(strength * 100) + '%', rank === 0);
      });
    } else {
      if (showInput) hiddenYs.forEach(hy => drawNode(COL.hidden, hy, 14, '#f5f4f0', DIM_COLOR, null, null, false));
    }

    if (showOutput) {
      const outMaxR = 32, outMinR = 18;
      outputYs.forEach((oy, i) => {
        const [w, p] = preds[i];
        const isWin = showWinner && w === winner;
        const r = Math.round(outMaxR - (i / Math.max(preds.length - 1, 1)) * (outMaxR - outMinR));
        drawNode(COL.output, oy, r, isWin ? WINNER_BG : BG_NODE, isWin ? WINNER_BORDER : BG_NODE_BORDER, truncate(w, 7), Math.round(p * 100) + '%', isWin);
        if (isWin) {
          ctx.fillStyle = WINNER_COLOR;
          ctx.font = '10px -apple-system,sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('✓', COL.output + r + 8, oy);
        }
      });
    }

    if (showInput) {
      drawNode(COL.input, inputY, inputR, BG_NODE, ACTIVE_COLOR, truncate(word, 7), null, true);
      ctx.beginPath();
      ctx.arc(COL.input, inputY, inputR + 5, 0, Math.PI * 2);
      ctx.strokeStyle = ACTIVE_COLOR;
      ctx.globalAlpha = 0.15;
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.globalAlpha = 1;
    } else {
      drawNode(COL.input, inputY, inputR, '#f5f4f0', DIM_COLOR, null, null, false);
      ctx.fillStyle = MUTED_COLOR;
      ctx.font = '11px -apple-system,sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('word in', COL.input, inputY);
      hiddenYs.forEach(hy => drawNode(COL.hidden, hy, 14, '#f5f4f0', DIM_COLOR, null, null, false));
    }
  }

  window.addEventListener('resize', () => {
    if (nnState.selectedWord) {
      drawNNCanvas(nnState.selectedWord, nnState.currentStep, nnState.topPredictions, nnState.winner, nnState.hiddenNodes);
    } else {
      drawNNCanvas(null, 0, [], null);
    }
  });

  // Expose functions to window for inline onclick handlers
  window._ft_startTraining = startTraining;
  window._ft_generate = generate;
  window._ft_nnStep = nnStep;
})();
`;

export default function FairytaleMLPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.textContent = jsCode;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      // Clean up window functions
      delete (window as Window & { _ft_startTraining?: unknown })._ft_startTraining;
      delete (window as Window & { _ft_generate?: unknown })._ft_generate;
      delete (window as Window & { _ft_nnStep?: unknown })._ft_nnStep;
    };
  }, []);

  return (
    <>
      <style>{`
        .fairytale-wrap * { box-sizing: border-box; }
        .fairytale-wrap {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #f5f4f0;
          color: #1a1a1a;
          padding: 24px 16px;
          max-width: 680px;
          margin: 0 auto;
          min-height: 100vh;
        }
        .fairytale-wrap h1 { font-size: 22px; font-weight: 700; margin-bottom: 4px; }
        .fairytale-wrap h1 span { color: #534AB7; }
        .fairytale-wrap .subtitle { font-size: 14px; color: #666; margin-bottom: 20px; line-height: 1.5; }
        .fairytale-wrap textarea { width:100%; font-size:13px; padding:10px 12px; border-radius:8px; border:0.5px solid #ccc; background:#fff; color:#1a1a1a; resize:vertical; min-height:120px; line-height:1.6; }
        .fairytale-wrap button.go { font-size:13px; padding:7px 18px; border-radius:8px; border:0.5px solid #534AB7; background:#EEEDFE; color:#3C3489; cursor:pointer; font-weight:500; margin-right:8px; }
        .fairytale-wrap button.go:disabled { opacity:0.4; cursor:default; }
        .fairytale-wrap button.go:hover:not(:disabled) { background:#CECBF6; }
        .fairytale-wrap .step-box { border:0.5px solid #ddd; border-radius:10px; padding:12px 14px; margin:8px 0; font-size:13px; line-height:1.6; background:#fff; }
        .fairytale-wrap .step-label { font-size:11px; font-weight:600; letter-spacing:0.4px; text-transform:uppercase; color:#888; margin-bottom:6px; }
        .fairytale-wrap .token { display:inline-block; padding:3px 8px; border-radius:12px; font-size:12px; font-weight:500; margin:2px; background:#EEEDFE; color:#3C3489; }
        .fairytale-wrap .pair { display:inline-block; padding:3px 8px; border-radius:12px; font-size:12px; margin:2px; background:#E1F5EE; color:#085041; }
        .fairytale-wrap .bar-row { display:flex; align-items:center; gap:8px; margin:3px 0; }
        .fairytale-wrap .bar-label { font-size:12px; min-width:80px; color:#555; }
        .fairytale-wrap .bar-track { flex:1; height:8px; background:#eee; border-radius:4px; overflow:hidden; }
        .fairytale-wrap .bar-fill { height:100%; border-radius:4px; background:#534AB7; }
        .fairytale-wrap .bar-pct { font-size:11px; min-width:32px; text-align:right; color:#aaa; }
        .fairytale-wrap .gen-out { font-size:15px; font-weight:500; color:#1a1a1a; line-height:1.8; padding:12px; background:#f5f4f0; border-radius:8px; min-height:48px; margin-top:8px; font-style:italic; }
        .fairytale-wrap .new-word { display:inline; animation:ftFadeIn 0.4s ease; }
        @keyframes ftFadeIn { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:none} }
        .fairytale-wrap input[type=text] { font-size:13px; padding:7px 12px; border-radius:8px; border:0.5px solid #ccc; background:#fff; color:#1a1a1a; width:160px; }
        .fairytale-wrap input[type=text]:focus { outline:none; border-color:#534AB7; }
        .fairytale-wrap .hint { font-size:11px; color:#aaa; margin:4px 0 12px; }
        .fairytale-wrap .gen-section { border:0.5px solid #ddd; border-radius:10px; padding:14px; margin-top:16px; background:#fff; }
        .fairytale-wrap .nn-section { border:0.5px solid #AFA9EC; border-radius:10px; padding:16px 14px; margin-top:20px; background:#fff; }
        .fairytale-wrap .nn-canvas-wrap { width:100%; overflow:hidden; border-radius:8px; background:#faf9f7; border:0.5px solid #eee; margin-bottom:14px; }
        .fairytale-wrap canvas#nn-canvas { display:block; width:100%; }
        .fairytale-wrap .nn-step-indicator { display:flex; gap:6px; justify-content:center; margin-bottom:14px; }
        .fairytale-wrap .nn-dot { width:8px; height:8px; border-radius:50%; background:#ddd; transition:background 0.3s; }
        .fairytale-wrap .nn-dot.active { background:#534AB7; }
        .fairytale-wrap .nn-explanation { font-size:13px; line-height:1.7; color:#333; background:#EEEDFE; border-radius:8px; padding:12px 14px; margin-bottom:14px; min-height:56px; transition:opacity 0.3s; }
        .fairytale-wrap .nn-explanation strong { color:#3C3489; }
        .fairytale-wrap .nn-word-pick { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px; }
        .fairytale-wrap .nn-word-btn { font-size:12px; padding:4px 10px; border-radius:10px; border:0.5px solid #AFA9EC; background:#EEEDFE; color:#3C3489; cursor:pointer; transition:all 0.2s; }
        .fairytale-wrap .nn-word-btn:hover { background:#CECBF6; }
        .fairytale-wrap .nn-word-btn.selected { background:#534AB7; color:#fff; border-color:#534AB7; }
        .fairytale-wrap .nn-nav { display:flex; gap:8px; align-items:center; }
        .fairytale-wrap .nn-step-label { font-size:11px; color:#aaa; }
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: htmlBody }} />
    </>
  );
}
