export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: "Full Stack" | "Frontend";
  stack: string[];
  description: {
    en: string;
    id: string;
  };
  highlightPhrase: {
    en: string;
    id: string;
  };
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
}

export const projects: ProjectItem[] = [
  {
    id: "agrinusa",
    number: "01",
    title: "AgriNusa",
    category: "Full Stack",
    stack: ["Laravel 11", "Livewire 3", "Alpine.js", "Tailwind CSS", "MySQL"],
    description: {
      en: "Integrated smart farming and agribusiness platform that solves production inefficiency and long supply chains. Combines IoT, AI, and P2P Lending with an Escrow system to reduce crop failure risks and cut unprofitable distribution chains.",
      id: "Platform smart farming dan agribisnis terintegrasi yang menyelesaikan masalah inefisiensi produksi dan rantai pasok panjang. Menggabungkan IoT, AI, dan P2P Lending dengan sistem Escrow untuk mengurangi risiko gagal panen dan memotong rantai distribusi yang merugikan.",
    },
    highlightPhrase: {
      en: "reduce crop failure risks and cut unprofitable distribution chains",
      id: "mengurangi risiko gagal panen dan memotong rantai distribusi yang merugikan",
    },
    image: "/Porto7.webp",
    githubUrl: "https://github.com/SukaMCD/Agrinusa",
    accentColor: "#C8FF3D",
  },
  {
    id: "aethel",
    number: "02",
    title: "Aethel",
    category: "Frontend",
    stack: ["HTML5", "Vanilla CSS3", "Vanilla JS"],
    description: {
      en: "A futuristic company profile site that solves digital credibility gaps for tech agencies. Applies Human-First Engineering philosophy to minimize cognitive load and increase conversion rate.",
      id: "Situs profil perusahaan futuristik yang memecahkan masalah kesenjangan kredibilitas digital untuk agensi teknologi. Menerapkan filosofi Human-First Engineering untuk meminimalisir hambatan kognitif dan meningkatkan tingkat konversi.",
    },
    highlightPhrase: {
      en: "minimize cognitive load and increase conversion rate",
      id: "meminimalisir hambatan kognitif dan meningkatkan tingkat konversi",
    },
    image: "/Porto8.webp",
    liveUrl: "https://abigaildev.vercel.app/",
    githubUrl: "https://github.com/AbiSulfur/Aethel",
    accentColor: "#FF6B4A",
  },
  {
    id: "stockwise",
    number: "03",
    title: "Stockwise SaaS",
    category: "Frontend",
    stack: ["HTML5", "Tailwind CSS", "JavaScript"],
    description: {
      en: "A professional, fast, and SEO-optimized SaaS landing page built to gather early signups before product launch.",
      id: "Landing page SaaS profesional yang cepat dan optimal untuk SEO, dibangun untuk mengumpulkan pendaftaran awal sebelum peluncuran produk.",
    },
    highlightPhrase: {
      en: "gather early signups before product launch",
      id: "mengumpulkan pendaftaran awal sebelum peluncuran produk",
    },
    image: "/Porto5.webp",
    githubUrl: "https://github.com/AbiSulfur/Stockwise",
    accentColor: "#5B6BFF",
  },
  {
    id: "leafly",
    number: "04",
    title: "Leafly Tea",
    category: "Full Stack",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    description: {
      en: "An integrated e-commerce system that digitizes traditional sales processes to reduce operational costs and open new revenue channels 24/7.",
      id: "Sistem e-commerce terintegrasi yang mendigitalisasi proses penjualan tradisional untuk mengurangi biaya operasional dan membuka saluran pendapatan baru secara online 24/7.",
    },
    highlightPhrase: {
      en: "reduce operational costs and open new revenue channels 24/7",
      id: "mengurangi biaya operasional dan membuka saluran pendapatan baru 24/7",
    },
    image: "/Porto2.webp",
    liveUrl: "https://leaflytea.com",
    githubUrl: "https://github.com/AbiSulfur/LeaflyTea",
    accentColor: "#FFC83D",
  },
];
