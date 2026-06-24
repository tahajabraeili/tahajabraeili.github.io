// ==========================================
// 📻 لیست رادیوها
// ==========================================
const radioStations = [
    { name: "رادیو کردی", genre: "کردی", url: "https://stream-177.surfernetwork.com/ttknzrr93vkvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ0dGtuenJyOTN2a3Z2IiwiaG9zdCI6InN0cmVhbS0xNzcuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJjVkhnZG5RVlJLQzBtMWYxaUNxOExRIiwiaWF0IjoxNzgyMzA1MzU5LCJleHAiOjE3ODIzMDU0MTl9.vfZ2R6-KyEFBPAofeZ3j2pA15KETW_VjG5DPglAtGig" },
    { name: "نوستالژی ۱", genre: "نوستالژی", url: "https://stream-175.surfernetwork.com/yjq14yrnqiavv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ5anExNHlybnFpYXZ2IiwiaG9zdCI6InN0cmVhbS0xNzUuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJCUV82NldHelIxaUlnWENtVzltTXRnIiwiaWF0IjoxNzgyMzA1Mzg1LCJleHAiOjE3ODIzMDU0NDV9.-f4jF6lMOrwdzmcAjeUGZpsA_bQ3u10VNypCk2pFUqQ" },
    { name: "نوستالژی ۲", genre: "نوستالژی", url: "https://stream-176.surfernetwork.com/zgnryqpihulvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ6Z25yeXFwaWh1bHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJXQ2RLRnJuY1NhZXFSRTNoMzZJNktBIiwiaWF0IjoxNzgyMzA1NTI4LCJleHAiOjE3ODIzMDU1ODh9.ylbOsHPTAxqCj0PPqEG5u4nM3arj0Vb1AYndf_6YcKg" },
    { name: "نوستالژی ۳", genre: "نوستالژی", url: "https://stream-176.surfernetwork.com/uzcveonohb4vv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ1emN2ZW9ub2hiNHZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJtVnFISHRRUFRFU1ItZUVoM1VjaFlRIiwiaWF0IjoxNzgyMzA1NTY1LCJleHAiOjE3ODIzMDU2MjV9.ShEz2QwgdNmzpNISLUqM2hJSukiS5b8veAEuix2wxLU" },
    { name: "نوستالژی ۴", genre: "نوستالژی", url: "https://stream-176.surfernetwork.com/ss1rybwmkauvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJzczFyeWJ3bWthdXZ2IiwiaG9zdCI6InN0cmVhbS0xNzYuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJ2X1lRWkQxTlN6cWhCNXcybmJCbExRIiwiaWF0IjoxNzgyMzA1NTg1LCJleHAiOjE3ODIzMDU2NDV9.x9RMyG_qrrkzzyu-AgIMo3mibI92t0VseXsaf5pz4ME" },
    { name: "رادیو میکس", genre: "میکس", url: "https://stream-178.surfernetwork.com/4grnzpftgv3uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI0Z3JuenBmdGd2M3V2IiwiaG9zdCI6InN0cmVhbS0xNzguc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJmX2xJeW9UZlR3aXBxV1M4SXJoVmVnIiwiaWF0IjoxNzgyMzA1NjAwLCJleHAiOjE3ODIzMDU2NjB9.apWZSeQB_sYdw9BFwvKvbH9jAAtvhfBUDtSZ4JR0k0c" },
    { name: "رادیو دیپ", genre: "دیپ هاوس", url: "https://stream-175.surfernetwork.com/r9gopzuabz9uv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJyOWdvcHp1YWJ6OXV2IiwiaG9zdCI6InN0cmVhbS0xNzUuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJ0MDlCcVJuc1NHSzNWSGpqVnp5bW5RIiwiaWF0IjoxNzgyMzA1NzAwLCJleHAiOjE3ODIzMDU3NjB9.51zP_W9Do-ouCuhvP0HNqJjGzVCxgDw_3nhDh26XKC0" },
    { name: "رادیو شوتی", genre: "شوتی", url: "https://stream-177.surfernetwork.com/pjw9wy8jdfavv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJwanc5d3k4amRmYXZ2IiwiaG9zdCI6InN0cmVhbS0xNzcuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJPMURpZHVUNVMxU1UwVVAyejZXSV9BIiwiaWF0IjoxNzgyMzA1NzIxLCJleHAiOjE3ODIzMDU3ODF9.HjMNDX00bLC8V9madnq4Bp3L2croQmE7bIHC9fHtcks" },
    { name: "رادیو قدیم", genre: "قدیمی", url: "https://stream-177.surfernetwork.com/ukjfpjqigaktv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ1a2pmcGpxaWdha3R2IiwiaG9zdCI6InN0cmVhbS0xNzcuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJUNVFkRFpCZ1I5NkV2ZDAtX0hXUG1nIiwiaWF0IjoxNzgyMzA1NzU4LCJleHAiOjE3ODIzMDU4MTh9.tzbjrNZcMrFWQULz61lf_ULCV-hoWUVeem3P9i2SNuY" },
    { name: "رادیو فانک", genre: "فانک", url: "https://stream-177.surfernetwork.com/c9h2f1bfokutv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJjOWgyZjFiZm9rdXR2IiwiaG9zdCI6InN0cmVhbS0xNzcuc3VyZmVybmV0d29yay5jb20iLCJydHRsIjo1LCJqdGkiOiJ5Ql9WbWk0RlNXaXRSRXltT3lEb0RBIiwiaWF0IjoxNzgyMzA1ODE0LCJleHAiOjE3ODIzMDU4NzR9.3sYLbkUXjXDErdbyDC-h__l0CDlmmFD-uF9wSpVrZv0" },
    { name: "کلاسیک", genre: "کلاسیک", url: "https://212.80.8.200/listen/classic/radio.mp3" },
    { name: "خز", genre: "خز", url: "https://212.80.8.200/listen/khaaz/radio.mp3" },
    { name: "فانک (سرور)", genre: "فانک", url: "https://212.80.8.200/listen/phonk/radio.mp3" },
    { name: "دیپ (سرور)", genre: "دیپ هاوس", url: "https://212.80.8.200/listen/dep/radio.mp3" },
    { name: "رپ", genre: "رپ فارسی", url: "https://212.80.8.200/listen/rapfa/radio.mp3" },
    { name: "ریمیکس", genre: "ریمیکس", url: "https://212.80.8.200/listen/remixfa/radio.mp3" },
    { name: "شوتی (سرور)", genre: "شوتی", url: "https://212.80.8.200/listen/shooti/radio.mp3" },
    { name: "جزیره", genre: "جزیره", url: "https://212.80.8.200/listen/jazire/radio.mp3" },
];

