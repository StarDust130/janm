export type Language =
  | "en"
  | "hi"
  | "pa"
  | "bn"
  | "te"
  | "mr"
  | "ta"
  | "ur"
  | "gu"
  | "kn"
  | "or"
  | "ml";

export interface Translation {
  badge: string;
  titleMain: string;
  titleSub: string;
  desc: string;
  btnSpeak: string;
  btnWatch: string;
  cardApproved: string;
  cardCredit: string;
  nav: {
    schemes: string;
    howItWorks: string;
    stories: string;
    login: string;
    lightMode: string;
    darkMode: string;
  };
  schemes: {
    title: string;
    sub: string;
    btnCheck: string;
    items: { title: string; amt: string; tag: string }[];
  };
  steps: {
    title: string;
    sub: string;
    items: { title: string; desc: string }[];
  };
  stats: {
    lightning: string;
    secure: string;
    success: string;
  };
  stories: {
    title: string;
    items: { name: string; loc: string; msg: string }[];
  };
  footer: {
    tagline: string;
    platform: string;
    legal: string;
    privacy: string;
    terms: string;
  };
  impact?: {
    citizens: string;
    money: string;
    languages: string;
  };
}

// --- 1. English ---
const en: Translation = {
  badge: "AI Active in 12 States",
  titleMain: "Claim Your Rights.",
  titleSub: "Directly in Bank.",
  desc: "Don't fill long forms. Just speak in your language. We find the 'Sarkari Yojana' and help you apply in 2 minutes.",
  btnSpeak: "Speak Now",
  btnWatch: "Watch Demo",
  cardApproved: "Approved",
  cardCredit: "Credited to Bank",
  nav: {
    schemes: "Schemes",
    howItWorks: "How it Works",
    stories: "Stories",
    login: "Login",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
  },
  schemes: {
    title: "Top Government Schemes",
    sub: "We help you apply for 2,000+ schemes instantly.",
    btnCheck: "Check Eligibility",
    items: [
      { title: "PM Kisan Samman", amt: "₹6,000 / year", tag: "Farmers" },
      { title: "PM Awas Yojana", amt: "₹1.2 Lakh Subsidy", tag: "Housing" },
      { title: "Ayushman Bharat", amt: "₹5 Lakh Insurance", tag: "Health" },
    ],
  },
  steps: {
    title: "Get Money in 3 Steps",
    sub: "Simple, fast, and secure",
    items: [
      { title: "Speak.", desc: "Press the button and tell us your problem." },
      { title: "Match.", desc: "AI checks 2,000+ schemes for your name." },
      { title: "Claim.", desc: "Get the money directly in your bank." },
    ],
  },
  stats: {
    lightning: "Lightning Fast",
    secure: "Secure",
    success: "Success Rate",
  },
  stories: {
    title: "Real Stories (Sachhi Kahaniyan) ❤️",
    items: [
      {
        name: "Lakshmi Devi",
        loc: "Tamil Nadu",
        msg: "I got free gas connection (Ujjwala). This app helped me.",
      },
      {
        name: "Rajesh Kumar",
        loc: "Bihar",
        msg: "Got ₹2000 in my account for PM Kisan. Works in Hindi.",
      },
      {
        name: "Suresh Bhai",
        loc: "Gujarat",
        msg: "Best app for farmers. No need to pay bribe.",
      },
    ],
  },
  footer: {
    tagline:
      "Building the digital bridge between Bharat's citizens and their rights.",
    platform: "Platform",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  },
  impact: {
    citizens: "Citizens",
    money: "Money Unlocked",
    languages: "Languages",
  },
};

// --- 2. Hindi (हिंदी) ---
const hi: Translation = {
  badge: "12 राज्यों में सक्रिय",
  titleMain: "अपना हक मांगें।",
  titleSub: "सीधे बैंक खाते में।",
  desc: "लंबे फॉर्म न भरें। बस अपनी भाषा में बोलें। हम 'सरकारी योजना' ढूंढेंगे और 2 मिनट में आवेदन करने में मदद करेंगे।",
  btnSpeak: "अभी बोलें",
  btnWatch: "डेमो देखें",
  cardApproved: "स्वीकृत",
  cardCredit: "बैंक में जमा",
  nav: {
    schemes: "योजनाएं",
    howItWorks: "कैसे काम करता है",
    stories: "कहानियां",
    login: "लॉगिन",
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
  },
  schemes: {
    title: "प्रमुख सरकारी योजनाएं",
    sub: "हम आपको 2,000+ योजनाओं के लिए तुरंत आवेदन करने में मदद करते हैं।",
    btnCheck: "पात्रता जांचें",
    items: [
      { title: "पीएम किसान सम्मान", amt: "₹6,000 / वर्ष", tag: "किसान" },
      { title: "पीएम आवास योजना", amt: "₹1.2 लाख सब्सिडी", tag: "आवास" },
      { title: "आयुष्मान भारत", amt: "₹5 लाख बीमा", tag: "स्वास्थ्य" },
    ],
  },
  steps: {
    title: "3 चरणों में पैसा पाएं",
    sub: "सरल, तेज और सुरक्षित",
    items: [
      { title: "बोलें।", desc: "बटन दबाएं और हमें अपनी समस्या बताएं।" },
      {
        title: "मैच।",
        desc: "AI आपके नाम के लिए 2,000+ योजनाओं की जांच करता है।",
      },
      { title: "दावा करें।", desc: "पैसा सीधे अपने बैंक में पाएं।" },
    ],
  },
  stats: { lightning: "बिजली की गति", secure: "सुरक्षित", success: "सफलता दर" },
  stories: {
    title: "सच्ची कहानियां (Real Stories) ❤️",
    items: [
      {
        name: "लक्ष्मी देवी",
        loc: "तमिलनाडु",
        msg: "मुझे मुफ्त गैस कनेक्शन मिला। इस ऐप ने मेरी मदद की।",
      },
      {
        name: "राजेश कुमार",
        loc: "बिहार",
        msg: "पीएम किसान के लिए ₹2000 मिले। हिंदी में काम करता है।",
      },
      {
        name: "सुरेश भाई",
        loc: "गुजरात",
        msg: "किसानों के लिए सबसे अच्छा ऐप। रिश्वत देने की जरूरत नहीं।",
      },
    ],
  },
  footer: {
    tagline: "भारत के नागरिकों और उनके अधिकारों के बीच डिजिटल सेतु।",
    platform: "प्लेटफ़ॉर्म",
    legal: "कानूनी",
    privacy: "गोपनीयता नीति",
    terms: "उपयोग की शर्तें",
  },
  impact: { citizens: "नागरिक", money: "राशि प्राप्त की", languages: "भाषाएं" },
};

