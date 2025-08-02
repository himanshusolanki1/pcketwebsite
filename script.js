let selectedTimer = null;

function setTimer(timer) {
  selectedTimer = timer;
  document.querySelectorAll('.timer-options button').forEach(btn => btn.classList.remove('selected'));
  event.target.classList.add('selected');
}

document.getElementById("getSignalBtn").addEventListener("click", function () {
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
});

