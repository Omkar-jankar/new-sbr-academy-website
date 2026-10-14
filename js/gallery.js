/**
 * =========================================================================
 * SBR Academy, Mhasawad - फोटो गॅलरी (Academy Photo Gallery Data)
 * =========================================================================
 * 
 * GitHub वरून नवीन गॅलरी फोटो जोडणे किंवा बदलणे अत्यंत सोपे आहे:
 * १. फोटो `assets/images/gallery/` फोल्डरमध्ये टाका.
 * २. खालील `galleryData` ॲरेमध्ये एक नवीन ऑब्जेक्ट जोडा:
 * 
 * {
 *   title: "फोटोचे शीर्षक",
 *   category: "ground", // पर्याय: 'ground' | 'library' | 'hostel' | 'cadets'
 *   image: "assets/images/gallery/photo-name.jpg",
 *   caption: "कॅप्शन / माहिती"
 * }
 * =========================================================================
 */

const galleryData = [
  {
    title: "४०० मीटर ऑलिम्पिक स्टँडर्ड ट्रॅक",
    category: "ground",
    image: "assets/images/gallery/gallery-track-running.jpg",
    caption: "पहाटेच्या ५:३० वाजता सुरू होणारा कसून धावण्याचा सराव आणि स्टॅमिना ट्रेनिंग."
  },
  {
    title: "शारीरिक प्रशिक्षण व अडथळा शर्यत मैदान",
    category: "ground",
    image: "assets/images/gallery/gallery-ground-training.jpg",
    caption: "गोळाफेक, पुल-अप्स बार्स, लांब उडी खड्डा आणि अडथळा चाचणी सुविधा."
  },
  {
    title: "२४ तास सुसज्ज व शांत अभ्यासिका",
    category: "library",
    image: "assets/images/gallery/gallery-library-hall.jpg",
    caption: "हजारो संदर्भ पुस्तके, रोजची वर्तमानपत्रे व एकाग्रतेने अभ्यास करणारे विद्यार्थी."
  },
  {
    title: "स्वच्छ व सुरक्षित निवासी वसतिगृह आणि मेस",
    category: "hostel",
    image: "assets/images/gallery/gallery-hostel-rooms.jpg",
    caption: "कॅम्पसमध्येच सुरक्षित खोल्या, वैयक्तिक लॉकर आणि पौष्टिक सकस आहार व्यवस्था."
  },
  {
    title: "महाराष्ट्र पोलीस दलात निवड झालेले शिलेदार",
    category: "cadets",
    image: "assets/images/gallery/gallery-police-cadet.jpg",
    caption: "कठोर परिश्रम आणि मार्गदर्शनाच्या जोरावर खाकी वर्दी परिधान केलेले विद्यार्थी."
  },
  {
    title: "भारतीय सैन्यदलातील अग्निवीर जवान",
    category: "cadets",
    image: "assets/images/gallery/gallery-army-cadet.jpg",
    caption: "देशसेवेसाठी सज्ज — भारतीय लष्कर भरतीत पहिल्याच प्रयत्नात निवड."
  }
];

// Function to render gallery items
function renderGallery(filterCategory = 'all') {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  const filteredItems = filterCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === filterCategory);

  container.innerHTML = filteredItems.map((item, index) => {
    return `
      <div class="col-sm-6 col-md-4">
        <div class="gallery-card" onclick="openGalleryModal(${index})">
          <div class="gallery-img-wrap">
            <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='assets/images/academy/hero-academy.jpg';">
            <div class="gallery-overlay">
              <span class="gallery-zoom-btn">
                <i class="bi bi-arrows-fullscreen"></i>
              </span>
              <div class="gallery-info-peek">
                <h6 class="mb-0 text-white fw-bold">${item.title}</h6>
                <small class="text-gold">${item.caption}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Open Gallery Lightbox Modal
function openGalleryModal(index) {
  const item = galleryData[index];
  if (!item) return;

  const modalImg = document.getElementById('galleryModalImg');
  const modalTitle = document.getElementById('galleryModalTitle');
  const modalCaption = document.getElementById('galleryModalCaption');

  if (modalImg) modalImg.src = item.image;
  if (modalTitle) modalTitle.textContent = item.title;
  if (modalCaption) modalCaption.textContent = item.caption;

  const modalEl = document.getElementById('galleryDetailModal');
  if (modalEl && typeof bootstrap !== 'undefined') {
    const bsModal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    bsModal.show();
  }
}

// Initialize gallery and filter listeners
document.addEventListener('DOMContentLoaded', () => {
  renderGallery('all');

  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const category = this.getAttribute('data-filter') || 'all';
      renderGallery(category);
    });
  });
});