// --- 3. Punjabi (ਪੰਜਾਬੀ) ---
const pa: Translation = {
  badge: "12 ਰਾਜਾਂ ਵਿੱਚ ਸਰਗਰਮ",
  titleMain: "ਆਪਣਾ ਹੱਕ ਮੰਗੋ।",
  titleSub: "ਸਿੱਧੇ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ।",
  desc: "ਲੰਬੇ ਫਾਰਮ ਨਾ ਭਰੋ। ਬਸ ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਬੋਲੋ। ਅਸੀਂ ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਲੱਭਾਂਗੇ।",
  btnSpeak: "ਹੁਣੇ ਬੋਲੋ",
  btnWatch: "ਡੈਮੋ ਦੇਖੋ",
  cardApproved: "ਮਨਜ਼ੂਰ",
  cardCredit: "ਬੈਂਕ ਵਿੱਚ ਜਮ੍ਹਾਂ",
  nav: {
    schemes: "ਸਕੀਮਾਂ",
    howItWorks: "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
    stories: "ਕਹਾਣੀਆਂ",
    login: "ਲੌਗਇਨ",
    lightMode: "ਲਾਈਟ ਮੋਡ",
    darkMode: "ਡਾਰਕ ਮੋਡ",
  },
  schemes: {
    title: "ਪ੍ਰਮੁੱਖ ਸਰਕਾਰੀ ਸਕੀਮਾਂ",
    sub: "ਅਸੀਂ 2,000+ ਸਕੀਮਾਂ ਲਈ ਅਪਲਾਈ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ।",
    btnCheck: "ਯੋਗਤਾ ਚੈੱਕ ਕਰੋ",
    items: [
      { title: "ਪੀਐਮ ਕਿਸਾਨ ਸਨਮਾਨ", amt: "₹6,000 / ਸਾਲ", tag: "ਕਿਸਾਨ" },
      { title: "ਪੀਐਮ ਆਵਾਸ ਯੋਜਨਾ", amt: "₹1.2 ਲੱਖ ਸਬਸਿਡੀ", tag: "ਹਾਊਸਿੰਗ" },
      { title: "ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ", amt: "₹5 ਲੱਖ ਬੀਮਾ", tag: "ਸਿਹਤ" },
    ],
  },
  steps: {
    title: "3 ਕਦਮਾਂ ਵਿੱਚ ਪੈਸੇ ਪਾਓ",
    sub: "ਸਰਲ, ਤੇਜ਼ ਅਤੇ ਸੁਰੱਖਿਅਤ",
    items: [
      { title: "ਬੋਲੋ।", desc: "ਬਟਨ ਦਬਾਓ ਅਤੇ ਆਪਣੀ ਸਮੱਸਿਆ ਦੱਸੋ।" },
      { title: "ਮੈਚ।", desc: "AI ਤੁਹਾਡੇ ਲਈ 2,000+ ਸਕੀਮਾਂ ਲੱਭਦਾ ਹੈ।" },
      { title: "ਦਾਅਵਾ ਕਰੋ।", desc: "ਪੈਸੇ ਸਿੱਧੇ ਬੈਂਕ ਵਿੱਚ ਪਾਓ।" },
    ],
  },
  stats: { lightning: "ਬਹੁਤ ਤੇਜ਼", secure: "ਸੁਰੱਖਿਅਤ", success: "ਸਫਲਤਾ ਦਰ" },
  stories: {
    title: "ਸੱਚੀਆਂ ਕਹਾਣੀਆਂ ❤️",
    items: [
      {
        name: "ਲਕਸ਼ਮੀ ਦੇਵੀ",
        loc: "ਤਾਮਿਲਨਾਡੂ",
        msg: "ਮੈਨੂੰ ਮੁਫਤ ਗੈਸ ਕੁਨੈਕਸ਼ਨ ਮਿਲਿਆ। ਇਸ ਐਪ ਨੇ ਮਦਦ ਕੀਤੀ।",
      },
      {
        name: "ਰਾਜੇਸ਼ ਕੁਮਾਰ",
        loc: "ਬਿਹਾਰ",
        msg: "ਪੀਐਮ ਕਿਸਾਨ ਦੇ ₹2000 ਮਿਲੇ। ਬਹੁਤ ਵਧੀਆ ਐਪ।",
      },
      {
        name: "ਸੁਰੇਸ਼ ਭਾਈ",
        loc: "ਗੁਜਰਾਤ",
        msg: "ਕਿਸਾਨਾਂ ਲਈ ਵਧੀਆ। ਕੋਈ ਰਿਸ਼ਵਤ ਨਹੀਂ।",
      },
    ],
  },
  footer: {
    tagline: "ਭਾਰਤ ਦੇ ਨਾਗਰਿਕਾਂ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਅਧਿਕਾਰਾਂ ਲਈ ਡਿਜੀਟਲ ਪੁਲ।",
    platform: "ਪਲੇਟਫਾਰਮ",
    legal: "ਕਾਨੂੰਨੀ",
    privacy: "ਪਰਦੇਦਾਰੀ ਨੀਤੀ",
    terms: "ਵਰਤੋਂ ਦੀਆਂ ਸ਼ਰਤਾਂ",
  },
  impact: {
    citizens: "ਨਾਗਰਿਕ",
    money: "ਪੈਸੇ ਪ੍ਰਾਪਤ ਕੀਤੇ",
    languages: "ਭਾਸ਼ਾਵਾਂ",
  },
};

