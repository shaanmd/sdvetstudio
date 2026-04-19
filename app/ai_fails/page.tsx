'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

const css = `
  .af-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .af-wrap {
    background: #1A1A2E;
    padding: 32px 28px 40px;
    font-family: var(--font-dm-sans), 'Helvetica Neue', Arial, sans-serif;
    min-height: 100vh;
  }
  .af-logo { font-family: var(--font-outfit), sans-serif; font-weight: 800; font-size: 18px; letter-spacing: 0.5px; margin-bottom: 6px; }
  .af-logo span { color: #00D4AA; font-style: normal; }
  .af-logo em { color: #fff; font-style: normal; }
  .af-headline { font-family: var(--font-outfit), sans-serif; font-weight: 800; font-size: 34px; color: #fff; line-height: 1.2; margin-bottom: 6px; }
  .af-headline span { color: #E91E8C; }
  .af-sub { font-size: 16px; color: #9999BB; margin-bottom: 24px; line-height: 1.6; }
  .af-hint { font-size: 14px; color: #9999BB; text-align: center; margin-bottom: 18px; }
  .af-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 12px; }
  @media (max-width: 600px) { .af-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  .af-card { background: #fff; border-radius: 12px; padding: 16px 16px 13px; display: flex; flex-direction: column; gap: 7px; cursor: pointer; transition: box-shadow 0.2s; }
  .af-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.28); }
  .af-card-top { display: flex; align-items: center; gap: 10px; }
  .af-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; }
  .af-issue-name { font-family: var(--font-outfit), sans-serif; font-weight: 800; font-size: 16px; color: #1A1A2E; line-height: 1.2; }
  .af-issue-desc { font-size: 13px; color: #5A5A72; line-height: 1.5; }
  .af-divider { height: 1px; background: #F0F0F0; margin: 2px 0; }
  .af-danger { font-size: 12px; line-height: 1.4; padding: 6px 10px; border-radius: 7px; margin-top: 1px; }
  .af-danger-label { font-weight: 600; display: block; }
  .af-footer-note { background: #0F1A35; border-radius: 10px; padding: 14px 18px; margin-top: 14px; display: flex; gap: 12px; align-items: flex-start; }
  .af-footer-note-icon { font-size: 20px; flex-shrink: 0; margin-top: 1px; }
  .af-footer-note p { font-size: 14px; color: #9FE1CB; line-height: 1.7; }
  .af-footer-note strong { color: #00D4AA; }

  .af-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #F9F9FB; z-index: 100; overflow-y: auto; }
  .af-overlay.active { display: block; }
  .af-exp { min-height: 100%; padding: 48px 60px 72px; display: flex; flex-direction: column; gap: 28px; position: relative; }
  @media (max-width: 640px) { .af-exp { padding: 28px 22px 52px; } }
  .af-exp-header { display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 2px solid #E2E2ED; }
  .af-exp-icon { width: 72px; height: 72px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 36px; flex-shrink: 0; }
  .af-exp-name { font-family: var(--font-outfit), sans-serif; font-weight: 800; font-size: 42px; color: #1A1A2E; line-height: 1; }
  .af-exp-badge { font-size: 15px; font-weight: 500; padding: 5px 14px; border-radius: 10px; display: inline-block; margin-top: 8px; }
  .af-exp-desc { font-size: 20px; color: #3A3A52; line-height: 1.7; }
  .af-exp-divider { height: 1px; background: #E2E2ED; }
  .af-exp-section-label { font-size: 13px; font-weight: 600; color: #9999BB; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 14px; }
  .af-exp-context { font-size: 18px; color: #3A3A52; line-height: 1.75; }
  .af-chat-wrap { display: flex; flex-direction: column; gap: 10px; margin: 14px 0; }
  .af-bubble { border-radius: 12px; padding: 12px 16px; }
  .af-who { font-size: 12px; font-weight: 700; letter-spacing: 0.3px; text-transform: uppercase; margin-bottom: 5px; }
  .af-bubble p { font-size: 17px; line-height: 1.6; color: #333; }
  .af-bubble-ai { background: #EEEDFE; border: 1px solid #AFA9EC; }
  .af-bubble-ai .af-who { color: #534AB7; }
  .af-bubble-human { background: #E1F5EE; border: 1px solid #5DCAA5; }
  .af-bubble-human .af-who { color: #085041; }
  .af-exp-note { font-size: 17px; color: #555; line-height: 1.75; font-style: italic; padding: 14px 18px; background: #faf9f7; border-radius: 10px; border-left: 3px solid #ccc; margin-top: 4px; }
  .af-watchout-rows { display: flex; flex-direction: column; gap: 10px; }
  .af-watchout-row { display: flex; gap: 16px; align-items: flex-start; background: #fff; border-radius: 12px; padding: 16px 18px; border: 1px solid #E2E2ED; cursor: default; transition: background 0.15s, border-color 0.15s, transform 0.15s; }
  .af-watchout-row:hover { background: #FFF8E1; border-color: #F0C040; transform: translateX(4px); }
  .af-watchout-arrow { font-size: 20px; flex-shrink: 0; margin-top: 1px; color: #1D9E75; }
  .af-watchout-text { font-size: 18px; color: #3A3A52; line-height: 1.55; }
  .af-close-btn { position: fixed; top: 18px; right: 22px; background: #1A1A2E; border: none; font-size: 15px; color: #fff; cursor: pointer; line-height: 1; border-radius: 8px; padding: 10px 18px; z-index: 101; font-family: var(--font-dm-sans), sans-serif; }
  .af-close-btn:hover { background: #333; }
`;

export default function AIFailsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{css}</style>
      <div className="af-wrap">
        <div className="af-logo"><em>Jetpackers</em><span>AI</span></div>
        <p className="af-headline">when AI gets it <span>wrong</span></p>
        <p className="af-sub">
          AI is useful, but it makes mistakes in specific, predictable ways. Knowing what to look for means you catch problems before they cause real damage.
        </p>
        <p className="af-hint">Click any card to see a real example and what to watch out for</p>
        <div className="af-grid" id="af-grid" />
        <div className="af-footer-note">
          <div className="af-footer-note-icon">💡</div>
          <p><strong>The golden rule:</strong> AI always sounds confident, even when it&apos;s completely wrong. The way to catch mistakes isn&apos;t to listen harder, it&apos;s to <strong>check what matters</strong>.</p>
        </div>
      </div>

      <div className="af-overlay" id="af-overlay">
        <button
          className="af-close-btn"
          onClick={() => (window as Window & { _aiFailsCloseOverlay?: () => void })._aiFailsCloseOverlay?.()}
        >
          ✕ close
        </button>
        <div className="af-exp" id="af-exp-content" />
      </div>

      <Script
        src="/ai-fails.js"
        strategy="afterInteractive"
        onLoad={() => (window as Window & { _aiFailsInit?: () => void })._aiFailsInit?.()}
      />
    </>
  );
}
