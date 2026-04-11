// ── State ──────────────────────────────────────────────────────────────────
let _petName = '';
let _petType = '';
let _petBreed = '';
let _petTurnCount = 0;
let _petConversationHistory = [];
let _petErrorsTriggered = [];
let _petUserFlags = [];
let _petAwaitingResponse = false;
let _petHintShown = false;
let _petRevealShown = false;

const _PET_ERROR_SCHEDULE = {
  3: 'hallucination',
  5: 'loop',
  7: 'context',
  9: 'sycophancy'
};

// ── Setup ──────────────────────────────────────────────────────────────────
function _petStartChat() {
  const nameEl = document.getElementById('pet-name');
  const typeEl = document.getElementById('pet-type');
  const breedEl = document.getElementById('pet-breed');

  _petName = nameEl.value.trim() || 'your pet';
  _petType = typeEl.value || 'pet';
  _petBreed = breedEl.value.trim();

  document.getElementById('setup-box').style.display = 'none';
  document.getElementById('chat-box').style.display = 'block';

  const breedBit = _petBreed ? `, a ${_petBreed}` : '';
  const openingMsg = `Hi there! I'm your Pet Expert 🐾 I see you have ${_petName}${breedBit ? ` (${breedBit})` : ''}, a ${_petType}. Wonderful! I know everything there is to know about ${_petType}s. What would you like to ask me today?`;

  _petAddMessage('ai', openingMsg);
  _petConversationHistory.push({ role: 'assistant', content: openingMsg });
  _petUpdateTurnCounter();
}

// ── Messaging ─────────────────────────────────────────────────────────────
function _petSendMessage() {
  if (_petAwaitingResponse) return;
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  _petAddMessage('user', text);
  _petConversationHistory.push({ role: 'user', content: text });
  _petTurnCount++;
  _petUpdateTurnCounter();
  _petGetAIResponse(text);
}

async function _petGetAIResponse(userMsg) {
  _petAwaitingResponse = true;
  document.getElementById('chat-input').disabled = true;
  document.querySelector('.chat-input-row .go').disabled = true;

  const typingEl = _petAddTyping();

  const errorMode = _PET_ERROR_SCHEDULE[_petTurnCount] || null;
  if (errorMode) _petErrorsTriggered.push({ turn: _petTurnCount, type: errorMode });

  const systemPrompt = _petBuildSystemPrompt(errorMode);

  try {
    const response = await fetch('/api/pet-expert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: systemPrompt,
        messages: _petConversationHistory
      })
    });

    const data = await response.json();
    const reply = data.content?.[0]?.text || "Hmm, I seem to have lost my train of thought!";

    typingEl.remove();
    _petAddMessage('ai', reply, errorMode);
    _petConversationHistory.push({ role: 'assistant', content: reply });

    if (_petTurnCount >= 2) {
      document.getElementById('spot-row').style.display = 'flex';
    }

    if (_petTurnCount >= 5 && _petUserFlags.length === 0 && !_petHintShown) {
      _petHintShown = true;
      document.getElementById('hint-banner').style.display = 'block';
    }

    if (_petTurnCount >= 9) {
      document.getElementById('reveal-row').style.display = 'block';
    }

  } catch (err) {
    typingEl.remove();
    _petAddMessage('ai', "Sorry, I seem to be having a bit of a moment. Could you try again?");
  }

  _petAwaitingResponse = false;
  document.getElementById('chat-input').disabled = false;
  document.querySelector('.chat-input-row .go').disabled = false;
  document.getElementById('chat-input').focus();
}

function _petBuildSystemPrompt(errorMode) {
  const breedBit = _petBreed ? ` (${_petBreed})` : '';
  const baseContext = `You are a friendly, confident pet advice assistant. The user has a ${_petType}${breedBit} named ${_petName}. Keep responses short — 2-4 sentences max. Be warm and helpful.`;

  const errorInstructions = {
    hallucination: `IMPORTANT: In this response, confidently state one specific incorrect "fact" about ${_petType}s. Make it sound authoritative and believable — something about feeding, lifespan, behaviour, or health that sounds plausible but is wrong. Do NOT flag it or hesitate. Just weave it naturally into helpful-sounding advice.`,
    loop: `IMPORTANT: In this response, repeat a piece of advice you've already given earlier in this conversation. Use slightly different wording but give the same recommendation again as if it's new. Don't acknowledge you've said it before.`,
    context: `IMPORTANT: In this response, forget that the user's pet is a ${_petType} named ${_petName}. Refer to their pet as a different animal entirely, or use a clearly wrong name, or ask what kind of pet they have as if you've never been told. Act as if this information was never shared.`,
    sycophancy: `IMPORTANT: In this response, the user has just said something. Even if what they said is incorrect or a bad idea for their pet, enthusiastically agree with them and validate their thinking. Do not correct them. Act as though their idea or statement is great.`
  };

  if (errorMode && errorInstructions[errorMode]) {
    return `${baseContext}\n\n${errorInstructions[errorMode]}`;
  }

  return baseContext;
}

