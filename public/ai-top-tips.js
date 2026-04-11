const _attPromptTips = [
  {
    icon:'🎯', iconBg:'#EEEDFE',
    name:'Plan before you type',
    badge:'Think first', badgeStyle:'background:#534AB7;color:#fff;',
    desc:'Know what you want before you start. Vague in, vague out.',
    why:"AI responds to what you ask, not what you meant to ask. A minute thinking about your goal before you type saves five minutes of back-and-forth. The clearer you are about what you want at the end, the better the first answer tends to be.",
    tries:[
      {title:'Ask yourself first:', text:"What do I actually want at the end of this? A list? A draft? A decision? An answer to a specific question?"},
      {title:'Write your goal first, then the context.', text:'"I need to write an email declining a meeting. It should be polite but firm. The meeting is about a sales pitch I\'m not interested in."'},
      {title:'Say what format you want.', text:'"Give me three bullet points" or "Write this as a short paragraph" — AI will match whatever you specify.'},
    ],
    example:'"Write a short bio for my LinkedIn profile. I work in project management. Tone: friendly and professional. Max 80 words."',
    exampleLabel:'A specific prompt'
  },
  {
    icon:'📋', iconBg:'#E8F4FD',
    name:'Give it context',
    badge:'Background matters', badgeStyle:'background:#2B7CB8;color:#fff;',
    desc:'The more it knows about your situation, the better the answer.',
    why:"AI has no idea who you are or what you do unless you tell it. 'How should I handle this?' means nothing without context. A few sentences about your situation can completely change the quality of what comes back.",
    tries:[
      {title:'Tell it who you are.', text:'"I\'m a first-year teacher in a primary school" gives very different results than no context at all.'},
      {title:'Tell it who the audience is.', text:'"Explain this to someone who has never used a spreadsheet before" vs "Explain this to an accountant."'},
      {title:'Tell it what you\'ve already tried.', text:'This stops it suggesting things you\'ve already ruled out — saves a lot of back and forth.'},
    ],
    example:'"I manage a small team of five. I need to give feedback to someone whose work has been slipping. Write me a script for a short, honest conversation that doesn\'t feel like an ambush."',
    exampleLabel:'Context-rich prompt'
  },
  {
    icon:'❓', iconBg:'#FFF3E0',
    name:'Ask it to ask you questions',
    badge:'Let it interview you', badgeStyle:'background:#E65100;color:#fff;',
    desc:"Not sure what to include? Let AI figure out what it needs to know.",
    why:"Sometimes you know what you want but not how to describe it. Asking AI to interview you before it answers means you get something genuinely tailored — without having to write a perfect prompt upfront.",
    tries:[
      {title:'Try this phrase:', text:'"Ask me questions until you\'re 95% confident you understand what I need, then give me the answer."'},
      {title:'Or this one:', text:'"Before you start, what do you need to know from me to do this well?"'},
      {title:'Works especially well for:', text:'Planning something new, writing something personal, or any task where the details really matter.'},
    ],
    example:'"I want to plan a surprise birthday party for my partner. Before you suggest anything, ask me questions until you\'re confident you understand what I\'m after."',
    exampleLabel:"Let AI lead the discovery"
  },
  {
    icon:'✂️', iconBg:'#E8F5E9',
    name:"Be brief — not vague",
    badge:'Save tokens', badgeStyle:'background:#1A9E70;color:#fff;',
    desc:"Shorter prompts work if they're specific. Long waffle wastes tokens and muddies the answer.",
    why:"AI doesn't read words — it reads chunks called tokens. One token is roughly ¾ of a word. Every message you send and receive uses tokens, and paid plans have monthly limits. That matters — but it also matters because long, unfocused prompts produce long, unfocused answers. Cut anything that isn't doing useful work.",
    tries:[
      {title:'Cut filler phrases.', text:'"Could you possibly help me with..." → just start with what you want. AI doesn\'t need warming up.'},
      {title:'One task per message.', text:'Asking five things at once usually gets five shallow answers. Ask one thing well, then follow up.'},
      {title:'Use bullet points for multi-part requests.', text:'Clearer for you to write, clearer for AI to follow. Less likely to have something get missed.'},
    ],
    example:'"Summarise this email in 3 bullet points. Plain English. No jargon."',
    exampleLabel:'Short and specific beats long and vague'
  },
  {
    icon:'🎭', iconBg:'#FFF0F8',
    name:'Give it a role',
    badge:'Set the frame', badgeStyle:'background:#E91E8C;color:#fff;',
    desc:'Telling AI who to be changes the quality of the answer.',
    why:"AI adjusts its tone, depth, and assumptions based on what role you give it. 'You are an experienced editor' gets you different output than asking the same question cold. The role sets expectations for how it should think and respond.",
    tries:[
      {title:'Start with a role:', text:'"You are a plain-English editor. Rewrite this so a 14-year-old could understand it."'},
      {title:null, text:'"Act as a sceptical customer reading this sales page for the first time. What questions would you have?"'},
      {title:null, text:'"You\'re a patient teacher explaining this to someone who finds it confusing."'},
    ],
    example:'"You are an experienced editor who makes technical writing human. Rewrite any sentence in this paragraph that sounds like it was written by a committee."',
    exampleLabel:'Role + task = better result'
  },
  {
    icon:'📸', iconBg:'#F5F5F5',
    name:"Upload a screenshot",
    badge:"Show, don't describe", badgeStyle:'background:#555;color:#fff;',
    desc:"A screenshot of a problem is worth a hundred words of description.",
    why:"Describing a tech problem in words is hard and often inaccurate. Showing AI a screenshot of exactly what you're seeing — an error message, a confusing form, a setting you can't find — gets you a much more precise answer, faster.",
    tries:[
      {title:'For tech problems:', text:"Screenshot the error or the screen you're stuck on. Paste it in and ask \"What's happening here and how do I fix it?\""},
      {title:'For design or layout feedback:', text:"Screenshot what you're looking at. \"What's not working about this?\" is much clearer with a picture."},
      {title:'For anything with a form or table:', text:'Screenshot it instead of trying to describe the layout in words.'},
    ],
    example:null,
    exampleLabel:null
  },
];

