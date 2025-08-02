let pressTimer = null;

const continueBtn = document.getElementById('continueBtn');
const signalBtn = document.getElementById('signalBtn');
const pairInput = document.getElementById('pairInput');
const dashboard = document.getElementById('dashboard');
const loading = document.getElementById('loading');
const result = document.getElementById('result');
const marketDisplay = document.getElementById('marketDisplay');
const finalMarket = document.getElementById('finalMarket');
const directionText = document.getElementById('directionText');

// CONTINUE button click handler
continueBtn.addEventListener('click', () => {
  const market = pairInput.value.trim();
  if (!market) return alert("Please enter a market and pair name.");

  marketDisplay.textContent = market;

  dashboard.classList.remove('hidden');
  continueBtn.classList.add('hidden');
  pairInput.classList.add('hidden');

  // Now that the signal button is visible, set up the events
  setupPressEvents();
});

// Setup press/tap events for signal button
function setupPressEvents() {
  // Prevent duplicate listeners
  signalBtn.removeEventListener("mousedown", handleMouseDown);
  signalBtn.removeEventListener("mouseup", handleMouseUp);
  signalBtn.removeEventListener("touchstart", handleTouchStart);
  signalBtn.removeEventListener("touchend", handleTouchEnd);

  signalBtn.addEventListener("mousedown", handleMouseDown);
  signalBtn.addEventListener("mouseup", handleMouseUp);
  signalBtn.addEventListener("touchstart", handleTouchStart);
  signalBtn.addEventListener("touchend", handleTouchEnd);
}

function handleMouseDown() {
  pressTimer = setTimeout(() => {
    generateSignal("SELL");
    pressTimer = null;
  }, 500);
}

function handleMouseUp() {
  if (pressTimer) {
    clearTimeout(pressTimer);
    generateSignal("CALL");
  }
}

function handleTouchStart() {
  pressTimer = setTimeout(() => {
    generateSignal("SELL");
    pressTimer = null;
  }, 500);
}

function handleTouchEnd() {
  if (pressTimer) {
    clearTimeout(pressTimer);
    generateSignal("CALL");
  }
}

// Simulate signal generation
function generateSignal(direction) {
  dashboard.classList.add('hidden');
  loading.classList.remove('hidden');

  setTimeout(() => {
    loading.classList.add('hidden');
    result.classList.remove('hidden');
    directionText.textContent = direction;
    directionText.style.color = direction === "CALL" ? "green" : "red";
    finalMarket.textContent = marketDisplay.textContent;
  }, 2500);
}

// Reset to allow new signal
function reset() {
  result.classList.add('hidden');
  dashboard.classList.remove('hidden');
}
