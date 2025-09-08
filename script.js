const playBtn = document.getElementById("playBtn");
const videoWrapper = document.getElementById("videoWrapper");
const ytVideo = document.getElementById("ytVideo");

window.addEventListener('load', function () {
    // اختفاء الـ preloader بعد 1 ثانية (تقدر تغير المدة)
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            preloader.style.display = 'none';

            const main = document.getElementById('mainContent');
            main.style.display = 'block';

            AOS.init({
                duration: 800,
                once: false,
                offset: 120
            });
        }, 10);
    }, 1000);
});
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

// إعادة تشغيل الانيميشن عند فتح أي تاب
document.querySelectorAll('#branchTabs button[data-bs-toggle="tab"]').forEach(tab => {
    tab.addEventListener('shown.bs.tab', function () {
        // إزالة active من كل التابات الأخرى
        document.querySelectorAll('#branchTabsContent .tab-pane .zoom-in').forEach(el => {
            el.classList.remove('active');
        });

        // إضافة active للتاب الحالي
        const tabPane = document.querySelector(this.getAttribute('data-bs-target'));
        tabPane.querySelectorAll('.zoom-in').forEach(el => {
            void el.offsetWidth; // إعادة تفعيل الانيميشن
            el.classList.add('active');
        });
    });
});

// عند التحميل لأول مرة، نضيف active للتاب المفتوح فقط
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#branchTabsContent .tab-pane.active .zoom-in').forEach(el => {
        el.classList.add('active');
    });
});