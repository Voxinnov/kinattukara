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
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/gallery" },
  { name: "Farming Guide", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1549024449-d6968d2a435f",
    title: "Premium Nutmeg Plants from Kerala's Finest Nursery",
    subtitle: "India's first ISO 9001 certified nutmeg nursery — trusted by farmers for four decades.",
    cta: "Explore Products",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab",
    title: "Rooted in Tradition, Growing with Science",
    subtitle: "Budded and grafted nutmeg saplings with the highest yield potential.",
    cta: "Learn More",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/32542704/pexels-photo-32542704.jpeg",
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
  { id: "nutmeg", name: "Nutmeg Plants", description: "Budded & grafted varieties" },
  { id: "fruit", name: "Fruit Plants", description: "Rambutan, Mangosteen, Durian & more" },
  { id: "spice", name: "Spice Plants", description: "Pepper, Clove, Cardamom" },
  { id: "ornamental", name: "Ornamental", description: "Landscape & indoor plants" },
];

export const products = [
  {
    id: 1,
    name: "Kinattukara Special Nutmeg",
    category: "nutmeg",
    image: "https://images.pexels.com/photos/13093699/pexels-photo-13093699.jpeg",
    price: "₹350",
    description: "Our signature budded variety — only 400 mace yield 1 kg. High commercial demand.",
    benefits: ["High yield", "Disease resistant", "Budded plant"],
    featured: true,
  },
  {
    id: 2,
    name: "Skin Bud Nutmeg",
    category: "nutmeg",
    image: "https://images.unsplash.com/photo-1640017679257-187c9303c7c2",
    price: "₹280",
    description: "Patch bud nutmeg plants — early fruiting, uniform growth.",
    benefits: ["Early fruiting", "Uniform growth", "3-year variety"],
    featured: true,
  },
  {
    id: 3,
    name: "Crown Bud Nutmeg",
    category: "nutmeg",
    image: "https://images.pexels.com/photos/8510333/pexels-photo-8510333.jpeg",
    price: "₹320",
    description: "Crown budded variety ideal for dense plantations with stable yield.",
    benefits: ["Compact growth", "Stable yield", "Premium grade"],
    featured: true,
  },
  {
    id: 4,
    name: "Approach Grafted Nutmeg",
    category: "nutmeg",
    image: "https://images.unsplash.com/photo-1578723924985-f869a31ea335",
    price: "₹400",
    description: "Approach grafting technique — strongest root system, long life.",
    benefits: ["Strong roots", "Long lifespan", "Grafted"],
    featured: false,
  },
  {
    id: 5,
    name: "Malabar Black Pepper",
    category: "spice",
    image: "https://images.pexels.com/photos/36292685/pexels-photo-36292685.jpeg",
    price: "₹120",
    description: "High-yielding pepper vines — thrives in Kerala climate.",
    benefits: ["High yield", "Aromatic", "Quick fruiting"],
    featured: true,
  },
  {
    id: 6,
    name: "Green Pepper Vines",
    category: "spice",
    image: "https://images.pexels.com/photos/35459274/pexels-photo-35459274.jpeg",
    price: "₹100",
    description: "Young pepper vines, perfect for intercropping with nutmeg.",
    benefits: ["Intercrop ready", "Fast growth", "Organic"],
    featured: false,
  },
  {
    id: 7,
    name: "Rambutan Sapling",
    category: "fruit",
    image: "https://images.unsplash.com/photo-1537721664796-76f77222a5d0",
    price: "₹250",
    description: "Sweet tropical rambutan — grafted for guaranteed fruiting.",
    benefits: ["Grafted", "Sweet fruit", "Exotic variety"],
    featured: true,
  },
  {
    id: 8,
    name: "Mangosteen Plant",
    category: "fruit",
    image: "https://images.unsplash.com/photo-1643730508670-9e4804f59eb9",
    price: "₹450",
    description: "Queen of fruits — premium mangosteen saplings.",
    benefits: ["Premium variety", "Long-lived", "High value"],
    featured: false,
  },
  {
    id: 9,
    name: "Areca Palm Ornamental",
    category: "ornamental",
    image: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9",
    price: "₹180",
    description: "Lush indoor palm — air-purifying and elegant.",
    benefits: ["Indoor-friendly", "Air purifying", "Low maintenance"],
    featured: false,
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
    desc: "Four generations of cultivation knowledge passed down through our family.",
  },
  {
    icon: "Leaf",
    title: "100% Organic Practices",
    desc: "Chemical-free, sustainable farming that respects the soil and ecosystem.",
  },
  {
    icon: "Truck",
    title: "Pan-India Delivery",
    desc: "Carefully packed saplings delivered across India with survival guarantee.",
  },
  {
    icon: "Users",
    title: "Farmer Guidance",
    desc: "Free expert consultation for plantation setup, grafting & after-care.",
  },
  {
    icon: "ShieldCheck",
    title: "Quality Guarantee",
    desc: "Every plant inspected; replacements offered if saplings fail to establish.",
  },
];