// --- 4. Bengali (বাংলা) ---
const bn: Translation = {
  badge: "12টি রাজ্যে সক্রিয়",
  titleMain: "আপনার অধিকার দাবি করুন।",
  titleSub: "সরাসরি ব্যাংকে।",
  desc: "দীর্ঘ ফর্ম পূরণ করবেন না। শুধু আপনার ভাষায় কথা বলুন। আমরা সরকারি যোজনা খুঁজে বের করব।",
  btnSpeak: "এখনই বলুন",
  btnWatch: "ডেমো দেখুন",
  cardApproved: "অনুমোদিত",
  cardCredit: "ব্যাংকে জমা",
  nav: {
    schemes: "প্রকল্প",
    howItWorks: "কিভাবে কাজ করে",
    stories: "গল্প",
    login: "লগইন",
    lightMode: "লাইট মোড",
    darkMode: "ডার্ক মোড",
  },
  schemes: {
    title: "শীর্ষ সরকারি প্রকল্প",
    sub: "আমরা 2,000+ প্রকল্পে আবেদন করতে সাহায্য করি।",
    btnCheck: "যোগ্যতা যাচাই করুন",
    items: [
      { title: "পিএম কিষাণ সম্মান", amt: "₹6,000 / বছর", tag: "কৃষক" },
      { title: "পিএম আবাস যোজনা", amt: "₹1.2 লাখ ভর্তুকি", tag: "আবাসন" },
      { title: "আয়ুষ্মান ভারত", amt: "₹5 লাখ বিমা", tag: "স্বাস্থ্য" },
    ],
  },
  steps: {
    title: "3 ধাপে টাকা পান",
    sub: "সহজ, দ্রুত এবং নিরাপদ",
    items: [
      { title: "বলুন।", desc: "বাটন টিপুন এবং আপনার সমস্যা বলুন।" },
      { title: "ম্যাচ।", desc: "AI আপনার জন্য 2,000+ প্রকল্প খুঁজবে।" },
      { title: "দাবি করুন।", desc: "সরাসরি ব্যাংকে টাকা পান।" },
    ],
  },
  stats: { lightning: "খুব দ্রুত", secure: "নিরাপদ", success: "সাফল্যের হার" },
  stories: {
    title: "বাস্তব গল্প ❤️",
    items: [
      {
        name: "লক্ষ্মী দেবী",
        loc: "তামিলনাড়ু",
        msg: "আমি বিনামূল্যে গ্যাস সংযোগ পেয়েছি। এই অ্যাপ সাহায্য করেছে।",
      },
      {
        name: "রাজেশ কুমার",
        loc: "বিহার",
        msg: "পিএম কিষাণ থেকে ₹2000 টাকা পেয়েছি।",
      },
      {
        name: "সুরেশ ভাই",
        loc: "গুজরাট",
        msg: "কৃষকদের জন্য সেরা অ্যাপ। ঘুষ দেওয়ার দরকার নেই।",
      },
    ],
  },
  footer: {
    tagline: "ভারতের নাগরিকদের অধিকারের ডিজিটাল সেতু।",
    platform: "প্ল্যাটফর্ম",
    legal: "আইনি",
    privacy: "গোপনীয়তা নীতি",
    terms: "ব্যবহারের শর্তাবলী",
  },
  impact: { citizens: "নাগরিক", money: "টাকা আনলক", languages: "ভাষা" },
};

