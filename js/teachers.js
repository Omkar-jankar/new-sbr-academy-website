/**
 * =========================================================================
 * SBR Academy, Mhasawad - आमचे अनुभवी शिक्षक (Faculty & Mentors Data)
 * =========================================================================
 * 
 * GitHub वरून नवीन शिक्षक जोडणे किंवा बदलणे अत्यंत सोपे आहे:
 * १. शिक्षकाचा फोटो `assets/images/teachers/` फोल्डरमध्ये टाका.
 * २. खालील `teachersData` ॲरेमध्ये एक नवीन ऑब्जेक्ट जोडा:
 * 
 * {
 *   name: "शिक्षकांचे नाव",
 *   subject: "विषय (Subject)",
 *   photo: "assets/images/teachers/teacher-photo.jpg",
 *   experience: "१०+ वर्षे अनुभव",
 *   description: "शिक्षकांचे विशेष अध्यापन तंत्र व माहिती..."
 * }
 * =========================================================================
 */

const teachersData = [
  {
    name: "अनिल बनगर (Anil Bangar)",
    subject: "मुख्य शारीरिक संचालक (Physical Master)",
    photo: "assets/images/teachers/anil-bangar.jpg",
    experience: "१०+ वर्षे प्रशिक्षण अनुभव",
    description: "SBR अकॅडमीचे संस्थापक. १६०० मी., १०० मी. स्प्रिंट आणि गोळाफेक तंत्रामध्ये तज्ज्ञ. प्रत्येक विद्यार्थ्याच्या शारीरिक क्षमतेवर बारकाईने लक्ष ठेवून तयारी करून घेतात."
  },
  {
    name: "सुभेदार (निवृत्त) शिवाजी पाटील",
    subject: "सैन्य शिस्त व ड्रिल इन्स्ट्रक्टर (Ex-Army Drill)",
    photo: "assets/images/teachers/subedar-patil.jpg",
    experience: "१७ वर्षे भारतीय सेना सेवा",
    description: "भारतीय सैन्यातील प्रदीर्घ अनुभवानंतर विद्यार्थ्यांना लष्करी शिस्त, अचूक परेड, मानसिक कणखरता आणि बीम-अडथळा शर्यतीचे थेट सैन्यदलाच्या धर्तीवर प्रशिक्षण देतात."
  },
  {
    name: "प्रा. राहुल जाधव",
    subject: "अंकगणित व बुद्धिमत्ता (Maths & Reasoning)",
    photo: "assets/images/teachers/rahul-sir-maths.jpg",
    experience: "८+ वर्षे स्पर्धा परीक्षा अध्यापन",
    description: "कठीण गणिते अवघ्या काही सेकंदात सोडवण्याच्या शॉर्टकट ट्रिक्स आणि लॉजिकल रिझनिंगमध्ये १००% गुण मिळवण्याची अचूक तयारी करून घेतात."
  },
  {
    name: "प्रा. सचिन गायकवाड",
    subject: "मराठी व्याकरण व शब्दसंग्रह (Marathi Grammar)",
    photo: "assets/images/teachers/sachin-sir-marathi.jpg",
    experience: "९+ वर्षे अनुभव",
    description: "पोलीस भरतीतील २५ पैकी २५ गुण मराठी व्याकरणात मिळवून देणारा सखोल सराव. म्हणी, वाक्प्रचार, समास व प्रयोगांवर विशेष भर."
  },
  {
    name: "प्रा. महेश सावंत",
    subject: "सामान्य ज्ञान व चालू घडामोडी (GK & Current Affairs)",
    photo: "assets/images/teachers/mahesh-sir-gk.jpg",
    experience: "७+ वर्षे अध्यापन",
    description: "महाराष्ट्र भूगोल, इतिहास, राज्यघटना आणि चालू घडामोडींच्या रोजच्या प्रश्नपत्रिका व साप्ताहिक चाचण्यांचे परिपूर्ण विश्लेषण."
  }
];

// Function to render teachers dynamically
function renderTeachers() {
  const container = document.getElementById('teachers-grid');
  if (!container) return;

  container.innerHTML = teachersData.map((teacher, index) => {
    return `
      <div class="col-sm-6 col-lg-4">
        <div class="teacher-card">
          <div class="teacher-photo-frame">
            <img src="${teacher.photo}" alt="${teacher.name}" class="teacher-img" loading="lazy" referrerpolicy="no-referrer">
            <span class="teacher-exp-tag">
              <i class="bi bi-award-fill text-gold me-1"></i>${teacher.experience}
            </span>
          </div>
          <div class="teacher-content">
            <h5 class="teacher-name">${teacher.name}</h5>
            <span class="teacher-subject-badge">
              <i class="bi bi-book-half me-1"></i>${teacher.subject}
            </span>
            <p class="teacher-desc">${teacher.description}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Setup Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  renderTeachers();
});
