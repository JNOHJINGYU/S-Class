// Sticky nav
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Scroll fade-in
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin:'0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Hero initial animation
  setTimeout(() => {
    document.querySelectorAll('#hero .fade-in').forEach(el => el.classList.add('visible'));
  }, 200);


  // ── NAPPA SLIDER ──
  let nappaIdx = 0;
  const nappaTotal = 3;
  function updateNappaSlider() {
    document.getElementById('nappaTrack').style.transform = `translateX(-${nappaIdx * 100}%)`;
    document.querySelectorAll('#nappaDots .slider-dot').forEach((d,i) => d.classList.toggle('active', i === nappaIdx));
  }
  function slideNappa(dir) {
    nappaIdx = (nappaIdx + dir + nappaTotal) % nappaTotal;
    updateNappaSlider();
  }
  function goNappaSlide(i) {
    nappaIdx = i;
    updateNappaSlider();
  }

  // ── NAPPA LIGHTBOX ──
  let lbNappaIdx = 0;
  function updateLbNappa() {
    document.getElementById('lbNappaTrack').style.transform = `translateX(-${lbNappaIdx * 100}%)`;
    document.querySelectorAll('#nappaLightbox .lb-dot').forEach((d,i) => d.classList.toggle('active', i === lbNappaIdx));
  }
  function openNappaLightbox(startIdx) {
    lbNappaIdx = startIdx;
    updateLbNappa();
    document.getElementById('nappaLightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeNappaLightbox() {
    document.getElementById('nappaLightbox').classList.remove('active');
    document.body.style.overflow = '';
  }
  function closeNappaLightboxBg(e) {
    if (e.target === document.getElementById('nappaLightbox')) closeNappaLightbox();
  }
  function lbNappaNav(dir) {
    lbNappaIdx = (lbNappaIdx + dir + nappaTotal) % nappaTotal;
    updateLbNappa();
  }
  function lbNappaGo(i) {
    lbNappaIdx = i;
    updateLbNappa();
  }
  document.addEventListener('keydown', e => {
    if (document.getElementById('nappaLightbox').classList.contains('active')) {
      if (e.key === 'ArrowLeft') lbNappaNav(-1);
      if (e.key === 'ArrowRight') lbNappaNav(1);
      if (e.key === 'Escape') closeNappaLightbox();
    }
  });

  // ── EXCL NAPPA SLIDER ──
  let exclNappaIdx = 0;
  const exclNappaTotal = 3;
  function updateExclNappaSlider() {
    document.getElementById('exclNappaTrack').style.transform = `translateX(-${exclNappaIdx * 100}%)`;
    document.querySelectorAll('#exclNappaDots .slider-dot').forEach((d,i) => d.classList.toggle('active', i === exclNappaIdx));
  }
  function slideExclNappa(dir) {
    exclNappaIdx = (exclNappaIdx + dir + exclNappaTotal) % exclNappaTotal;
    updateExclNappaSlider();
  }
  function goExclNappaSlide(i) {
    exclNappaIdx = i;
    updateExclNappaSlider();
  }

  // ── EXCL NAPPA LIGHTBOX ──
  let lbExclNappaIdx = 0;
  function updateLbExclNappa() {
    document.getElementById('lbExclNappaTrack').style.transform = `translateX(-${lbExclNappaIdx * 100}%)`;
    document.querySelectorAll('#exclNappaLightbox .lb-dot').forEach((d,i) => d.classList.toggle('active', i === lbExclNappaIdx));
  }
  function openExclNappaLightbox(startIdx) {
    lbExclNappaIdx = startIdx;
    updateLbExclNappa();
    document.getElementById('exclNappaLightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeExclNappaLightbox() {
    document.getElementById('exclNappaLightbox').classList.remove('active');
    document.body.style.overflow = '';
  }
  function closeExclNappaLightboxBg(e) {
    if (e.target === document.getElementById('exclNappaLightbox')) closeExclNappaLightbox();
  }
  function lbExclNappaNav(dir) {
    lbExclNappaIdx = (lbExclNappaIdx + dir + exclNappaTotal) % exclNappaTotal;
    updateLbExclNappa();
  }
  function lbExclNappaGo(i) {
    lbExclNappaIdx = i;
    updateLbExclNappa();
  }
  document.addEventListener('keydown', e => {
    if (document.getElementById('exclNappaLightbox').classList.contains('active')) {
      if (e.key === 'ArrowLeft') lbExclNappaNav(-1);
      if (e.key === 'ArrowRight') lbExclNappaNav(1);
      if (e.key === 'Escape') closeExclNappaLightbox();
    }
  });

  // ── LEATHER SLIDER ──
  let leatherIdx = 0;
  const leatherTotal = 3;
  function updateLeatherSlider() {
    document.getElementById('leatherTrack').style.transform = `translateX(-${leatherIdx * 100}%)`;
    document.querySelectorAll('#leatherDots .slider-dot').forEach((d,i) => d.classList.toggle('active', i === leatherIdx));
  }
  function slideLeather(dir) {
    leatherIdx = (leatherIdx + dir + leatherTotal) % leatherTotal;
    updateLeatherSlider();
  }
  function goLeatherSlide(i) {
    leatherIdx = i;
    updateLeatherSlider();
  }

  // ── LEATHER LIGHTBOX ──
  let lbLeatherIdx = 0;
  const leatherImages = ['int_leather_black.jpg','int_leather_beige.png','int_leather_brown.png'];
  const leatherLabels = ['가죽 · 블랙 (213A)','가죽 · 베이지 (214A)','가죽 · 브라운 (215A)'];
  function updateLbLeather() {
    document.getElementById('lbLeatherTrack').style.transform = `translateX(-${lbLeatherIdx * 100}%)`;
    document.querySelectorAll('.lb-dot').forEach((d,i) => d.classList.toggle('active', i === lbLeatherIdx));
  }
  function openLeatherLightbox(startIdx) {
    lbLeatherIdx = startIdx;
    updateLbLeather();
    document.getElementById('leatherLightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeLeatherLightbox() {
    document.getElementById('leatherLightbox').classList.remove('active');
    document.body.style.overflow = '';
  }
  function closeLeatherLightboxBg(e) {
    if (e.target === document.getElementById('leatherLightbox')) closeLeatherLightbox();
  }
  function lbLeatherNav(dir) {
    lbLeatherIdx = (lbLeatherIdx + dir + leatherTotal) % leatherTotal;
    updateLbLeather();
  }
  function lbLeatherGo(i) {
    lbLeatherIdx = i;
    updateLbLeather();
  }
  document.addEventListener('keydown', e => {
    if (document.getElementById('leatherLightbox').classList.contains('active')) {
      if (e.key === 'ArrowLeft') lbLeatherNav(-1);
      if (e.key === 'ArrowRight') lbLeatherNav(1);
      if (e.key === 'Escape') closeLeatherLightbox();
    }
  });

  // ── MAYBACH NAPPA SLIDER ──
  let maybachNappaIdx = 0;
  const maybachNappaTotal = 4;
  function updateMaybachNappaSlider() {
    document.getElementById('maybachNappaTrack').style.transform = `translateX(-${maybachNappaIdx * 100}%)`;
    document.querySelectorAll('#maybachNappaDots .slider-dot').forEach((d,i) => d.classList.toggle('active', i === maybachNappaIdx));
  }
  function slideMaybachNappa(dir) {
    maybachNappaIdx = (maybachNappaIdx + dir + maybachNappaTotal) % maybachNappaTotal;
    updateMaybachNappaSlider();
  }
  function goMaybachNappaSlide(i) {
    maybachNappaIdx = i;
    updateMaybachNappaSlider();
  }

  // ── MAYBACH NAPPA LIGHTBOX ──
  let lbMaybachNappaIdx = 0;
  function updateLbMaybachNappa() {
    document.getElementById('lbMaybachNappaTrack').style.transform = `translateX(-${lbMaybachNappaIdx * 100}%)`;
    document.querySelectorAll('#maybachNappaLightbox .lb-dot').forEach((d,i) => d.classList.toggle('active', i === lbMaybachNappaIdx));
  }
  function openMaybachNappaLightbox(startIdx) {
    lbMaybachNappaIdx = startIdx;
    updateLbMaybachNappa();
    const lb = document.getElementById('maybachNappaLightbox');
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function closeMaybachNappaLightbox() {
    document.getElementById('maybachNappaLightbox').style.display = 'none';
    document.body.style.overflow = '';
  }
  function closeMaybachNappaLightboxBg(e) {
    if (e.target === document.getElementById('maybachNappaLightbox')) closeMaybachNappaLightbox();
  }
  function lbMaybachNappaNav(dir) {
    lbMaybachNappaIdx = (lbMaybachNappaIdx + dir + maybachNappaTotal) % maybachNappaTotal;
    updateLbMaybachNappa();
  }
  function lbMaybachNappaGo(i) {
    lbMaybachNappaIdx = i;
    updateLbMaybachNappa();
  }
  document.addEventListener('keydown', e => {
    if (document.getElementById('maybachNappaLightbox').style.display === 'flex') {
      if (e.key === 'ArrowLeft') lbMaybachNappaNav(-1);
      if (e.key === 'ArrowRight') lbMaybachNappaNav(1);
      if (e.key === 'Escape') closeMaybachNappaLightbox();
    }
  });

  // ── MANUFAKTUR SLIDER ──
  let manufakturIdx = 0;
  const manufakturTotal = 2;
  function updateManufakturSlider() {
    document.getElementById('manufakturTrack').style.transform = `translateX(-${manufakturIdx * 100}%)`;
    document.querySelectorAll('#manufakturDots .slider-dot').forEach((d,i) => d.classList.toggle('active', i === manufakturIdx));
  }
  function slideManufaktur(dir) {
    manufakturIdx = (manufakturIdx + dir + manufakturTotal) % manufakturTotal;
    updateManufakturSlider();
  }
  function goManufakturSlide(i) {
    manufakturIdx = i;
    updateManufakturSlider();
  }

  // ── MANUFAKTUR LIGHTBOX ──
  let lbManufakturIdx = 0;
  function updateLbManufaktur() {
    document.getElementById('lbManufakturTrack').style.transform = `translateX(-${lbManufakturIdx * 100}%)`;
    document.querySelectorAll('#manufakturLightbox .lb-dot').forEach((d,i) => d.classList.toggle('active', i === lbManufakturIdx));
  }
  function openManufakturLightbox(startIdx) {
    lbManufakturIdx = startIdx;
    updateLbManufaktur();
    const lb = document.getElementById('manufakturLightbox');
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function closeManufakturLightbox() {
    document.getElementById('manufakturLightbox').style.display = 'none';
    document.body.style.overflow = '';
  }
  function closeManufakturLightboxBg(e) {
    if (e.target === document.getElementById('manufakturLightbox')) closeManufakturLightbox();
  }
  function lbManufakturNav(dir) {
    lbManufakturIdx = (lbManufakturIdx + dir + manufakturTotal) % manufakturTotal;
    updateLbManufaktur();
  }
  function lbManufakturGo(i) {
    lbManufakturIdx = i;
    updateLbManufaktur();
  }
  document.addEventListener('keydown', e => {
    if (document.getElementById('manufakturLightbox').style.display === 'flex') {
      if (e.key === 'ArrowLeft') lbManufakturNav(-1);
      if (e.key === 'ArrowRight') lbManufakturNav(1);
      if (e.key === 'Escape') closeManufakturLightbox();
    }
  });

  // Lightbox
  function openLightbox(src, caption) {
    const lb = document.getElementById('lightbox');
    lb.classList.remove('video-mode');
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightboxCaption').textContent = caption || '';
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function openVideoLightbox(src, caption) {
    const lb = document.getElementById('lightbox');
    lb.classList.add('video-mode');
    const vid = document.getElementById('lightboxVideo');
    document.getElementById('lightboxVideoSrc').src = src;
    vid.load();
    vid.play();
    document.getElementById('lightboxCaption').textContent = caption || '';
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeLightboxFull() {
    const lb = document.getElementById('lightbox');
    lb.classList.remove('active');
    lb.classList.remove('video-mode');
    const vid = document.getElementById('lightboxVideo');
    vid.pause();
    vid.currentTime = 0;
    document.body.style.overflow = '';
  }
  function closeLightbox(e) {
    if (e.target === document.getElementById('lightbox')) {
      closeLightboxFull();
    }
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightboxFull();
  });

(function () {
    const overlay  = document.getElementById('lightbox-overlay');
    const lightImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    function openLightbox(src, alt) {
      lightImg.src = src;
      lightImg.alt = alt || '';
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
      setTimeout(() => { lightImg.src = ''; }, 350);
    }

    document.addEventListener('click', function (e) {
      if (e.target.closest('.lightbox-trigger')) {
        openLightbox(e.target.src, e.target.alt);
      }
    });

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  })();