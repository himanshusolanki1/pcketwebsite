let pressTimer = null;

// CONTINUE button
document.getElementById('continueBtn').addEventListener('click', () => {
  const market = document.getElementById('pairInput').value.trim();
  if (!market) return alert("Please enter a market and pair name.");

  document.getElementById('marketDisplay').textContent = market;
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('initialPage').classList.add('hidden');

  // Attach press events only after dashboard is shown
  setupPressEvents();
});

// 🔽 Hold = DOWN (touch or mouse), 🔼 Tap = UP
function setupPressEvents() {
  const signalBtn = document.getElementById('signalBtn');

  // Avoid duplicate listeners
  signalBtn.replaceWith(signalBtn.cloneNode(true));
  const newSignalBtn = document.getElementById('signalBtn');

  const startPress = () => {
    pressTimer = setTimeout(() => {
      generateSignal("DOWN");
      pressTimer = null;
    }, 500);
  };

  const endPress = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      generateSignal("UP");
    }
  };

  newSignalBtn.addEventListener("mousedown", startPress);
  newSignalBtn.addEventListener("mouseup", endPress);
  newSignalBtn.addEventListener("touchstart", startPress);
  newSignalBtn.addEventListener("touchend", endPress);
}

function generateSignal(direction) {
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('loading').classList.remove('hidden');

  setTimeout(() => {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('directionText').textContent = direction;
    document.getElementById('directionText').style.color = direction === "UP" ? "lime" : "red";
    document.getElementById('finalMarket').textContent = document.getElementById('marketDisplay').textContent;
  }, 2500);
}

function reset() {
  document.getElementById('result').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
}
