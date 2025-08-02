let pressTimer = null;
const signalBtn = document.getElementById('signalBtn');

// CONTINUE button logic
document.getElementById('continueBtn').addEventListener('click', () => {
  const market = document.getElementById('marketInput').value.trim();
  if (!market) return alert("Please select a market.");

  document.getElementById('marketDisplay').textContent = market;
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('continueBtn').classList.add('hidden');
  document.getElementById('marketInput').classList.add('hidden');
});

// Setup press and hold events
function setupPressEvents() {
  const startPress = () => {
    pressTimer = setTimeout(() => {
      generateSignal("DOWN");
      pressTimer = null;
    }, 500); // Hold for 0.5s = DOWN
  };

  const endPress = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      generateSignal("UP"); // Tap = UP
    }
  };

  // Mouse events
  signalBtn.addEventListener("mousedown", startPress);
  signalBtn.addEventListener("mouseup", endPress);

  // Touch events
  signalBtn.addEventListener("touchstart", startPress);
  signalBtn.addEventListener("touchend", endPress);
}

// Generate and show the signal with timer
function generateSignal(direction) {
  const countdown = parseInt(document.getElementById('timerInput').value) || 5;
  let timeLeft = countdown;

  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('loading').classList.remove('hidden');
  document.getElementById('loading').innerHTML = `<p>📡 Starting in ${timeLeft} seconds...</p>`;

  const interval = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      document.getElementById('loading').innerHTML = `<p>📡 Starting in ${timeLeft} seconds...</p>`;
    } else {
      clearInterval(interval);
      document.getElementById('loading').classList.add('hidden');
      document.getElementById('result').classList.remove('hidden');

      document.getElementById('directionText').textContent = direction;
      document.getElementById('directionText').style.color = direction === "UP" ? "lime" : "red";
      document.getElementById('finalMarket').textContent = document.getElementById('marketDisplay').textContent;
    }
  }, 1000);
}

// Reset for new signal
function reset() {
  document.getElementById('result').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
}

// Initialize press event logic
setupPressEvents();
