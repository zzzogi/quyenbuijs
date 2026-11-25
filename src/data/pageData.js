// Single source of truth for all portfolio content.
// Every user-facing string is { vi, en }. Edit content here — components only render it.
//
// Placeholders: any string containing "[CẦN ANH ĐIỀN" is rendered as a highlighted
// marker on the page (and links using it are disabled). Search for it to find gaps:
//   grep -rn "CẦN ANH ĐIỀN" src

const IMG = "/quyenbuijs/assets/images";

const portfolioData = {
  site: {
    title: {
      vi: "Bùi Viết Quyền — Full-stack Engineer (Next.js, TypeScript) tại Hà Nội",
      en: "Bùi Viết Quyền — Full-stack Engineer (Next.js, TypeScript) in Hanoi",
    },
    description: {
      vi: "Full-stack Engineer tại Hà Nội. Tôi xây sản phẩm web từ nghiệp vụ đến production với Next.js, TypeScript và Supabase — từ hệ thống nội bộ cho doanh nghiệp đến game dự đoán World Cup hơn 200 người chơi.",
      en: "Full-stack engineer in Hanoi building web products from business requirements to production with Next.js, TypeScript and Supabase — from internal systems for companies to a World Cup prediction game with 200+ players.",
    },
  },

  personal_info: {
    name: "Bùi Viết Quyền",
    email: "quyenbuiviet45@gmail.com",
    phone: "(+84) 0963 436 829",
    // Toggle the "available for freelance" badge in the hero
    available_for_freelance: true,
    // Put the PDF in public/ (e.g. public/cv/bui-viet-quyen-cv.pdf) and set
    // "/quyenbuijs/cv/bui-viet-quyen-cv.pdf" here.
    cv_url: "[CẦN ANH ĐIỀN: link file CV PDF]",
  },

  social_links: {
    github: "https://github.com/zzzogi",
    linkedin: "https://www.linkedin.com/in/buivietquyen",
    facebook: "[CẦN ANH ĐIỀN: link Facebook]",
    email: "mailto:quyenbuiviet45@gmail.com",
  },

  // Small UI strings shared across components
  ui: {
    download_cv: { vi: "Tải CV", en: "Download CV" },
    view_certificate: { vi: "Xem chứng chỉ", en: "View certificate" },
    close: { vi: "Đóng", en: "Close" },
    open_menu: { vi: "Mở menu", en: "Open menu" },
    close_menu: { vi: "Đóng menu", en: "Close menu" },
    toggle_language: { vi: "Switch to English", en: "Chuyển sang tiếng Việt" },
    toggle_theme: { vi: "Đổi giao diện sáng/tối", en: "Toggle light/dark theme" },
    back_to_top: { vi: "Lên đầu trang", en: "Back to top" },
    main_nav: { vi: "Điều hướng chính", en: "Main navigation" },
    problem: { vi: "Vấn đề", en: "Problem" },
    work: { vi: "Tôi đã làm", en: "What I built" },
    result: { vi: "Kết quả", en: "Outcome" },
    other_projects: { vi: "Dự án nhỏ khác", en: "Smaller projects" },
    education: { vi: "Học vấn", en: "Education" },
    courses: { vi: "Khoá học", en: "Courses" },
    illustration: { vi: "Minh hoạ — không phải dữ liệu thật", en: "Illustration — not real data" },
  },

  navItems: [
    { id: "about", label: { vi: "Về tôi", en: "About" } },
    { id: "experience", label: { vi: "Kinh nghiệm", en: "Experience" } },
    { id: "projects", label: { vi: "Dự án", en: "Projects" } },
    { id: "certifications", label: { vi: "Chứng chỉ", en: "Certifications" } },
    { id: "contact", label: { vi: "Liên hệ", en: "Contact" } },
  ],

  section_titles: {
    about: { vi: "Về tôi", en: "About" },
    experience: { vi: "Kinh nghiệm", en: "Experience" },
    projects: { vi: "Dự án", en: "Projects" },
    certifications: { vi: "Chứng chỉ", en: "Certifications" },
    offhours: { vi: "Ngoài giờ code", en: "Off the clock" },
    contact: { vi: "Liên hệ", en: "Contact" },
  },

  hero: {
    eyebrow: {
      vi: "Full-stack Engineer · Next.js · Hà Nội",
      en: "Full-stack Engineer · Next.js · Hanoi",
    },
    tagline: {
      vi: "Tôi xây sản phẩm web từ nghiệp vụ đến production — từ hệ thống nội bộ cho doanh nghiệp đến game dự đoán World Cup với hơn 200 người chơi.",
      en: "I build web products from business requirements to production — from internal systems for companies to a World Cup prediction game with 200+ players.",
    },
    badge: { vi: "Đang nhận dự án freelance", en: "Available for freelance work" },
    cta_projects: { vi: "Xem dự án", en: "View projects" },
    cta_contact: { vi: "Liên hệ", en: "Get in touch" },
    portrait: {
      src: `${IMG}/hero/portrait-800.webp`,
      srcSet: `${IMG}/hero/portrait-480.webp 480w, ${IMG}/hero/portrait-800.webp 800w`,
      width: 800,
      height: 1000,
      alt: {
        vi: "Chân dung Bùi Viết Quyền trên du thuyền ở vịnh Hạ Long",
        en: "Portrait of Bùi Viết Quyền on a boat in Hạ Long Bay",
      },
    },
  },

  about: {
    text: {
      vi: "Tôi là Full-stack Developer, tốt nghiệp Khoa học máy tính tại ĐH Kinh tế Quốc dân. Tôi bắt đầu đi làm từ 2022 tại SETA International với React/Redux/TypeScript, sau đó hoàn thành 2 năm nghĩa vụ trong lực lượng Công an nhân dân. Hiện tôi làm freelance chuyển đổi số cho doanh nghiệp: khảo sát quy trình, đánh giá giải pháp, rồi tự build hệ thống bằng Next.js, Prisma và Supabase. Ngoài giờ, tôi thích làm những sản phẩm web nhỏ, hữu ích và chia sẻ miễn phí.",
      en: "I'm a full-stack developer with a Computer Science degree from the National Economics University in Hanoi. I started my career in 2022 at SETA International, working with React, Redux and TypeScript, then completed two years of mandatory public security service. Today I freelance on digital transformation for businesses: I map how teams actually work, weigh the options, then build the system myself with Next.js, Prisma and Supabase. In my spare time I make small, useful web tools and give them away for free.",
    },
    facts: [
      {
        label: { vi: "Đi làm từ", en: "Working since" },
        value: { vi: "2022", en: "2022" },
      },
      {
        label: { vi: "Stack chính", en: "Core stack" },
        value: {
          vi: "Next.js · TypeScript · Supabase/PostgreSQL · Prisma",
          en: "Next.js · TypeScript · Supabase/PostgreSQL · Prisma",
        },
      },
      {
        label: { vi: "Đang học", en: "Learning" },
        value: { vi: "Go (backend)", en: "Go (backend)" },
      },
      {
        label: { vi: "Định hướng", en: "Focus" },
        value: {
          vi: "[CẦN ANH ĐIỀN: định hướng nghề nghiệp]",
          en: "[CẦN ANH ĐIỀN: định hướng nghề nghiệp]",
        },
      },
      {
        label: { vi: "Ngôn ngữ", en: "Languages" },
        value: {
          vi: "Tiếng Việt · Tiếng Anh (IELTS 6.5)",
          en: "Vietnamese · English (IELTS 6.5)",
        },
      },
    ],
  },

  // Newest first
  experience: [
    {
      id: "tp",
      company: {
        vi: "Công ty CP Tập đoàn Thiết bị xây dựng TP",
        en: "Công ty CP Tập đoàn Thiết bị xây dựng TP",
      },
      position: {
        vi: "Chuyên viên Chuyển đổi số → Freelance Developer & BA (từ [CẦN ANH ĐIỀN: tháng/năm])",
        en: "Digital Transformation Specialist → Freelance Developer & BA (since [CẦN ANH ĐIỀN: tháng/năm])",
      },
      duration: { vi: "02/2026 – nay", en: "02/2026 – present" },
      bullets: {
        vi: [
          "Khảo sát quy trình 4 phòng ban (Kinh doanh, Kế toán, Hành chính–Nhân sự, Kho) bằng hệ thống form Google Apps Script cấu hình hoá.",
          "Đánh giá 2 nhà cung cấp ERP (Workit, CMC): phân tích báo giá, lập bảng yêu cầu; đề xuất tự xây công cụ nội bộ thay vì mua ERP.",
          "Xây hệ thống nội bộ Internal Ringlock TP (Next.js + Prisma + Supabase, Vercel): quản lý tài liệu phân quyền theo vai trò, LMS nội bộ TP Academy, trang quản trị đồng bộ dữ liệu MISA.",
          "Module tính hoá đơn tự động: đọc file Excel xuất từ MISA, tính tiền thuê thiết bị và xuất bộ hồ sơ thanh toán đúng mẫu kế toán, thay cho quy trình Excel thủ công.",
        ],
        en: [
          "Mapped workflows across 4 departments (Sales, Accounting, HR & Admin, Warehouse) using a configurable Google Apps Script form system.",
          "Evaluated 2 ERP vendors (Workit, CMC): broke down their quotes and wrote the requirements matrix, then recommended building in-house tools instead of buying an ERP.",
          "Built Internal Ringlock TP (Next.js + Prisma + Supabase on Vercel): role-based document management, the TP Academy internal LMS, and an admin panel that syncs data from MISA.",
          "Automated invoicing: reads Excel exports from MISA, calculates equipment rental charges and generates the full payment pack in the accounting team's template — replacing a manual Excel process.",
        ],
      },
      technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Business Analysis", "MISA"],
    },
    {
      id: "police",
      company: {
        vi: "Nghĩa vụ Công an nhân dân",
        en: "Mandatory public security service",
      },
      position: null,
      duration: { vi: "02/2024 – 02/2026", en: "02/2024 – 02/2026" },
      bullets: {
        vi: [
          "Hoàn thành 2 năm nghĩa vụ (Chiến sĩ, Hạ sĩ).",
          "Rèn tính kỷ luật và tinh thần trách nhiệm.",
          "Trong thời gian này vẫn duy trì lập trình: làm website bán hàng cho cơ sở đặc sản Kim Vĩnh Vương và thiệp cưới online.",
        ],
        en: [
          "Completed two years of service (Private, then Corporal).",
          "Built discipline and a strong sense of responsibility.",
          "Kept coding on the side: shipped an online store for Kim Vĩnh Vương, a regional specialty food maker, and an online wedding invitation.",
        ],
      },
      technologies: [],
    },
    {
      id: "seta-aicycle",
      company: {
        vi: "SETA International — AI Cycle",
        en: "SETA International — AI Cycle",
      },
      position: { vi: "Lập trình viên", en: "Software Developer" },
      duration: { vi: "02/2023 – 02/2024", en: "02/2023 – 02/2024" },
      bullets: {
        vi: [
          "Phát triển front-end web định giá xe ô tô bằng AI.",
          "Xây trang web gán nhãn bộ phận xe ô tô.",
          "Phát triển các trang thống kê báo cáo và trang quản lý nhân sự nội bộ.",
          "[CẦN ANH ĐIỀN: số liệu nếu có, vd. số người dùng / số ảnh được gán nhãn]",
        ],
        en: [
          "Built the front end of an AI-powered car valuation web app.",
          "Built a web tool for labeling car parts.",
          "Built internal reporting dashboards and an employee management site.",
          "[CẦN ANH ĐIỀN: số liệu nếu có, vd. số người dùng / số ảnh được gán nhãn]",
        ],
      },
      technologies: ["React", "Redux", "Redux Saga", "TypeScript", "MUI", "Recharts"],
    },
    {
      id: "seta-intern",
      company: { vi: "SETA International", en: "SETA International" },
      position: { vi: "Thực tập sinh", en: "Intern" },
      duration: { vi: "11/2022 – 02/2023", en: "11/2022 – 02/2023" },
      bullets: {
        vi: [
          "Tham gia phát triển các website nội bộ của công ty với React, Redux Saga và TypeScript.",
          "Làm quen quy trình làm việc nhóm và văn hoá công ty, sau đó được xếp vào dự án AI Cycle với vai trò lập trình viên chính thức.",
          "[CẦN ANH ĐIỀN: số liệu nếu có]",
        ],
        en: [
          "Contributed to the company's internal web apps with React, Redux Saga and TypeScript.",
          "Got up to speed on the team's workflow and culture, then moved onto the AI Cycle project as a full-time developer.",
          "[CẦN ANH ĐIỀN: số liệu nếu có]",
        ],
      },
      technologies: ["React", "Redux", "Redux Saga", "TypeScript", "MUI", "Next.js"],
    },
  ],

  education: {
    degree: {
      vi: "Cử nhân Khoa học máy tính",
      en: "B.Sc. in Computer Science",
    },
    school: {
      vi: "ĐH Kinh tế Quốc dân",
      en: "National Economics University",
    },
    duration: "2019 – 2023",
    note: { vi: "GPA 3.1", en: "GPA 3.1" },
  },

  // Ordered by strength. `featured` cards render full-width with metrics.
  projects: [
    {
      id: "fifa",
      featured: true,
      kind: { vi: "Sản phẩm cá nhân", en: "Personal product" },
      title: { vi: "FIFA Pick'em World Cup 2026", en: "FIFA Pick'em World Cup 2026" },
      image: {
        src: `${IMG}/projects/fifa.webp`,
        width: 1280,
        height: 611,
        alt: {
          vi: "Màn hình dự đoán tỉ số của FIFA Pick'em với thứ hạng, điểm và độ chính xác của người chơi",
          en: "FIFA Pick'em prediction screen showing a player's rank, points and accuracy",
        },
      },
      problem: {
        vi: "Một sân chơi dự đoán tỉ số World Cup 2026 cho người hâm mộ: điểm được tính tự động, có bảng xếp hạng và đủ lý do để người chơi quay lại mỗi ngày.",
        en: "A score prediction game for World Cup 2026 fans — automatic scoring, live leaderboards, and enough reasons for players to come back every day.",
      },
      work: {
        vi: [
          "Hệ thống 18 thành tựu với 4 cấp độ hiếm, cùng streak, bảng đấu và bảng xếp hạng.",
          "Cron tự đồng bộ kết quả trận đấu và tính điểm theo từng người dùng.",
          "Email tổng kết hằng ngày gửi qua Brevo.",
          "GA4 chạy cùng Content Security Policy dùng nonce.",
        ],
        en: [
          "An 18-achievement system across 4 rarity tiers, plus streaks, group tables and leaderboards.",
          "Cron jobs that sync match results and score every player's picks individually.",
          "Daily recap emails sent through Brevo.",
          "GA4 running under a nonce-based Content Security Policy.",
        ],
      },
      metrics: [
        { value: { vi: "200+", en: "200+" }, label: { vi: "người chơi đăng ký", en: "registered players" } },
        { value: { vi: "~100", en: "~100" }, label: { vi: "người dùng hoạt động/tháng lúc cao điểm", en: "monthly active users at peak" } },
        { value: { vi: "Giải thật", en: "Real prizes" }, label: { vi: "đã trao cho người chơi", en: "awarded to winning players" } },
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "Prisma", "NextAuth", "React Query", "Tailwind CSS", "Brevo", "Cron jobs", "GA4", "SEO"],
      links: [
        { label: "fifapickem2026.com", url: "https://fifapickem2026.com/" },
        { label: "GitHub", url: "https://github.com/zzzogi/fifa-pickem-2026" },
      ],
    },
    {
      id: "ringlock",
      featured: true,
      kind: { vi: "Dự án doanh nghiệp · Case study", en: "Client work · Case study" },
      title: { vi: "Internal Ringlock TP", en: "Internal Ringlock TP" },
      // No real screenshot (internal system) — renders an illustration with fake UI.
      // To use a real screenshot, add an `image` object with mock/blurred data only.
      illustration: "ringlock",
      problem: {
        vi: "Doanh nghiệp thiết bị xây dựng cần số hoá quy trình của 4 phòng ban và phải chọn giữa mua ERP hay tự xây. Khâu tính tiền thuê thiết bị vẫn làm thủ công trên Excel.",
        en: "A construction equipment company needed to digitize workflows across four departments and had to choose between buying an ERP and building its own tools. Equipment rental billing was still done by hand in Excel.",
      },
      work: {
        vi: [
          "Khảo sát quy trình Kinh doanh, Kế toán, Hành chính–Nhân sự và Kho bằng hệ thống form Google Apps Script cấu hình hoá.",
          "Phân tích báo giá, lập bảng yêu cầu cho 2 nhà cung cấp ERP (Workit, CMC) và đề xuất tự xây công cụ nội bộ thay vì mua ERP.",
          "Xây hệ thống trên Next.js + Prisma + Supabase (Vercel): quản lý tài liệu phân quyền theo vai trò, LMS nội bộ TP Academy, trang quản trị đồng bộ dữ liệu MISA.",
          "Module hoá đơn: đọc file Excel xuất từ MISA, tính tiền thuê thiết bị và xuất bộ hồ sơ thanh toán đúng mẫu kế toán.",
        ],
        en: [
          "Mapped Sales, Accounting, HR & Admin and Warehouse workflows with a configurable Google Apps Script form system.",
          "Broke down quotes and wrote the requirements matrix for two ERP vendors (Workit, CMC), then recommended building in-house tools instead.",
          "Built the platform on Next.js + Prisma + Supabase (Vercel): role-based document management, the TP Academy internal LMS, and an admin panel that syncs MISA data.",
          "Invoicing module: reads MISA Excel exports, calculates equipment rental charges and generates the payment pack in the accounting team's template.",
        ],
      },
      metrics: [
        { value: { vi: "4", en: "4" }, label: { vi: "phòng ban được khảo sát quy trình", en: "departments' workflows mapped" } },
        { value: { vi: "2", en: "2" }, label: { vi: "nhà cung cấp ERP được đánh giá", en: "ERP vendors evaluated" } },
        { value: { vi: "Tự động", en: "Automated" }, label: { vi: "tính hoá đơn thuê thiết bị, thay cho Excel thủ công", en: "rental invoicing, replacing manual Excel work" } },
        {
          value: { vi: "[CẦN ANH ĐIỀN]", en: "[CẦN ANH ĐIỀN]" },
          label: { vi: "số liệu tác động, vd. giờ tiết kiệm mỗi kỳ / số người dùng nội bộ", en: "impact metric, e.g. hours saved per cycle / internal users" },
        },
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "Supabase", "Vercel", "Google Apps Script", "MISA"],
      links: [],
      note: { vi: "Hệ thống nội bộ — không có demo công khai", en: "Internal system — no public demo" },
    },
    {
      id: "tax-tools",
      kind: { vi: "Sản phẩm cá nhân", en: "Personal products" },
      title: { vi: "Thuế Gọn & GigTaxMath", en: "Thuế Gọn & GigTaxMath" },
      image: {
        src: `${IMG}/projects/tax-tools.webp`,
        width: 1280,
        height: 760,
        alt: {
          vi: "Trang chủ Thuế Gọn và GigTaxMath đặt chồng lên nhau",
          en: "The Thuế Gọn and GigTaxMath home pages, overlapping",
        },
      },
      problem: {
        vi: "Hộ kinh doanh ở Việt Nam và người làm gig ở Mỹ đều cần biết nhanh mình phải nộp bao nhiêu thuế mà không phải tự đọc văn bản luật.",
        en: "Household businesses in Vietnam and gig workers in the US both need a quick answer to “how much tax do I owe?” — without reading the tax code.",
      },
      work: {
        vi: "Hai web công cụ tính thuế miễn phí, không cần đăng ký: Thuế Gọn cho hộ kinh doanh Việt Nam và GigTaxMath cho tài xế, shipper làm gig ở Mỹ. Cả hai chạy trên Cloudflare.",
        en: "Two free, no-sign-up tax calculators: Thuế Gọn for Vietnamese household businesses and GigTaxMath for US rideshare and delivery drivers. Both run on Cloudflare.",
      },
      result: {
        vi: "[CẦN ANH ĐIỀN: số liệu, vd. lượt truy cập/tháng]",
        en: "[CẦN ANH ĐIỀN: số liệu, vd. lượt truy cập/tháng]",
      },
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vitest", "Cloudflare"],
      links: [
        { label: "thuegon.com", url: "https://thuegon.com/" },
        { label: "gigtaxmath.com", url: "https://gigtaxmath.com/" },
      ],
    },
    {
      id: "kim-vinh-vuong",
      kind: { vi: "Dự án khách hàng", en: "Client project" },
      title: {
        vi: "Kim Vĩnh Vương — Tinh hoa đặc sản Kinh Bắc",
        en: "Kim Vĩnh Vương — Kinh Bắc specialty sweets",
      },
      image: {
        src: `${IMG}/projects/kim-vinh-vuong.webp`,
        width: 1280,
        height: 613,
        alt: {
          vi: "Trang chủ Kim Vĩnh Vương với các hũ chè lam",
          en: "Kim Vĩnh Vương home page featuring jars of chè lam",
        },
      },
      problem: {
        vi: "Cơ sở sản xuất bánh kẹo truyền thống (chè lam, mứt, kẹo lạc) cần một kênh bán hàng online có thanh toán.",
        en: "A traditional confectionery maker (chè lam, candied fruit, peanut brittle) needed an online store that could take payments.",
      },
      work: {
        vi: "Xây website thương mại điện tử: danh mục sản phẩm, đăng nhập OAuth, giỏ hàng và thanh toán qua PayOS, ảnh sản phẩm lưu trên AWS S3.",
        en: "Built the store end to end: product catalog, OAuth sign-in, cart and checkout via PayOS, with product images on AWS S3.",
      },
      result: {
        vi: "Website chạy thật cho khách hàng, có thanh toán online qua PayOS.",
        en: "Live for a real client, taking online payments through PayOS.",
      },
      technologies: ["Next.js", "NextAuth", "OAuth", "React", "Prisma", "MongoDB", "AWS S3", "PayOS"],
      links: [
        { label: "Demo", url: "https://crispy-fortnight.vercel.app" },
        { label: "GitHub", url: "https://github.com/zzzogi/crispy-fortnight" },
      ],
    },
    {
      id: "aicycle",
      kind: { vi: "Dự án tại công ty · SETA International", en: "Company project · SETA International" },
      title: { vi: "Định giá xe ô tô — AI Cycle", en: "Car valuation — AI Cycle" },
      image: {
        src: `${IMG}/projects/aicycle.webp`,
        width: 1280,
        height: 608,
        alt: {
          vi: "Form định giá ô tô của AI Cycle",
          en: "AI Cycle's car valuation form",
        },
      },
      problem: {
        vi: "Chủ xe cần biết nhanh giá trị chiếc xe của mình chỉ từ thông tin xe.",
        en: "Car owners want a fast valuation from nothing more than their vehicle's details.",
      },
      work: {
        vi: "Phát triển front-end cho web định giá xe bằng AI: form thông tin xe, tải ảnh đăng kiểm để tự điền, trang kết quả kèm biểu đồ.",
        en: "Built the front end of an AI car valuation app: the vehicle details form, registration-photo upload for auto-fill, and a results view with charts.",
      },
      result: {
        vi: "[CẦN ANH ĐIỀN: số liệu nếu có]",
        en: "[CẦN ANH ĐIỀN: số liệu nếu có]",
      },
      technologies: ["React", "React Query", "MUI", "Recharts"],
      links: [],
    },
  ],

  other_projects: [
    {
      title: { vi: "Thiệp cưới online", en: "Online wedding invitation" },
      url: "https://chungbaoxmphuong.netlify.app",
    },
  ],

  certifications: {
    featured: {
      title: { vi: "IELTS Academic", en: "IELTS Academic" },
      score: "Overall 6.5 · Speaking 7.0",
      issuer: "IDP",
      date: "2023",
      image: `${IMG}/certificates/ielts.webp`,
      image_width: 1200,
      image_height: 1700,
    },
    courses: [
      {
        title: "The Complete JavaScript Course 2022: From Zero to Expert!",
        issuer: "Udemy",
        date: "2022",
        url: "https://ude.my/UC-03cdea3a-ab6f-4dec-ab4c-57038efbce21",
      },
      {
        title: "Build Responsive Real-World Websites with HTML and CSS",
        issuer: "Udemy",
        date: "2022",
        url: "https://ude.my/UC-0622e8a1-8af2-41af-aaf7-2a9bf1b50ebe",
      },
      {
        title: "Node.js, Express, MongoDB Bootcamp",
        issuer: "Udemy",
        date: "2022",
        url: "[CẦN ANH ĐIỀN: link chứng chỉ Udemy Node.js]",
      },
      {
        title: "Go — Backend Developer Path",
        issuer: "Boot.dev",
        date: "",
        url: "[CẦN ANH ĐIỀN: link chứng nhận Boot.dev]",
      },
    ],
  },

  hobbies: [
    { icon: "🍜", name: { vi: "Ăn uống", en: "Food" } },
    { icon: "🎮", name: { vi: "Game chiến thuật / RPG", en: "Strategy games & RPGs" } },
    { icon: "☕", name: { vi: "Pha cà phê", en: "Coffee brewing" } },
    { icon: "✈️", name: { vi: "Du lịch", en: "Travel" } },
  ],

  offhours_subtitle: {
    vi: "Khi không code, bạn sẽ thấy tôi làm những điều này.",
    en: "When I'm away from the keyboard, this is where you'll find me.",
  },

  gallery: [
    {
      src: `${IMG}/gallery/gallery-1.webp`,
      alt: { vi: "Quyền mặc vest, cầm micro trên sân khấu một sự kiện", en: "Quyền in a tuxedo, holding a mic on stage at an event" },
    },
    {
      src: `${IMG}/gallery/gallery-5.webp`,
      alt: { vi: "Quyền chụp cùng bạn trước toà nhà Trường Đại học Kinh tế Quốc dân", en: "Quyền and a friend outside the National Economics University building" },
    },
    {
      src: `${IMG}/gallery/gallery-4.webp`,
      alt: { vi: "Quyền ngồi làm việc bên laptop dán sticker, cạnh một chú mèo", en: "Quyền working on a sticker-covered laptop, with a cat keeping watch" },
    },
    {
      src: `${IMG}/gallery/gallery-3.webp`,
      alt: { vi: "Quyền đội mũ cao bồi, nâng ly trong một quán bar", en: "Quyền in a cowboy hat, raising a glass at a bar" },
    },
    {
      src: `${IMG}/gallery/gallery-6.webp`,
      alt: { vi: "Quyền mặc quân phục Công an, cầm chùm bóng bay", en: "Quyền in police uniform, holding a bunch of balloons" },
    },
    {
      src: `${IMG}/gallery/gallery-2.webp`,
      alt: { vi: "Quyền nhận hoa chúc mừng tại văn phòng", en: "Quyền receiving flowers at an office celebration" },
    },
  ],

  contact: {
    heading: { vi: "Cùng hợp tác nhé", en: "Let's work together" },
    pitch: {
      vi: "Bạn có dự án cần thực hiện, hay chỉ muốn chào hỏi? Hộp thư của tôi luôn rộng mở.",
      en: "Have a project in mind, or just want to say hello? My inbox is always open.",
    },
    availability: {
      vi: "Đang nhận: website / landing page cho doanh nghiệp nhỏ, dự án freelance.",
      en: "Open to: websites and landing pages for small businesses, plus freelance projects.",
    },
  },
};

export default portfolioData;
