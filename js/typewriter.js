
(function () {
  const element = document.getElementById('typewriter-text');
  if (!element) return;

  const phrases = [
    'Aspiring Data Analyst',
    'Full-Stack Web Developer',
    'AI & LLM Enthusiast',
    'Data Science Enthusiast',
    'Python & Flask Developer',
    'Problem Solver',
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = '';

  const TYPING_SPEED = 80;
  const DELETING_SPEED = 40;
  const PAUSE_AFTER_TYPE = 2000;
  const PAUSE_AFTER_DELETE = 400;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      currentText = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      currentText = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    element.textContent = currentText;

    let timeout = isDeleting ? DELETING_SPEED : TYPING_SPEED;

    if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = PAUSE_AFTER_TYPE;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      timeout = PAUSE_AFTER_DELETE;
    }

    setTimeout(type, timeout);
  }

  setTimeout(type, 1000);
})();
