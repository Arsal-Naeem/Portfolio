import arsheryBistro from "../assets/arsherybistro.png";
import noahtax from "../assets/noahtax.png";
import ardonyx from "../assets/ardonyx.png";
import smartSpend from "../assets/smartSpend.png";
import karyawan from "../assets/karyawan.png";

export const projects = [
  {
    id: 0,
    title: "Noah Tax",
    techStack: ["Next.js", "Shadcn", "ReCharts", "Tailwind CSS"],
    category: "Tax Consulting Website",
    description:
      "Noah Tax is a modern tax consulting website designed to provide users with comprehensive tax services and resources. Built with Next.js and Shadcn UI components, the site features a clean and intuitive interface that enhances user experience. Key functionalities include interactive tax calculators powered by ReCharts, informative articles, and a user-friendly contact form for consultations. The responsive design ensures seamless access across all devices, making Noah Tax a reliable platform for individuals and businesses seeking expert tax advice.",
    imgSrc: noahtax,
    myRole: ["Frontend Development", "UI/UX Design", "Project Management"],
    link: "https://www.noahtax.com/",
    slug: "noah-tax-consulting-website",
  },
  {
    id: 1,
    title: "Ardonyx",
    techStack: ["React.js", "antD"],
    category: "Clothing Store",
    description:
      "Ardonyx is a design-forward, cutting-edge eCommerce platform built for a contemporary clothing brand. With a sleek interface, smooth animations, and responsive design, the website offers a seamless and visually engaging shopping experience. From curated collections to a minimalist product layout, Ardonyx reflects a strong focus on aesthetics and user experience — blending modern fashion with modern tech.",
    imgSrc: ardonyx,
    myRole: ["Frontend Development", "Project Management"],
    link: "https://ardonyx-frontend.vercel.app",
    slug: "ardonyx-clothing-store",
  },
  {
    id: 3,
    title: "House Of Dumplings",
    techStack: ["React.js", "antD"],
    category: "Restaurant Website",
    description:
      "House Of Dumplings is a restaurant website built with the MERN stack, where users can browse the menu, place orders, read about the restaurant, and contact us. I handled the frontend development. The site also includes an admin page for managing products and orders.",
    imgSrc: arsheryBistro,
    myRole: ["Frontend Development", "UI/UX Design", "Project Management"],
    link: "https://demo-hod.vercel.app/",
    slug: "house-of-dumplings",
  },
  {
    id: 4,
    title: "SmartSpend",
    techStack: ["Next.js", "antD"],
    category: "Expense Tracker",
    description:
      "Smart Spend is a personal finance management tool that helps users track their expenses and manage their budgets effectively. The platform offers a user-friendly interface, allowing users to easily input and categorize their expenses. With features like expense tracking, budget setting, and financial insights, Smart Spend empowers users to take control of their finances.",
    imgSrc: smartSpend,
    myRole: ["Frontend Development", "UI/UX Design", "Project Management"],
    link: "https://smart-spend-web.vercel.app/",
    slug: "smartspend-expense-tracker",
  },
  {
    id: 5,
    title: "The Karyawan",
    techStack: ["React.js", "Shadcn", "Tailwind"],
    category: "Publication Website",
    description:
      "Karyawan is a publication website where users can create accounts, log in, and publish articles. The site features a clean and modern design, with a focus on user experience. I was responsible for troubleshooting UI issues, optimizing the interface, and fixing visual bugs.",
    imgSrc: karyawan,
    myRole: [
      "UI Troubleshooting",
      "Interface Optimization",
      "Visual Bug Fixing",
    ],
    link: "https://karyawan-v2.vercel.app/",
    slug: "the-karyawan",
  },

  // {
  //   id: 5,
  //   title: "MyStory",
  //   techStack: ["Django", "Jinja 2", "Python"],
  //   category: "Story Sharing Platform",
  //   description:
  //     "MyStory is a story-sharing platform built with Django and Python. It lets users create accounts, log in, share stories, and browse others' stories. The frontend uses HTML and CSS for a clean interface, and the admin interface allows efficient management of users and content.",
  //   imgSrc: mystory,
  //   myRole: [
  //     "Frontend Development",
  //     "UI/UX Design",
  //     "Project Management",
  //     "Backend Development",
  //   ],
  //   link: "https://mystoryapp.pythonanywhere.com/",
  // },
];
