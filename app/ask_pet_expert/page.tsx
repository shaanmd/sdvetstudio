'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

const css = `
  .pet-expert-wrap * { box-sizing: border-box; margin: 0; padding: 0; }
  .pet-expert-wrap {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #f5f4f0;
    color: #1a1a1a;
    padding: 24px 16px;
    max-width: 680px;
    margin: 0 auto;
    min-height: 100vh;
  }
  .pet-expert-wrap h1 { font-size: 22px; font-weight: 700; margin-bottom: 4px; }
  .pet-expert-wrap h1 span { color: #534AB7; }
  .pet-expert-wrap .subtitle { font-size: 14px; color: #666; margin-bottom: 20px; line-height: 1.6; }

  .pet-expert-wrap .setup-box { border: 0.5px solid #ddd; border-radius: 10px; padding: 16px; background: #fff; margin-bottom: 20px; }
  .pet-expert-wrap .step-label { font-size: 11px; font-weight: 600; letter-spacing: 0.4px; text-transform: uppercase; color: #888; margin-bottom: 8px; }
  .pet-expert-wrap .setup-row { display: flex; gap: 10px; flex-wrap: wrap; align-items: flex-end; margin-top: 10px; }
  .pet-expert-wrap input[type=text] { font-size: 13px; padding: 7px 12px; border-radius: 8px; border: 0.5px solid #ccc; background: #fff; color: #1a1a1a; flex: 1; min-width: 120px; }
  .pet-expert-wrap input[type=text]:focus { outline: none; border-color: #534AB7; }
  .pet-expert-wrap select { font-size: 13px; padding: 7px 12px; border-radius: 8px; border: 0.5px solid #ccc; background: #fff; color: #1a1a1a; flex: 1; min-width: 120px; }
  .pet-expert-wrap select:focus { outline: none; border-color: #534AB7; }
  .pet-expert-wrap button.go { font-size: 13px; padding: 7px 18px; border-radius: 8px; border: 0.5px solid #534AB7; background: #EEEDFE; color: #3C3489; cursor: pointer; font-weight: 500; }
  .pet-expert-wrap button.go:disabled { opacity: 0.4; cursor: default; }
  .pet-expert-wrap button.go:hover:not(:disabled) { background: #CECBF6; }
  .pet-expert-wrap button.go.green { border-color: #1D9E75; background: #E1F5EE; color: #085041; }
  .pet-expert-wrap button.go.green:hover:not(:disabled) { background: #b8eedd; }

  .pet-expert-wrap .chat-box { border: 0.5px solid #ddd; border-radius: 10px; background: #fff; overflow: hidden; margin-bottom: 12px; display: none; }
  .pet-expert-wrap .chat-messages { padding: 14px; min-height: 200px; max-height: 420px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; }
  .pet-expert-wrap .msg { display: flex; gap: 10px; align-items: flex-start; }
  .pet-expert-wrap .msg.user { flex-direction: row-reverse; }
  .pet-expert-wrap .msg-bubble { font-size: 13px; line-height: 1.7; padding: 10px 13px; border-radius: 12px; max-width: 85%; }
  .pet-expert-wrap .msg.ai .msg-bubble { background: #EEEDFE; color: #1a1a1a; border-bottom-left-radius: 3px; }
  .pet-expert-wrap .msg.user .msg-bubble { background: #534AB7; color: #fff; border-bottom-right-radius: 3px; }
  .pet-expert-wrap .msg-avatar { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; margin-top: 2px; }
  .pet-expert-wrap .msg.ai .msg-avatar { background: #EEEDFE; }
  .pet-expert-wrap .msg.user .msg-avatar { background: #534AB7; }

  .pet-expert-wrap .typing { display: flex; gap: 4px; align-items: center; padding: 10px 13px; background: #EEEDFE; border-radius: 12px; border-bottom-left-radius: 3px; width: fit-content; }
  .pet-expert-wrap .typing span { width: 6px; height: 6px; border-radius: 50%; background: #AFA9EC; animation: petBounce 1.2s infinite; }
  .pet-expert-wrap .typing span:nth-child(2) { animation-delay: 0.2s; }
  .pet-expert-wrap .typing span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes petBounce { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-5px)} }

  .pet-expert-wrap .chat-input-row { display: flex; gap: 8px; padding: 10px 14px; border-top: 0.5px solid #eee; background: #fafaf8; }
  .pet-expert-wrap .chat-input-row input { flex: 1; font-size: 13px; padding: 8px 12px; border-radius: 8px; border: 0.5px solid #ccc; background: #fff; }
  .pet-expert-wrap .chat-input-row input:focus { outline: none; border-color: #534AB7; }

  .pet-expert-wrap .hint-banner { display: none; border: 0.5px solid #F0C27A; border-radius: 10px; padding: 12px 14px; background: #FFFBEF; margin-bottom: 12px; font-size: 13px; color: #7A4F00; line-height: 1.6; }
  .pet-expert-wrap .hint-banner strong { color: #5C3A00; }

  .pet-expert-wrap .reveal-box { display: none; border: 0.5px solid #AFA9EC; border-radius: 10px; padding: 16px; background: #fff; margin-top: 16px; }
  .pet-expert-wrap .reveal-box h2 { font-size: 16px; font-weight: 700; margin-bottom: 12px; }
  .pet-expert-wrap .error-item { display: flex; gap: 10px; align-items: flex-start; padding: 10px 12px; border-radius: 8px; margin-bottom: 8px; font-size: 13px; line-height: 1.6; }
  .pet-expert-wrap .error-item .icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
  .pet-expert-wrap .error-item.hallucination { background: #FDE8E8; }
  .pet-expert-wrap .error-item.loop { background: #FEF3C7; }
  .pet-expert-wrap .error-item.context { background: #E0F2FE; }
  .pet-expert-wrap .error-item.sycophancy { background: #F3E8FF; }
  .pet-expert-wrap .error-item strong { display: block; margin-bottom: 2px; }

  .pet-expert-wrap .turn-counter { font-size: 11px; color: #aaa; text-align: right; padding: 4px 14px 0; }

  .pet-expert-wrap .spot-row { display: flex; gap: 8px; flex-wrap: wrap; margin: 8px 14px 4px; }
  .pet-expert-wrap .spot-btn { font-size: 11px; padding: 4px 10px; border-radius: 8px; border: 0.5px solid #ccc; background: #f5f4f0; color: #555; cursor: pointer; }
  .pet-expert-wrap .spot-btn:hover { background: #eee; }
  .pet-expert-wrap .spot-btn.flagged { opacity: 0.4; cursor: default; }

  .pet-expert-wrap .reset-link { font-size: 12px; color: #aaa; text-decoration: underline; cursor: pointer; margin-top: 12px; display: inline-block; }
  .pet-expert-wrap .reset-link:hover { color: #534AB7; }
`;

