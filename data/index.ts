import { StaticImageData } from "next/image";
import adrian from "@/public/client/adrian.jpg";
import amala from "@/public/client/amala.jpg";
import ramiro from "@/public/client/ramiro.jpg";
import pboy from "@/public/client/pboy.jpg";
import elmbeng from "@/public/client/elmbeng.jpg";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Votre travail intelligent et vos efforts finissent toujours par payer ! Un succès bien mérité, une occasion à célébrer.",
    name: "Adrian Prieto",
    icon: adrian as StaticImageData,
    title: "",
  },
  {
    quote:
      "Dans la vie, que fais-tu ? Je te suis toujours sur les réseaux sociaux à travers tes publications. À ton âge, tu es la fierté de la jeunesse.",
    name: "Cheikhna Hamala Diallo",
    icon: amala as StaticImageData,
    title: "",
  },
  {
    quote:
      "Il est très bénéfique d'essayer quelqu'un de nouveau. La mesure prise ne pourrait pas être meilleure. Je suis content de t'avoir rencontré.",
    name: "Ramiro pedro",
    icon: ramiro as StaticImageData,
    title: "",
  },
  {
    quote:
      "Tellement fiers de toi, mon ami, que je ne trouve même pas les mots pour tout ce que tu fais. Dieu est au contrôle, concentre-toi.",
    name: "Pboy",
    icon: pboy as StaticImageData,
    title: "",
  },
  {
    quote:
      "Ton histoire ne fait que commencer, très cher. Tu symbolises à la perfection le mot détermination et l'inspiration constante.",
    name: "El Mbenguez",
    icon: elmbeng as StaticImageData,
    title: "",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Éducation",
    desc: "Développer des programmes éducatifs innovants pour les jeunes, en mettant l'accent sur les compétences numériques et entrepreneuriales.",
    className: "md:col-span-2",
    thumbnail: "/book.png",
  },
  {
    id: 2,
    title: "Agriculture Durable",
    desc: "Promouvoir l'agriculture durable avec la ferme Pouldor, en utilisant des méthodes biologiques pour soutenir les communautés locales.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/plant.png",
  },
  {
    id: 3,
    title: "Innovation Technologique",
    desc: " Lancer des startups technologiques à travers Kiasla, pour stimuler l'innovation et créer des opportunités économiques pour les jeunes.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/idea.png",
  },
  {
    id: 4,
    title: "Philanthropie",
    desc: "Étendre les activités philanthropiques pour fournir davantage de ressources et de soutien aux personnes dans le besoin.",
    className: "md:col-span-2",
    thumbnail: "/hug.png",
  },
];

export const trainings: {
  id: number;
  title: string;
  desc: string;
  className: string;
}[] = [
  {
    id: 1,
    title: "Développer mes compétences",
    desc: "Cette formation développer mes compétences est conçue pour vous aider à identifier et à améliorer les compétences clés nécessaires pour réussir dans votre carrière et votre vie personnelle. Vous apprendrez à évaluer vos compétences actuelles, à définir des objectifs clairs et à élaborer un plan de développement personnel.",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Atteindre la liberté financière",
    desc: "La formation Atteindre la liberté financière vous guide à travers les principes et les stratégies nécessaires pour gérer efficacement vos finances personnelles et atteindre la liberté financière. Vous apprendrez à élaborer un budget, à investir judicieusement, et à planifier votre avenir financier.",
    className: "md:col-span-2", // change to md:col-span-2
  },
  {
    id: 3,
    title: "L'art de la négociation",
    desc: "L'art de la négociation est une formation conçue pour vous enseigner les compétences essentielles pour négocier efficacement dans divers contextes professionnels et personnels. Vous apprendrez les techniques de négociation, la préparation, et comment atteindre des accords gagnant-gagnant.",
    className: "md:col-span-2", // change to md:col-span-2
  },
  {
    id: 4,
    title: "Comment avoir un impact",
    desc: "La formation Comment avoir un impact est conçue pour vous aider à maximiser votre influence et à faire une différence significative dans votre domaine professionnel et dans la société. Vous apprendrez à identifier vos forces, à communiquer efficacement et à inspirer les autres.",
    className: "md:col-span-2",
  },
  {
    id: 5,
    title: "Créer un Projet",
    desc: "La formation Créer un projet est conçue pour vous aider à transformer vos idées en projets concrets et réalisables. Vous apprendrez à planifier, à structurer et à mettre en œuvre vos projets de manière efficace.",
    className: "md:col-span-2",
  },
  {
    id: 6,
    title: "Intégrer le groupe des jeunes ambitieux",
    desc: "Cette formation vous guide pour intégrer le groupe des jeunes ambitieux millionnaires, en vous fournissant les connaissances et les compétences nécessaires pour réussir financièrement. Vous apprendrez des stratégies d'investissement, de gestion financière, et des habitudes des millionnaires.",
    className: "md:col-span-2",
  },
  {
    id: 7,
    title: "Soutien moral",
    desc: "La formation Soutien moral est conçue pour vous fournir les outils et les techniques nécessaires pour maintenir une bonne santé mentale et soutenir les autres dans des moments difficiles. Vous apprendrez à gérer le stress, à développer la résilience, et à offrir un soutien émotionnel efficace.",
    className: "md:col-span-2",
  },
  {
    id: 8,
    title: "Formation sur le leadership",
    desc: "La Formation sur le leadership est conçue pour vous aider à développer les compétences nécessaires pour devenir un leader efficace. Vous apprendrez les différents styles de leadership, comment motiver et inspirer votre équipe, et comment prendre des décisions stratégiques.",
    className: "md:col-span-2",
  },
  {
    id: 9,
    title: "Formation sur l'entrepreneuriat",
    desc: "La Formation sur l'entrepreneuriat est conçue pour vous guider dans le processus de création et de gestion d'une entreprise. Vous apprendrez à identifier des opportunités d'affaires, à élaborer un plan d'affaires, et à gérer les différents aspects de votre entreprise.",
    className: "md:col-span-2",
  },
  {
    id: 10,
    title: "Accompagnement recherche Travail stage alternance",
    desc: "Cette formation Accompagnement recherche Travail stage alternance est conçue pour vous aider à réussir dans votre recherche d'emploi, de stage ou d'alternance. Vous apprendrez à rédiger un CV et une lettre de motivation efficaces, à préparer des entretiens, et à utiliser les réseaux professionnels pour trouver des opportunités.",
    className: "md:col-span-2",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/instagram.svg",
    path: "https://www.instagram.com/pascal_csr?igsh=aDN6YzNrOHRlOXNo",
  },
  {
    id: 2,
    img: "/tiktok.svg",
    path: "https://www.tiktok.com/@pascal_csr?_t=8mnFTOqm6Qz&_r=1",
  },
  {
    id: 3,
    img: "/facebook.svg",
    path: "https://www.facebook.com/pascalcsr",
  },

  {
    id: 4,
    img: "/snapchat.svg",
    path: "https://www.snapchat.com/add/paskyy22?share_id=l2xy2onpROqHTAnMPtMIiQ&locale=fr_FR",
  },
  {
    id: 5,
    img: "/threads.svg",
    path: "https://www.threads.net/@pascal_csr",
  },
];
