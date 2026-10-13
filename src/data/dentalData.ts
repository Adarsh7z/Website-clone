export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  duration: string;
  icon: string;
  popular?: boolean;
}

export interface QualificationItem {
  degree: string;
  institution: string;
  description: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
}

export interface MembershipItem {
  name: string;
  status: string;
}

export interface DoctorProfile {
  name: string;
  shortName: string;
  title: string;
  academicRole: string;
  standing: string;
  image: string;
  qualifications: QualificationItem[];
  leadership: LeadershipItem[];
  memberships: MembershipItem[];
  specialisations: {
    title: string;
    description: string;
    icon: string;
  }[];
  philosophy: {
    headline: string;
    subheadline: string;
    points: {
      title: string;
      description: string;
    }[];
  };
}

export interface TestimonialItem {
  id: string;
  quote: string;
  patientName: string;
  role: string;
  treatment: string;
  rating: number;
  avatar: string;
}

export const clinicData = {
  name: "BrightSmile",
  tagline: "DENTAL CARE",
  fullBrand: "BrightSmile Dental Care",
  leadSpecialistTagline: "Under the Direct Clinical Care of Dr. Chandra Sekar Anam, MDS",
  phone: "040-27638169",
  phoneRaw: "04027638169",
  emergencyPhone: "040-27638169",
  email: "care@brightsmile.dental",
  rating: "4.9",
  reviewCount: "2,800+",
  address: "X Road, Doolapally Rd, Sri Ganesh Nagar, Bolarum, Secunderabad, Hyderabad, Telangana 500100",
  landmark: "Fairmount Downtown",
  city: "Secunderabad, Hyderabad",
  hours: [
    { days: "Monday – Saturday", time: "9:30 AM – 6:00 PM" },
    { days: "Sunday", time: "Emergency On-Call" },
  ],
  stats: [
    { label: "Decades Teaching & Clinical Mastery", value: 30, suffix: "+" },
    { label: "Implants & Full Mouth Reconstructions", value: 16500, suffix: "+" },
    { label: "National & State Leadership Roles", value: 3, suffix: " Major" },
    { label: "Evidence-Based Treatment Score", value: 99.8, suffix: "%" },
  ],
  doctor: {
    name: "Dr. Chandra Sekar Anam, MDS",
    shortName: "Dr. Chandra Sekar Anam",
    title: "Senior Professor, Prosthodontist & Implantologist",
    academicRole: "Professor of Prosthodontics",
    standing: "Senior Professor, Clinician & National-Level Dental Leader",
    image: "/images/dr-chandra-sekar-anam.png",
    qualifications: [
      {
        degree: "BDS",
        institution: "Bapuji Dental College",
        description: "Foundational clinical and surgical dental training.",
      },
      {
        degree: "MDS",
        institution: "Prosthodontics, Crown & Bridge",
        description: "Advanced post-graduate specialization in complex oral rehabilitation, implantology, and fixed prosthetics.",
      },
    ],
    leadership: [
      {
        role: "Former Vice President",
        organization: "Indian Prosthodontic Society (IPS - National)",
      },
      {
        role: "Former President",
        organization: "IPS Telangana Branch",
      },
      {
        role: "Former President",
        organization: "Indian Dental Association (IDA) Deccan Branch",
      },
    ],
    memberships: [
      {
        name: "Indian Dental Association (IDA)",
        status: "Life Member",
      },
      {
        name: "Indian Prosthodontic Society (IPS)",
        status: "Life Member",
      },
      {
        name: "American Academy of Implant Dentistry (AAID)",
        status: "Member & Affiliate Associate Fellow",
      },
    ],
    specialisations: [
      {
        title: "Dental Implants & Full Mouth Rehabilitation",
        description:
          "Single-tooth implants, immediate loading, full-arch restorations, and advanced implant-supported fixed prostheses with computer-guided surgical accuracy.",
        icon: "Activity",
      },
      {
        title: "Prosthodontics, Crowns & Bridges",
        description:
          "Artisan biocompatible ceramic crowns, fixed bridges, and precision-fitted complete and partial dentures designed for lifetime chew function.",
        icon: "ShieldCheck",
      },
      {
        title: "Advanced Restorative Dentistry & Bite Correction",
        description:
          "Comprehensive functional and aesthetic smile rehabilitation, occlusal equilibration, and complex bite correction for long-term TMJ relief.",
        icon: "Sparkles",
      },
      {
        title: "Crown & Bridge Mastery",
        description:
          "High-precision restorative protocols prioritizing microscopic marginal fit, biological tissue integration, and decades-long structural durability.",
        icon: "Award",
      },
    ],
    philosophy: {
      headline: "Senior Academic Authority. Evidence-Based Clinical Care.",
      subheadline:
        "Positioned as a premier academic specialist and senior clinical authority — not a commercial dental factory. Dr. Chandra Sekar Anam brings over three decades of university professorship, national leadership, and ethical restorative mastery to every patient consultation.",
      points: [
        {
          title: "Decades of Teaching & Clinical Mastery",
          description:
            "Mentored generations of post-graduate dental surgeons with profound theoretical mastery and hands-on clinical precision.",
        },
        {
          title: "Evidence-Based Diagnostics & Custom Plans",
          description:
            "Every treatment protocol is grounded in rigorous scientific literature, high-resolution diagnostic imaging, and individualized anatomy.",
        },
        {
          title: "Ethical, Patient-First Philosophy",
          description:
            "Transparent consultations with exhaustive explanations. We advise only what is biologically indicated, with zero commercial upselling.",
        },
        {
          title: "Focus on Longevity Over Shortcuts",
          description:
            "Prioritizing balanced occlusion, biomechanical stability, and long-term restorative health that withstands decades of natural masticatory forces.",
        },
      ],
    },
  } as DoctorProfile,
  services: [
    {
      id: "implants",
      title: "Dental Implants & Full Mouth Rehabilitation",
      category: "Surgical Implantology",
      description:
        "Single-tooth implants, full mouth rehabilitation, and implant-supported prostheses placed under senior professor oversight.",
      features: [
        "Single & multiple tooth implants",
        "Full mouth rehabilitation & All-on-X",
        "Affiliate Associate Fellow (AAID) expertise",
      ],
      duration: "60 mins consult",
      icon: "Activity",
      popular: true,
    },
    {
      id: "prosthodontics",
      title: "Prosthodontics, Crowns & Bridges",
      category: "Fixed & Removable Prosthetics",
      description:
        "Precision-engineered ceramic crowns, fixed bridges, and custom complete & partial dentures engineered for ideal aesthetics and bite strength.",
      features: [
        "Monolithic zirconia & ceramic crowns",
        "Fixed multi-unit bridge restorations",
        "Precision complete & cast partial dentures",
      ],
      duration: "45 mins consult",
      icon: "ShieldCheck",
      popular: true,
    },
    {
      id: "restorative",
      title: "Advanced Restorative & Bite Correction",
      category: "Occlusal & Functional Care",
      description:
        "Correction of severe tooth wear, collapsed bites, TMJ discrepancies, and complex aesthetic-functional smile breakdowns.",
      features: [
        "Complex occlusal bite correction",
        "Full mouth functional rehabilitation",
        "Symptomatic TMJ relief & stability",
      ],
      duration: "50 mins consult",
      icon: "Sparkles",
      popular: false,
    },
    {
      id: "durability",
      title: "Precision Crown & Bridge Restorations",
      category: "Longevity-Focused Restorations",
      description:
        "Microscopic margin adaptation and bio-compatible materials to ensure lifelong gum health and maximum mechanical durability.",
      features: [
        "Marginal integrity & biological width preservation",
        "High-strength fracture-resistant ceramics",
        "Detailed functional bite calibration",
      ],
      duration: "40 mins consult",
      icon: "Award",
      popular: false,
    },
    {
      id: "preventive",
      title: "Comprehensive Clinical Diagnostics",
      category: "Foundational Health",
      description:
        "Evidence-based periodontal health assessment, digital imaging, ultrasonic hygiene care, and conservative oral health planning.",
      features: [
        "Digital intraoral diagnostics",
        "Ultrasonic hygiene prophylaxis",
        "Preventive enamel preservation",
      ],
      duration: "30 mins",
      icon: "Heart",
      popular: false,
    },
    {
      id: "emergency",
      title: "Urgent Restorative Care & Relief",
      category: "Emergency Dental",
      description:
        "Immediate clinical intervention for fractured prostheses, dislodged crowns, acute tooth pain, and sudden implant discomfort.",
      features: [
        "Immediate emergency triage",
        "Prosthetic repair & recementation",
        "Pain management & stabilization",
      ],
      duration: "Immediate triage",
      icon: "Zap",
      popular: false,
    },
  ] as ServiceItem[],
  testimonials: [
    {
      id: "t1",
      quote:
        "Dr. Chandra Sekar Anam is not an ordinary dentist — he is a true academic master. He solved a chronic bite imbalance and replaced three failed implants that other clinics couldn't fix. Zero pain, and chewing feels completely natural.",
      patientName: "K. Raghunath Rao",
      role: "Senior Engineering Director",
      treatment: "Full Mouth Implant Rehabilitation",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: "t2",
      quote:
        "His explanation of the entire crown and bridge procedure was crystal clear. Having a senior professor and former IPS president handle your smile gives you total peace of mind. Truly ethical, patient-first care.",
      patientName: "Dr. Sunita Varma",
      role: "Professor & Academician",
      treatment: "Precision Crown & Bridge Restoration",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: "t3",
      quote:
        "I travelled from across the city to Fairmount Downtown for my dental implants. Dr. Chandra Sekar's clinical team and his gentle, experienced hands made the whole surgical process stress-free. Highly recommended!",
      patientName: "Pradeep Reddy",
      role: "Business Executive, Secunderabad",
      treatment: "Implant-Supported Fixed Bridge",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    },
  ] as TestimonialItem[],
};
