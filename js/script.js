/**
 * SBR Academy, Mhasawad - Vanilla JavaScript
 * Pure JS (No Frameworks, No Libraries other than Bootstrap 5 bundle)
 * Director: Anil Bangar
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Sticky & Blur Effect
  const navbar = document.querySelector('.navbar-custom');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
      if (backToTop) backToTop.classList.add('show');
    } else {
      navbar?.classList.remove('scrolled');
      if (backToTop) backToTop.classList.remove('show');
    }
  });

  // 2. Smooth Scrolling for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        // Close bootstrap navbar if open on mobile
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }

        const navHeight = navbar ? navbar.offsetHeight : 70;
        const targetPosition = targetElem.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // 3. Stats Counter Animation on Scroll
  const statNumbers = document.querySelectorAll('.stat-number');
  let counted = false;

  const runCounterAnimation = () => {
    statNumbers.forEach((counter) => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      let current = 0;
      const increment = Math.ceil(target / 45);

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = current + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + suffix;
        }
      };
      updateCounter();
    });
  };

  if ('IntersectionObserver' in window && statNumbers.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            counted = true;
            runCounterAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsSection = document.querySelector('#stats-trigger') || document.querySelector('.hero-stats-box');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }

  // 4. Bharti Physical Eligibility Checker Tool
  const checkBtn = document.getElementById('check-eligibility-btn');
  const resultBox = document.getElementById('eligibility-result');

  if (checkBtn && resultBox) {
    checkBtn.addEventListener('click', () => {
      const exam = document.getElementById('eligibility-exam').value;
      const gender = document.getElementById('eligibility-gender').value;
      const height = parseFloat(document.getElementById('eligibility-height').value);
      const age = parseInt(document.getElementById('eligibility-age').value, 10);

      if (!height || isNaN(height)) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = `
          <div class="alert alert-warning mb-0 d-flex align-items-center gap-2">
            <i class="bi bi-exclamation-triangle-fill"></i>
            <span>कृपया तुमची अचूक उंची (Height in cm) नमूद करा.</span>
          </div>
        `;
        return;
      }

      let isEligible = true;
      let minHeight = 165;
      let examName = 'पोलीस भरती (Police Bharti)';
      let notes = '';

      if (exam === 'police') {
        examName = 'महाराष्ट्र पोलीस भरती (Police Constable)';
        if (gender === 'male') {
          minHeight = 165;
          notes = 'किमान छाती: न फुगवता 79 सेमी, फुगवून 5 सेमी जास्त आवश्यक.';
        } else {
          minHeight = 158;
          notes = 'महिला उमेदवारांसाठी छातीची अट नसते. वजन किमान 44 कि.ग्रॅ.';
        }
      } else if (exam === 'army') {
        examName = 'भारतीय सैन्य भरती (Agniveer GD / Army)';
        if (gender === 'male') {
          minHeight = 168;
          notes = 'वय: 17.5 ते 21 वर्षे. 1.6 किमी धावणे (5 मिनिट 30 सेकंदात ग्रुप 1).';
        } else {
          minHeight = 162;
          notes = 'महिला लष्कर भरती (Women Military Police) निकष लागू.';
        }
      } else if (exam === 'forest') {
        examName = 'वनरक्षक भरती (Forest Guard Bharti)';
        if (gender === 'male') {
          minHeight = 163;
          notes = 'पुरुष: 30 मिनिटांत 5 किमी धावणे/चालणे.';
        } else {
          minHeight = 150;
          notes = 'महिला: 25 मिनिटांत 3 किमी चालणे/धावणे.';
        }
      } else if (exam === 'msf_srpf') {
        examName = 'SRPF / MSF भरती';
        if (gender === 'male') {
          minHeight = 168;
          notes = 'शारीरिक क्षमता आणि सहनशक्ती चाचणी अत्यंत कडक असते.';
        } else {
          minHeight = 160;
          notes = 'MSF महिला सुरक्षा जवान निकष लागू.';
        }
      }

      if (height < minHeight) {
        isEligible = false;
      }

      resultBox.style.display = 'block';

      if (isEligible) {
        resultBox.innerHTML = `
          <div class="p-3 rounded bg-success bg-opacity-25 border border-success text-white">
            <div class="d-flex align-items-center gap-2 mb-2">
              <i class="bi bi-check-circle-fill text-success fs-4"></i>
              <strong class="text-white fs-5">अभिनंदन! तुम्ही शारीरिकदृष्ट्या पात्र आहात.</strong>
            </div>
            <p class="mb-1 text-light small">
              <strong>कोर्स:</strong> ${examName} | <strong>आवश्यक किमान उंची:</strong> ${minHeight} सेमी (तुमची उंची: ${height} सेमी)
            </p>
            <p class="mb-2 text-warning small">${notes}</p>
            <div class="d-flex flex-wrap gap-2 pt-2 border-top border-white border-opacity-25">
              <a href="#contact" class="btn btn-sm btn-gold">
                <i class="bi bi-person-plus-fill"></i> SBR Academy मध्ये प्रवेश घ्या
              </a>
              <a href="https://wa.me/918275370583?text=Hello%20Anil%20Sir,%20I%20am%20eligible%20for%20${encodeURIComponent(examName)}%20(Height:%20${height}cm).%20Please%20guide%20me%20for%20batch%20admission." target="_blank" class="btn btn-sm btn-outline-light">
                <i class="bi bi-whatsapp"></i> व्हॉट्सॲपवर मार्गदर्शन घ्या
              </a>
            </div>
          </div>
        `;
      } else {
        const diff = (minHeight - height).toFixed(1);
        resultBox.innerHTML = `
          <div class="p-3 rounded bg-danger bg-opacity-25 border border-danger text-white">
            <div class="d-flex align-items-center gap-2 mb-2">
              <i class="bi bi-x-circle-fill text-danger fs-4"></i>
              <strong class="text-white fs-5">उंची निकष अपूर्ण (${diff} सेमी कमी)</strong>
            </div>
            <p class="mb-1 text-light small">
              ${examName} साठी किमान ${minHeight} सेमी उंची आवश्यक आहे. तुमची उंची ${height} सेमी आहे.
            </p>
            <p class="mb-2 text-warning small">
              इतर संरक्षण भरती (उदा. रेल्वे पोलीस, वनविभाग किंवा इतर संवर्ग) च्या पर्यायांसाठी संचालक अनिल बनगर सरांशी संपर्क साधा.
            </p>
            <a href="tel:8275370583" class="btn btn-sm btn-outline-warning">
              <i class="bi bi-telephone-fill"></i> सरांचा विनामूल्य सल्ला घ्या
            </a>
          </div>
        `;
      }
    });
  }

  // 5. Admission Inquiry Form Handler
  const inquiryForm = document.getElementById('academyInquiryForm');
  const inquirySuccess = document.getElementById('inquirySuccessAlert');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('inq-name')?.value.trim();
      const phone = document.getElementById('inq-phone')?.value.trim();
      const course = document.getElementById('inq-course')?.value;
      const city = document.getElementById('inq-city')?.value.trim() || 'Satara';
      const hostel = document.getElementById('inq-hostel')?.checked ? 'होय (Yes)' : 'नाही (No)';
      const message = document.getElementById('inq-message')?.value.trim() || 'प्रवेश प्रक्रियेविषयी माहिती हवी आहे.';

      // Simple mobile phone validation (10 digits)
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone.replace(/\D/g, '').slice(-10))) {
        alert('कृपया वैध 10-अंकी मोबाईल नंबर प्रविष्ट करा.');
        return;
      }

      if (inquirySuccess) {
        inquirySuccess.classList.remove('d-none');
        inquirySuccess.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            <h5 class="alert-heading mb-1"><i class="bi bi-check2-circle"></i> धन्यवाद, ${name}!</h5>
            <p class="mb-2 small">तुमचा प्रवेश अर्ज SBR Academy, Mhasawad कडे नोंदवला गेला आहे. संचालक अनिल बनगर किंवा आमची टीम लवकरच आपल्याशी संपर्क करेल.</p>
            <hr>
            <div class="d-flex flex-wrap gap-2">
              <a href="https://wa.me/918275370583?text=नमस्कार%20अनिल%20सर,%20माझे%20नाव%20${encodeURIComponent(name)}%20(गाव:%20${encodeURIComponent(city)}).%20मी%20${encodeURIComponent(course)}%20प्रवेशासाठी%20अर्ज%20केला%20आहे.%20वसतिगृह%20गरज:%20${encodeURIComponent(hostel)}." target="_blank" class="btn btn-sm btn-success">
                <i class="bi bi-whatsapp"></i> व्हॉट्सॲपवर त्वरित पुष्टी करा
              </a>
              <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-dismiss="alert">बंद करा</button>
            </div>
          </div>
        `;
      }

      inquiryForm.reset();
    });
  }

  // 6. Current Year Auto Update
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 7. Announcement Success & New Batch Popup on Page Load
  const announcementModalEl = document.getElementById('announcementPopupModal');
  if (announcementModalEl && typeof bootstrap !== 'undefined') {
    // Show after small 700ms delay for smooth page entrance
    setTimeout(() => {
      const announcementModal = new bootstrap.Modal(announcementModalEl);
      announcementModal.show();
    }, 700);
  }

  // 8. Mobile, Tablet & iPhone Social Media Fade-In / Fade-Out Toggle
  const floatingToggleBtn = document.getElementById('floatingToggleBtn');
  const floatingActions = document.getElementById('floatingActions');
  const floatingSocialGroup = document.getElementById('floatingSocialGroup');

  if (floatingToggleBtn && floatingActions) {
    // Click toggle: first click = fade-in, second click = fade-out
    floatingToggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      floatingActions.classList.toggle('active');
    });

    // Close / fade-out when clicking outside anywhere on mobile screen
    document.addEventListener('click', function (e) {
      if (!floatingActions.contains(e.target)) {
        floatingActions.classList.remove('active');
      }
    });

    // Close when tapping any social media link
    if (floatingSocialGroup) {
      const socialLinks = floatingSocialGroup.querySelectorAll('a');
      socialLinks.forEach(link => {
        link.addEventListener('click', () => {
          setTimeout(() => {
            floatingActions.classList.remove('active');
          }, 300);
        });
      });
    }
  }
});
