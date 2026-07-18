// Single source of truth for all portfolio content (EN/VI)
const portfolioData = {
  personal_info: {
    name: "Bùi Viết Quyền",
    title: "Full Stack Developer",
    email: "quyenbuiviet45@gmail.com",
    phone: "(+84) 0963 436 829",
  },

  navItems: [
    { id: "about", label: { en: "About", vi: "Về tôi" } },
    { id: "experience", label: { en: "Experience", vi: "Kinh nghiệm" } },
    { id: "projects", label: { en: "Projects", vi: "Dự án" } },
    { id: "achievements", label: { en: "Achievements", vi: "Thành tựu" } },
    { id: "contact", label: { en: "Contact", vi: "Liên hệ" } },
  ],

  hero: {
    eyebrow: {
      en: "Full Stack Developer — Hà Nội",
      vi: "Lập trình viên Full Stack — Hà Nội",
    },
    tagline: {
      en: "I build modern, secure web applications with React and Node.js — where clean engineering meets thoughtful design.",
      vi: "Tôi xây dựng các ứng dụng web hiện đại, an toàn với React và Node.js — nơi kỹ thuật chỉn chu gặp thiết kế tinh tế.",
    },
    cta_projects: { en: "View projects", vi: "Xem dự án" },
    cta_contact: { en: "Get in touch", vi: "Liên hệ ngay" },
    portraits: [
      "/quyenbuijs/assets/images/profile/profile-1.jpg",
      "/quyenbuijs/assets/images/profile/profile-2.jpg",
      "/quyenbuijs/assets/images/profile/profile-3.jpg",
      "/quyenbuijs/assets/images/profile/profile-4.jpg",
    ],
  },

  about: {
    en: "I'm a Full Stack Developer with over 5 years of experience building modern, scalable web applications. I specialize in React on the front end and Node.js on the back end, and I believe great products are about more than clean code — they're about creating meaningful, secure digital experiences that stand strong against tomorrow's challenges.",
    vi: "Tôi là Full Stack Developer với hơn 5 năm kinh nghiệm xây dựng các ứng dụng web hiện đại, dễ mở rộng. Tôi chuyên về React cho giao diện và Node.js cho máy chủ, và tôi tin rằng một sản phẩm tốt không chỉ cần mã nguồn sạch — nó cần mang lại trải nghiệm số ý nghĩa, an toàn và bền vững trước những thách thức của tương lai.",
  },

  about_facts: [
    {
      label: { en: "Experience", vi: "Kinh nghiệm" },
      value: { en: "5+ years", vi: "5+ năm" },
    },
    {
      label: { en: "Core stack", vi: "Công nghệ chính" },
      value: { en: "React · Node.js", vi: "React · Node.js" },
    },
    {
      label: { en: "Focus", vi: "Định hướng" },
      value: { en: "Cyber security enthusiast", vi: "Đam mê an ninh mạng" },
    },
    {
      label: { en: "Languages", vi: "Ngôn ngữ" },
      value: { en: "Vietnamese · English", vi: "Tiếng Việt · Tiếng Anh" },
    },
  ],

  section_titles: {
    about: { en: "About", vi: "Về tôi" },
    experience: { en: "Experience", vi: "Kinh nghiệm" },
    projects: { en: "Projects", vi: "Dự án" },
    achievements: {
      en: "Achievements & Certifications",
      vi: "Thành tựu & Chứng chỉ",
    },
    hobbies: { en: "Hobbies & Interests", vi: "Sở thích & Đam mê" },
    gallery: { en: "Gallery", vi: "Thư viện ảnh" },
    contact: { en: "Contact", vi: "Liên hệ" },
  },

  experience: [
    {
      id: 3,
      company: "THPT Trần Phú - Hoàn Kiếm",
      position: {
        en: "Good grades - Well manners",
        vi: "Học lực: Giỏi - Hạnh kiểm: Tốt",
      },
      duration: "2016 - 2019",
      description: {
        en: "My highschool",
        vi: "Ngôi trường cấp 3 của tôi",
      },
      technologies: [],
    },
    {
      id: 4,
      company: "Đại học Kinh tế Quốc dân",
      position: {
        en: "Computer Science - GPA 3.1",
        vi: "Ngành Khoa học máy tính - GPA 3.1",
      },
      duration: "2019 - 2023",
      description: {
        en: "My university",
        vi: "Trường đại học của tôi",
      },
      technologies: [],
    },
    {
      id: 5,
      company: "Công ty SETA International",
      position: {
        en: "Internship",
        vi: "Thực tập sinh",
      },
      duration: "11/2022 - 02/2023",
      description: {
        en: "Intern at SETA International, during this time, I have a chance to participade in local projects, how to work at this company and get use to the company environment.",
        vi: "Thực tập sinh tại công ty SETA International, trong thời gian thực tập, tôi được tham gia phát triển các website nội bộ, được biết nội quy làm việc và làm quen với văn hoá của của công ty.",
      },
      technologies: [
        "React",
        "Redux",
        "Redux Saga",
        "Typescript",
        "JavaScript",
        "MUI",
        "Nextjs",
      ],
    },
    {
      id: 6,
      company: "Công ty SETA International - AI Cycle",
      position: {
        en: "Software Developer",
        vi: "Lâp trình viên",
      },
      duration: "02/2023 - 02/2024",
      description: {
        en: "After my internship, I was honored to be placed in project AI Cycle by the leadership, here I continued to develop website that evalutes car price, a website for user to label car's parts, and I also build local projects like statistic reporter and employee management website.",
        vi: "Sau kì thực tập, tôi được ban lãnh đạo tin tưởng sắp xếp vào dự án AI Cycle, tại đây tôi phát triển các trang web định giá xe ô tô, trang web gán nhãn bộ phận xe ô tô, và phát triển các trang web thống kê, trang web quản lý nội bộ.",
      },
      technologies: [
        "React",
        "Redux",
        "Redux Saga",
        "Typescript",
        "JavaScript",
        "MUI",
        "Recharts",
      ],
    },
    {
      id: 7,
      company: "Nghĩa vụ Công an - Lực lượng vũ trang",
      position: {
        en: "Role: Soldier - Level: Corporal",
        vi: "Chức vụ: Chiến sĩ - Cấp bậc: Hạ Sĩ",
      },
      duration: "02/2024 - 02/2026",
      description: {
        en: "After a year working at SETA, I have to pack up and serve in the military, and because I have good papers and a college degree, I was able to participade in the Police Force. This place has hardened my mind, as well as helping me learn discipline in the armed forces.",
        vi: "Sau khi làm 1 năm tại SETA, tôi phải lên đường phục vụ nghĩa vụ quân sự, do có hồ sơ tốt và bằng đại học nên tôi được tuyển vào Công an nhân dân. Nơi đây đã rèn dũa tôi cứng rắn hơn rất nhiều, cũng như giúp tôi học được tính kỷ luật trong lực lượng vũ trang.",
      },
      technologies: ["Police Commands", "Guns", "Laws"],
    },
  ],

  projects: [
    {
      id: 1,
      title: {
        en: "Forkify - Cooking Recipe Finder",
        vi: "Forkify - Website tìm kiếm công thức nấu ăn",
      },
      description: {
        en: "A website to help user finding their desire recipe.",
        vi: "Một trang web giúp người dùng tìm kiếm công thức nấu của món ăn mà họ mong muốn",
      },
      technologies: ["HTML", "CSS", "Javascript", "Node.js"],
      image: "/quyenbuijs/assets/images/website/website-1.jpg",
      demo_url: "https://forkify-quyenbui.netlify.app/",
      github_url: "https://github.com/zzzogi/forkify-quyenbui",
    },
    {
      id: 2,
      title: {
        en: "Kim Vĩnh Vương - The taste of Kinh Bắc culture delight",
        vi: "Kim Vĩnh Vương - Tinh hoa đặc sản Kinh Bắc",
      },
      description: {
        en: "E-Commerce website, selling Vietnamese traditional product like chè lam, mứt, kẹo lạc... from the hands of Kim Vinh Vuong.",
        vi: "Website thương mại điện tử, bán các mặt hàng bánh kẹo truyền thống như: chè lam, mứt, kẹo lạc... của nhà sản xuất Kim Vĩnh Vương.",
      },
      technologies: [
        "Next.js",
        "Next Auth",
        "OAuth",
        "React",
        "Prisma",
        "MongoDB",
        "AWS S3",
        "PayOS",
      ],
      image: "/quyenbuijs/assets/images/website/website-2.jpg",
      demo_url: "https://www.kimvinhvuong.com/",
      github_url: "https://github.com/zzzogi/crispy-fortnight",
    },
    {
      id: 3,
      title: {
        en: "Car Evaluate Website - From AI Cycle",
        vi: "Website định giá xe ô tô - AI Cycle",
      },
      description: {
        en: "Blazing fast tool to evaluate cars from its infomations",
        vi: "Công cụ để định giá xe ô tô nhanh chóng từ các thông tin xe ô tô của bạn",
      },
      technologies: ["React", "React Query", "MUI", "Recharts"],
      image: "/quyenbuijs/assets/images/website/website-3.jpg",
      demo_url: "",
      github_url: "",
    },
  ],

  achievements: [
    {
      id: 1,
      title: {
        en: "Node.js, Express, MongoDB Bootcamp",
        vi: "Khoá học Node.js, Express, MongoDB nâng cao",
      },
      description: {
        en: "Intermediate level certification for designing website using Node.js, Express, MongoDB",
        vi: "Chứng chỉ cấp về thiết kế, xây dựng website sử dụng Node.js, Express, MongoDB",
      },
      date: "2022",
      issuer: { en: "Udemy", vi: "Udemy" },
      certificateImage: "/quyenbuijs/assets/images/certificates/cert-1.jpg",
      icons: [
        "/quyenbuijs/assets/images/icons/nodejs.png",
        "/quyenbuijs/assets/images/icons/express.png",
        "/quyenbuijs/assets/images/icons/mongo.png",
      ],
    },
    {
      id: 2,
      title: {
        en: "JavaScript Course: From Zero to Expert!",
        vi: "Khoá học Javascript từ Zero tới Hero!",
      },
      description: {
        en: "Newbie to intermediate level certification for Javascript, built a strong foundation of this language.",
        vi: "Chứng chỉ cấp về học ngôn ngữ Javascript từ cơ bản tới nâng cao, xây dựng một nền tảng vững chắc của ngôn ngữ này",
      },
      date: "2022",
      issuer: { en: "Udemy", vi: "Udemy" },
      certificateImage: "/quyenbuijs/assets/images/certificates/cert-2.jpg",
      icons: ["/quyenbuijs/assets/images/icons/js.png"],
    },
    {
      id: 3,
      title: {
        en: "Build Websites with HTML and CSS",
        vi: "Khoá học về HTML, CSS",
      },
      description: {
        en: "Builing Responsive Real-World with HTML and CSS",
        vi: "Chứng chỉ cấp cho học viên hoàn thành khoá học xây dựng website responsive sử dụng HTML và CSS",
      },
      date: "2022",
      issuer: { en: "Udemy", vi: "Udemy" },
      certificateImage: "/quyenbuijs/assets/images/certificates/cert-3.jpg",
      icons: ["/quyenbuijs/assets/images/icons/html.png"],
    },
    {
      id: 4,
      title: {
        en: "IELTS Certificate",
        vi: "Chứng chỉ IELTS",
      },
      description: {
        en: "International English Language Testing System",
        vi: "Chứng chỉ IELTS - Hệ thống Kiểm tra Anh ngữ Quốc tế",
      },
      date: "2023",
      issuer: { en: "IDP", vi: "IDP" },
      certificateImage: "/quyenbuijs/assets/images/certificates/ielts.jpg",
      icons: ["/quyenbuijs/assets/images/icons/uk.png"],
    },
  ],

  hobbies: [
    {
      id: 1,
      name: { en: "Food Lover", vi: "Ăn uống" },
      icon: "🍕",
      description: {
        en: "Eating is my passion, I always want to explore the culinary culture of many places on this earth.",
        vi: "Ăn uống là niềm đam mê của tôi, tôi luôn muốn khám phá văn hoá ẩm thực của nhiều nơi trên trái đất này.",
      },
      stats: { en: "50000+ dishes devoured", vi: "50000+ đĩa cơm đã ăn" },
      images: [
        "/quyenbuijs/assets/images/hobbies/food-1.jpg",
        "/quyenbuijs/assets/images/hobbies/food-2.jpg",
        "/quyenbuijs/assets/images/hobbies/food-3.jpg",
      ],
    },
    {
      id: 2,
      name: { en: "Gaming", vi: "Chơi Game" },
      icon: "🎮",
      description: {
        en: "Strategy games and RPGs are my favorites. Love the storytelling and problem-solving aspects.",
        vi: "Game chiến thuật và RPG là sở thích. Yêu thích yếu tố kể chuyện và giải quyết vấn đề.",
      },
      stats: { en: "1000+ hours played", vi: "1000+ giờ chơi" },
      images: [
        "/quyenbuijs/assets/images/hobbies/gaming-1.png",
        "/quyenbuijs/assets/images/hobbies/gaming-2.jpg",
        "/quyenbuijs/assets/images/hobbies/gaming-3.jpg",
      ],
    },
    {
      id: 5,
      name: { en: "Coffee Brewing", vi: "Pha Cà Phê" },
      icon: "☕",
      description: {
        en: "Experimenting with different brewing methods and beans. The perfect cup is an art form.",
        vi: "Thử nghiệm nhiều phương pháp pha và loại hạt khác nhau. Ly cà phê hoàn hảo là một nghệ thuật.",
      },
      stats: { en: "Daily ritual", vi: "Nghi thức hàng ngày" },
      images: [
        "/quyenbuijs/assets/images/hobbies/coffee-1.jpg",
        "/quyenbuijs/assets/images/hobbies/coffee-2.jpg",
        "/quyenbuijs/assets/images/hobbies/coffee-3.jpg",
      ],
    },
    {
      id: 6,
      name: { en: "Travel", vi: "Du Lịch" },
      icon: "✈️",
      description: {
        en: "Exploring new cultures and cuisines. Every trip is a new adventure and learning experience.",
        vi: "Khám phá văn hóa và ẩm thực mới. Mỗi chuyến đi là một cuộc phiêu lưu và trải nghiệm học tập.",
      },
      stats: { en: "15+ countries visited", vi: "15+ quốc gia đã đến" },
      images: [
        "/quyenbuijs/assets/images/hobbies/travel-1.jpg",
        "/quyenbuijs/assets/images/hobbies/travel-2.jpg",
        "/quyenbuijs/assets/images/hobbies/travel-3.jpg",
      ],
    },
  ],

  hobbies_subtitle: {
    en: "When I'm not coding, you'll find me doing these",
    vi: "Khi không code, bạn sẽ thấy tôi làm những điều này",
  },

  fun_fact: {
    en: "Fun fact: I believe in work-life balance and these hobbies keep me creative and inspired!",
    vi: "Điều thú vị: Tôi tin vào cân bằng công việc-cuộc sống và những sở thích này giúp tôi sáng tạo và đầy cảm hứng!",
  },

  gallery_images: [
    "/quyenbuijs/assets/images/gallery/gallery-1.jpg",
    "/quyenbuijs/assets/images/gallery/gallery-2.jpg",
    "/quyenbuijs/assets/images/gallery/gallery-3.jpg",
    "/quyenbuijs/assets/images/gallery/gallery-4.jpg",
    "/quyenbuijs/assets/images/gallery/gallery-5.jpg",
    "/quyenbuijs/assets/images/gallery/gallery-6.jpg",
    "/quyenbuijs/assets/images/gallery/gallery-7.jpg",
  ],

  contact: {
    heading: { en: "Let's work together", vi: "Cùng hợp tác nhé" },
    pitch: {
      en: "Have a project in mind, or just want to say hello? My inbox is always open.",
      vi: "Bạn có dự án cần thực hiện, hay chỉ muốn chào hỏi? Hộp thư của tôi luôn rộng mở.",
    },
  },

  social_links: {
    github: "https://github.com/zzzogi",
    linkedin: "https://www.linkedin.com/in/buivietquyen",
    email: "mailto:quyenbuiviet45@gmail.com",
  },
};

export default portfolioData;
