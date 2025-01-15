const projectsList = [
  {
    name: "Progress Pulse",
    stacks: ["React Native", "Expo", "Node.JS", "Express.JS", "Redux"],
    description:
      "Progress Pulse est une application mobile de musculation développée en équipe de trois personnes sur une période de deux semaines. Elle permet aux utilisateurs de suivre leur progression séance après séance. Les utilisateurs peuvent créer des séances personnalisées ou préconçues. Ils peuvent également réaliser leurs séances en temps réel avec un minuteur pour gérer le temps de repos. Ils ont accès à un historique détaillé de leurs séances pour suivre leur progression, ainsi qu'à un suivi de leur poids.",
    link: "./videos/progresspulse.mp4",
    image: "progresspulse-logo.png",
    qrCode: "/qr-code-progresspulse.svg",
    github: "https://github.com/pierreGleize/frontend-progressPulse",
    isMobile: true,
    aos: "fade-right",
  },
  {
    name: "Hackatweet",
    stacks: ["Next.js", "Node.JS", "Express.JS", "Redux"],
    description:
      "Il s'agit d'une réplique du site Twitter, développée en équipe de trois personnes en deux jours. Le projet comprend un système de connexion, la possibilité de publier des tweets, de les liker, et d'ajouter des hashtags. De plus, nous avons implémenté une fonctionnalité de classification des tweets par catégorie.",
    link: "https://hackatweet-frontend-delta.vercel.app/",
    image: "tweeter-logo.png",
    github: "https://github.com/pierreGleize/hackatweet-frontend",
    isMobile: false,
    aos: "fade-left",
  },
  {
    name: "Morning News",
    stacks: ["Next.js", "Node.JS", "Express.JS", "Redux"],
    description:
      "Ce site met en avant les articles les plus récents, offrant aux utilisateurs la possibilité de les liker et de masquer ceux qui ne les intéressent pas. Les articles sont récupérés en temps réel via l'API News API, permettant une expérience personnalisée et dynamique.",
    link: "https://morningnews-frontend-lyart.vercel.app/",
    image: "morning-news.webp",
    github: "https://github.com/pierreGleize/morningnews-frontend",
    isMobile: false,
    aos: "fade-right",
  },
  {
    name: "My Moviz",
    stacks: ["Next.js", "Node.JS", "Express.JS", "Redux"],
    description:
      "Ce site met en avant les derniers films populaires en s'appuyant sur l'API TheMovieDB. Grâce à l'intégration de Redux Persist, les films que vous aimez et les notes que vous attribuez sont sauvegardés de manière persistante pour une expérience utilisateur optimisée.",
    image: "mymoviz.webp",
    link: "https://mymoviz-frontend-six-iota.vercel.app/",
    github: "https://github.com/pierreGleize/mymoviz-frontend",
    isMobile: false,
    aos: "fade-left",
  },
  {
    name: "Pokedex",
    stacks: ["HTML", "CSS", "Javascript"],
    description:
      "Ce projet recrée les fonctionnalités d’un Pokédex en utilisant l’API PokeAPI pour récupérer les informations des Pokémon. Les utilisateurs peuvent rechercher un Pokémon spécifique grâce à un champ de saisie dédié et cliquer sur son image pour découvrir sa version shiny avec ses couleurs alternatives.",
    image: "pokedex.png",
    link: "https://pokedex-v2-iota.vercel.app/",
    github: "https://github.com/pierreGleize/pokedex-V2",
    isMobile: false,
    aos: "fade-right",
  },
  {
    name: "Noon",
    stacks: ["HTML", "CSS", "JavaScript"],
    description:
      "Noon est un site au design moderne que j'ai conçu lors de mes débuts en développement web pour perfectionner mes compétences. L'objectif était de recréer (cloner) un site existant en mettant l'accent sur la fidélité de la reproduction.",
    link: "https://noon-ai.netlify.app",
    image: "Noon.webp",
    github: "https://github.com/pierreGleize/Noon",
    isMobile: false,
    aos: "fade-left",
  },
];
export default projectsList;