// ==========================================
// 🎨 Canvas Background - انیمیشن موج‌ها
// ==========================================
const canvas = document.createElement('canvas');
canvas.id = 'bgCanvas';
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');
let width, height;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// ==========================================
// 🌊 پارامترهای موج
// ==========================================
const waves = [];
const NUM_WAVES = 8;
const COLORS = [
    'rgba(37, 99, 235, 0.3)',
    'rgba(59, 130, 246, 0.25)',
    'rgba(6, 182, 212, 0.25)',
    'rgba(37, 99, 235, 0.2)',
    'rgba(99, 102, 241, 0.2)',
    'rgba(6, 182, 212, 0.15)',
    'rgba(37, 99, 235, 0.15)',
    'rgba(59, 130, 246, 0.1)',
];

for (let i = 0; i < NUM_WAVES; i++) {
    waves.push({
        phase: Math.random() * Math.PI * 2,
        amplitude: 20 + Math.random() * 40,
        frequency: 0.005 + Math.random() * 0.01,
        speed: 0.005 + Math.random() * 0.01,
        yOffset: (i / NUM_WAVES) * height * 0.8 + height * 0.1,
        color: COLORS[i % COLORS.length],
        lineWidth: 2 + Math.random() * 3,
    });
}

// ==========================================
// 🎵 متغیرهای صوتی
// ==========================================
let audioContext = null;
let analyser = null;
let dataArray = null;
let bassValue = 0;
let smoothBass = 0;

// ==========================================
// 🎛️ متغیرهای اصلی UI
// ==========================================
const iframe = document.getElementById('audioIframe');
const iframeWrapper = document.getElementById('iframeWrapper');
const noIframeMsg = document.getElementById('noIframeMsg');
const radioList = document.getElementById('radioList');
let currentStation = null;
let isPlaying = false;

// ==========================================
// 📋 ساخت لیست
// ==========================================
function renderStations() {
    radioList.innerHTML = '';
    radioStations.forEach((station, index) => {
        const div = document.createElement('div');
        div.className = 'radio-item';
        div.dataset.index = index;
        div.innerHTML = `
            <div class="info">
                <span class="name">${station.name}</span>
                <span class="genre">${station.genre}</span>
            </div>
            <span class="status">▶ انتخاب</span>
        `;
        div.addEventListener('click', () => playStation(index));
        radioList.appendChild(div);
    });
}

