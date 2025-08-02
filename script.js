let selectedTimer = null;
let pressTimer;

function setTimer(timer, event) {
  selectedTimer = timer;
  document.querySelectorAll('.timer-options button').forEach(btn => btn.classList.remove('selected'));
  event.target.classList.add('selected');
}

function generateSignal() {
  const pair = document.getElementById("pairSelector").value;
  const loadingMessage = document.getElementById("loadingMessage");
  const resultDisplay = document.getElementById("resultDisplay");

  if (!pair) {
    alert("Please select a currency pair!");
    return;
  }

  if (!selectedTimer) {
    alert("Please select a timer (M1, S5, S15)!");
    return;
  }

  loadingMessage.style.display = "block";
  resultDisplay.innerHTML = "";

  setTimeout(() => {
    loadingMessage.style.display = "none";
    const directions = ["📈 CALL", "📉 PUT"];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    resultDisplay.innerHTML = `${pair} | ${selectedTimer} | Signal: <span>${randomDirection}</span>`;
  }, 2000);
}

const signalBtn = document.getElementById("getSignalBtn");

// 🔘 Tap click (for desktop or short mobile tap)
signalBtn.addEventListener("click", generateSignal);

// 🔘 Long press (for mobile)
signalBtn.addEventListener("touchstart", function (e) {
  e.preventDefault(); // prevent ghost click
  pressTimer = setTimeout(() => {
    generateSignal();
  }, 1500); // long press after 1.5 seconds
});

signalBtn.addEventListener("touchend", function () {
  clearTimeout(pressTimer); // cancel if released early
});
