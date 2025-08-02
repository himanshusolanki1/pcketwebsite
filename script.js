document.addEventListener('DOMContentLoaded', () => {
  let pressTimer = null;

  const signalBtn = document.getElementById('signalBtn');
  const continueBtn = document.getElementById('continueBtn');

  // CONTINUE button
  continueBtn.addEventListener('click', () => {
    const market = document.getElementById('pairInput').value.trim();
    if (!market) return alert("Please enter a market and pair name.");

    document.getElementById('marketDisplay').textContent = market;
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('initialPage').classList.add('hidden'); // Hides entire first page
  });

  // Setup press events
  function setupPressEvents() {
    const startPress = () => {
      pressTimer = setTimeout(() => {
        generateSignal("DOWN");
        pressTimer = null;
      }, 500); // Hold
    };

    const endPress = () => {
      if (pressTimer) {
        clearTimeout(pressTimer);
        generateSignal("UP"); // Tap
      }
    };

    signalBtn.addEventListener("mousedown", startPress);
    signalBtn.addEventListener("mouseup", endPress);
    signalBtn.addEventListener("touchstart", startPress);
    signalBtn.addEventListener("touchend", endPress);
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

  setupPressEvents();
});
