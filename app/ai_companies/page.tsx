'use client';

import { useState } from 'react';

const mainCards = [
  {
    icon: '🤖', iconBg: '#F0F0FF', company: 'Anthropic', model: 'Claude',
    modelStyle: { background: '#E91E8C', color: '#fff' },
    desc: "The one you're using today. Built to be safe and thoughtful - excellent at coding, writing, and working through complex problems.",
    tags: [
      { l: 'writing & thinking', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'coding', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'long documents', s: { background: '#F0FDFB', color: '#0F6E56' } },
    ],
    features: [
      { name: 'Projects', desc: 'Organised workspaces that remember context across conversations - like a folder for an ongoing project.' },
      { name: 'Cowork', desc: 'A desktop agent that does tasks for you while you step away - reads your files, creates documents, runs code.' },
      { name: 'Claude Code', desc: 'A coding-focused agent you can run from the command line. Builds and edits code across whole projects.' },
      { name: 'Claude in Chrome', desc: 'Browses the web on your behalf - can read pages and take actions in your browser.' },
      { name: 'Claude for Excel / PowerPoint', desc: 'Add-ins that let Claude work directly inside your spreadsheets and slides.' },
    ],
    privacyBg: '#F0FDFB', privacyLabel: 'Privacy: best in class', privacyLabelColor: '#0F6E56',
    privacyText: "Doesn't train on your chats unless you explicitly opt in. You're in control - no settings to hunt for.",
    cardPrivacyBg: '#F0FDFB', cardPrivacyLabel: 'Privacy: best in class', cardPrivacyLabelColor: '#0F6E56',
    cardPrivacyText: "Doesn't train on your chats unless you opt in.",
    cardTags: [
      { l: 'writing & thinking', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'coding', s: { background: '#F0FDFB', color: '#0F6E56' } },
    ],
    cardDesc: 'Safe, thoughtful, excellent at coding and long documents.',
  },
  {
    icon: '🔍', iconBg: '#E8F5E9', company: 'Google', model: 'Gemini',
    modelStyle: { background: '#1A1A2E', color: '#00D4AA' },
    desc: "Google's AI, built into Gmail, Google Docs, and Search. Has the widest range of built-in creative tools of any platform.",
    tags: [
      { l: 'Google tools', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'images & video', s: { background: '#FFF0F8', color: '#993556' } },
      { l: 'deep research', s: { background: '#F0FDFB', color: '#0F6E56' } },
    ],
    features: [
      { name: 'Gems', desc: "Custom AI assistants you set up once and reuse - give it a persona, instructions, and your files. Like having a specialist on call." },
      { name: 'Nano Banana', desc: "Gemini's image generator - create and edit photos just by describing what you want." },
      { name: 'Veo', desc: "Gemini's video generator - describe a scene and it creates an 8-second video clip." },
      { name: 'Deep Research', desc: 'Searches hundreds of websites and writes a comprehensive report for you - great for complex topics.' },
      { name: 'Scheduled Actions', desc: 'Set Gemini to run tasks automatically - like a daily email summary every morning.' },
    ],
    privacyBg: '#FFF8E1', privacyLabel: 'Privacy: opt out needed', privacyLabelColor: '#854F0B',
    privacyText: 'Saves your chats for 18 months by default, and human reviewers may read them. Turn off in Gemini settings under Activity.',
    cardPrivacyBg: '#FFF8E1', cardPrivacyLabel: 'Privacy: opt out needed', cardPrivacyLabelColor: '#854F0B',
    cardPrivacyText: 'Saves chats 18 months by default.',
    cardTags: [
      { l: 'Google tools', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'images & video', s: { background: '#FFF0F8', color: '#993556' } },
      { l: 'deep research', s: { background: '#F0FDFB', color: '#0F6E56' } },
    ],
    cardDesc: 'Lives in Gmail & Docs. Images, video, and deep research built in.',
  },
  {
    icon: '💬', iconBg: '#E8F4FD', company: 'OpenAI', model: 'ChatGPT',
    modelStyle: { background: '#1A1A2E', color: '#fff' },
    desc: "The AI that kicked off the whole craze in 2022. The most built-in tools of any platform, and powers Microsoft Copilot inside Word, Excel, and Windows.",
    tags: [
      { l: 'general tasks', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'images (DALL-E)', s: { background: '#FFF0F8', color: '#993556' } },
      { l: 'deep research', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'Microsoft Office', s: { background: '#F0FDFB', color: '#0F6E56' } },
    ],
    features: [
      { name: 'Custom GPTs', desc: "Your own reusable AI assistants - set them up with specific instructions and knowledge, just like Gemini's Gems." },
      { name: 'DALL-E', desc: 'Image generation - describe what you want and it creates a picture. (Video via Sora was shut down March 2026.)' },
      { name: 'Deep Research', desc: 'Searches the web deeply and writes a detailed report. One of the best deep research tools available.' },
      { name: 'Canvas', desc: 'A side-by-side editor for collaborating with ChatGPT on long documents or code.' },
      { name: 'Voice mode', desc: 'Talk to ChatGPT out loud and it talks back - surprisingly natural conversation.' },
      { name: 'Microsoft Copilot', desc: 'ChatGPT built into Word, Excel, Outlook and Windows - same AI, different wrapper.' },
    ],
    privacyBg: '#FFF8E1', privacyLabel: 'Privacy: opt out needed', privacyLabelColor: '#854F0B',
    privacyText: 'Trains on your chats by default. Settings → Data Controls → turn off "Improve the model for everyone."',
    cardPrivacyBg: '#FFF8E1', cardPrivacyLabel: 'Privacy: opt out needed', cardPrivacyLabelColor: '#854F0B',
    cardPrivacyText: 'Trains on your chats by default.',
    cardTags: [
      { l: 'general tasks', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'images', s: { background: '#FFF0F8', color: '#993556' } },
      { l: 'deep research', s: { background: '#F0FDFB', color: '#0F6E56' } },
    ],
    cardDesc: 'Started it all. Images, deep research & Microsoft Office built in.',
  },
  {
    icon: '🌐', iconBg: '#FFF3E0', company: 'Perplexity', model: 'Perplexity',
    modelStyle: { background: '#E91E8C', color: '#fff' },
    desc: "Feels like a search engine but actually reads the web and explains what it found - always showing its sources. Research is what it was built for.",
    tags: [
      { l: 'research', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'shows sources', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'deep research', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'images & video (Pro)', s: { background: '#FFF0F8', color: '#993556' } },
    ],
    features: [
      { name: 'Web search with citations', desc: 'Every answer comes with sources shown - you can see exactly where the information came from.' },
      { name: 'Deep Research', desc: 'Its superpower - searches dozens of sites simultaneously and produces a detailed, cited report.' },
      { name: 'Incognito mode', desc: 'Chats saved nowhere, not used for training. The most private way to use an AI tool.' },
      { name: 'Image & video (Pro)', desc: 'Pro subscribers can generate images and videos as well as do research.' },
    ],
    privacyBg: '#FFF8E1', privacyLabel: 'Privacy: easy opt out', privacyLabelColor: '#854F0B',
    privacyText: 'Trains on chats by default, but opt-out is clearly labelled under Settings → AI Data Usage. Incognito mode saves nothing at all.',
    cardPrivacyBg: '#FFF8E1', cardPrivacyLabel: 'Privacy: easy opt out', cardPrivacyLabelColor: '#854F0B',
    cardPrivacyText: 'Trains by default but opt-out is easy.',
    cardTags: [
      { l: 'research', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'deep research', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'images & video (Pro)', s: { background: '#FFF0F8', color: '#993556' } },
    ],
    cardDesc: 'Reads the web and shows its sources. Deep research is its superpower.',
  },
  {
    icon: '⚡', iconBg: '#FFF8E1', company: 'xAI', model: 'Grok',
    modelStyle: { background: '#1A1A2E', color: '#fff' },
    desc: "Elon Musk's AI, plugged into X (Twitter) in real time. More personality than the others - sometimes fun, sometimes chaotic.",
    tags: [
      { l: 'real-time news', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'images (Aurora)', s: { background: '#FFF0F8', color: '#993556' } },
      { l: 'inside X / Twitter', s: { background: '#F0FDFB', color: '#0F6E56' } },
    ],
    features: [
      { name: 'Aurora', desc: "Grok's image generator - create images from a text description, built into the X / Twitter app." },
      { name: 'Live X data', desc: "Always connected to X in real time - knows what's trending and what people are saying right now." },
      { name: 'Deep Search', desc: 'Searches the web and X posts together - useful for fast-moving news stories.' },
    ],
    privacyBg: '#FFF0F0', privacyLabel: 'Privacy: limited control', privacyLabelColor: '#A32D2D',
    privacyText: 'Trains on your chats by default. Personal account users have limited opt-out options - avoid sharing anything sensitive.',
    cardPrivacyBg: '#FFF8E1', cardPrivacyLabel: 'Privacy: limited control', cardPrivacyLabelColor: '#854F0B',
    cardPrivacyText: 'Trains on chats by default.',
    cardTags: [
      { l: 'real-time news', s: { background: '#F0FDFB', color: '#0F6E56' } },
      { l: 'images & video (Aurora)', s: { background: '#FFF0F8', color: '#993556' } },
    ],
    cardDesc: "Elon Musk's AI inside X (Twitter). Real-time news and images.",
  },
];