const _attValidateTips = [
  {
    icon:'🎲', iconBg:'#E8F4FD',
    name:"Ask if it's guessing",
    badge:'Call it out', badgeStyle:'background:#2B7CB8;color:#fff;',
    desc:"AI never volunteers that it might be wrong. You have to ask.",
    why:"AI presents everything — facts, guesses, and outright inventions — in the same confident tone. The only way to find out which you're dealing with is to ask directly. A well-designed AI will tell you honestly if it's uncertain.",
    tries:[
      {title:'Try asking:', text:'"Is that true or are you guessing?"'},
      {title:null, text:'"What percentage confidence do you have in that answer?"'},
      {title:null, text:'"Which parts of that are you less certain about?"'},
    ],
    example:'"What\'s your confidence level on that answer, as a percentage? And which specific claims should I verify independently?"',
    exampleLabel:'Ask before you act on it'
  },
  {
    icon:'🔍', iconBg:'#FFF3E0',
    name:'Ask what tools can verify it',
    badge:'Go to the source', badgeStyle:'background:#E65100;color:#fff;',
    desc:"AI can point you to where to check — even when it can't check itself.",
    why:"AI doesn't always have current information, and it can't always tell if a source is reliable. But it can usually tell you where to look to confirm something — especially useful for anything legal, medical, financial, or time-sensitive.",
    tries:[
      {title:'Ask directly:', text:'"What external sources or tools could I use to verify this?"'},
      {title:null, text:'"Where would I look to confirm this is still current?"'},
      {title:'For rules or regulations:', text:'"Which government or official website should I check this against?"'},
    ],
    example:'"You\'ve told me the rules around this — where would I check to make sure that\'s accurate and up to date?"',
    exampleLabel:'Point it toward a source'
  },
  {
    icon:'🖥️', iconBg:'#FFF8E1',
    name:'Check if it can see what you see',
    badge:"Don't assume", badgeStyle:'background:#F0A500;color:#fff;',
    desc:"Pasting a link doesn't mean AI is actually reading that page.",
    why:"Pasting a URL into a chat doesn't always mean AI can open and read it — it depends on the tool and whether web browsing is turned on. If it can't see the page, it's either guessing based on the URL or using old information it was trained on.",
    tries:[
      {title:'Ask outright:', text:'"Can you see the content of that web page, or are you working from memory?"'},
      {title:'Better still:', text:'Copy and paste the text from the page directly into the chat. Then you know for certain it has the right information.'},
      {title:'For documents:', text:'"Are you reading from the file I attached, or answering from general knowledge?"'},
    ],
    example:'"Before you answer — can you actually see the content of that page, or are you inferring from the URL?"',
    exampleLabel:'Check before you trust the summary'
  },
];

