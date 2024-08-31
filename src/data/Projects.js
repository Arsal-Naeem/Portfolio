import arsheryBistro from "../assets/arsherybistro.png";
import mystory from "../assets/mystory.png";
import project3 from "../assets/project-3.jpg";

export const projects = [
  {
    id: 1,
    title: "Arshery Bistro",
    category: "Restaurant Website",
    description:
      "Arshery Bistro is a restaurant website built with the MERN stack, where users can browse the menu, place orders, read about the restaurant, and contact us. I handled the frontend development. The site also includes an admin page for managing products and orders.",
    imgSrc: arsheryBistro,
    link: "https://arshery-bistro.vercel.app/",
  },
  {
    id: 2,
    title: "MyStory",
    category: "Story Sharing Platform",
    description:
      "MyStory is a story-sharing platform built with Django and Python. It lets users create accounts, log in, share stories, and browse others' stories. The frontend uses HTML and CSS for a clean interface, and the admin interface allows efficient management of users and content.",
    imgSrc: mystory,
    link: "https://mystoryapp.pythonanywhere.com/",
  },
  {
    id: 3,
    title: "Fundo",
    category: "Dummy Project",
    description:
      "Fundo is not a project; it's just a placeholder. I will add more real-world projects here in the future.",
    imgSrc: project3,
    link: "https://github.com/Arsal-Naeem/",
  },
];
