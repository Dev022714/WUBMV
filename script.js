const heartsContainer = document.querySelector(".hearts");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");
const final = document.getElementById("final");
const song = document.getElementById("song");

/* CREATE HEART RAIN */
function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "✨💜✨";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 4 + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);

/* NO BUTTON RUNS AWAY */
function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  card.classList.add("hidden");
  final.classList.remove("hidden");
  song.play();
});


const playPauseBtn = document.getElementById("playPause");
const seekBar = document.getElementById("seekBar");

/* PLAY / PAUSE */
playPauseBtn.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    playPauseBtn.textContent = "⏸";
  } else {
    song.pause();
    playPauseBtn.textContent = "▶";
  }
});

/* UPDATE SEEK BAR */
song.addEventListener("loadedmetadata", () => {
  seekBar.max = song.duration;
});

song.addEventListener("timeupdate", () => {
  seekBar.value = song.currentTime;
});

/* SEEK SONG */
seekBar.addEventListener("input", () => {
  song.currentTime = seekBar.value;
});
