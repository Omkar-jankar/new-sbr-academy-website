# SBR Academy, Mhasawad (एसबीआर अकॅडमी, म्हसवड)

**महाराष्ट्र पोलीस भरती व भारतीय सैन्यदल (Army Agniveer) पूर्व प्रशिक्षण संस्था**  
*संस्थापक व संचालक:* **अनिल बनगर (Anil Bangar)**  
*पत्ता:* म्हसवड, तालुका - माण, जिल्हा - सातारा, महाराष्ट्र - ४१५५०९  
*संपर्क:* +91 82753 70583  

---

## 📁 फोल्डर रचना (Folder Structure)

```
SBR-Academy/
├── index.html                   # मुख्य वेबसाइट वेबपेज (HTML5 + Bootstrap 5)
├── README.md                    # मार्गदर्शक पुस्तिका (Guide)
├── css/
│   └── style.css                # संपूर्ण डिझाइन व स्टाइलिंग (CSS3)
├── js/
│   ├── script.js                # मुख्य परस्परसंवादी फीचर्स (Smooth scroll, counters, form, calculator)
│   ├── students.js              # यशस्वी विद्यार्थ्यांचा डेटा (Selected Cadets)
│   ├── teachers.js              # अनुभवी शिक्षकांचा डेटा (Faculty)
│   └── gallery.js               # फोटो गॅलरी डेटा (Photo Gallery)
└── assets/images/
    ├── academy/                 # अकॅडमी ग्राउंड, लायब्ररी, हॉस्टेल फोटो
    │   ├── hero-academy.jpg
    │   ├── training-ground.jpg
    │   ├── library.jpg
    │   └── hostel.jpg
    ├── owner/                   # संचालक अनिल बनगर सरांचा फोटो
    │   └── anil-bangar.jpg
    ├── students/                # यशस्वी विद्यार्थ्यांचे फोटो
    │   ├── student-police-male.jpg
    │   ├── student-army-agniveer.jpg
    │   └── ...
    ├── teachers/                # सर्व शिक्षकांचे फोटो
    │   ├── anil-bangar.jpg
    │   ├── subedar-patil.jpg
    │   ├── rahul-sir-maths.jpg
    │   └── ...
    └── gallery/                 # अकॅडमी गॅलरी फोटो
        ├── gallery-track-running.jpg
        ├── gallery-ground-training.jpg
        └── ...
```

---

## 🛠️ GitHub वरून वेबसाइट अपडेट कशी करावी? (How to Update on GitHub)

कोणतेही कोडिंग ज्ञान नसताना तुम्ही GitHub वरून थेट सर्व माहिती व फोटो बदलू शकता:

### १. संचालक फोटो बदलणे (Update Owner Photo)
- `assets/images/owner/` फोल्डरमध्ये जा.
- नवीन फोटोला नाव द्या: **`anil-bangar.jpg`** आणि तो अपलोड करा (Replace file).
- वेबसाइटवर आपोआप नवीन फोटो दिसेल.

### २. अकॅडमीचे फोटो बदलणे (Update Academy Photos)
- `assets/images/academy/` फोल्डरमध्ये जा:
  * मुख्य हिरो फोटो: `hero-academy.jpg`
  * ग्राउंड फोटो: `training-ground.jpg`
  * लायब्ररी फोटो: `library.jpg`
  * हॉस्टेल फोटो: `hostel.jpg`
- वरील नावाने नवीन फोटो अपलोड करा.

### ३. नवीन यशस्वी विद्यार्थी जोडणे (Add New Selected Student)
1. विद्यार्थ्याचा पासपोर्ट किंवा वर्दीतील फोटो `assets/images/students/` मध्ये अपलोड करा (उदा. `sachin.jpg`).
2. `js/students.js` फाईल GitHub वर Edit (पेन्सिल आयकॉन) करा आणि `studentsData` मध्ये खालीलप्रमाणे नवीन एन्ट्री जोडा:
```javascript
{
  name: "सचिन संभाजी माने",
  photo: "assets/images/students/sachin.jpg",
  selection: "महाराष्ट्र पोलीस शिपाई (मुंबई पोलीस)",
  category: "police", // पर्याय: 'police' | 'army' | 'srpf_msf' | 'forest'
  year: "2024",
  achievement: "ग्राउंड ५०/५० गुण • गुणवत्ता यादीत प्रथम"
}
```
3. Commit Changes वर क्लिक करा. विद्यार्थी थेट वेबसाइटवर झळकेल!

### ४. शिक्षक माहिती जोडणे किंवा बदलणे (Add/Edit Teachers)
1. शिक्षकांचा फोटो `assets/images/teachers/` मध्ये अपलोड करा.
2. `js/teachers.js` फाईल Edit करा आणि खालीलप्रमाणे माहिती टाका:
```javascript
{
  name: "प्रा. राहुल जाधव",
  subject: "अंकगणित व बुद्धिमत्ता (Maths & Reasoning)",
  photo: "assets/images/teachers/rahul-sir.jpg",
  experience: "८+ वर्षे अनुभव",
  description: "कठीण गणिते शॉर्टकट ट्रिक्सने सोडवण्याची अचूक पद्धत."
}
```

### ५. फोटो गॅलरी मध्ये नवीन फोटो जोडणे (Add Gallery Photos)
1. फोटो `assets/images/gallery/` मध्ये अपलोड करा.
2. `js/gallery.js` फाईल Edit करून खालीलप्रमाणे एन्ट्री जोडा:
```javascript
{
  title: "४०० मीटर धावण्याचा सराव",
  category: "ground", // पर्याय: 'ground' | 'library' | 'hostel' | 'cadets'
  image: "assets/images/gallery/new-photo.jpg",
  caption: "पहाटेच्या ५:३० वाजता सुरू होणारा कसून धावण्याचा सराव."
}
```

### ६. मोबाईल नंबर किंवा पत्ता बदलणे (Update Contact Info)
- `index.html` मध्ये जाऊन जुना नंबर `8275370583` शोधून नवीन नंबर टाका.

---

## ⚡ तांत्रिक वैशिष्ट्ये (Technical Highlights)
- **वापरलेली तंत्रज्ञाने**: HTML5 + CSS3 + Bootstrap 5.3 + Vanilla JavaScript.
- कोणतीही बाह्य लायब्ररी किंवा बॅकएंड (PHP/Node/Python) ची गरज नाही.
- GitHub Pages, Netlify, Vercel किंवा कोणत्याही cPanel होस्टिंगवर एका क्लिकवर चालू होते.
- संपूर्णपणे मोबाईल, टॅबलेट, लॅपटॉप आणि डेस्कटॉप फ्रेंडली रिस्पॉन्सिव्ह डिझाइन.
