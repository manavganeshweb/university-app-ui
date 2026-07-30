import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Palette,
  HeartPulse,
  Building2,
  Laptop,
  BookOpen,
  IndianRupee,
  Clock3,
  Target,
  Trophy,
} from "lucide-react";

export const questions = [
  {
    id: "education",
    title: "What are you looking for?",
    description:
      "Choose your education level so we can find suitable programs.",

    icon: GraduationCap,

    options: [
      {
        label: "Undergraduate",
        value: "ug",
        description: "Bachelor degrees after 12th",
        icon: BookOpen,
      },
      {
        label: "Postgraduate",
        value: "pg",
        description: "Master degrees after graduation",
        icon: GraduationCap,
      },
      {
        label: "Diploma",
        value: "diploma",
        description: "Skill-focused short programs",
        icon: Target,
      },
      {
        label: "Certification",
        value: "certificate",
        description: "Professional online courses",
        icon: Trophy,
      },
    ],
  },


  {
    id: "field",
    title: "Which field interests you?",
    description:
      "Select your preferred career domain.",

    icon: BriefcaseBusiness,

    options: [
      {
        label: "Computer Science & IT",
        value: "technology",
        description: "BCA, MCA, AI, Data Science",
        icon: Code2,
      },
      {
        label: "Management",
        value: "management",
        description: "MBA, BBA, Finance",
        icon: Building2,
      },
      {
        label: "Design & Creativity",
        value: "design",
        description: "UI/UX, Fashion, Media",
        icon: Palette,
      },
      {
        label: "Healthcare",
        value: "healthcare",
        description: "Medical & health programs",
        icon: HeartPulse,
      },
    ],
  },


  {
    id: "mode",
    title: "How do you want to study?",
    description:
      "Choose your preferred learning mode.",

    icon: Laptop,

    options: [
      {
        label: "Regular College",
        value: "regular",
        description: "Campus based learning",
        icon: Building2,
      },
      {
        label: "Online",
        value: "online",
        description: "Learn from anywhere",
        icon: Laptop,
      },
      {
        label: "Distance Learning",
        value: "distance",
        description: "Flexible self-paced education",
        icon: BookOpen,
      },
    ],
  },


  {
    id: "budget",
    title: "What is your education budget?",
    description:
      "We will suggest universities according to your budget.",

    icon: IndianRupee,

    options: [
      {
        label: "Below ₹50,000/year",
        value: "low",
        description: "Affordable programs",
        icon: IndianRupee,
      },
      {
        label: "₹50,000 - ₹1,50,000/year",
        value: "medium",
        description: "Popular university range",
        icon: IndianRupee,
      },
      {
        label: "₹1,50,000+/year",
        value: "premium",
        description: "Premium universities",
        icon: Trophy,
      },
    ],
  },


  {
    id: "duration",
    title: "How quickly do you want to complete?",
    description:
      "Choose your preferred course duration.",

    icon: Clock3,

    options: [
      {
        label: "Short Term (6-12 Months)",
        value: "short",
        description: "Certificates & diplomas",
        icon: Clock3,
      },
      {
        label: "2-3 Years",
        value: "medium",
        description: "Bachelor programs",
        icon: GraduationCap,
      },
      {
        label: "3+ Years",
        value: "long",
        description: "Advanced degree programs",
        icon: BookOpen,
      },
    ],
  },


  {
    id: "career",
    title: "What is your career goal?",
    description:
      "This helps us match you with the right courses.",

    icon: Target,

    options: [
      {
        label: "Software Developer",
        value: "developer",
        description: "Coding, AI, Web Development",
        icon: Code2,
      },
      {
        label: "Business Manager",
        value: "manager",
        description: "Management & leadership",
        icon: BriefcaseBusiness,
      },
      {
        label: "Entrepreneur",
        value: "business",
        description: "Start your own venture",
        icon: Building2,
      },
      {
        label: "Creative Professional",
        value: "creative",
        description: "Design & media careers",
        icon: Palette,
      },
    ],
  },
];