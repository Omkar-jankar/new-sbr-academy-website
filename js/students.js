/**
 * =========================================================================
 * SBR Academy, Mhasawad - आमचे यशस्वी विद्यार्थी (Selected Students Data)
 * =========================================================================
 * 
 * GitHub वरून नवीन विद्यार्थी जोडणे किंवा बदलणे अत्यंत सोपे आहे:
 * १. विद्यार्थ्याचा फोटो `assets/images/students/` फोल्डरमध्ये टाका.
 * २. खालील `studentsData` ॲरेमध्ये एक नवीन ओळ जोडा:
 * 
 * {
 *   name: "विद्यार्थ्याचे नाव",
 *   photo: "assets/images/students/photo-name.jpg",
 *   selection: "महाराष्ट्र पोलीस शिपाई (पुणे ग्रामीण)",
 *   category: "police", // पर्याय: 'police' | 'army' | 'srpf_msf' | 'forest'
 *   year: "2024",
 *   achievement: "ग्राउंड ५०/५० गुण | गुणवत्ता यादीत प्रथम"
 * }
 * =========================================================================
 */

const studentsData = [
  {
    name: "सचिन संभाजी माने",
    photo: "assets/images/students/student-police-male.jpg",
    selection: "महाराष्ट्र पोलीस शिपाई (मुंबई पोलीस)",
    category: "police",
    year: "2024",
    achievement: "ग्राउंड ५०/५० गुण • पहिल्याच प्रयत्नात निवड"
  },
  {
    name: "कविता लक्ष्मण शिंदे",
    photo: "assets/images/students/student-police-female.jpg",
    selection: "महाराष्ट्र पोलीस शिपाई (सातारा जिल्हा)",
    category: "police",
    year: "2024",
    achievement: "लेखी ९४ गुण • सातारा जिल्हा गुणवत्ता यादी"
  },
  {
    name: "रोहित तानाजी कुंभार",
    photo: "assets/images/students/student-army-agniveer.jpg",
    selection: "भारतीय सेना - Agniveer GD",
    category: "army",
    year: "2024",
    achievement: "१.६ किमी ५ मि. २० सेकंद (ग्रुप-१)"
  },
  {
    name: "विकास नामदेव पाटील",
    photo: "assets/images/students/student-srpf-male.jpg",
    selection: "SRPF जवान - गट क्र. १ (पुणे)",
    category: "srpf_msf",
    year: "2023",
    achievement: "कठीण ५ किमी रनिंगमध्ये अव्वल क्रमांक"
  },
  {
    name: "पूजा विश्वास कदम",
    photo: "assets/images/students/student-forest-guard.jpg",
    selection: "वनरक्षक (महाराष्ट्र वनविभाग)",
    category: "forest",
    year: "2023",
    achievement: "३ किमी चालणे २४ मिनिटांत पूर्ण"
  },
  {
    name: "अक्षय बाबासाहेब देशमुख",
    photo: "assets/images/students/student-msf-jawan.jpg",
    selection: "MSF सुरक्षा रक्षक (महाराष्ट्र सुरक्षा बल)",
    category: "srpf_msf",
    year: "2023",
    achievement: "शारीरिक चाचणी १००% उत्तीर्ण"
  },
  {
    name: "अमोल विठ्ठल पवार",
    photo: "assets/images/students/student-police-male.jpg",
    selection: "पोलीस चालक शिपाई (ठाणे शहर)",
    category: "police",
    year: "2023",
    achievement: "ड्रायव्हिंग टेस्ट व ग्राउंडमध्ये सर्वोच्च गुण"
  },
  {
    name: "प्रशांत मारुती जाधव",
    photo: "assets/images/students/student-army-agniveer.jpg",
    selection: "भारतीय सेना - Agniveer Technical",
    category: "army",
    year: "2022",
    achievement: "CEE लिखित परीक्षेत उत्कृष्ट रँक"
  }
];

// Function to render students
function renderStudents(filterCategory = 'all') {
  const container = document.getElementById('students-grid');
  if (!container) return;

  const filteredStudents = filterCategory === 'all' 
    ? studentsData 
    : studentsData.filter(student => student.category === filterCategory);

  if (filteredStudents.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="text-muted fs-5">या संवर्गातील विद्यार्थी लवकरच अपडेट केले जातील.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredStudents.map((student, index) => {
    // Badge color based on category
    let badgeClass = 'bg-primary';
    let categoryName = 'पोलीस भरती';
    if (student.category === 'army') {
      badgeClass = 'bg-success';
      categoryName = 'भारतीय सैन्य दल';
    } else if (student.category === 'srpf_msf') {
      badgeClass = 'bg-warning text-dark';
      categoryName = 'SRPF / MSF';
    } else if (student.category === 'forest') {
      badgeClass = 'bg-info text-dark';
      categoryName = 'वनरक्षक';
    }

    return `
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="student-card" data-student-index="${index}" onclick="openStudentModal(${index})">
          <div class="student-photo-wrapper">
            <img src="${student.photo}" alt="${student.name}" class="student-img" loading="lazy" referrerpolicy="no-referrer">
            <span class="student-year-badge"><i class="bi bi-calendar-check me-1"></i>${student.year}</span>
            <span class="student-category-pill ${badgeClass}">${categoryName}</span>
            <div class="student-overlay">
              <span class="btn btn-sm btn-light rounded-pill px-3 py-1 shadow-sm fw-bold">
                <i class="bi bi-zoom-in me-1 text-gold"></i> माहिती पहा
              </span>
            </div>
          </div>
          <div class="student-info">
            <h5 class="student-name">${student.name}</h5>
            <div class="student-post">
              <i class="bi bi-patch-check-fill text-success me-1"></i>${student.selection}
            </div>
            ${student.achievement ? `
              <div class="student-achievement">
                <i class="bi bi-award-fill text-gold me-1"></i>${student.achievement}
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Student Lightbox Modal Handler
function openStudentModal(index) {
  const student = studentsData[index];
  if (!student) return;

  const modalImg = document.getElementById('studentModalImg');
  const modalName = document.getElementById('studentModalName');
  const modalSelection = document.getElementById('studentModalSelection');
  const modalYear = document.getElementById('studentModalYear');
  const modalAchievement = document.getElementById('studentModalAchievement');

  if (modalImg) modalImg.src = student.photo;
  if (modalName) modalName.textContent = student.name;
  if (modalSelection) modalSelection.textContent = student.selection;
  if (modalYear) modalYear.textContent = student.year;
  if (modalAchievement) {
    modalAchievement.textContent = student.achievement || "SBR Academy, Mhasawad";
  }

  const modalEl = document.getElementById('studentDetailModal');
  if (modalEl && typeof bootstrap !== 'undefined') {
    const bsModal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    bsModal.show();
  }
}

// Setup Event Listeners for Filters
document.addEventListener('DOMContentLoaded', () => {
  renderStudents('all');

  const filterButtons = document.querySelectorAll('.student-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const category = this.getAttribute('data-filter') || 'all';
      renderStudents(category);
    });
  });
});
