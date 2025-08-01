const signalBtn = document.getElementById("getSignal");
const loadingBar = document.getElementById("loadingBar");
const result = document.getElementById("result");
const clock = document.getElementById("clock");

let holdTimer;

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  clock.textContent = `🕐 ${time}`;
}

setInterval(updateClock, 1000);

signalBtn.addEventListener("mousedown", () => {
  holdTimer = setTimeout(() => {
    showSignal("SELL");
  }, 2000); // Hold for 2 seconds = SELL
});

signalBtn.addEventListener("mouseup", () => {
  clearTimeout(holdTimer);
});

signalBtn.addEventListener("click", () => {
  showSignal("BUY");
});

function showSignal(type) {
  loadingBar.classList.remove("hidden");
  result.classList.add("hidden");

  setTimeout(() => {
    loadingBar.classList.add("hidden");
    result.classList.remove("hidden");

    if (type === "BUY") {
      result.innerHTML = "📈 BUY";
      result.className = "signalResult buy";
    } else {
      result.innerHTML = "📉 SELL";
      result.className = "signalResult sell";
    }
  }, 1500);
}
