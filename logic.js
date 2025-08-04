document.addEventListener("DOMContentLoaded", () => {
  console.log('logic.js loaded');
  let pressTimer = null;

  const continueBtn = document.getElementById("continueBtn");
  const signalBtn = document.getElementById("signalBtn");
  const newSignalBtn = document.getElementById("newSignalBtn");

  continueBtn.addEventListener("click", () => {
    const market = document.getElementById("pairInput").value.trim();
    if (!market) return alert("Please enter a market and pair name.");
    document.getElementById("marketDisplay").textContent = market;
    document.getElementById("initialPage").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  });

  function setupPressEvents() {
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

    signalBtn.addEventListener("mousedown", startPress);
    signalBtn.addEventListener("mouseup", endPress);
    signalBtn.addEventListener("mouseleave", endPress);
    signalBtn.addEventListener("touchstart", startPress, { passive: true });
    signalBtn.addEventListener("touchend", endPress);
  }

  function generateSignal(direction) {
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");

    setTimeout(() => {
      document.getElementById("loading").classList.add("hidden");
      document.getElementById("result").classList.remove("hidden");

      const dirText = document.getElementById("directionText");
      dirText.textContent = direction;
      dirText.style.color = direction === "UP" ? "black" : "red";

      const market = document.getElementById("marketDisplay").textContent;
      document.getElementById("finalMarket").textContent = market;

      const timer = document.getElementById("timerInput");
      const selected = timer.options[timer.selectedIndex].text;
      document.getElementById("timeDisplay").textContent = selected;
    }, 1800);
  }

  function resetView() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  }

  newSignalBtn.addEventListener("click", resetView);
  setupPressEvents();
});
