// Data
const portfolioData = {
  personal_info: {
    name: "Bùi Viết Quyền",
    title: "Full Stack Developer",
    email: "quyenbuiviet45@gmail.com",
    phone: "(+84) 0963 436 829",
  },

  about: {
    en: "I’m a Full Stack Developer with over 5 years of experience building modern, scalable web applications that blend functionality with beautiful design. I specialize in React for front-end development and Node.js for back-end architecture, focusing on delivering smooth user experiences and high-performance systems. I believe that great products are not just about clean code or visual appeal — they’re about creating meaningful digital experiences. My approach combines technical precision, design thinking, and performance optimization to bring each project to life in a way that feels both intuitive and impactful. As a React Specialist and Cyber Security Enthusiast, I’m deeply passionate about crafting secure, stable, and future-ready solutions. My goal is to build digital products that not only meet today’s standards but also stand strong against tomorrow’s challenges.",
    vi: "Tôi là Full Stack Developer với hơn 5 năm kinh nghiệm trong việc thiết kế và phát triển các ứng dụng web hiện đại. Tôi chuyên về React cho phần giao diện người dùng và Node.js cho phần máy chủ, tập trung vào việc tạo ra những trải nghiệm số vừa mượt mà, hiệu quả, vừa mang tính thẩm mỹ cao. Tôi tin rằng một sản phẩm tốt không chỉ cần hoạt động ổn định mà còn phải truyền tải cảm xúc và trải nghiệm đến người dùng. Chính vì vậy, tôi luôn kết hợp giữa tư duy thiết kế, hiểu biết kỹ thuật, và khả năng tối ưu hiệu năng trong mọi dự án. Ngoài ra, với niềm đam mê trong lĩnh vực an ninh mạng, tôi không chỉ phát triển hệ thống mà còn đảm bảo chúng được bảo vệ trước các rủi ro tiềm ẩn. Mục tiêu của tôi là xây dựng những sản phẩm vững chắc, an toàn và có giá trị lâu dài cho người dùng lẫn doanh nghiệp.",
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
        vi: "Ngồi trường cấp 3 của tôi",
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
      image: "/assets/images/website/website-1.jpg",
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
      image: "/assets/images/website/website-2.jpg",
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
      image: "/assets/images/website/website-3.jpg",
      demo_url: "",
      github_url: "",
    },
    // {
    //   id: 4,
    //   title: {
    //     en: "Mobile Banking App",
    //     vi: "Ứng dụng Ngân hàng Di động",
    //   },
    //   description: {
    //     en: "Secure mobile banking application with biometric authentication, transaction history, and bill payments.",
    //     vi: "Ứng dụng ngân hàng di động bảo mật với xác thực sinh trắc học, lịch sử giao dịch và thanh toán hóa đơn.",
    //   },
    //   technologies: ["React Native", "Redux", "Node.js", "JWT"],
    //   image:
    //     "https://via.placeholder.com/400x300/0a0a0a/ff0099?text=Mobile+Banking",
    //   demo_url: "#",
    //   github_url: "#",
    // },
  ],

  gallery_images: [
    "/assets/images/gallery/gallery-1.jpg",
    "/assets/images/gallery/gallery-2.jpg",
    "/assets/images/gallery/gallery-3.jpg",
    "/assets/images/gallery/gallery-4.jpg",
    "/assets/images/gallery/gallery-5.jpg",
    "/assets/images/gallery/gallery-6.jpg",
    "/assets/images/gallery/gallery-7.jpg",
  ],

  social_links: {
    github: "https://github.com/zzzogi",
    linkedin: "https://www.linkedin.com/in/buivietquyen",
    email: "mailto:quyenbuiviet45@gmail.com",
    twitter: "#",
  },

  navigation: {
    en: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      gallery: "Gallery",
      contact: "Contact",
    },
    vi: {
      about: "Về tôi",
      experience: "Kinh nghiệm",
      projects: "Dự án",
      gallery: "Thư viện",
      contact: "Liên hệ",
    },
  },

  contact_form: {
    en: {
      name_placeholder: "Your Name",
      email_placeholder: "Your Email",
      message_placeholder: "Your Message",
      submit_button: "Send Message",
      success_message: "Message sent successfully!",
      error_message: "Please fill in all fields",
    },
    vi: {
      name_placeholder: "Tên của bạn",
      email_placeholder: "Email của bạn",
      message_placeholder: "Tin nhắn của bạn",
      submit_button: "Gửi tin nhắn",
      success_message: "Gửi tin nhắn thành công!",
      error_message: "Vui lòng điền đầy đủ thông tin",
    },
  },
};

export default portfolioData;