export const galleryImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9", caption: "Planting Season at Our Farm" },
  { id: 2, src: "https://images.unsplash.com/photo-1537721664796-76f77222a5d0", caption: "Grafting Department" },
  { id: 3, src: "https://images.unsplash.com/photo-1602867741746-6df80f40b3f6", caption: "Harvest Season" },
  { id: 4, src: "https://images.pexels.com/photos/29039798/pexels-photo-29039798.jpeg", caption: "Paddy Field Adjacent to Nursery" },
  { id: 5, src: "https://images.pexels.com/photos/29039800/pexels-photo-29039800.jpeg", caption: "Expert Care in Action" },
  { id: 6, src: "https://images.unsplash.com/photo-1673853233774-34a726cfc335", caption: "Greenhouse Nursery" },
  { id: 7, src: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9", caption: "Watering the Saplings" },
  { id: 8, src: "https://images.pexels.com/photos/7342599/pexels-photo-7342599.jpeg", caption: "Quality Inspection" },
  { id: 9, src: "https://images.unsplash.com/photo-1643730508670-9e4804f59eb9", caption: "Potted Plant Collection" },
  { id: 10, src: "https://images.pexels.com/photos/13093699/pexels-photo-13093699.jpeg", caption: "Nutmeg Mace Processing" },
  { id: 11, src: "https://images.pexels.com/photos/8510333/pexels-photo-8510333.jpeg", caption: "Fresh Nutmeg Harvest" },
  { id: 12, src: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab", caption: "The Estate at Sunrise" },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Menon",
    location: "Wayanad, Kerala",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "I bought 200 nutmeg plants from Kinattukara three years ago. Every single plant is now fruiting. The guidance I received from their team is invaluable.",
  },
  {
    id: 2,
    name: "Sunitha K.",
    location: "Coimbatore, Tamil Nadu",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    text: "Best quality nutmeg saplings I've ever seen. Their grafted variety gave me the highest yield in my 15 years of farming.",
  },
  {
    id: 3,
    name: "Mohammed Iqbal",
    location: "Kozhikode, Kerala",
    avatar: "https://i.pravatar.cc/150?img=52",
    rating: 5,
    text: "Trusted them for 8 years now. Authentic, reliable, and their farm visit gave me complete confidence in what I was buying.",
  },
  {
    id: 4,
    name: "Latha R.",
    location: "Mangalore, Karnataka",
    avatar: "https://i.pravatar.cc/150?img=45",
    rating: 5,
    text: "Professional, honest, and incredibly knowledgeable. Their pepper vines intercropped beautifully with my nutmeg plantation.",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Nutmeg Cultivation in Kerala",
    excerpt: "From soil preparation to harvest — everything you need to know about growing premium nutmeg.",
    image: "https://images.pexels.com/photos/36292685/pexels-photo-36292685.jpeg",
    author: "Dr. P. Kinattukara",
    date: "June 12, 2025",
    readTime: "8 min read",
    category: "Cultivation",
  },
  {
    id: 2,
    title: "Understanding Budding vs Grafting: Which Suits Your Farm?",
    excerpt: "A technical comparison of skin bud, crown bud, approach grafting and their ideal use cases.",
    image: "https://images.unsplash.com/photo-1537721664796-76f77222a5d0",
    author: "Ravi Kumar",
    date: "May 28, 2025",
    readTime: "6 min read",
    category: "Techniques",
  },
  {
    id: 3,
    title: "Monsoon Care: Protecting Young Saplings During Rains",
    excerpt: "Essential practices to safeguard your young plants during Kerala's heavy monsoon season.",
    image: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9",
    author: "Meera Nair",
    date: "May 15, 2025",
    readTime: "5 min read",
    category: "Plant Care",
  },
  {
    id: 4,
    title: "Intercropping Pepper with Nutmeg: A Farmer's Success Story",
    excerpt: "Maximize your plantation income with proven intercropping techniques.",
    image: "https://images.pexels.com/photos/35459274/pexels-photo-35459274.jpeg",
    author: "Rajesh Menon",
    date: "April 30, 2025",
    readTime: "7 min read",
    category: "Success Stories",
  },
  {
    id: 5,
    title: "Organic Fertilizers: Feeding Your Plants the Natural Way",
    excerpt: "A deep dive into compost, vermicompost, and bio-fertilizers for sustainable growth.",
    image: "https://images.unsplash.com/photo-1673853233774-34a726cfc335",
    author: "Dr. P. Kinattukara",
    date: "April 10, 2025",
    readTime: "10 min read",
    category: "Organic",
  },
  {
    id: 6,
    title: "The 5 Most Profitable Spice Plants for Indian Farms",
    excerpt: "A market analysis of nutmeg, cardamom, clove, pepper, and cinnamon in today's economy.",
    image: "https://images.pexels.com/photos/7342599/pexels-photo-7342599.jpeg",
    author: "Suresh Pillai",
    date: "March 22, 2025",
    readTime: "9 min read",
    category: "Business",
  },
];

export const aboutContent = {
  founded: 1985,
  founder: "Late Shri P.K. Kinattukara",
  story:
    "Kinattukara Nursery was founded in 1985 by Late Shri P.K. Kinattukara in the fertile heart of Thrissur, Kerala. What began as a small family-run operation grew into India's first ISO 9001 certified nutmeg nursery — a milestone that redefined quality standards in Indian horticulture.",
  mission:
    "To empower Indian farmers with the highest quality nutmeg, spice, and fruit saplings — cultivated through science, tradition, and an uncompromising commitment to organic practices.",
  vision:
    "A future where every Indian farmer has access to premium, disease-free planting material backed by expert guidance — ensuring profitability, sustainability, and pride in our agricultural heritage.",
  milestones: [
    { year: "1985", event: "Founded by Late Shri P.K. Kinattukara in Thrissur, Kerala." },
    { year: "1998", event: "Pioneered crown-bud grafting technique for nutmeg in South India." },
    { year: "2008", event: "Became India's first ISO 9001:2008 certified nutmeg nursery." },
    { year: "2015", event: "Expanded to 120 acres with integrated spice plantations." },
    { year: "2020", event: "Launched pan-India delivery & farmer consultation program." },
    { year: "2025", event: "Serving 12,000+ farmers across 8 Indian states." },
  ],
};
