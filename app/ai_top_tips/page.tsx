'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

const css = `
  .att-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .att-wrap {
    background: #1A1A2E;
    padding: 32px 28px 40px;
    font-family: var(--font-dm-sans), 'Helvetica Neue', Arial, sans-serif;
    min-height: 100vh;
  }
  .att-logo { font-family: var(--font-outfit), sans-serif; font-weight: 800; font-size: 18px; letter-spacing: 0.5px; margin-bottom: 6px; }
  .att-logo span { color: #00D4AA; }
  .att-logo em { color: #fff; font-style: normal; }
  .att-headline { font-family: var(--font-outfit), sans-serif; font-weight: 800; font-size: 34px; color: #fff; line-height: 1.2; margin-bottom: 6px; }
  .att-headline span { color: #E91E8C; }
  .att-sub { font-size: 16px; color: #9999BB; margin-bottom: 20px; line-height: 1.6; }
  .att-hint { font-size: 14px; color: #9999BB; text-align: center; margin-bottom: 18px; }
  .att-section-label { font-family: var(--font-outfit), sans-serif; font-weight: 800; font-size: 18px; color: #fff; margin: 24px 0 6px; }
  .att-section-label span { color: #E91E8C; }
  .att-section-sub { font-size: 13px; color: #9999BB; margin-bottom: 14px; line-height: 1.5; }
  .att-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 12px; }
  @media (max-width: 600px) { .att-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  .att-card { background: #fff; border-radius: 12px; padding: 16px 16px 13px; display: flex; flex-direction: column; gap: 7px; cursor: pointer; transition: box-shadow 0.2s; }
  .att-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.28); }
  .att-card-top { display: flex; align-items: center; gap: 10px; }
  .att-icon { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; }
  .att-tip-name { font-family: var(--font-outfit), sans-serif; font-weight: 800; font-size: 15px; color: #1A1A2E; line-height: 1.2; }
  .att-tip-desc { font-size: 13px; color: #5A5A72; line-height: 1.5; }
  .att-divider { height: 1px; background: #F0F0F0; margin: 2px 0; }
  .att-badge { font-size: 11px; line-height: 1.4; padding: 5px 9px; border-radius: 7px; margin-top: 1px; display: inline-block; font-weight: 500; }
  .att-footer-note { background: #0F1A35; border-radius: 10px; padding: 14px 18px; margin-top: 14px; display: flex; gap: 12px; align-items: flex-start; }
  .att-footer-note-icon { font-size: 20px; flex-shrink: 0; margin-top: 1px; }
  .att-footer-note p { font-size: 14px; color: #9FE1CB; line-height: 1.7; }
  .att-footer-note strong { color: #00D4AA; }

  .att-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #F9F9FB; z-index: 100; overflow-y: auto; }
  .att-overlay.active { display: block; }
  .att-exp { min-height: 100%; padding: 48px 60px 72px; display: flex; flex-direction: column; gap: 28px; position: relative; }
  @media (max-width: 640px) { .att-exp { padding: 28px 22px 52px; } }
  .att-exp-header { display: flex; align-items: center; gap: 24px; padding-bottom: 24px; border-bottom: 2px solid #E2E2ED; }
  .att-exp-icon { width: 72px; height: 72px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 36px; flex-shrink: 0; }
  .att-exp-name { font-family: var(--font-outfit), sans-serif; font-weight: 800; font-size: 42px; color: #1A1A2E; line-height: 1; }
  .att-exp-badge { font-size: 15px; font-weight: 500; padding: 5px 14px; border-radius: 10px; display: inline-block; margin-top: 8px; }
  .att-exp-desc { font-size: 20px; color: #3A3A52; line-height: 1.7; }
  .att-exp-divider { height: 1px; background: #E2E2ED; }
  .att-exp-section-label { font-size: 13px; font-weight: 600; color: #9999BB; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 14px; }
  .att-try-rows { display: flex; flex-direction: column; gap: 10px; }
  .att-try-row { display: flex; gap: 16px; align-items: flex-start; background: #fff; border-radius: 12px; padding: 16px 18px; border: 1px solid #E2E2ED; cursor: default; transition: background 0.15s, border-color 0.15s, transform 0.15s; }
  .att-try-row:hover { background: #EEEDFE; border-color: #AFA9EC; transform: translateX(4px); }
  .att-try-row:hover .att-try-title { color: #3C3489; }
  .att-try-row:hover .att-try-text { color: #3C3489; }
  .att-try-arrow { font-size: 20px; flex-shrink: 0; margin-top: 1px; color: #534AB7; }
  .att-try-wrap { display: flex; flex-direction: column; gap: 3px; }
  .att-try-title { font-size: 16px; font-weight: 600; color: #1A1A2E; transition: color 0.15s; }
  .att-try-text { font-size: 16px; color: #5A5A72; line-height: 1.55; transition: color 0.15s; }
  .att-example-box { background: #EEEDFE; border: 1px solid #AFA9EC; border-radius: 10px; padding: 14px 16px; font-size: 16px; line-height: 1.7; color: #3C3489; }
  .att-example-label { font-size: 12px; font-weight: 600; letter-spacing: 0.4px; text-transform: uppercase; color: #9999BB; margin-bottom: 10px; }
  .att-why-box { background: #fff; border: 1px solid #E2E2ED; border-radius: 10px; padding: 14px 16px; font-size: 17px; line-height: 1.7; color: #3A3A52; }
  .att-close-btn { position: fixed; top: 18px; right: 22px; background: #1A1A2E; border: none; font-size: 15px; color: #fff; cursor: pointer; line-height: 1; border-radius: 8px; padding: 10px 18px; z-index: 101; font-family: var(--font-dm-sans), sans-serif; }
  .att-close-btn:hover { background: #333; }
`;

export default function AITopTipsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{css}</style>
      <div className="att-wrap">
        <div className="att-logo"><em>Jetpackers</em><span>AI</span></div>
        <p className="att-headline">getting more <span>from AI</span></p>
        <p className="att-sub">A few habits that separate people who find AI useful from people who find it frustrating.</p>
        <p className="att-hint">Click any card to see examples and how to use it</p>

        <p className="att-section-label">Writing <span>good prompts</span></p>
        <p className="att-section-sub">What you type in makes a bigger difference than which AI you&apos;re using.</p>
        <div className="att-grid" id="att-prompt-grid" />

        <p className="att-section-label">Checking <span>what it tells you</span></p>
        <p className="att-section-sub">AI always sounds confident. These questions help you find out if it actually knows.</p>
        <div className="att-grid" id="att-validate-grid" />

        <p className="att-section-label">Working <span>smarter</span></p>
        <p className="att-section-sub">Small habits that save time and tokens.</p>
        <div className="att-grid" id="att-smart-grid" />

        <div className="att-footer-note">
          <div className="att-footer-note-icon">💡</div>
          <p><strong>The short version:</strong> be specific, check what matters, and remember it&apos;s trying to please you. Not necessarily tell you the truth.</p>
        </div>
      </div>

      <div className="att-overlay" id="att-overlay">
        <button
          className="att-close-btn"
          onClick={() => (window as Window & { _attCloseOverlay?: () => void })._attCloseOverlay?.()}
        >
          ✕ close
        </button>
        <div className="att-exp" id="att-exp-content" />
      </div>

      <Script
        src="/ai-top-tips.js"
        strategy="afterInteractive"
        onLoad={() => (window as Window & { _attInit?: () => void })._attInit?.()}
      />
    </>
  );
}