// --- 5. Telugu (తెలుగు) ---
const te: Translation = {
  badge: "12 రాష్ట్రాల్లో యాక్టివ్",
  titleMain: "మీ హక్కును పొందండి.",
  titleSub: "నేరుగా బ్యాంకులో.",
  desc: "పొడవైన ఫారమ్‌లు నింపవద్దు. మీ భాషలో మాట్లాడండి. మేము ప్రభుత్వ పథకాలను కనుగొంటాము.",
  btnSpeak: "మాట్లాడండి",
  btnWatch: "డెమో చూడండి",
  cardApproved: "ఆమోదించబడింది",
  cardCredit: "బ్యాంకులో జమ",
  nav: {
    schemes: "పథకాలు",
    howItWorks: "ఎలా పనిచేస్తుంది",
    stories: "కథలు",
    login: "లాగిన్",
    lightMode: "లైట్ మోడ్",
    darkMode: "డార్క్ మోడ్",
  },
  schemes: {
    title: "ప్రభుత్వ పథకాలు",
    sub: "మేము 2,000+ పథకాలకు దరఖాస్తు చేయడంలో సహాయపడతాము.",
    btnCheck: "అర్హతను తనిఖీ చేయండి",
    items: [
      { title: "పీఎం కిసాన్", amt: "₹6,000 / ఏడాది", tag: "రైతులు" },
      {
        title: "పీఎం ఆవాస్ యోజన",
        amt: "₹1.2 లక్షల రాయితీ",
        tag: "గృహనిర్మాణం",
      },
      { title: "ఆయుష్మాన్ భారత్", amt: "₹5 లక్షల బీమా", tag: "ఆరోగ్యం" },
    ],
  },
  steps: {
    title: "3 దశల్లో డబ్బు పొందండి",
    sub: "సులభం, వేగవంతం",
    items: [
      { title: "మాట్లాడండి.", desc: "మీ సమస్యను చెప్పండి." },
      { title: "సరిపోల్చండి.", desc: "AI మీ కోసం 2,000+ పథకాలను వెతుకుతుంది." },
      { title: "పొందండి.", desc: "డబ్బు నేరుగా బ్యాంకులో పొందండి." },
    ],
  },
  stats: { lightning: "వేగవంతం", secure: "సురక్షితం", success: "విజయ శాతం" },
  stories: {
    title: "విజయ గాथలు ❤️",
    items: [
      {
        name: "లక్ష్మీ దేవి",
        loc: "తమిళనాడు",
        msg: "నాకు ఉచిత గ్యాస్ కనెక్షన్ లభించింది. ఈ యాప్ సహాయపడింది.",
      },
      {
        name: "రాజేష్ కుమార్",
        loc: "బీహార్",
        msg: "పీఎం కిసాన్ ₹2000 వచ్చాయి.",
      },
      {
        name: "సురేష్ భాయ్",
        loc: "గుజరాత్",
        msg: "రైతులకు ఉత్తమ యాప్. లంచం అవసరం లేదు.",
      },
    ],
  },
  footer: {
    tagline: "భారత పౌరులకు డిజిటల్ వారధి.",
    platform: "ప్లాట్‌ఫాం",
    legal: "చట్టపరమైన",
    privacy: "గోప్యతా విధానం",
    terms: "నిబంధనలు",
  },
  impact: { citizens: "పౌరులు", money: "డబ్బు పొందారు", languages: "భాషలు" },
};

// --- 6. Tamil (தமிழ்) ---
const ta: Translation = {
  badge: "12 மாநிலங்களில் செயல்பாடு",
  titleMain: "உரிமையை கோருங்கள்.",
  titleSub: "நேரடியாக வங்கியில்.",
  desc: "நீண்ட படிவங்கள் வேண்டாம். உங்கள் மொழியில் பேசுங்கள். நாங்கள் திட்டங்களை கண்டுபிடித்து உதவுகிறோம்.",
  btnSpeak: "பேசுங்கள்",
  btnWatch: "வீடியோ பார்",
  cardApproved: "ஏற்கப்பட்டது",
  cardCredit: "வங்கி வரவு",
  nav: {
    schemes: "திட்டங்கள்",
    howItWorks: "செயல்முறை",
    stories: "கதைகள்",
    login: "உள்நுழைய",
    lightMode: "லைட் பயன்முறை",
    darkMode: "டார்க் பயன்முறை",
  },
  schemes: {
    title: "அரசு திட்டங்கள்",
    sub: "2,000+ திட்டங்களுக்கு விண்ணப்பிக்க உதவுகிறோம்.",
    btnCheck: "தகுதியை சரிபார்க்கவும்",
    items: [
      { title: "பிஎம் கிசான்", amt: "₹6,000 / ஆண்டு", tag: "விவசாயிகள்" },
      { title: "பிஎம் அவாஸ்", amt: "₹1.2 லட்சம் மானியம்", tag: "வீடு" },
      { title: "ஆயுஷ்மான் பாரத்", amt: "₹5 லட்சம் காப்பீடு", tag: "சுகாதாரம்" },
    ],
  },
  steps: {
    title: "3 படிகளில் பணம்",
    sub: "எளிதான மற்றும் பாதுகாப்பான",
    items: [
      { title: "பேசுங்கள்.", desc: "உங்கள் பிரச்சனையை சொல்லுங்கள்." },
      { title: "தேர்வு.", desc: "AI 2,000+ திட்டங்களை தேடுகிறது." },
      { title: "பெறுங்கள்.", desc: "பணம் நேரடியாக வங்கியில்." },
    ],
  },
  stats: {
    lightning: "மிகவும் வேகமானது",
    secure: "பாதுகாப்பானது",
    success: "வெற்றி விகிதம்",
  },
  stories: {
    title: "உண்மை கதைகள் ❤️",
    items: [
      {
        name: "லட்சுமி தேவி",
        loc: "தமிழ்நாடு",
        msg: "எனக்கு இலவச கேஸ் இணைப்பு கிடைத்தது. இந்த செயலி உதவியது.",
      },
      {
        name: "ராஜேஷ் குமார்",
        loc: "பீகார்",
        msg: "பிஎம் கிசான் ₹2000 கிடைத்தது.",
      },
      {
        name: "சுரேஷ் பாய்",
        loc: "குஜராத்",
        msg: "விவசாயிகளுக்கு சிறந்தது. லஞ்சம் இல்லை.",
      },
    ],
  },
  footer: {
    tagline: "இந்திய குடிமக்களுக்கான டிஜிட்டல் பாலம்.",
    platform: "தளம்",
    legal: "சட்டம்",
    privacy: "தனியுரிமை கொள்கை",
    terms: "விதிமுறைகள்",
  },
  impact: {
    citizens: "குடிமக்கள்",
    money: "பணம் கிடைத்தது",
    languages: "மொழிகள்",
  },
};