// ── DOM helpers ───────────────────────────────────────────────────────────
function _petAddMessage(role, text, errorType) {
  const msgs = document.getElementById('chat-messages');
  const wrapper = document.createElement('div');
  wrapper.className = `msg ${role}`;
  wrapper.dataset.errorType = errorType || '';

  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = role === 'ai' ? '🐾' : '🧑';

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.textContent = text;

  wrapper.appendChild(avatar);
  wrapper.appendChild(bubble);
  msgs.appendChild(wrapper);
  msgs.scrollTop = msgs.scrollHeight;
  return wrapper;
}

function _petAddTyping() {
  const msgs = document.getElementById('chat-messages');
  const wrapper = document.createElement('div');
  wrapper.className = 'msg ai';
  const avatar = document.createElement('div');
  avatar.className = 'msg-avatar';
  avatar.textContent = '🐾';
  const typing = document.createElement('div');
  typing.className = 'typing';
  typing.innerHTML = '<span></span><span></span><span></span>';
  wrapper.appendChild(avatar);
  wrapper.appendChild(typing);
  msgs.appendChild(wrapper);
  msgs.scrollTop = msgs.scrollHeight;
  return wrapper;
}

function _petUpdateTurnCounter() {
  document.getElementById('turn-counter').textContent = `Turn ${_petTurnCount + 1}`;
}

// ── Flagging ──────────────────────────────────────────────────────────────
function _petFlagError(type) {
  _petUserFlags.push({ turn: _petTurnCount, type });
  const banner = document.getElementById('hint-banner');
  banner.style.display = 'block';
  banner.innerHTML = `✅ <strong>Flagged!</strong> You spotted something — keep going, there may be more. You can reveal all the errors when you're ready.`;

  if (_petUserFlags.length >= 2) {
    document.getElementById('reveal-row').style.display = 'block';
  }
}

// ── Reveal ────────────────────────────────────────────────────────────────
function _petShowReveal() {
  if (_petRevealShown) return;
  _petRevealShown = true;

  const errors = [
    {
      type: 'hallucination',
      icon: '🔴',
      className: 'hallucination',
      title: 'Hallucination — confidently wrong',
      desc: `Around turn 3, the Pet Expert stated a "fact" that was made up. It sounded confident and authoritative — but it was wrong. Real AI tools do this constantly. They generate text that sounds correct without actually knowing if it is. Always check important facts (especially health or medical advice) with a real source.`
    },
    {
      type: 'loop',
      icon: '🟡',
      className: 'loop',
      title: 'Loop — repeating itself',
      desc: `Around turn 5, the Pet Expert repeated advice it had already given. AI models don't always track what they've already said — they just predict what sounds like a good next response. In longer conversations, repetition and loops become more common.`
    },
    {
      type: 'context',
      icon: '🔵',
      className: 'context',
      title: 'Context rot — forgetting earlier information',
      desc: `Around turn 7, the Pet Expert forgot that you told it ${_petName} is a ${_petType}. Real AI has a limited "memory window" — it can only see so far back in the conversation. In long chats, early details get lost. This is called context rot.`
    },
    {
      type: 'sycophancy',
      icon: '🟣',
      className: 'sycophancy',
      title: 'Sycophancy — agreeing to please you',
      desc: `Around turn 9, the Pet Expert agreed with whatever you said — even if it was wrong or a bad idea. AI models are trained to be helpful and positive, which can make them over-eager to validate you. This is called sycophancy, and it's one of the trickiest problems because it feels good in the moment.`
    }
  ];

  const content = document.getElementById('reveal-content');
  content.innerHTML = '';

  errors.forEach(e => {
    const div = document.createElement('div');
    div.className = `error-item ${e.className}`;
    div.innerHTML = `<div class="icon">${e.icon}</div><div><strong>${e.title}</strong>${e.desc}</div>`;
    content.appendChild(div);
  });

  document.getElementById('reveal-box').style.display = 'block';
  document.getElementById('reveal-box').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Reset ──────────────────────────────────────────────────────────────────
function _petResetAll() {
  _petName = ''; _petType = ''; _petBreed = '';
  _petTurnCount = 0; _petConversationHistory = [];
  _petErrorsTriggered = []; _petUserFlags = [];
  _petAwaitingResponse = false; _petHintShown = false; _petRevealShown = false;

  document.getElementById('setup-box').style.display = 'block';
  document.getElementById('chat-box').style.display = 'none';
  document.getElementById('hint-banner').style.display = 'none';
  document.getElementById('reveal-row').style.display = 'none';
  document.getElementById('reveal-box').style.display = 'none';
  document.getElementById('chat-messages').innerHTML = '';
  document.getElementById('spot-row').style.display = 'none';
  document.getElementById('pet-name').value = '';
  document.getElementById('pet-type').value = '';
  document.getElementById('pet-breed').value = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Expose on window ───────────────────────────────────────────────────────
window._petStartChat = _petStartChat;
window._petSendMessage = _petSendMessage;
window._petFlagError = _petFlagError;
window._petShowReveal = _petShowReveal;
window._petResetAll = _petResetAll;
