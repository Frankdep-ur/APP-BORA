const pairs = [
  ["XAUUSD", "2847.50", "+0.37%", "up"],
  ["EURUSD", "1.0891", "-0.13%", "dn"],
  ["GBPUSD", "1.2715", "-0.05%", "dn"],
  ["USDJPY", "154.32", "+0.18%", "up"],
  ["BTC/USD", "67845.00", "+1.24%", "up"],
  ["XAGUSD", "31.42", "-0.22%", "dn"],
  ["NAS100", "18921.00", "+0.52%", "up"],
  ["US500", "5432.55", "+0.35%", "up"]
];

const track = document.getElementById("tickerTrack");
if (track) {
  const html = pairs.map(([s, p, c, d]) =>
    `<span class="ticker-item"><span class="sym">${s}</span> ${p} <span class="${d}">${c}</span></span>`
  ).join("");
  track.innerHTML = html + html;
}

const video = document.getElementById("demo");
const playBtn = document.getElementById("playBtn");
if (video && playBtn) {
  const hide = () => playBtn.classList.add("hidden");
  playBtn.addEventListener("click", () => {
    hide();
    video.play();
  });
  video.addEventListener("play", hide);
  video.addEventListener("pause", () => {
    if (video.currentTime > 0 && !video.ended) playBtn.classList.remove("hidden");
  });
}
