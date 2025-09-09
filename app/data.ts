type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const NAME = 'Josh Javier'
export const ROLE = 'Full Stack Developer'
export const INTRODUCTION =
  'I build fast, accessible, and user-friendly web applications, combining front-end precision with back-end efficiency to deliver seamless digital experiences.'

export const PROJECTS: Project[] = [
  {
    name: 'The Hangman Game',
    description:
      'Interactive word-guessing game built with the finite state machine pattern.',
    link: 'https://hangman-game-fem.pages.dev/',
    video:
      'https://res.cloudinary.com/dw2uqa4iu/video/upload/v1757445692/demo-hangman-game-compressed_tm2unj.mp4',
    id: 'project1',
  },
  {
    name: 'Game Tiles Assemble',
    description: 'Internal tool for assembling game tiles on marketing pages.',
    link: 'https://gametiles.vercel.app/',
    video:
      'https://res.cloudinary.com/dw2uqa4iu/video/upload/v1757445418/github.com/joshjavier/portfolio/demo-game-tiles-compressed_lywes6.mp4',
    id: 'project2',
  },
  {
    name: 'Image Compressroar',
    description:
      'Internal tool for compressing images entirely on the client side.',
    link: 'https://compressroar.netlify.app/',
    video:
      'https://res.cloudinary.com/dw2uqa4iu/video/upload/v1757445581/github.com/joshjavier/portfolio/demo-image-compressroar-compressed_lljmn0.mp4',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'BetMGM',
    title: 'Web Developer',
    start: '2023',
    end: 'Present',
    link: '#',
    id: 'work1',
  },
  {
    company: 'Spiralytics',
    title: 'Content Marketing & Automation Strategist',
    start: '2019',
    end: '2023',
    link: '#',
    id: 'work2',
  },
  {
    company: 'Spiralytics',
    title: 'Content Marketing Specialist',
    start: '2017',
    end: '2019',
    link: '#',
    id: 'work3',
  },
]

// export const BLOG_POSTS: BlogPost[] = [
//   {
//     title: 'Exploring the Intersection of Design, AI, and Design Engineering',
//     description: 'How AI is changing the way we design',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-1',
//   },
//   {
//     title: 'Why I left my job to start my own company',
//     description:
//       'A deep dive into my decision to leave my job and start my own company',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-2',
//   },
//   {
//     title: 'What I learned from my first year of freelancing',
//     description:
//       'A look back at my first year of freelancing and what I learned',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-3',
//   },
//   {
//     title: 'How to Export Metadata from MDX for Next.js SEO',
//     description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
//     link: '/blog/example-mdx-metadata',
//     uid: 'blog-4',
//   },
// ]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/joshjavier',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/joshjavier/',
  },
  {
    label: 'Frontend Mentor',
    link: 'https://www.frontendmentor.io/profile/joshjavier',
  },
]

export const EMAIL = 'joshjavier12@gmail.com'
