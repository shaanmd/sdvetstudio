'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

const css = `
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
`;

const defaultCorpus = `Once upon a time the girl lived near the forest. The girl wore a red hood. The girl carried a basket to the cottage. The girl walked through the forest. The girl met the wolf in the forest. The wolf smiled at the girl. The wolf had very large teeth. The wolf followed the girl through the forest. The wolf ran to the cottage. The wolf knocked on the door. The wolf crept inside the cottage. The wolf waited for the girl. The girl arrived at the cottage. The girl knocked on the door. The girl came inside the cottage. The girl saw the wolf and ran. The girl escaped into the forest. The wolf was outsmarted by the girl. The bears lived in the cottage near the forest. The bears made porridge in the cottage. The bears went for a walk in the forest. The girl found the cottage in the forest. The girl went inside the cottage. The girl tasted the porridge. The porridge was too hot for the girl. The girl tasted the porridge again. The porridge was too cold for the girl. The girl tasted the porridge once more. The porridge was just right and the girl ate it all. The girl felt sleepy after the porridge. The girl climbed the stairs in the cottage. The girl found three beds upstairs. The girl tried the big bed. The bed was too hard for the girl. The girl tried the middle bed. The bed was too soft for the girl. The girl tried the small bed. The bed was just right and the girl slept. The bears came home to the cottage. The bears found the porridge eaten. The bears climbed the stairs. The bears found the girl sleeping in the small bed. The girl woke up and jumped from the window. The girl ran into the forest and escaped. Cinderella lived in the cold house. Cinderella swept the hearth every day. Cinderella dreamed of the ball. The sisters laughed at Cinderella. The sisters went to the ball without Cinderella. The fairy appeared before Cinderella. The fairy touched the pumpkin with a wand. The pumpkin became a carriage for Cinderella. Cinderella went to the ball in the carriage. The prince danced with Cinderella at the ball. The prince fell in love with Cinderella at the ball. Cinderella ran from the ball at midnight. The prince searched the kingdom for Cinderella. The prince found the glass slipper at the ball. The prince tried the slipper on every girl. Cinderella tried the slipper and it fit. The prince married Cinderella and they lived happily.`;

export default function FairytaleMLPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{css}</style>
      <div className="fairytale-wrap">
        <h1>the f<span>AI</span>rytale Mashup</h1>
        <p className="subtitle">
          A real (tiny) language model that learns from whatever text you give it - then generates its own sentences.
          Paste the fairy tale mashup below, hit Train, and watch it learn.
        </p>

        <textarea id="corpus" placeholder="Once Upon A Time ..." />
        <div className="hint">You can edit or replace this text with anything - the more sentences the better!</div>

        <button
          className="go"
          id="trainbtn"
          onClick={() => (window as Window & { _ftStartTraining?: () => void })._ftStartTraining?.()}
        >
          Train the fAIrytale
        </button>

        <div id="training-steps" style={{ marginTop: 14 }} />

        <div id="gen-section" className="gen-section" style={{ display: 'none' }}>
          <div className="step-label">Generate a sentence</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 10 }}>
            <input
              type="text"
              id="seed"
              placeholder="Start word e.g. once"
              onKeyDown={e => {
                if (e.key === 'Enter') (window as Window & { _ftGenerate?: () => void })._ftGenerate?.();
              }}
            />
            <button
              className="go"
              onClick={() => (window as Window & { _ftGenerate?: () => void })._ftGenerate?.()}
            >
              Generate
            </button>
          </div>
          <div className="gen-out" id="gen-out">Your generated sentence will appear here...</div>
          <div className="hint" id="gen-note" />
        </div>
      </div>

      <Script src="/fairytale-mashup.js" strategy="afterInteractive" />
    </>
  );
}
