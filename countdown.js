// Target date
const targetDate = new Date("2026-08-13T10:00:00+08:00");

// I got no idea but it works
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  // Timer is removed and replaced with text when it reaches 0
  if (diff <= 0) {
    document.querySelector(".countdown").textContent = "CBT2 is over!";
    clearInterval(timer);
    return;
  } 

  // Variables for day, hour, minute, and second using the painful mr modulo operator (the %)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Replacing the empty strings in index.html with the value. uses the id "getElementById" thank god it exists
  document.getElementById("days").textContent = String(days)
  document.getElementById("hours").textContent = String(hours)
  document.getElementById("minutes").textContent = String(minutes)
  document.getElementById("seconds").textContent = String(seconds)
}

// Interval for every time the counter updates or something but it works
updateCountdown();
const timer = setInterval(updateCountdown, 1000);