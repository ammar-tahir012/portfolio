export const config = {
    developer: {
        name: "Ammar",
        fullName: "Ammar Tahir",
        title: "Full Stack Developer",
        description: "Full Stack Developer with hands-on experience building production-grade SaaS platforms, web applications, and mobile apps. Currently engineering a multi-module SaaS platform at macroGEN."
    },
    social: {
        github: "ammar-tahir012",
        email: "ammartahir444@gmail.com",
        phone: "+923145135500",
        location: "Islamabad, Pakistan"
    },
    about: {
        title: "About Me",
        description: "Full Stack Developer with hands-on experience building production-grade SaaS platforms, web applications, and mobile apps. Currently engineering a multi-module SaaS platform at macroGEN, combining inventory, job, task, and payroll management for the New Zealand market. Previously built multi-tenant SaaS platforms at Escalo AI. Completed a web development internship at PTV. BS in Computer Science, COMSATS University (CGPA 3.26)."
    },
    experiences: [
        {
            position: "Full Stack Developer",
            company: "macroGEN",
            period: "Aug 2026 - Present",
            location: "Islamabad, Pakistan",
            description: "Engineering a multi-module SaaS platform combining inventory, job, task, and payroll management for the New Zealand market.",
            responsibilities: [
                "Multi-Module SaaS Platform: Engineering a production SaaS that unifies inventory, job, task, and payroll management for the New Zealand market.",
                "Full-Stack Delivery: Building and iterating on interconnected modules across the platform so operations, jobs, and payroll stay in one system."
            ],
            technologies: ["Next.js", "React.js", "TypeScript", "Node.js"]
        },
        {
            position: "Full Stack Developer",
            company: "Escalo AI (Remote)",
            period: "Apr 2026 - Aug 2026",
            location: "Islamabad, Pakistan",
            description: "Built multi-tenant SaaS platforms and full-stack solutions across AI, web, mobile, and cloud for a diverse client base.",
            responsibilities: [
                "Enterprise Dashboards & Architecture: Engineered complex, multi-role client portals (including Bizzhubz and HPA Portal) using Next.js, TypeScript, and Tailwind CSS, consolidating permissions, user workflows, and analytics into unified dashboard structures.",
                "Full-Stack & Cloud Integration: Built scalable RESTful backend services and database models using Node.js, Supabase, and AWS S3, implementing secure authentication and file management pipelines.",
                "AI & Edge Computing Solutions: Architected cross-platform applications combining modern web and mobile frameworks with on-device ML integrations and edge computing APIs."
            ],
            technologies: ["React.js", "Next.js", "Node.js", "Express.js", "TypeScript", "MongoDB", "AWS", "AI/ML Integration"]
        },
        {
            position: "Web Development Intern",
            company: "Pakistan Television (PTV)",
            period: "Apr 2024 - Jul 2024",
            location: "Islamabad, Pakistan",
            description: "Gained hands-on experience in full-stack web development with modern frontend and backend technologies.",
            responsibilities: [
                "MERN Stack Development: Built core full-stack features using React.js, Node.js, Express, and MongoDB following industry-standard code practices.",
                "Engineering Workflows: Participated in system debugging, requirement analysis, and Git-based collaborative workflows alongside senior engineers."
            ],
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"]
        }
    ],
    projects: [
        {
            id: 8,
            title: "SignForge — Multi-Tenant E-Signature & Contract Platform",
            category: "SaaS / E-Signature",
            technologies: "Next.js 16, React 19, TypeScript, PostgreSQL (Neon), Prisma ORM v7, Tailwind CSS v4, pdf-lib, pdfjs-dist, Resend API, JWT, OGL",
            image: "/images/signforge/landing.jpeg",
            images: [
                "/images/signforge/landing.jpeg",
                "/images/signforge/dashboard.jpeg",
                "/images/signforge/working.jpeg",
                "/images/signforge/signn0n.jpeg",
                "/images/signforge/email.jpeg"
            ],
            description: "Type: Standalone Multi-Tenant SaaS\n\nCore Technical Architecture:\n• Interactive PDF Designer: Built a drag-and-drop canvas with pdf-lib and pdfjs-dist for placing signature anchors, dates, names, and acknowledgment fields on multi-page PDFs, mapping viewport pixels to PDF units across device pixel ratios.\n• Client-Side Flattening: Programmatically embeds ink signatures, timestamps, and recipient audit metadata onto the PDF before committing the final copy to storage.\n• Multi-Tenant Auth: Implemented JWT sessions in HttpOnly cookies, bcrypt password hashing, Next.js Middleware route protection, and tenant-scoped Prisma queries.\n• Serverless Database: Designed Neon PostgreSQL models (Tenant, User, DocSign, assignments, templates) with a lazy Prisma Proxy singleton to avoid Vercel build-time connection locks.\n• Signing Workflow: Dispatches token-protected invitation emails via Resend and completes the document lifecycle from assignment through signed/completed status.",
            link: "https://github.com/ammar-tahir012/signforge",
            github: "https://github.com/ammar-tahir012/signforge",
            live: "https://signforge-virid.vercel.app/"
        },
        {
            id: 9,
            title: "Talento — Voice-First AI Applicant Tracking System",
            category: "AI / HR Platform",
            technologies: "Next.js 16, TypeScript, Google Gemini 2.5 Flash, pdfjs-dist, Web Speech API, Tailwind CSS v4",
            image: "/images/talento/Landing.jpeg",
            images: [
                "/images/talento/Landing.jpeg",
                "/images/talento/HR_INTEFRACE.jpeg",
                "/images/talento/DETAIL_VIEWS.jpeg",
                "/images/talento/INTERVIEW_QUESTIONS.jpeg",
                "/images/talento/GITHUB_EXPLORATION.jpeg",
                "/images/talento/OUTREACH.jpeg",
                "/images/talento/DRAFT_MAILS.jpeg"
            ],
            description: "Type: Voice-First AI ATS Platform\n\nCore Technical Architecture:\n• Client-Side Bulk PDF Ingestion: Parses 30+ candidate CVs locally with pdfjs-dist Web Workers and annotation hyperlink extractors, with no server-side file upload.\n• Multi-Lingual Voice Co-Pilot: Integrated Web Speech API STT/TTS with English and Urdu (ur-PK) models so recruiters can dictate job criteria hands-free.\n• Ranking Pipeline: Compresses resume text and routes requests through a 16-key Gemini 2.5 Flash load balancer with automatic failover, returning ATS scores, experience estimates, pros/cons, and ranked leaderboard output.\n• Interview Kit Generator: Produces 5 candidate-specific technical and behavioral questions targeting career transitions, gaps, and past roles.\n• GitHub Health & Outreach: Scores repository quality, commit consistency, and claimed open-source work, then drafts batch email outreach via mailto: and clipboard formatting.",
            link: "https://github.com/ammar-tahir012/talento",
            github: "https://github.com/ammar-tahir012/talento",
            live: "https://talento-snowy.vercel.app/"
        },
        {
            id: 1,
            title: "MuteMate — AI-Powered Sign Language Learning App",
            category: "AI / Mobile",
            technologies: "Flutter, Dart, TensorFlow Lite, MediaPipe, Firebase, Supabase, OpenAI GPT-4, Python, Google Cloud APIs",
            image: "/images/MuteMatePics/landing.jpeg",
            images: [
                "/images/MuteMatePics/landing.jpeg",
                "/images/MuteMatePics/MuteMate Login.jpeg",
                "/images/MuteMatePics/avatar.jpeg",
                "/images/MuteMatePics/chatbot.jpeg",
                "/images/MuteMatePics/detailed.jpeg",
                "/images/MuteMatePics/my_reward.jpeg",
                "/images/MuteMatePics/shop.jpeg",
                "/images/MuteMatePics/celestial.jpeg"
            ],
            description: "Type: Mobile Platform / Final Year Project\nTarget Audience: Non-verbal/deaf children (ages 5–12) and their parents/educators\n\nCore Technical Architecture:\n• On-Device Computer Vision: Integrated TensorFlow Lite and MediaPipe pipelines to track real-time 3D hand landmarks and classify complex gestures locally with near-zero latency.\n• Bidirectional Speech/Sign Pipeline: Engineered a two-way translation system utilizing Google Cloud Speech-to-Text and custom avatar keyframing for Sign-to-Speech & Speech-to-Sign translation.\n• Contextual Parent AI: Integrated an OpenAI GPT-4 powered assistant (SignBuddy) to generate real-time feedback, contextual signing tips, and progress tracking.\n• Gamification Engine: Managed user progression, unlockable 3D avatar cosmetics, badges, and real-time accuracy scoring using Firebase and Supabase.",
            link: "https://github.com/Ijlal-khann/MuteMate",
            github: "https://github.com/Ijlal-khann/MuteMate",
            live: ""
        },
        {
            id: 2,
            title: "FORTVA — Unified Contract & Document Lifecycle System",
            category: "Web Platform",
            technologies: "React.js, TypeScript, Vite, Supabase, Tailwind CSS, AWS S3, DocuSign, Paystack, Calendly",
            image: "/images/fortva.png",
            images: [
                "/images/fortva.png",
                "/images/fortvaPics/for2.png",
                "/images/fortvaPics/for3.png",
                "/images/fortvaPics/for4.png",
                "/images/fortvaPics/for5.png"
            ],
            description: "Type: Real-World Business Platform\n\nCore Technical Architecture:\n• Document State Engine: Engineered a status-tracking pipeline (Draft ➔ Pending ➔ Signed ➔ Archived) featuring dynamic deadline triggers and automated notifications.\n• Third-Party Integrations: Integrated DocuSign API for legally binding e-signatures, Calendly for consultation booking, and Paystack for automated retainer payments.\n• File Stream Hooks: Created custom React hooks to manage multi-file stream uploads to AWS S3 with client-side drag-and-drop validation.",
            link: "https://github.com/AsharFiaz/fortva",
            github: "https://github.com/AsharFiaz/fortva",
            live: ""
        },
        {
            id: 3,
            title: "Behavioral Health OS — Clinician Workspace & Analytics Engine",
            category: "HIPAA-Compliant Healthcare Platform",
            technologies: "React.js, Supabase, Ant Design, Tailwind CSS, Vite, RESTful APIs",
            image: "/images/health-os.png",
            images: [
                "/images/health-os.png",
                "/images/bhoas_pics/second_bhoas.png",
                "/images/bhoas_pics/third_bhoas.png",
                "/images/bhoas_pics/fifth_bhoas.png",
                "/images/bhoas_pics/sixth_bhoas.png"
            ],
            description: "Type: HIPAA-Compliant Healthcare Platform\n\nCore Technical Architecture:\n• Multi-Screen Clinical Portal: Designed a 12-screen workspace for clinician workflows, patient chart management, billing, and remote telehealth coordination.\n• KPI & Scoring Engine: Built an analytics dashboard that processes clinical metric inputs against business goals to generate automated scale ratings (Pass / Watch / Fail).\n• Design System Integration: Combined Ant Design and Tailwind CSS to build an accessible, data-dense UI.",
            link: "https://github.com/ammar-tahir012/behavorial_health_os",
            github: "https://github.com/ammar-tahir012/behavorial_health_os",
            live: "https://behavorialhealthos.netlify.app"
        },
        {
            id: 4,
            title: "French Arabians — Full-Stack Perfume E-Commerce Engine",
            category: "E-Commerce",
            technologies: "React.js, Node.js, Express.js, MongoDB, Redis, Cloudinary, Tailwind CSS",
            image: "/images/frenchArabiansPic/Picture4.jpg",
            images: [
                "/images/frenchArabiansPic/Picture4.jpg",
                "/images/frenchArabiansPic/Picture1.jpg",
                "/images/frenchArabiansPic/Picture2.jpg",
                "/images/frenchArabiansPic/Picture5.jpg"
            ],
            description: "Type: Production E-Commerce Web App\n\nCore Technical Architecture:\n• Caching & Performance: Implemented a Redis key-value caching layer in front of MongoDB queries, drastically lowering product fetching latency during high traffic.\n• Media Pipeline & Auth: Handled asset storage via Cloudinary and implemented secure JSON Web Token (JWT) authentication with session handling.\n• Interactive Checkout UX: Built dynamic state carts, transactional email triggers, and real-time user notification queues.",
            link: "https://github.com/ammar-tahir012/french-arabians",
            github: "https://github.com/ammar-tahir012/french-arabians",
            live: ""
        },
        {
            id: 5,
            title: "DriveVibes — Virtual City Driving & Radio Experience",
            category: "Web Application",
            technologies: "React.js, Tailwind CSS, REST APIs, Vercel",
            image: "/images/drivevibes.png",
            images: [
                "/images/drivevibes.png",
                "/images/driveVibePics/drive1.png",
                "/images/driveVibePics/drive3.png",
                "/images/driveVibePics/drive4.png",
                "/images/driveVibePics/drive5.png"
            ],
            description: "Type: Interactive Web Application\n\nCore Technical Architecture:\n• Multi-API Synchronization: Integrated 4 separate APIs (YouTube Data API v3, Radio Browser API, GeoDB Cities API) to dynamically pair 4K driving POV streams with real-time local radio channels across 190+ countries.\n• Ad-Free Invidious System: Built a custom streaming pipeline using Invidious video instances with dynamic fallback to prevent broken video embeds.\n• Glassmorphism UI: Applied debounced autocomplete search algorithms and glassmorphism UI overlay components.",
            link: "https://github.com/ammar-tahir012/drive-vibe",
            github: "https://github.com/ammar-tahir012/drive-vibe",
            live: "https://drive-vibe.vercel.app/"
        },
        {
            id: 6,
            title: "PES Global Group — Corporate SSR Web Platform",
            category: "Enterprise Marketing Website",
            technologies: "Next.js, React.js, Tailwind CSS, Framer Motion",
            image: "/images/PesGlobalPics/pic1.jpeg",
            images: [
                "/images/PesGlobalPics/pic1.jpeg",
                "/images/PesGlobalPics/pic2.jpeg",
                "/images/PesGlobalPics/pic3.jpeg",
                "/images/PesGlobalPics/pic4.jpeg"
            ],
            description: "Type: Enterprise Marketing Website\n\nCore Technical Architecture:\n• SEO & SSR Optimization: Built utilizing Next.js Server-Side Rendering (SSR) to achieve high lighthouse performance scores and optimal SEO indexability.\n• Animations: Integrated Framer Motion for smooth page-scroll transitions and interactive section highlights.",
            link: "https://github.com/ammar-tahir012/pesglobal",
            github: "https://github.com/ammar-tahir012/pesglobal",
            live: "https://pesglobalgroup.com"
        },
        {
            id: 7,
            title: "Schedly — Full-Stack Appointment Scheduling Platform",
            category: "Web App",
            technologies: "Node.js, Express.js, React.js, MongoDB, Mongoose, JWT, RESTful APIs",
            image: "/images/schedly.png",
            images: [
                "/images/schedly.png",
                "/images/schedlyPics/home2.png",
                "/images/schedlyPics/admindash.png",
                "/images/schedlyPics/adminavalaibilyy.png",
                "/images/schedlyPics/mnagead.png"
            ],
            description: "Type: Production Client Platform / Web App\n\nCore Technical Architecture:\n• Multi-Role Portal: Designed separate responsive client-facing schedules and administrative booking boards with JWT authentication.\n• Appointment Lifecycle Engine: Built state transition pipeline for bookings (Scheduled ➔ Confirmed ➔ Rescheduled ➔ Cancelled) with transactional email alerts.\n• MERN Database Architecture: Developed flexible Mongoose schemas with indexed date slots to prevent double-booking.",
            link: "https://github.com/ammar-tahir012/Schedly-appointmentBooking",
            github: "https://github.com/ammar-tahir012/Schedly-appointmentBooking",
            live: ""
        }
    ],
    contact: {
        email: "ammartahir444@gmail.com",
        phone: "+923145135500",
        github: "https://github.com/ammar-tahir012",
        linkedin: "https://www.linkedin.com/in/ammar-tahir-a48736314/"
    },
    skills: [
        {
            title: "FRONTEND ENGINEERING",
            description: "High-performance web architecture, responsive interfaces, and seamless UI/UX.",
            details: "Building sleek, high-speed frontend web applications using modern frameworks, responsive design systems, and fluid animations.",
            tools: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "Material UI"]
        },
        {
            title: "BACKEND & DATABASES",
            description: "Scalable RESTful APIs, authentication workflows, and database architecture.",
            details: "Architecting robust backend services, secure authentication, caching layers, and optimized relational/NoSQL databases.",
            tools: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Supabase", "PostgreSQL", "Redis", "Firebase"]
        },
        {
            title: "CLOUD & DEVOPS",
            description: "Infrastructure deployment, CI/CD pipelines, and cloud hosting.",
            details: "Deploying enterprise cloud infrastructure, automating CI/CD workflows, containerization, and cloud server deployment.",
            tools: ["AWS (EC2, S3)", "Jenkins", "Docker", "Vercel", "DigitalOcean", "Git/GitHub"]
        },
        {
            title: "AI/ML & INTEGRATIONS",
            description: "On-device ML models, real-time computer vision, and LLM integrations.",
            details: "Integrating edge computer vision, gesture tracking models, and state-of-the-art LLM APIs into production applications.",
            tools: ["TensorFlow Lite", "MediaPipe", "OpenAI API", "Google Cloud APIs", "Python"]
        },
        {
            title: "MOBILE APP DEVELOPMENT",
            description: "Cross-platform mobile apps with native capabilities and interactive UI.",
            details: "Developing intuitive, high-performance mobile applications with AI integration, gesture recognition, and real-time backend sync.",
            tools: ["Flutter", "React Native", "Dart", "iOS / Android", "TensorFlow Lite"]
        }
    ]
};
