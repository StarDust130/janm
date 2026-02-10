// lib/schemes-data.ts

export type Scheme = {
  id: string;
  title: string;
  category:
    | "Farmers"
    | "Students"
    | "Women"
    | "Business"
    | "Health"
    | "Housing";
  benefit: string;
  description: string;
  eligibility: string[];
  documents: string[];
  tags: string[];
  color: string;
  image: string; // Added image field
  matchScore?: number;
};

export const SCHEMES_DB: Scheme[] = [
  // --- FARMERS ---
  {
    id: "pm-kisan-2025",
    title: "PM Kisan Samman Nidhi",
    category: "Farmers",
    benefit: "₹6,000 / year",
    description:
      "Direct income support of ₹6,000 per year for all landholding farmers. 19th installment released Feb 2025.",
    eligibility: ["Landholding farmer families", "Own cultivable land"],
    documents: ["Aadhar Card", "Land Ownership Documents", "Bank Account"],
    tags: ["farmer", "agriculture", "money", "income", "kheti"],
    color: "green",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kcc-2025",
    title: "Kisan Credit Card (KCC)",
    category: "Farmers",
    benefit: "Loan @ 4% Interest",
    description:
      "Short-term credit for crops at subsidized interest rates. Limit increased to ₹3 Lakhs.",
    eligibility: ["Farmers", "Sharecroppers", "Tenant Farmers"],
    documents: ["Identity Proof", "Land Records", "Passport Photo"],
    tags: ["loan", "credit", "bank", "debt"],
    color: "green",
    image:
      "https://images.unsplash.com/photo-1595832328406-382502674e44?auto=format&fit=crop&w=800&q=80",
  },

  // --- WOMEN ---
  {
    id: "ladli-behna-mp",
    title: "Ladli Behna Yojana (MP)",
    category: "Women",
    benefit: "₹1,500 / month",
    description:
      "Monthly financial assistance increased to ₹1,500 from Nov 2025 for women in Madhya Pradesh.",
    eligibility: ["MP Resident", "Age 21-60", "Family Income < ₹2.5L"],
    documents: ["Samagra ID", "Aadhar", "Bank Account"],
    tags: ["women", "money", "mp", "state"],
    color: "pink",
    image:
      "https://images.unsplash.com/photo-1606900895393-277d3b0c399b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lakhpati-didi",
    title: "Lakhpati Didi Yojana",
    category: "Women",
    benefit: "Skill Training & Loan",
    description:
      "Training for women in SHGs to earn ₹1 Lakh/year via drone operation, weaving, etc.",
    eligibility: ["Women in Self Help Groups (SHG)"],
    documents: ["SHG Membership", "Aadhar"],
    tags: ["skill", "job", "business", "training"],
    color: "pink",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },

  // --- HOUSING & BUSINESS ---
  {
    id: "pmay-urban-2",
    title: "PM Awas Yojana Urban 2.0",
    category: "Housing",
    benefit: "Interest Subsidy",
    description:
      "Interest subsidy on home loans for middle-class families to build/buy their first pucca house.",
    eligibility: ["First time home buyer", "Income limits apply"],
    documents: ["Income Proof", "Property Papers"],
    tags: ["home", "house", "loan", "flat"],
    color: "orange",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pm-vishwakarma",
    title: "PM Vishwakarma Yojana",
    category: "Business",
    benefit: "₹3 Lakh Loan @ 5%",
    description:
      "Collateral-free credit and toolkit incentive of ₹15,000 for artisans (Carpenters, Tailors, etc.).",
    eligibility: ["Artisans in 18 trades", "Age 18+"],
    documents: ["Aadhar", "Skill Certificate", "Bank Details"],
    tags: ["loan", "business", "tool", "artisan"],
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1599580666014-99a38f657a4e?auto=format&fit=crop&w=800&q=80",
  },

  // --- STUDENTS ---
  {
    id: "vidya-lakshmi",
    title: "PM Vidya Lakshmi",
    category: "Students",
    benefit: "Education Loan",
    description:
      "Single window for students to access education loans and government scholarships.",
    eligibility: ["Student", "Admission Letter"],
    documents: ["ID Proof", "Admission Proof"],
    tags: ["loan", "college", "school", "study"],
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  },

  // --- HEALTH ---
  {
    id: "ayushman-bharat",
    title: "Ayushman Bharat PM-JAY",
    category: "Health",
    benefit: "₹5 Lakh Insurance",
    description:
      "Free health cover for secondary and tertiary care hospitalization. Expanded to Seniors (70+).",
    eligibility: ["Low Income Families", "Seniors 70+"],
    documents: ["Ration Card", "Aadhar"],
    tags: ["medical", "hospital", "doctor", "health"],
    color: "orange",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
];
