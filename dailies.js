function Reset() {
  const now = new Date();
  const reset = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 2, 0, 0));

  if (reset <= now) {
    reset.setUTCDate(reset.getUTCDate() + 1);
  }

  return reset;
}

function updateReset() {
  const diff = Reset() - new Date();

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("d-hours").textContent = String(hours)
  document.getElementById("d-minutes").textContent = String(minutes)
  document.getElementById("d-seconds").textContent = String(seconds)
}

updateReset();
setInterval(updateReset, 1000);