// --- 7. Marathi (मराठी) ---
const mr: Translation = {
  badge: "12 राज्यांमध्ये सक्रिय",
  titleMain: "आपला हक्क मागा.",
  titleSub: "थेट बँक खात्यात।",
  desc: "मोठे फॉर्म भरू नका. फक्त आपल्या भाषेत बोला. आम्ही सरकारी योजना शोधून तुम्हाला मदत करू.",
  btnSpeak: "आता बोला",
  btnWatch: "डेमो पहा",
  cardApproved: "मंजूर",
  cardCredit: "बँकेत जमा",
  nav: {
    schemes: "योजना",
    howItWorks: "कसे कार्य करते",
    stories: "कथा",
    login: "लॉगिन",
    lightMode: "लाईट मोड",
    darkMode: "डार्क मोड",
  },
  schemes: {
    title: "शासकीय योजना",
    sub: "आम्ही 2,000+ योजनांसाठी अर्ज करण्यास मदत करतो.",
    btnCheck: "पात्रता तपासा",
    items: [
      { title: "पीएम किसान", amt: "₹6,000 / वर्ष", tag: "शेतकरी" },
      { title: "पीएम आवास", amt: "₹1.2 लाख अनुदान", tag: "घरकुल" },
      { title: "आयुष्यमान भारत", amt: "₹5 लाख विमा", tag: "आरोग्य" },
    ],
  },
  steps: {
    title: "3 चरणांमध्ये पैसे मिळवा",
    sub: "सोपे, जलद आणि सुरक्षित",
    items: [
      { title: "बोला.", desc: "तुमची समस्या सांगा." },
      { title: "शोधा.", desc: "AI 2,000+ योजना शोधते." },
      { title: "मिळवा.", desc: "पैसे थेट बँकेत." },
    ],
  },
  stats: {
    lightning: "अतिशय वेगवान",
    secure: "सुरक्षित",
    success: "यशस्वी दर",
  },
  stories: {
    title: "यशस्वी कथा ❤️",
    items: [
      {
        name: "लक्ष्मी देवी",
        loc: "तामिळनाडू",
        msg: "मला मोफत गॅस मिळाला. या ॲपने मदत केली.",
      },
      { name: "राजेश कुमार", loc: "बिहार", msg: "पीएम किसानचे ₹2000 मिळाले." },
      {
        name: "सुरेश भाई",
        loc: "गुजरात",
        msg: "शेतकऱ्यांसाठी उत्तम. लाच देण्याची गरज नाही.",
      },
    ],
  },
  footer: {
    tagline: "नागरिकांसाठी डिजिटल पूल।",
    platform: "प्लॅटफॉर्म",
    legal: "कायदेशीर",
    privacy: "गोपनीयता धोरण",
    terms: "अटी व शर्ती",
  },
  impact: { citizens: "नागरिक", money: "पैसे मिळाले", languages: "भाषा" },
};

// --- 8. Urdu (اردو) ---
const ur: Translation = {
  badge: "12 ریاستوں میں فعال",
  titleMain: "اپنا حق مانگیں۔",
  titleSub: "براہ راست بینک میں۔",
  desc: "طویل فارم پُر نہ کریں۔ بس اپنی زبان میں بات کریں۔ ہم سرکاری اسکیمیں تلاش کریں گے۔",
  btnSpeak: "ابھی بولیں",
  btnWatch: "ڈیمو دیکھیں",
  cardApproved: "منظور شدہ",
  cardCredit: "بینک میں جمع",
  nav: {
    schemes: "اسکیمیں",
    howItWorks: "طریقہ کار",
    stories: "کہانیاں",
    login: "لاگ ان",
    lightMode: "لائٹ موڈ",
    darkMode: "ڈارک موڈ",
  },
  schemes: {
    title: "سرکاری اسکیمیں",
    sub: "ہم 2,000+ اسکیموں کے لیے درخواست دینے میں مدد کرتے ہیں۔",
    btnCheck: "اہلیت چیک کریں",
    items: [
      { title: "پی ایم کسان", amt: "₹6,000 / سال", tag: "کسان" },
      { title: "پی ایم آواس", amt: "₹1.2 لاکھ سبسڈی", tag: "رہائش" },
      { title: "آیوشمان بھارت", amt: "₹5 لاکھ انشورنس", tag: "صحت" },
    ],
  },
  steps: {
    title: "3 مراحل میں رقم حاصل کریں",
    sub: "آسان، تیز اور محفوظ",
    items: [
      { title: "بولیں۔", desc: "اپنا مسئلہ بتائیں۔" },
      { title: "میچ۔", desc: "AI 2,000+ اسکیمیں تلاش کرتا ہے۔" },
      { title: "کلیم۔", desc: "رقم براہ راست بینک میں حاصل کریں۔" },
    ],
  },
  stats: { lightning: "تیز ترین", secure: "محفوظ", success: "کامیابی کی شرح" },
  stories: {
    title: "حقیقی کہانیاں ❤️",
    items: [
      { name: "لکشمی دیوی", loc: "تمل ناڈو", msg: "مجھے مفت گیس کنکشن ملا۔" },
      { name: "راجیش کمار", loc: "بہار", msg: "پی ایم کسان کی رقم ملی۔" },
      { name: "سریش بھائی", loc: "گجرات", msg: "رشوت دینے کی ضرورت نہیں پڑی۔" },
    ],
  },
  footer: {
    tagline: "شہریوں کے حقوق کے لیے ڈیجیٹل پل۔",
    platform: "پلیٹ فارم",
    legal: "قانونی",
    privacy: "پرائیویسی پالیسی",
    terms: "استعمال کی شرائط",
  },
  impact: { citizens: "شہری", money: "رقم انلاک", languages: "زبانیں" },
};