const tierCards = [
  {
    company: 'Claude', color: '#E91E8C',
    desc: 'Think of these like trim levels on a car - same brand, different power and price.',
    tiers: [
      { name: 'Haiku', pct: 0.3, desc: 'Quick and lightweight. Good for simple tasks where speed matters.' },
      { name: 'Sonnet', pct: 0.6, desc: 'The everyday workhorse - what most people use day to day.' },
      { name: 'Opus', pct: 1, desc: 'Most powerful. Best for complex reasoning and difficult problems.' },
    ],
  },
  {
    company: 'Gemini', color: '#1A9E70',
    desc: 'Think of these like trim levels on a car - same brand, different power and price.',
    tiers: [
      { name: 'Flash', pct: 0.3, desc: 'Fast and lightweight. Built for quick responses.' },
      { name: 'Pro', pct: 0.6, desc: 'The everyday model - good for most tasks including images and video.' },
      { name: 'Ultra', pct: 1, desc: 'Most powerful. For the toughest tasks.' },
    ],
  },
  {
    company: 'ChatGPT', color: '#2B7CB8',
    desc: 'Think of these like trim levels on a car - same brand, different power and price.',
    tiers: [
      { name: 'GPT-4o mini', pct: 0.3, desc: 'Fast and affordable. Good for everyday quick questions.' },
      { name: 'GPT-5', pct: 0.6, desc: 'The main workhorse model most people use.' },
      { name: 'o-series', pct: 1, desc: 'Deep thinking mode - takes longer but works much harder on complex problems.' },
    ],
  },
  {
    company: 'Perplexity', color: '#C4474A',
    desc: 'Perplexity keeps it simple with just two tiers.',
    tiers: [
      { name: 'Standard', pct: 0.4, desc: 'Free - great for research with citations. A perfect starting point.' },
      { name: 'Pro', pct: 1, desc: 'More searches, advanced models, plus image and video generation.' },
    ],
  },
  {
    company: 'Grok', color: '#8A6A00',
    desc: 'Grok has two main tiers for consumer use.',
    tiers: [
      { name: 'Grok (free)', pct: 0.5, desc: 'Free via X / Twitter. Good for quick questions and news.' },
      { name: 'Grok Heavy', pct: 1, desc: 'Premium thinking tier - more powerful reasoning at extra cost.' },
    ],
  },
];

