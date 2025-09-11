export interface Resource {
  id: string
  title: string
  desc: string
  type: 'PDF' | 'ZIP' | 'DOCX'
  size: string
  href: string
  tags: string[]
}

export interface Tutorial {
  slug: string
  title: string
  runtime: string
  thumb: string
  tags: string[]
  level: 'Beginner' | 'Intermediate' | 'Pro'
  excerpt?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  cover: string
  author?: string
}

export const resources: Resource[] = [
  {
    id: "kit-list",
    title: "Prosthetics Starter Kit List",
    desc: "Essential tools & materials I recommend for beginners",
    type: "PDF",
    size: "320 KB",
    href: "/learn/resources/kit-list.pdf",
    tags: ["Beginner"]
  },
  {
    id: "pros-aide-template",
    title: "Pros-Aide Transfer Template",
    desc: "Printable tray template for perfect transfers",
    type: "PDF",
    size: "180 KB",
    href: "/learn/resources/pros-aide-template.pdf",
    tags: ["Pro", "Transfers"]
  }
]

export const tutorials: Tutorial[] = [
  {
    slug: "quick-wound-7-min",
    title: "Quick Wound in 7 Minutes",
    runtime: "08:41",
    thumb: "/learn/tutorials/quick-wound.jpg",
    tags: ["Beginner", "Edges", "Wounds"],
    level: "Beginner",
    excerpt: "Learn to create a camera-ready wound with perfect edges in under 8 minutes."
  },
  {
    slug: "aging-mini",
    title: "Aging Mini—Stipple & Paint",
    runtime: "12:05",
    thumb: "/learn/tutorials/aging-mini.jpg",
    tags: ["Aging", "Coloration"],
    level: "Intermediate",
    excerpt: "Master stipple sponge technique and alcohol paint aging effects."
  },
  {
    slug: "pros-aide-transfers-demo",
    title: "Pros-Aide Transfers: Home Setup",
    runtime: "15:30",
    thumb: "/learn/tutorials/transfers-demo.jpg",
    tags: ["Transfers", "Pro"],
    level: "Pro",
    excerpt: "Professional transfer creation from sculpt to application."
  },
  {
    slug: "edge-blending-secrets",
    title: "Edge Blending Secrets",
    runtime: "09:15",
    thumb: "/learn/tutorials/edge-blending.jpg",
    tags: ["Edges", "Intermediate"],
    level: "Intermediate",
    excerpt: "Invisible edge techniques that work in harsh lighting conditions."
  }
]

// Blog posts are now loaded dynamically from /content/blog/ folder
// See /lib/blog.ts for blog management functions

// Filter functions for client-side filtering
export const filterResourcesByTag = (resources: Resource[], tag: string): Resource[] => {
  if (tag === 'All') return resources
  return resources.filter(resource => resource.tags.includes(tag))
}

export const filterTutorialsByTag = (tutorials: Tutorial[], tag: string): Tutorial[] => {
  if (tag === 'All') return tutorials
  return tutorials.filter(tutorial => tutorial.tags.includes(tag) || tutorial.level === tag)
}

export const searchResources = (resources: Resource[], query: string): Resource[] => {
  if (!query) return resources
  const lowercaseQuery = query.toLowerCase()
  return resources.filter(resource => 
    resource.title.toLowerCase().includes(lowercaseQuery) ||
    resource.desc.toLowerCase().includes(lowercaseQuery) ||
    resource.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

export const searchTutorials = (tutorials: Tutorial[], query: string): Tutorial[] => {
  if (!query) return tutorials
  const lowercaseQuery = query.toLowerCase()
  return tutorials.filter(tutorial => 
    tutorial.title.toLowerCase().includes(lowercaseQuery) ||
    tutorial.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}
