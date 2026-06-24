 // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));

  // Skill bar animation
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(fill => {
          setTimeout(() => fill.classList.add('animated'), 200);
        });
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skills-grid').forEach(g => skillObserver.observe(g));

  // ============================================
  // Form submit - ارسال از طریق Pipedream (امن)
  // ============================================
  document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('.btn-submit');
    const successMsg = document.getElementById('successMsg');
    
    // گرفتن مقادیر فرم
    const name = document.getElementById('name').value.trim();
    const projectType = document.getElementById('projectType').value;
    const description = document.getElementById('description').value.trim();
    const contactInfo = document.getElementById('contactInfo').value.trim();
    
    // ==============================================
    // 🔑 آدرس Webhook که از Pipedream گرفتی رو اینجا بذار
    // ==============================================
    const WEBHOOK_URL = 'https://eom6y5711v7it1w.m.pipedream.net'; // 👈 این رو عوض کن!
    // ==============================================
    
    btn.textContent = 'در حال ارسال...';
    btn.disabled = true;
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          projectType: projectType,
          description: description,
          contactInfo: contactInfo
        })
      });
      
      if (response.ok) {
        successMsg.style.display = 'block';
        btn.textContent = 'ارسال شد ✅';
        this.reset();
        
        setTimeout(() => {
          successMsg.style.display = 'none';
          btn.textContent = 'ارسال سفارش 🚀';
          btn.disabled = false;
        }, 5000);
      } else {
        throw new Error('خطا در ارسال');
      }
    } catch (error) {
      alert('❌ خطا در ارسال! لطفاً دوباره تلاش کن.');
      console.error('خطا:', error);
      btn.textContent = 'ارسال سفارش 🚀';
      btn.disabled = false;
    }
  });
  // Nav active link highlight
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');
    let current = '';
    sections.forEach(s => {
      if(window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
    });
    links.forEach(l => {
      l.style.color = l.getAttribute('href') === '#'+current ? '#fff' : '';
    });
  });