type OverlayState =
  | { type: 'main'; index: number }
  | { type: 'tier'; index: number }
  | null;

export default function AICompaniesPage() {
  const [activeOverlay, setActiveOverlay] = useState<OverlayState>(null);

  const closeCard = () => setActiveOverlay(null);

  const renderMainOverlay = (i: number) => {
    const c = mainCards[i];
    return (
      <div className="exp">
        <div className="exp-header">
          <div className="exp-icon" style={{ background: c.iconBg }}>{c.icon}</div>
          <div>
            <div className="exp-company">{c.company}</div>
            <div className="exp-model" style={c.modelStyle}>{c.model}</div>
          </div>
        </div>
        <div className="exp-desc">{c.desc}</div>
        <div className="exp-tags">
          {c.tags.map((t, j) => (
            <span key={j} className="exp-tag" style={t.s}>{t.l}</span>
          ))}
        </div>
        <div className="exp-divider" />
        <div>
          <div className="exp-section-label">Built-in features</div>
          <div className="exp-features">
            {c.features.map((f, j) => (
              <div key={j} className="exp-feature">
                <div className="exp-feature-name">{f.name}</div>
                <div className="exp-feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="exp-divider" />
        <div className="exp-privacy" style={{ background: c.privacyBg }}>
          <span className="exp-privacy-label" style={{ color: c.privacyLabelColor }}>{c.privacyLabel}</span>
          {c.privacyText}
        </div>
      </div>
    );
  };

  const renderTierOverlay = (i: number) => {
    const c = tierCards[i];
    return (
      <div className="exp">
        <div className="exp-header">
          <div className="exp-icon" style={{ background: '#F5F5F5', fontFamily: 'Outfit,sans-serif', fontWeight: 800, fontSize: 26, color: c.color }}>
            {c.company[0]}
          </div>
          <div>
            <div className="exp-company" style={{ color: c.color }}>{c.company}</div>
            <div style={{ fontSize: 17, color: '#5A5A72', marginTop: 4 }}>{c.desc}</div>
          </div>
        </div>
        <div className="exp-tier-rows">
          {c.tiers.map((t, j) => (
            <div key={j} className="exp-tier-row">
              <div className="exp-tier-dot" style={{ background: c.color, opacity: t.pct }} />
              <div className="exp-tier-name">{t.name}</div>
              <div className="exp-tier-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;800&family=DM+Sans:wght@400;500&display=swap');
        .ai-wrap *{box-sizing:border-box;margin:0;padding:0;}
        .ai-wrap{background:#1A1A2E;padding:28px 24px 32px;font-family:'DM Sans','Helvetica Neue',Arial,sans-serif;}
        .logo{font-family:'Outfit',sans-serif;font-weight:800;font-size:15px;letter-spacing:0.5px;margin-bottom:4px;}
        .logo span{color:#00D4AA;font-style:normal;}
        .logo em{color:#fff;font-style:normal;}
        .headline{font-family:'Outfit',sans-serif;font-weight:800;font-size:26px;color:#fff;line-height:1.2;margin-bottom:4px;}
        .headline span{color:#E91E8C;}
        .sub{font-size:13px;color:#9999BB;margin-bottom:20px;line-height:1.5;}
        .grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin-bottom:8px;}
        .card{background:#fff;border-radius:10px;padding:13px 13px 11px;display:flex;flex-direction:column;gap:5px;cursor:pointer;transition:opacity 0.2s;}
        .card:hover{box-shadow:0 4px 16px rgba(0,0,0,0.18);}
        .card-top{display:flex;align-items:center;gap:8px;}
        .icon{width:30px;height:30px;border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:14px;}
        .company{font-family:'Outfit',sans-serif;font-weight:800;font-size:13px;color:#1A1A2E;line-height:1.2;}
        .model{font-size:11px;font-weight:500;padding:2px 7px;border-radius:10px;display:inline-block;width:fit-content;}
        .desc{font-size:11px;color:#5A5A72;line-height:1.5;}
        .tags{display:flex;flex-wrap:wrap;gap:3px;margin-top:2px;}
        .tag{font-size:9.5px;font-weight:500;padding:2px 6px;border-radius:8px;display:inline-block;}
        .privacy{font-size:10px;line-height:1.4;padding:5px 8px;border-radius:6px;margin-top:3px;}
        .privacy-label{font-weight:500;display:block;margin-bottom:1px;}
        .divider{height:1px;background:#F0F0F0;margin:4px 0;}
        .hint{font-size:11px;color:#9999BB;text-align:center;margin-bottom:14px;}
        .privacy-note{background:#0F2A22;border-radius:8px;padding:10px 14px;margin-top:12px;display:flex;gap:10px;align-items:flex-start;}
        .privacy-note-icon{font-size:16px;flex-shrink:0;margin-top:1px;}
        .privacy-note p{font-size:11.5px;color:#9FE1CB;line-height:1.6;}
        .privacy-note strong{color:#00D4AA;}
        .footer{text-align:center;margin-top:14px;}
        .footer p{font-size:11px;color:#9999BB;line-height:1.6;}
        .footer strong{color:#00D4AA;font-weight:500;}
        .tiers-section{margin-top:20px;}
        .tiers-label{font-family:'Outfit',sans-serif;font-weight:800;font-size:16px;color:#fff;margin-bottom:4px;}
        .tiers-sub{font-size:12px;color:#9999BB;margin-bottom:12px;line-height:1.5;}
        .tiers-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;}
        .tier-card{background:#fff;border-radius:10px;padding:12px 12px 10px;display:flex;flex-direction:column;gap:5px;cursor:pointer;}
        .tier-card:hover{box-shadow:0 4px 16px rgba(0,0,0,0.18);}
        .tier-company{font-family:'Outfit',sans-serif;font-weight:800;font-size:12px;}
        .tier-row{display:flex;align-items:flex-start;gap:7px;}
        .tier-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;margin-top:3px;}
        .tier-name{font-size:11px;font-weight:500;color:#1A1A2E;}
        .tier-desc{font-size:10px;color:#5A5A72;}
        .tier-divider{height:1px;background:#F4F4F4;margin:3px 0;}
        .overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#F9F9FB;z-index:100;overflow-y:auto;}
        .overlay.active{display:block;}
        .exp{min-height:100%;padding:40px 52px 60px;display:flex;flex-direction:column;gap:24px;position:relative;}
        .exp-header{display:flex;align-items:center;gap:20px;padding-bottom:20px;border-bottom:2px solid #E2E2ED;}
        .exp-icon{width:64px;height:64px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:32px;flex-shrink:0;}
        .exp-company{font-family:'Outfit',sans-serif;font-weight:800;font-size:44px;color:#1A1A2E;line-height:1;}
        .exp-model{font-size:16px;font-weight:500;padding:5px 14px;border-radius:12px;display:inline-block;margin-top:6px;}
        .exp-desc{font-size:20px;color:#3A3A52;line-height:1.7;}
        .exp-tags{display:flex;flex-wrap:wrap;gap:8px;}
        .exp-tag{font-size:15px;font-weight:500;padding:5px 14px;border-radius:10px;display:inline-block;}
        .exp-section-label{font-size:13px;font-weight:500;color:#9999BB;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:12px;}
        .exp-features{display:flex;flex-direction:column;gap:10px;}
        .exp-feature{display:flex;gap:14px;align-items:flex-start;background:#fff;border-radius:10px;padding:14px 16px;border:1px solid #E2E2ED;cursor:default;transition:background 0.15s,border-color 0.15s,transform 0.15s;}
        .exp-feature:hover{background:#EEEDFE;border-color:#AFA9EC;transform:translateX(4px);}
        .exp-feature:hover .exp-feature-name{color:#3C3489;}
        .exp-feature:hover .exp-feature-desc{color:#3C3489;}
        .exp-feature-name{font-size:18px;font-weight:500;color:#1A1A2E;min-width:180px;flex-shrink:0;transition:color 0.15s;}
        .exp-feature-desc{font-size:17px;color:#5A5A72;line-height:1.5;transition:color 0.15s;}
        .exp-divider{height:1px;background:#E2E2ED;}
        .exp-privacy{font-size:18px;line-height:1.7;padding:20px 24px;border-radius:10px;border:1px solid #E2E2ED;}
        .exp-privacy-label{font-weight:500;font-size:20px;display:block;margin-bottom:6px;}
        .exp-tier-rows{display:flex;flex-direction:column;gap:10px;}
        .exp-tier-row{display:flex;align-items:flex-start;gap:16px;background:#fff;border-radius:10px;padding:14px 16px;border:1px solid #E2E2ED;cursor:default;transition:background 0.15s,border-color 0.15s,transform 0.15s;}
        .exp-tier-row:hover{background:#EEEDFE;border-color:#AFA9EC;transform:translateX(4px);}
        .exp-tier-row:hover .exp-tier-name{color:#3C3489;}
        .exp-tier-row:hover .exp-tier-desc{color:#3C3489;}
        .exp-tier-dot{width:14px;height:14px;border-radius:50%;flex-shrink:0;margin-top:5px;}
        .exp-tier-name{font-size:22px;font-weight:500;color:#1A1A2E;min-width:160px;flex-shrink:0;transition:color 0.15s;}
        .exp-tier-desc{font-size:18px;color:#5A5A72;line-height:1.5;transition:color 0.15s;}
        .close-btn{position:fixed;top:16px;right:20px;background:#1A1A2E;border:none;font-size:16px;color:#fff;cursor:pointer;line-height:1;border-radius:8px;padding:8px 16px;z-index:101;font-family:'DM Sans',sans-serif;}
        .close-btn:hover{background:#333;}
      `}</style>

      <div className="ai-wrap">
        <div className="logo"><em>Jetpackers</em><span>AI</span></div>
        <p className="headline">Who am I <span>talking to?</span></p>
        <p className="sub">You&apos;ve probably heard some of these names. Here&apos;s who&apos;s who - what they&apos;re good for, and what they do with your data.</p>
        <p className="hint">Click any card to expand it</p>

        <div className="grid">
          {mainCards.map((c, i) => (
            <div key={i} className="card" onClick={() => setActiveOverlay({ type: 'main', index: i })}>
              <div className="card-top">
                <div className="icon" style={{ background: c.iconBg }}>{c.icon}</div>
                <div>
                  <div className="company">{c.company}</div>
                  <div className="model" style={c.modelStyle}>{c.model}</div>
                </div>
              </div>
              <div className="desc">{c.cardDesc}</div>
              <div className="tags">
                {c.cardTags.map((t, j) => (
                  <span key={j} className="tag" style={t.s}>{t.l}</span>
                ))}
              </div>
              <div className="divider" />
              <div className="privacy" style={{ background: c.cardPrivacyBg }}>
                <span className="privacy-label" style={{ color: c.cardPrivacyLabelColor }}>{c.cardPrivacyLabel}</span>
                <span style={{ color: '#5A5A72' }}>{c.cardPrivacyText}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="privacy-note">
          <div className="privacy-note-icon">💡</div>
          <p><strong>The golden rule:</strong> never type anything into a free AI tool that you wouldn&apos;t want a stranger to read - passwords, medical details, private client info. When in doubt, keep it out.</p>
        </div>

        <div className="tiers-section">
          <p className="tiers-label">Not all <span style={{ color: '#E91E8C' }}>Claudes</span> are equal</p>
          <p className="tiers-sub">Each company makes a range of models - like car models within a brand. Bigger = more powerful but slower and pricier. Click to expand.</p>
          <div className="tiers-grid">
            {tierCards.map((c, i) => (
              <div key={i} className="tier-card" onClick={() => setActiveOverlay({ type: 'tier', index: i })}>
                <div className="tier-company" style={{ color: c.color }}>{c.company}</div>
                <div className="tier-divider" />
                {c.tiers.map((t, j) => (
                  <div key={j} className="tier-row">
                    <div className="tier-dot" style={{ background: c.color, opacity: t.pct }} />
                    <div>
                      <div className="tier-name">{t.name}</div>
                      <div className="tier-desc">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer">
          <p>They&apos;re all doing the same basic thing - predicting the next word, just like your <strong>fAIrytale Mashup</strong> did.<br />The difference is billions of words of training and a lot more computing power.</p>
        </div>
      </div>

      {activeOverlay && (
        <div
          className="overlay active"
          onClick={(e) => { if (e.target === e.currentTarget) closeCard(); }}
        >
          <button className="close-btn" onClick={closeCard}>✕ close</button>
          {activeOverlay.type === 'main'
            ? renderMainOverlay(activeOverlay.index)
            : renderTierOverlay(activeOverlay.index)}
        </div>
      )}
    </>
  );
}