export default function AskPetExpertPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style>{css}</style>
      <div className="pet-expert-wrap">
        <h1>Ask the Pet <span>Expert</span> 🐾</h1>
        <p className="subtitle">
          Meet your AI pet advisor. Ask it anything about your pet — feeding, behaviour, health, training. It&apos;s very confident. Maybe a little <em>too</em> confident&hellip;<br /><br />
          <strong>Your job:</strong> chat naturally, then see if you can spot when something goes wrong.
        </p>

        {/* Setup */}
        <div className="setup-box" id="setup-box">
          <div className="step-label">First — tell us about your pet</div>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.6' }}>The AI will remember these details… at least for a while.</p>
          <div className="setup-row">
            <input type="text" id="pet-name" placeholder="Pet's name e.g. Biscuit" maxLength={30} />
            <select id="pet-type">
              <option value="">Pet type...</option>
              <option value="dog">Dog 🐶</option>
              <option value="cat">Cat 🐱</option>
              <option value="rabbit">Rabbit 🐰</option>
              <option value="bird">Bird 🐦</option>
              <option value="fish">Fish 🐟</option>
              <option value="guinea pig">Guinea pig 🐹</option>
              <option value="hamster">Hamster 🐹</option>
              <option value="turtle">Turtle 🐢</option>
              <option value="cow">Cow 🐄</option>
              <option value="sheep">Sheep 🐑</option>
            </select>
            <input type="text" id="pet-breed" placeholder="Breed (optional)" />
            <button className="go" onClick={() => (window as Window & { _petStartChat?: () => void })._petStartChat?.()}>
              Start chatting ↗
            </button>
          </div>
        </div>

        {/* Chat */}
        <div className="chat-box" id="chat-box">
          <div className="turn-counter" id="turn-counter">Turn 1</div>
          <div className="chat-messages" id="chat-messages" />
          <div className="spot-row" id="spot-row" style={{ display: 'none' }}>
            <span style={{ fontSize: '11px', color: '#aaa', paddingTop: '4px' }}>Flag this response:</span>
            <button className="spot-btn" onClick={() => (window as Window & { _petFlagError?: (t: string) => void })._petFlagError?.('hallucination')}>🔴 Wrong fact</button>
            <button className="spot-btn" onClick={() => (window as Window & { _petFlagError?: (t: string) => void })._petFlagError?.('loop')}>🟡 Repetition</button>
            <button className="spot-btn" onClick={() => (window as Window & { _petFlagError?: (t: string) => void })._petFlagError?.('context')}>🔵 Forgot my pet</button>
            <button className="spot-btn" onClick={() => (window as Window & { _petFlagError?: (t: string) => void })._petFlagError?.('sycophancy')}>🟣 Just agreed with me</button>
          </div>
          <div className="chat-input-row">
            <input
              type="text"
              id="chat-input"
              placeholder="Ask about your pet..."
              onKeyDown={e => { if (e.key === 'Enter') (window as Window & { _petSendMessage?: () => void })._petSendMessage?.(); }}
            />
            <button className="go" onClick={() => (window as Window & { _petSendMessage?: () => void })._petSendMessage?.()}>Send</button>
          </div>
        </div>

        {/* Hint */}
        <div className="hint-banner" id="hint-banner">
          💡 <strong>Something seems off&hellip;</strong> Read back through the last few responses. Has the AI said something that doesn&apos;t quite add up? You can flag what you notice using the buttons above each response.
        </div>

        {/* Reveal button */}
        <div id="reveal-row" style={{ display: 'none', marginBottom: '12px' }}>
          <button className="go green" onClick={() => (window as Window & { _petShowReveal?: () => void })._petShowReveal?.()}>
            Show me what went wrong ↗
          </button>
          <span style={{ fontSize: '12px', color: '#aaa', marginLeft: '10px' }}>See a full breakdown of every error</span>
        </div>

        {/* Reveal */}
        <div className="reveal-box" id="reveal-box">
          <h2>🔍 Here&apos;s what went wrong</h2>
          <p style={{ fontSize: '13px', color: '#555', marginBottom: '14px', lineHeight: '1.6' }}>
            These are the four most common problems with AI assistants. You just experienced all of them.
          </p>
          <div id="reveal-content" />
          <p style={{ fontSize: '13px', color: '#555', marginTop: '14px', lineHeight: '1.6' }}>
            Real AI tools make these same mistakes — sometimes subtly, sometimes obviously. The best thing you can do is stay curious, stay a little sceptical, and always check important facts.
          </p>
          <br />
          <span className="reset-link" onClick={() => (window as Window & { _petResetAll?: () => void })._petResetAll?.()}>
            ↩ Start again with a different pet
          </span>
        </div>
      </div>

      <Script src="/ask-pet-expert.js" strategy="afterInteractive" />
    </>
  );
}
