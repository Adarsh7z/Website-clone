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

export interface DoctorItem {
  name: string;
  title: string;
  credentials: string;
  experience: string;
  specialty: string;
  image: string;
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
  phone: "040-27638169",
  phoneRaw: "04027638169",
  emergencyPhone: "040-27638169",
  email: "care@brightsmile.dental",
  rating: "4.9",
  reviewCount: "2,500+",
  address: "X Road, Doolapally Rd, Sri Ganesh Nagar, Bolarum, Secunderabad, Hyderabad, Telangana 500100",
  landmark: "Fairmount Downtown",
  city: "Secunderabad, Hyderabad",
  hours: [
    { days: "Monday – Saturday", time: "9:30 AM – 6:00 PM" },
    { days: "Sunday", time: "Emergency On-Call" },
  ],
  stats: [
    { label: "Years Clinical Excellence", value: 15, suffix: "+" },
    { label: "Radiant Smiles Restored", value: 18500, suffix: "+" },
    { label: "Pain-Free Procedure Score", value: 99.4, suffix: "%" },
    { label: "Immediate Emergency Triage", value: 24, suffix: "/7" },
  ],
  services: [
    {
      id: "preventive",
      title: "Preventive & Hygiene Care",
      category: "Foundational Health",
      description: "Low-radiation digital imaging, ultrasonic plaque therapy, and comprehensive oral cancer screenings.",
      features: ["Ultrasonic scaling & polishing", "Precision 3D periodontal scans", "Fluoride enamel remineralization"],
      duration: "45 mins",
      icon: "ShieldCheck",
      popular: false,
    },
    {
      id: "cosmetic",
      title: "Cosmetic & Laser Whitening",
      category: "Aesthetic Dentistry",
      description: "Custom artisan porcelain veneers, composite bonding, and in-office 1-hour laser whitening up to 8 shades brighter.",
      features: ["Handcrafted ceramic veneers", "Zoom! 1-hour laser whitening", "Digital aesthetic smile mockup"],
      duration: "60 mins",
      icon: "Sparkles",
      popular: true,
    },
    {
      id: "orthodontics",
      title: "Invisalign & Clear Aligners",
      category: "Orthodontics",
      description: "Diamond Provider clear aligner treatments designed via computer 3D bite simulation with zero metal brackets.",
      features: ["Itero 3D digital bite scanning", "Discreet clear aligner sets", "Accelerated teeth tracking"],
      duration: "30 mins",
      icon: "Smile",
      popular: true,
    },
    {
      id: "implants",
      title: "Digital Dental Implants",
      category: "Surgical Rehabilitation",
      description: "Permanent titanium implants placed with CT-guided 3D navigation for natural chew strength and lifelike appearance.",
      features: ["Same-day immediate load option", "Computer-guided surgical stents", "Custom zirconium crowns"],
      duration: "90 mins",
      icon: "Activity",
      popular: false,
    },
    {
      id: "pediatric",
      title: "Gentle Pediatric Dentistry",
      category: "Family Care",
      description: "Stress-free, gentle visits for children with sensory accommodations, preventive sealants, and positive reinforcement.",
      features: ["Anxiety-free gentle checkups", "BPA-free protective sealants", "Fun educational oral guidance"],
      duration: "35 mins",
      icon: "Heart",
      popular: false,
    },
    {
      id: "emergency",
      title: "24/7 Emergency Dental Care",
      category: "Urgent Relief",
      description: "Immediate same-day emergency relief for acute toothaches, fractured enamel, dislodged crowns, and sports injuries.",
      features: ["Immediate pain alleviation", "Same-day tooth repair", "On-site surgical capability"],
      duration: "Immediate",
      icon: "Zap",
      popular: false,
    },
  ] as ServiceItem[],
  specialists: [
    {
      name: "Dr. Sarah Mitchell, DDS",
      title: "Chief Medical Officer & Implant Specialist",
      credentials: "Harvard School of Dental Medicine • Fellow ICOI",
      experience: "16+ years experience in computer-guided implantology and aesthetic restorations.",
      specialty: "Surgical Implants & Full Mouth Restoration",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr. David Chen, DMD",
      title: "Lead Orthodontist & Aligner Specialist",
      credentials: "Columbia University Dental College • Invisalign Diamond",
      experience: "Pioneered accelerated aligner protocols for adults and teens.",
      specialty: "Clear Aligners & Craniofacial Orthodontics",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Dr. Priya Sharma, DDS",
      title: "Aesthetic Restorative Dentist",
      credentials: "NYU College of Dentistry • AACD Accredited",
      experience: "Renowned for handcrafted porcelain veneers and natural biomimetic smile design.",
      specialty: "Veneers & Aesthetic Smile Transformations",
      image: "https://images.unsplash.com/photo-1594824813637-bf482d610ec1?q=80&w=800&auto=format&fit=crop",
    },
  ] as DoctorItem[],
  testimonials: [
    {
      id: "t1",
      quote: "The clinic looks like an architectural sanctuary rather than a hospital. Zero pain during my crown replacement, and the overhead warm lighting makes the chair experience so soothing.",
      patientName: "Marcus Vance",
      role: "Managing Director",
      treatment: "Full Ceramic Restoration",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: "t2",
      quote: "I was terrified of dentists for twenty years. BrightSmile completely changed my life. Dr. Mitchell explained every step on the wall monitor, and their painless anesthesia technique is unbelievable.",
      patientName: "Amanda Kensington",
      role: "Architect & Partner",
      treatment: "Invisalign & Laser Whitening",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: "t3",
      quote: "Needed emergency repair on a Saturday afternoon after a cycling accident. They got me into the operating suite in twenty minutes. Clean, modern, and compassionate.",
      patientName: "Jonathan Ross",
      role: "Fintech Founder",
      treatment: "Emergency Bonding & Veneer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
  ] as TestimonialItem[],
};