// --- 9. Gujarati (ગુજરાતી) ---
const gu: Translation = {
  badge: "12 રાજ્યોમાં સક્રિય",
  titleMain: "તમારો હક માંગો.",
  titleSub: "સીધા બેંક ખાતામાં.",
  desc: "લાંબા ફોર્મ ભરશો નહીં. ફક્ત તમારી ભાષામાં બોલો. અમે સરકારી યોજના શોધીશું.",
  btnSpeak: "હવે બોલો",
  btnWatch: "ડેમો જુઓ",
  cardApproved: "મંજૂર",
  cardCredit: "બેંકમાં જમા",
  nav: {
    schemes: "યોજનાઓ",
    howItWorks: "કેવી રીતે કામ કરે છે",
    stories: "વાર્તાઓ",
    login: "લોગિન",
    lightMode: "લાઇટ મોડ",
    darkMode: "ડાર્ક મોડ",
  },
  schemes: {
    title: "ટોચની સરકારી યોજનાઓ",
    sub: "અમે 2,000+ યોજનાઓ માટે અરજી કરવામાં મદદ કરીએ છીએ.",
    btnCheck: "પાત્રતા તપાસો",
    items: [
      { title: "પીએમ કિસાન", amt: "₹6,000 / વર્ષ", tag: "ખેડૂત" },
      { title: "પીએમ આવાસ", amt: "₹1.2 લાખ સબસિડી", tag: "આવાસ" },
      { title: "આયુષ્માન ભારત", amt: "₹5 લાખ વીમો", tag: "આરોગ્ય" },
    ],
  },
  steps: {
    title: "3 સ્ટેપમાં પૈસા મેળવો",
    sub: "સરળ અને ઝડપી",
    items: [
      { title: "બોલો.", desc: "તમારી સમસ્યા જણાવો." },
      { title: "મેચ.", desc: "AI 2,000+ યોજનાઓ શોધે છે." },
      { title: "મેળવો.", desc: "પૈસા સીધા બેંકમાં." },
    ],
  },
  stats: { lightning: "ઝડપી", secure: "સુરક્ષિત", success: "સફળતા દર" },
  stories: {
    title: "સાચી વાર્તાઓ ❤️",
    items: [
      { name: "લક્ષ્મી દેવી", loc: "તમિલનાડુ", msg: "મને મફત ગેસ મળ્યો." },
      { name: "રાજેશ કુમાર", loc: "બિહાર", msg: "પીએમ કિસાન ના પૈસા મળ્યા." },
      { name: "સુરેશ ભાઈ", loc: "ગુજરાત", msg: "ખેડૂતો માટે શ્રેષ્ઠ એપ." },
    ],
  },
  footer: {
    tagline: "નાગરિકો માટે ડિજિટલ સેતુ.",
    platform: "પ્લેટફોર્મ",
    legal: "કાયદાકીય",
    privacy: "ગોપનીયતા નીતિ",
    terms: "શરતો",
  },
  impact: { citizens: "નાગરિકો", money: "પૈસા મળ્યા", languages: "ભાષાઓ" },
};

