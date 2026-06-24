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
        // 🎛️ متغیرها
        // ==========================================
        const iframe = document.getElementById('audioIframe');
        const iframeWrapper = document.getElementById('iframeWrapper');
        const noIframeMsg = document.getElementById('noIframeMsg');
        const radioList = document.getElementById('radioList');
        let currentStation = null;

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
                    <span class="name">${station.name}</span>
                    <span class="genre">${station.genre}</span>
                    <span class="status">▶ انتخاب</span>
                `;
                div.addEventListener('click', () => playStation(index));
                radioList.appendChild(div);
            });
        }

        // ==========================================
        // ▶️ پخش استیشن با iframe
        // ==========================================
        function playStation(index) {
            const station = radioStations[index];
            if (!station) return;

            currentStation = index;

            // مخفی کردن پیام و نمایش iframe
            noIframeMsg.style.display = 'none';
            iframe.style.display = 'block';

            // تنظیم iframe
            // از یک صفحه HTML ساده برای پخش استفاده میکنیم
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
                    <audio controls autoplay>
                        <source src="${station.url}" type="audio/mpeg">
                        <source src="${station.url}" type="audio/ogg">
                        مرورگرت پشتیبانی نمی‌کنه
                    </audio>
                    <script>
                        // اگر خطا داد، با پروکسی امتحان کن
                        const audio = document.querySelector('audio');
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

            // تبدیل به URL
            const blob = new Blob([embedHtml], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            iframe.src = url;

            updateUI(index);
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
        // 🚀 مقداردهی اولیه
        // ==========================================
        renderStations();

        // به‌صورت خودکار اولین استیشن رو پلی کن (بعد از ۱ ثانیه)
        setTimeout(() => playStation(0), 1000);