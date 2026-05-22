// Mock data for Kinattukara Nursery website

export const siteInfo = {
  name: "Kinattukara Nursery",
  tagline: "Cultivating Nature Since 1985",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "info@kinattukaranursery.com",
  address: "Kinattukara Estate, Thrissur District, Kerala, India - 680001",
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
  certifications: ["ISO 9001:2008 Certified", "Kerala Agriculture Board Approved", "Organic Certified"],
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Awards", path: "/awards" },
  { name: "Uses Of Nutmeg", path: "/uses-of-nutmeg" },
  { name: "Our Brands", path: "/brands" },
  { name: "Planting Tips", path: "/planting-tips" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

export const heroSlides = [
  {
    id: 1,
    image: "/1.png",
    title: "Premium Nutmeg Plants from Kerala's Finest Nursery",
    subtitle: "India's first ISO 9001 certified nutmeg nursery — trusted by farmers for four decades.",
    cta: "Explore Products",
  },
  {
    id: 2,
    image: "/2.png",
    title: "Rooted in Tradition, Growing with Science",
    subtitle: "Budded and grafted nutmeg saplings with the highest yield potential.",
    cta: "Learn More",
  },
  {
    id: 3,
    image: "/3.png",
    title: "Organic. Authentic. Grown with Care.",
    subtitle: "From our soil to your farm — plants that thrive for generations.",
    cta: "Get Inquiry",
  },
];

export const stats = [
  { label: "Years of Experience", value: "40+" },
  { label: "Happy Farmers", value: "12,000+" },
  { label: "Plant Varieties", value: "35+" },
  { label: "Acres of Plantation", value: "120" },
];

export const productCategories = [
  { id: "nutmeg", name: "Nutmeg Plants", description: "Budded & grafted nutmeg varieties" },
  { id: "mangosteen", name: "Mangosteen Grafting", description: "High-yield mangosteen saplings" },
];

export const products = [
  {
    id: 1,
    name: "Kinattukara Special Nutmeg",
    category: "nutmeg",
    image: "/10.png",
    price: "₹350",
    description: "Our signature budded variety — only 400 mace yield 1 kg. High commercial demand.",
    benefits: ["High yield", "Disease resistant", "Budded plant"],
    featured: true,
  },
  {
    id: 2,
    name: "Skin Bud Nutmeg",
    category: "nutmeg",
    image: "/1.png",
    price: "₹280",
    description: "Patch bud nutmeg plants — early fruiting, uniform growth.",
    benefits: ["Early fruiting", "Uniform growth", "3-year variety"],
    featured: true,
  },
  {
    id: 3,
    name: "Crown Bud Nutmeg",
    category: "nutmeg",
    image: "/2.png",
    price: "₹320",
    description: "Crown budded variety ideal for dense plantations with stable yield.",
    benefits: ["Compact growth", "Stable yield", "Premium grade"],
    featured: true,
  },
  {
    id: 4,
    name: "Approach Grafted Nutmeg",
    category: "nutmeg",
    image: "/3.png",
    price: "₹400",
    description: "Approach grafting technique — strongest root system, long life.",
    benefits: ["Strong roots", "Long lifespan", "Grafted"],
    featured: true,
  },
  {
    id: 5,
    name: "Premium Mangosteen Graft",
    category: "mangosteen",
    image: "/5.png",
    price: "₹450",
    description: "Queen of fruits — premium mangosteen saplings grafted for early yield.",
    benefits: ["Early fruiting", "High yield variety", "Superior quality"],
    featured: true,
  },
];

export const whyChooseUs = [
  {
    icon: "Award",
    title: "ISO 9001 Certified",
    desc: "India's first certified nutmeg nursery with guaranteed quality standards.",
  },
  {
    icon: "Sprout",
    title: "40+ Years Expertise",
    desc: "Four generations of specialized nutmeg cultivation knowledge.",
  },
  {
    icon: "Leaf",
    title: "100% Organic Practices",
    desc: "Sustainable farming focusing on soil health and plant vitality.",
  },
  {
    icon: "Truck",
    title: "Pan-India Delivery",
    desc: "Carefully packed saplings delivered across India with survival guarantee.",
  },
  {
    icon: "Users",
    title: "Farmer Guidance",
    desc: "Expert consultation for nutmeg plantation setup and grafting care.",
  },
  {
    icon: "ShieldCheck",
    title: "Quality Guarantee",
    desc: "Every nutmeg and mangosteen plant is inspected for peak health.",
  },
];

export const galleryImages = [
  { id: 1, src: "/4.png", caption: "Our Nutmeg Nursery" },
  { id: 2, src: "/10.png", caption: "Nutmeg Mace Quality" },
  { id: 3, src: "/1.png", caption: "Budded Nutmeg Rows" },
  { id: 4, src: "/2.png", caption: "Mangosteen Grafting Unit" },
  { id: 5, src: "/3.png", caption: "Premium Nutmeg Saplings" },
  { id: 6, src: "/5.png", caption: "Mangosteen Mother Plants" },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Menon",
    location: "Wayanad, Kerala",
    avatar: "/images/avatar1.jpg",
    rating: 5,
    text: "I bought 200 nutmeg plants from Kinattukara three years ago. Every single plant is now fruiting. Their expertise in nutmeg is unmatched.",
  },
  {
    id: 2,
    name: "Sunitha K.",
    location: "Coimbatore, Tamil Nadu",
    avatar: "/images/avatar2.jpg",
    rating: 5,
    text: "Best quality mangosteen grafts I've ever seen. Early fruiting and very healthy plants.",
  },
  {
    id: 3,
    name: "Mohammed Iqbal",
    location: "Kozhikode, Kerala",
    avatar: "/images/avatar3.jpg",
    rating: 5,
    text: "Trusted them for 8 years for all my nutmeg requirements. Authentic and reliable.",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Nutmeg Cultivation in Kerala",
    excerpt: "From soil preparation to harvest — everything you need to know about growing premium nutmeg.",
    image: "/10.png",
    author: "Dr. P. Kinattukara",
    date: "June 12, 2025",
    readTime: "8 min read",
    category: "Cultivation",
  },
  {
    id: 2,
    title: "Understanding Budding vs Grafting in Nutmeg",
    excerpt: "A technical comparison of skin bud, crown bud, and approach grafting for nutmeg.",
    image: "/1.png",
    author: "Ravi Kumar",
    date: "May 28, 2025",
    readTime: "6 min read",
    category: "Techniques",
  },
  {
    id: 3,
    title: "Mangosteen Grafting: Secrets to Success",
    excerpt: "How we produce the highest quality mangosteen saplings through advanced grafting.",
    image: "/5.png",
    author: "Meera Nair",
    date: "May 15, 2025",
    readTime: "5 min read",
    category: "Mangosteen",
  },
];

export const aboutContent = {
  founded: 1985,
  founder: "Late Shri P.K. Kinattukara",
  story:
    "Kinattukara Nursery was founded in 1985 with a focus on perfecting nutmeg cultivation. Today, we are India's first ISO 9001 certified nutmeg nursery.",
  mission:
    "To provide farmers with the highest quality nutmeg and mangosteen saplings, backed by decades of specialized expertise.",
  vision:
    "To be the global benchmark for nutmeg cultivation and sustainable nursery practices.",
  milestones: [
    { year: "1985", event: "Founded with a focus on Nutmeg in Thrissur, Kerala." },
    { year: "1998", event: "Pioneered crown-bud grafting for nutmeg." },
    { year: "2008", event: "India's first ISO 9001 certified nutmeg nursery." },
    { year: "2025", event: "Leading experts in Nutmeg & Mangosteen grafting." },
  ],
};