// --- 10. Kannada (ಕನ್ನಡ) ---
const kn: Translation = {
  badge: "12 ರಾಜ್ಯಗಳಲ್ಲಿ ಸಕ್ರಿಯ",
  titleMain: "ನಿಮ್ಮ ಹಕ್ಕನ್ನು ಪಡೆಯಿರಿ.",
  titleSub: "ನೇರವಾಗಿ ಬ್ಯಾಂಕ್‌ಗೆ.",
  desc: "ದೀರ್ಘ ಫಾರ್ಮ್‌ಗಳನ್ನು ತುಂಬಬೇಡಿ. ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿ. ನಾವು ಯೋಜನೆಗಳನ್ನು ಹುಡುಕುತ್ತೇವೆ.",
  btnSpeak: "ಈಗ ಮಾತನಾಡಿ",
  btnWatch: "ಡೆಮೊ ನೋಡಿ",
  cardApproved: "ಅನುಮೋದಿಸಲಾಗಿದೆ",
  cardCredit: "ಬ್ಯಾಂಕ್ ಜಮೆ",
  nav: {
    schemes: "ಯೋಜನೆಗಳು",
    howItWorks: "ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ",
    stories: "ಕಥೆಗಳು",
    login: "ಲಾಗಿನ್",
    lightMode: "ಲೈಟ್ ಮೋಡ್",
    darkMode: "ಡಾರ್ಕ್ ಮೋಡ್",
  },
  schemes: {
    title: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    sub: "ನಾವು 2,000+ ಯೋಜನೆಗಳಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
    btnCheck: "ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ",
    items: [
      { title: "ಪಿಎಂ ಕಿಸಾನ್", amt: "₹6,000 / ವರ್ಷ", tag: "ರೈತರು" },
      { title: "ಪಿಎಂ ಆವಾಸ್", amt: "₹1.2 ಲಕ್ಷ ಸಬ್ಸಿಡಿ", tag: "ವಸತಿ" },
      { title: "ಆಯುಷ್ಮಾನ್ ಭಾರತ್", amt: "₹5 ಲಕ್ಷ ವಿಮೆ", tag: "ಆರೋಗ್ಯ" },
    ],
  },
  steps: {
    title: "3 ಹಂತಗಳಲ್ಲಿ ಹಣ ಪಡೆಯಿರಿ",
    sub: "ಸರಳ ಮತ್ತು ಸುರಕ್ಷಿತ",
    items: [
      { title: "ಮಾತನಾಡಿ.", desc: "ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಹೇಳಿ." },
      { title: "ಹುಡುಕಿ.", desc: "AI 2,000+ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕುತ್ತದೆ." },
      { title: "ಪಡೆಯಿರಿ.", desc: "ಹಣ ನೇರವಾಗಿ ಬ್ಯಾಂಕ್‌ಗೆ." },
    ],
  },
  stats: { lightning: "ಅತ್ಯಂತ ವೇಗ", secure: "ಸುರಕ್ಷಿತ", success: "ಯಶಸ್ಸಿನ ದರ" },
  stories: {
    title: "ಯಶಸ್ವಿ ಕಥೆಗಳು ❤️",
    items: [
      {
        name: "ಲಕ್ಷ್ಮಿ ದೇವಿ",
        loc: "ತಮಿಳುನಾಡು",
        msg: "ನನಗೆ ಉಚಿತ ಗ್ಯಾಸ್ ಸಿಕ್ಕಿತು.",
      },
      { name: "ರಾಜೇಶ್ ಕುಮಾರ್", loc: "ಬಿಹಾರ", msg: "ಪಿಎಂ ಕಿಸಾನ್ ಹಣ ಸಿಕ್ಕಿತು." },
      { name: "ಸುರೇಶ್ ಭಾಯ್", loc: "ಗುಜರಾತ್", msg: "ರೈತರಿಗೆ ಉತ್ತಮ ಆ್ಯಪ್." },
    ],
  },
  footer: {
    tagline: "ಡಿಜಿಟಲ್ ಸೇತುವೆ.",
    platform: "ವೇದಿಕೆ",
    legal: "ಕಾನೂನು",
    privacy: "ಗೌಪ್ಯತೆ ನೀತಿ",
    terms: "ನಿಯಮಗಳು",
  },
  impact: { citizens: "ನಾಗರಿಕರು", money: "ಹಣ ಅನ್ಲಾಕ್", languages: "ಭಾಷೆಗಳು" },
};

// --- 11. Odia (ଓଡ଼ିଆ) ---
const or: Translation = {
  badge: "12ଟି ରାଜ୍ୟରେ ସକ୍ରିୟ",
  titleMain: "ଆପଣଙ୍କର ଅଧିକାର ପାଆନ୍ତୁ।",
  titleSub: "ସିଧାସଳଖ ବ୍ୟାଙ୍କରେ।",
  desc: "ଲମ୍ବା ଫର୍ମ ପୂରଣ କରନ୍ତୁ ନାହିଁ। କେବଳ ଆପଣଙ୍କ ଭାଷାରେ କୁହନ୍ତୁ। ଆମେ ଯୋଜନା ଖୋଜିବୁ।",
  btnSpeak: "ବର୍ତ୍ତମାନ କୁହନ୍ତୁ",
  btnWatch: "ଡେମୋ ଦେଖନ୍ତୁ",
  cardApproved: "ଅନୁମୋଦିତ",
  cardCredit: "ବ୍ୟାଙ୍କରେ ଜମା",
  nav: {
    schemes: "ଯୋଜନା",
    howItWorks: "କିପରି କାମ କରେ",
    stories: "କାହାଣୀ",
    login: "ଲଗଇନ୍",
    lightMode: "ଲାଇଟ୍ ମୋଡ୍",
    darkMode: "ଡାର୍କ ମୋଡ୍",
  },
  schemes: {
    title: "ସରକାରୀ ଯୋଜନା",
    sub: "ଆମେ 2,000+ ଯୋଜନା ପାଇଁ ଆବେଦନ କରିବାରେ ସାହାଯ୍ୟ କରୁ।",
    btnCheck: "ଯୋଗ୍ୟତା ଯାଞ୍ଚ କରନ୍ତୁ",
    items: [
      { title: "ପିଏମ କିଷାନ", amt: "₹6,000 / ବର୍ଷ", tag: "କୃଷକ" },
      { title: "ପିଏମ ଆବାସ", amt: "₹1.2 ଲକ୍ଷ ସବସିଡି", tag: "ଗୃହ" },
      { title: "ଆୟୁଷ୍ମାନ ଭାରତ", amt: "₹5 ଲକ୍ଷ ବୀମା", tag: "ସ୍ୱାସ୍ଥ୍ୟ" },
    ],
  },
  steps: {
    title: "3 ଟି ପଦକ୍ଷେପରେ ଟଙ୍କା ପାଆନ୍ତୁ",
    sub: "ସରଳ ଏବଂ ସୁରକ୍ଷିତ",
    items: [
      { title: "କୁହନ୍ତୁ।", desc: "ଆପଣଙ୍କ ସମସ୍ୟା କୁହନ୍ତୁ।" },
      { title: "ଖୋଜନ୍ତୁ।", desc: "AI 2,000+ ଯୋଜନା ଖୋଜିବ।" },
      { title: "ପାଆନ୍ତୁ।", desc: "ସିଧାସଳଖ ବ୍ୟାଙ୍କରେ ଟଙ୍କା।" },
    ],
  },
  stats: { lightning: "ଦ୍ରୁତ", secure: "ସୁରକ୍ଷିତ", success: "ସଫଳତା ହାର" },
  stories: {
    title: "ସତ କାହାଣୀ ❤️",
    items: [
      {
        name: "ଲକ୍ଷ୍ମୀ ଦେବୀ",
        loc: "ତାମିଲନାଡୁ",
        msg: "ମୋତେ ମାଗଣା ଗ୍ୟାସ ମିଳିଲା।",
      },
      { name: "ରାଜେଶ କୁମାର", loc: "ବିହାର", msg: "ପିଏମ କିଷାନ ଟଙ୍କା ମିଳିଲା।" },
      { name: "ସୁରେଶ ଭାଇ", loc: "ଗୁଜୁରାଟ", msg: "କୃଷକଙ୍କ ପାଇଁ ଭଲ ଆପ୍।" },
    ],
  },
  footer: {
    tagline: "ଡିଜିଟାଲ୍ ସେତୁ।",
    platform: "ପ୍ଲାଟଫର୍ମ",
    legal: "ଆଇନଗତ",
    privacy: "ଗୋପନୀୟତା ନୀତି",
    terms: "ସର୍ତ୍ତାବଳୀ",
  },
  impact: { citizens: "ନାଗରିକ", money: "ଟଙ୍କା ମିଳିଲା", languages: "ଭାଷା" },
};

