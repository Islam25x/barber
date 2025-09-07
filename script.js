const playBtn = document.getElementById("playBtn");
const videoWrapper = document.getElementById("videoWrapper");
const ytVideo = document.getElementById("ytVideo");

playBtn.addEventListener("click", () => {
    playBtn.style.display = "none";
    videoWrapper.style.display = "block";
    ytVideo.src = "https://www.youtube.com/embed/_GSc3uAm8rQ?autoplay=1";
});