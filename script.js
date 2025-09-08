AOS.init({
    duration: 800,
    once: true,
    offset: 120
});

const playBtn = document.getElementById("playBtn");
const videoWrapper = document.getElementById("videoWrapper");
const ytVideo = document.getElementById("ytVideo");

playBtn.addEventListener("click", () => {
    playBtn.style.display = "none";
    videoWrapper.style.display = "block";
    ytVideo.src = "https://www.youtube.com/embed/_GSc3uAm8rQ?autoplay=1";
});

// arrow up button

const scrollBtn = document.getElementById("scrollTopBtn");
const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

// تحديث البوردر أثناء الاسكرول
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / docHeight;
    const offset = circumference - progress * circumference;

    circle.style.strokeDashoffset = offset;

    if (scrollTop > 200) {
        scrollBtn.style.opacity = "1";
        scrollBtn.style.pointerEvents = "auto";
    } else {
        scrollBtn.style.opacity = "0";
        scrollBtn.style.pointerEvents = "none";
    }
});


scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll('#branchTabs button[data-bs-toggle="tab"]').forEach(tab => {
    tab.addEventListener('shown.bs.tab', function (e) {
        AOS.refresh(); 
    });
});