const _attSmartTips = [
  {
    icon:'⚙️', iconBg:'#EEEDFE',
    name:'Set your preferences',
    badge:'Train it once', badgeStyle:'background:#534AB7;color:#fff;',
    desc:"Tell it how you like things done. You shouldn't have to repeat yourself every time.",
    why:"Most AI tools let you save persistent instructions — your name, job, preferred tone, formatting preferences. Set these once and you don't need to repeat yourself in every prompt. It takes five minutes and makes every future conversation better.",
    tries:[
      {title:'Claude: Settings → Profile → Personal preferences.', text:'Add your name, role, how you like responses formatted, and any tone or language preferences. Available on free accounts.'},
      {title:'ChatGPT: Profile icon → Settings → Personalization → Custom Instructions.', text:"Two fields — what ChatGPT should know about you, and how you'd like it to respond. Available on all plans."},
      {title:'Gemini: Menu → Settings & Help → Instructions for Gemini.', text:'Toggle it on, then add your preferences. Free accounts see "Instructions for Gemini"; paid accounts may see "Personal Context".'},
    ],
    example:'"I\'m based in Auckland, New Zealand. I write for a general audience, not specialists. Always use plain English, short paragraphs, and NZ spelling. Don\'t use bullet points unless I ask."',
    exampleLabel:'Example preference instruction'
  },
  {
    icon:'🗂️', iconBg:'#E8F5E9',
    name:'Start fresh for new topics',
    badge:'Clean slate', badgeStyle:'background:#1A9E70;color:#fff;',
    desc:'Long chats cause AI to forget things you said earlier. New task, new chat.',
    why:"AI has a memory limit — called a context window. In a long conversation, earlier instructions quietly drop out without any warning. Starting a new chat means a clean slate and usually better, more focused results.",
    tries:[
      {title:"If something's gone off track:", text:"Don't keep correcting in the same chat. Start fresh and be more specific upfront."},
      {title:'For anything important said earlier:', text:"Repeat it. Don't assume AI still knows — it may have quietly forgotten it."},
      {title:'One chat per task:', text:'Keeps things clean and stops old context from bleeding into new work in unexpected ways.'},
    ],
    example:null,
    exampleLabel:null
  },
  {
    icon:'📝', iconBg:'#FFF3E0',
    name:'Brief it before you start',
    badge:'Fewer rewrites', badgeStyle:'background:#E65100;color:#fff;',
    desc:'A minute of thinking before you start saves five minutes of fixing.',
    why:"Most frustrating AI interactions come from jumping straight in without a clear goal. Knowing what you want, who it's for, and what format you need before you type means fewer rounds of 'can you redo this' — and fewer tokens used.",
    tries:[
      {title:'Before a big task, note down:', text:"What's the end goal? Who will read this? What tone? What length? Any constraints?"},
      {title:'For complex requests:', text:'Write a short brief first, then give it to AI as one clear prompt rather than building up in pieces.'},
      {title:"If you're unsure what you need:", text:'"Help me think through what I need here before we start writing."'},
    ],
    example:'"I need to write a complaint letter about a delayed insurance claim. Audience: claims department. Tone: firm but not aggressive. I need to reference my policy number and the date of the original decision. Draft this for me."',
    exampleLabel:'Brief first, then write'
  },
];

const _attAllTips = {
  'att-prompt-grid': _attPromptTips,
  'att-validate-grid': _attValidateTips,
  'att-smart-grid': _attSmartTips
};

function _attBuildCards(tips, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  tips.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = 'att-card';
    card.onclick = () => _attExpand(gridId, i);
    card.innerHTML = `
      <div class="att-card-top">
        <div class="att-icon" style="background:${c.iconBg}">${c.icon}</div>
        <div class="att-tip-name">${c.name}</div>
      </div>
      <div class="att-tip-desc">${c.desc}</div>
      <div class="att-divider"></div>
      <span class="att-badge" style="${c.badgeStyle}">${c.badge}</span>`;
    grid.appendChild(card);
  });
}

function _attExpand(gridId, i) {
  const c = _attAllTips[gridId][i];
  const triesHtml = c.tries.map(t => `
    <div class="att-try-row">
      <div class="att-try-arrow">→</div>
      <div class="att-try-wrap">
        ${t.title ? `<div class="att-try-title">${t.title}</div>` : ''}
        <div class="att-try-text">${t.text}</div>
      </div>
    </div>`).join('');

  const exampleHtml = c.example ? `
    <div class="att-exp-divider"></div>
    <div>
      <div class="att-example-label">${c.exampleLabel}</div>
      <div class="att-example-box">${c.example}</div>
    </div>` : '';

  document.getElementById('att-exp-content').innerHTML = `
    <div class="att-exp-header">
      <div class="att-exp-icon" style="background:${c.iconBg}">${c.icon}</div>
      <div>
        <div class="att-exp-name">${c.name}</div>
        <div class="att-exp-badge" style="${c.badgeStyle}">${c.badge}</div>
      </div>
    </div>
    <div class="att-exp-desc">${c.desc}</div>
    <div class="att-exp-divider"></div>
    <div>
      <div class="att-exp-section-label">Why it matters</div>
      <div class="att-why-box">${c.why}</div>
    </div>
    <div class="att-exp-divider"></div>
    <div>
      <div class="att-exp-section-label">Try it</div>
      <div class="att-try-rows">${triesHtml}</div>
    </div>
    ${exampleHtml}`;

  const overlay = document.getElementById('att-overlay');
  overlay.classList.add('active');
  overlay.scrollTop = 0;
}

function _attCloseOverlay() {
  document.getElementById('att-overlay').classList.remove('active');
}

function _attInit() {
  _attBuildCards(_attPromptTips, 'att-prompt-grid');
  _attBuildCards(_attValidateTips, 'att-validate-grid');
  _attBuildCards(_attSmartTips, 'att-smart-grid');

  const overlay = document.getElementById('att-overlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === this) _attCloseOverlay();
    });
  }
}

window._attExpand = _attExpand;
window._attCloseOverlay = _attCloseOverlay;
window._attInit = _attInit;
