body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(145deg, #090d15, #0f1625);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.app-container {
  max-width: 400px;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.logo {
  width: 60px;
  display: block;
  margin: 0 auto 10px;
}

header h1 {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
}

header span {
  font-size: 0.8rem;
  color: #00ffd1;
}

.settings-window {
  margin-top: 20px;
}

.pair-selector {
  position: relative;
}

.pair-selector input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
}

.pair-list {
  background: #121e2f;
  border-radius: 8px;
  display: none;
  max-height: 150px;
  overflow-y: auto;
  position: absolute;
  width: 100%;
  z-index: 5;
}

.pair-option {
  padding: 10px;
  cursor: pointer;
}

.pair-option:hover {
  background: #1e2f45;
}

.timeframes {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.time-btn {
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  background: #00ffd1;
  color: #000;
  font-weight: bold;
  cursor: pointer;
}

.time-btn.active {
  background: #1effa4;
  box-shadow: 0 0 10px #1effa4;
}

.signal-section {
  margin-top: 30px;
  text-align: center;
}

#getSignalBtn {
  padding: 12px 20px;
  background: #00ffd1;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
}

#getSignalBtn:active {
  background: #00bfa5;
}

.loading-message {
  margin-top: 15px;
  font-size: 0.9rem;
  color: #999;
  min-height: 24px;
}

.signal-result {
  margin-top: 10px;
  font-size: 1.4rem;
  font-weight: bold;
  color: #fff;
}

footer {
  text-align: center;
  margin-top: 30px;
  font-size: 0.85rem;
  color: #ccc;
    }