// --- 12. Malayalam (മലയാളം) ---
const ml: Translation = {
  badge: "12 സംസ്ഥാനങ്ങളിൽ സജീവം",
  titleMain: "നിങ്ങളുടെ അവകാശം നേടൂ.",
  titleSub: "നേരിട്ട് ബാങ്കിൽ.",
  desc: "വലിയ ഫോമുകൾ വേണ്ട. നിങ്ങളുടെ ഭാഷയിൽ സംസാരിക്കൂ. ഞങ്ങൾ പദ്ധതികൾ കണ്ടെത്തും.",
  btnSpeak: "സംസാരിക്കൂ",
  btnWatch: "ഡെമോ കാണുക",
  cardApproved: "അംഗീകരിച്ചു",
  cardCredit: "ബാങ്കിൽ ലഭിച്ചു",
  nav: {
    schemes: "പദ്ധതികൾ",
    howItWorks: "എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    stories: "കഥകൾ",
    login: "ലോഗിൻ",
    lightMode: "ലൈറ്റ് മോഡ്",
    darkMode: "ഡാർക്ക് മോഡ്",
  },
  schemes: {
    title: "സർക്കാർ പദ്ധതികൾ",
    sub: "2,000+ പദ്ധതികൾക്കായി അപേക്ഷിക്കാൻ ഞങ്ങൾ സഹായിക്കുന്നു.",
    btnCheck: "യോഗ്യത പരിശോധിക്കൂ",
    items: [
      { title: "പിഎം കിസാൻ", amt: "₹6,000 / വർഷം", tag: "കർഷകർ" },
      { title: "പിഎം ആവാസ്", amt: "₹1.2 ലക്ഷം സബ്‌സിഡി", tag: "വീട്" },
      { title: "ആയുഷ്മാൻ ഭാരത്", amt: "₹5 ലക്ഷം ഇൻഷുറൻസ്", tag: "ആരോഗ്യം" },
    ],
  },
  steps: {
    title: "3 ഘട്ടങ്ങളിലൂടെ പണം നേടൂ",
    sub: "ലളിതം, വേഗത്തിൽ",
    items: [
      { title: "സംസാരിക്കൂ.", desc: "നിങ്ങളുടെ പ്രശ്നം പറയൂ." },
      { title: "കണ്ടെത്തൂ.", desc: "AI 2,000+ പദ്ധതികൾ കണ്ടെത്തുന്നു." },
      { title: "നേടൂ.", desc: "പണം നേരിട്ട് ബാങ്കിൽ." },
    ],
  },
  stats: {
    lightning: "മിന്നൽ വേഗം",
    secure: "സുരക്ഷിതം",
    success: "വിജയ നിരക്ക്",
  },
  stories: {
    title: "യഥാർത്ഥ കഥകൾ ❤️",
    items: [
      {
        name: "ലക്ഷ്മി ദേവി",
        loc: "തമിഴ്നാട്",
        msg: "എനിക്ക് സൗജന്യ ഗ്യാസ് ലഭിച്ചു.",
      },
      { name: "രാജേഷ് കുമാർ", loc: "ബീഹാർ", msg: "പിഎം കിസാൻ പണം ലഭിച്ചു." },
      { name: "സുരേഷ് ഭായ്", loc: "ഗുജറാത്ത്", msg: "കർഷകർക്ക് മികച്ച ആപ്പ്." },
    ],
  },
  footer: {
    tagline: "ഡിജിറ്റൽ പാലം.",
    platform: "പ്ലാറ്റ്‌ഫോം",
    legal: "നിയമപരം",
    privacy: "സ്വകാര്യതാ നയം",
    terms: "നിബന്ധനകൾ",
  },
  impact: { citizens: "പൗരന്മാർ", money: "പണം ലഭിച്ചു", languages: "ഭാഷകൾ" },
};

export const translations: Record<Language, Translation> = {
  en,
  hi,
  pa,
  bn,
  te,
  mr,
  ta,
  ur,
  gu,
  kn,
  or,
  ml,
};
export const getTranslation = (language: Language): Translation => {
  return translations[language];
};
