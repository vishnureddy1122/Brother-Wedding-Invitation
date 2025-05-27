// === Initialize AOS (Animate on Scroll) ===
AOS.init();

// === Countdown Timer ===
const weddingDate = new Date("2025-06-07T00:00:00").getTime();
const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    timerElement.innerHTML = "Today is the Big Day!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// === Door and Invitation Animation ===
window.addEventListener("load", () => {
  const overlay = document.querySelector(".door-overlay");
  const invitationText = document.querySelector(".invitation-text");
  const bell = document.getElementById("bellSound"); // Optional: Add bell audio in HTML

  // Open doors & play bell
  setTimeout(() => {
    overlay.classList.add("open");
    if (bell) bell.play();
  }, 2000);

  // Fade in invitation text
  setTimeout(() => {
    invitationText.classList.add("fade-in");
  }, 3000);

  // Fade out invitation text
  setTimeout(() => {
    invitationText.classList.remove("fade-in");
    invitationText.classList.add("fade-out");
  }, 8500);

  // Remove overlay
  setTimeout(() => {
    overlay.classList.add("fade-out");
  }, 8500);
});

// === Line-by-Line Wedding Message Animation ===
const weddingLines = [

  " ",
  " ",
  " ",
  " ",
  " ",
  " ",

  "Gowtham Reddy weds Nandhini Reddy",
  "Haldi: 6th June 2025 - At Home",
  "Marraige Date: 7th June 2025",
  "Venue: Balaji Function Hall, Damarcherla",
  "Join us as we begin our forever",
  "Join us and make our special day even more memorable",
  "Thank you",
  "Inviting you by Padigapati Venkat Reddy and Anasurya",
  "Let's see you on the marriage!",
  "Scroll Down "
];

const weddingLinesContainer = document.getElementById("weddingLinesContainer");
let lineIndex = 0;

function showNextLine() {
  if (lineIndex >= weddingLines.length) return;

  const line = document.createElement("div");
  line.classList.add("wedding-line");
  line.textContent = weddingLines[lineIndex];

  // Clear previous line for cinematic effect
  weddingLinesContainer.innerHTML = '';
  weddingLinesContainer.appendChild(line);

  lineIndex++;
  setTimeout(showNextLine, 2500); // display each line for 2.5s
}

showNextLine();

// === Fallback for autoplay on mobile browsers ===
window.addEventListener("click", () => {
  const bgMusic = document.getElementById("bgMusic");
  const bell = document.getElementById("bellSound");
  if (bgMusic && bgMusic.paused) bgMusic.play();
  if (bell && bell.paused) bell.play();
});
