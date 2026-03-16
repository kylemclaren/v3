import type {
  AnalyticsConfig,
  CommentConfig,
  GithubConfig,
  Link,
  PhotosConfig,
  PostConfig,
  ProjectConfig,
  Site,
  SkillsShowcaseConfig,
  SocialLink,
  TagsConfig,
} from '~/types'

//--- Readme Page Config ---
export const SITE: Site = {
  title: 'Kyle McLaren',
  description:
    'Software engineer at Fly.io. Building cloud sandboxes, AI-powered developer tools, and open source infrastructure.',
  website: 'https://kylemclaren.com/',
  lang: 'en',
  base: '/',
  author: 'Kyle McLaren',
  ogImage: '/og-image.webp',
  transition: false,
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'Work',
    url: '/work',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
]

export const FOOTER_LINKS: Link[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Work',
    url: '/work',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/kylemclaren',
    icon: 'icon-[ri--github-fill]',
    count: 65,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/kylemclarenza',
    icon: 'icon-[ri--linkedin-fill]',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/kylemclaren',
    icon: 'icon-[ri--twitter-x-fill]',
  },
]

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: true,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'Go',
          icon: 'icon-[simple-icons--go]',
          url: 'https://go.dev/',
        },
        {
          name: 'TypeScript',
          icon: 'icon-[simple-icons--typescript]',
          url: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Python',
          icon: 'icon-[simple-icons--python]',
          url: 'https://www.python.org/',
        },
        {
          name: 'Docker',
          icon: 'icon-[simple-icons--docker]',
          url: 'https://www.docker.com/',
        },
        {
          name: 'Terraform',
          icon: 'icon-[simple-icons--terraform]',
          url: 'https://www.terraform.io/',
        },
        {
          name: 'Tailscale',
          icon: 'icon-[simple-icons--tailscale]',
          url: 'https://tailscale.com/',
        },
        {
          name: 'GitHub Actions',
          icon: 'icon-[simple-icons--githubactions]',
          url: 'https://github.com/features/actions',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'PostgreSQL',
          icon: 'icon-[simple-icons--postgresql]',
          url: 'https://www.postgresql.org/',
        },
        {
          name: 'Elasticsearch',
          icon: 'icon-[simple-icons--elasticsearch]',
          url: 'https://www.elastic.co/',
        },
        {
          name: 'Redis',
          icon: 'icon-[simple-icons--redis]',
          url: 'https://redis.io/',
        },
        {
          name: 'Grafana',
          icon: 'icon-[simple-icons--grafana]',
          url: 'https://grafana.com/',
        },
        {
          name: 'Prometheus',
          icon: 'icon-[simple-icons--prometheus]',
          url: 'https://prometheus.io/',
        },
        {
          name: 'Kubernetes',
          icon: 'icon-[simple-icons--kubernetes]',
          url: 'https://kubernetes.io/',
        },
      ],
    },
    {
      direction: 'left',
      skills: [
        {
          name: 'Linux',
          icon: 'icon-[simple-icons--linux]',
          url: 'https://www.linux.org/',
        },
        {
          name: 'Git',
          icon: 'icon-[simple-icons--git]',
          url: 'https://git-scm.com/',
        },
        {
          name: 'Node.js',
          icon: 'icon-[simple-icons--nodedotjs]',
          url: 'https://nodejs.org/',
        },
        {
          name: 'Cloudflare',
          icon: 'icon-[simple-icons--cloudflare]',
          url: 'https://www.cloudflare.com/',
        },
        {
          name: 'AWS',
          icon: 'icon-[simple-icons--amazonwebservices]',
          url: 'https://aws.amazon.com/',
        },
        {
          name: 'VS Code',
          icon: 'icon-[simple-icons--visualstudiocode]',
          url: 'https://code.visualstudio.com/',
        },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {string} GITHUB_USERNAME - GITHUB用户名 / GitHub username
 * @property {boolean} TOOLTIP_ENABLED - 是否开启Tooltip功能 / Whether to enable Github Tooltip features
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  GITHUB_USERNAME: 'kylemclaren',
  TOOLTIP_ENABLED: true,
}

//--- Posts Page Config ---
export const POSTS_CONFIG: PostConfig = {
  title: 'Posts',
  description: 'Posts by Kyle McLaren',
  introduce: 'Thoughts on DevOps, SRE, cloud infrastructure, and the tools I use.',
  author: 'Kyle McLaren',
  homePageConfig: {
    size: 2,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
    coverLayout: 'right',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  ogImageUseCover: false,
  postType: 'metaOnly',
  imageDarkenInDark: true,
  readMoreText: 'Read more',
  prevPageText: 'Previous',
  nextPageText: 'Next',
  tocText: 'On this page',
  backToPostsText: 'Back to Posts',
  nextPostText: 'Next Post',
  prevPostText: 'Previous Post',
  recommendText: 'REC',
  wordCountView: true,
}

export const COMMENT_CONFIG: CommentConfig = {
  enabled: false,
  system: 'none',
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Tags',
  description: 'All tags of Posts',
  introduce: 'All the tags for posts are here, you can click to filter them.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'Projects',
  description: 'Things I\'ve built.',
  introduce: 'Things I\'ve built.',
}

export const PHOTOS_CONFIG: PhotosConfig = {
  title: 'Photos',
  description: 'Here I will record some photos taken in daily life.',
  introduce: 'Here I will record some photos taken in daily life.',
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  vercount: {
    enabled: true,
  },
  umami: {
    enabled: false,
    websiteId: 'Your websiteId in umami',
    serverUrl: 'https://cloud.umami.is/script.js',
  },
}