// ==========================================
// ▶️ پخش استیشن
// ==========================================
function playStation(index) {
    const station = radioStations[index];
    if (!station) return;

    currentStation = index;
    isPlaying = true;

    noIframeMsg.style.display = 'none';
    iframe.style.display = 'block';

    const embedHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { 
                    margin: 0; 
                    background: transparent;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 80px;
                }
                audio {
                    width: 100%;
                    height: 54px;
                    border-radius: 10px;
                    background: #141a24;
                }
                audio::-webkit-media-controls-panel {
                    background: #141a24;
                }
            </style>
        </head>
        <body>
            <audio id="audioPlayer" controls autoplay>
                <source src="${station.url}" type="audio/mpeg">
                مرورگرت پشتیبانی نمی‌کنه
            </audio>
            <script>
                const audio = document.getElementById('audioPlayer');
                
                // ارسال داده‌های صوتی به parent
                audio.addEventListener('timeupdate', function() {
                    // اینجا می‌تونیم داده بفرستیم ولی به خاطر CORS محدودیت داریم
                });

                audio.addEventListener('error', function() {
                    const proxyUrl = 'https://corsproxy.io/?';
                    const newUrl = proxyUrl + encodeURIComponent('${station.url}');
                    audio.src = newUrl;
                    audio.load();
                    audio.play();
                });
            <\/script>
        </body>
        </html>
    `;

    const blob = new Blob([embedHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    iframe.src = url;

    updateUI(index);
    
    // شروع انیمیشن موج‌ها
    startWaveAnimation();
}

// ==========================================
// 🎨 بروزرسانی UI
// ==========================================
function updateUI(activeIndex) {
    document.querySelectorAll('.radio-item').forEach((item, i) => {
        item.classList.toggle('active', i === activeIndex);
        const status = item.querySelector('.status');
        if (i === activeIndex) {
            status.textContent = '🎵 در حال پخش';
        } else {
            status.textContent = '▶ انتخاب';
        }
    });
}

// ==========================================
// 🌊 انیمیشن موج‌ها (بدون Web Audio)
// ==========================================
let animationId = null;
let time = 0;

function startWaveAnimation() {
    if (animationId) return;
    animateWaves();
}

function animateWaves() {
    time += 0.02;
    
    // پاک کردن canvas با شفافیت برای افکت محوشدگی
    ctx.fillStyle = 'rgba(11, 14, 20, 0.15)';
    ctx.fillRect(0, 0, width, height);
    
    // کشیدن موج‌ها
    waves.forEach((wave, i) => {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        
        for (let x = 0; x <= width; x += 2) {
            const y = height / 2 + 
                Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
                Math.sin(x * wave.frequency * 1.7 + time * wave.speed * 1.3 + wave.phase) * (wave.amplitude * 0.5) +
                Math.sin(x * wave.frequency * 0.4 + time * wave.speed * 0.7 + wave.phase + 1) * (wave.amplitude * 0.3);
            
            ctx.lineTo(x, y);
        }
        
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.lineWidth;
        ctx.stroke();
    });
    
    // کشیدن دایره‌های متحرک در مرکز
    const centerX = width / 2;
    const centerY = height / 2;
    
    for (let i = 0; i < 5; i++) {
        const radius = 30 + i * 25 + Math.sin(time * 1.5 + i * 0.8) * 10;
        const alpha = 0.15 - i * 0.025;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
    
    // دایره مرکزی با پالس
    const pulseRadius = 15 + Math.sin(time * 2) * 3;
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseRadius * 2);
    gradient.addColorStop(0, 'rgba(37, 99, 235, 0.2)');
    gradient.addColorStop(1, 'rgba(37, 99, 235, 0)');
    ctx.beginPath();
    ctx.arc(centerX, centerY, pulseRadius * 2, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, pulseRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(37, 99, 235, 0.15)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(37, 99, 235, 0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    animationId = requestAnimationFrame(animateWaves);
}

// ==========================================
// 🚀 مقداردهی اولیه
// ==========================================
renderStations();

// شروع انیمیشن پس‌زمینه (حتی بدون پخش)
setTimeout(() => {
    startWaveAnimation();
}, 500);

// پخش خودکار اولین استیشن
setTimeout(() => playStation(0), 1500);