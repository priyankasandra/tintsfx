export interface Service {
  id: string
  title: string
  description: string
  href: string
  imgSrc?: string
  ctaText: string
}

export const services: Service[] = [
  {
    id: 'film-department-hire',
    title: 'Film Department Hire',
    description: 'Bring Priyanka and team on set for prosthetic applications, crowd makeup, or hero characters. Professional on-location services for film and television productions.',
    href: '/contact',
    imgSrc: '/services/film-dept.jpg',
    ctaText: 'Request a Quote'
  },
  {
    id: 'design-preproduction',
    title: 'Design & Pre-Production',
    description: 'Lifecasts, sculpture, molds, tests. Complete pre-production services from concept sketches to final prosthetic pieces ready for filming.',
    href: '/contact',
    imgSrc: '/services/design-pre.jpg',
    ctaText: 'Start Consultation'
  },
  {
    id: 'on-set-application',
    title: 'On-Set Application',
    description: 'Application, blending, coloration, sweat/heat management, removals. Expert on-set prosthetic application and maintenance throughout production.',
    href: '/contact',
    imgSrc: '/services/on-set.jpg',
    ctaText: 'Hire On-Set'
  },
  {
    id: 'consultation',
    title: '1:1 Consultation',
    description: 'Zoom or in-person guidance for filmmakers, MUAs, and students. Professional mentoring on workflow, materials, and advanced techniques.',
    href: '/contact',
    imgSrc: '/services/consult.jpg',
    ctaText: 'Book Session'
  }
]

export interface WorkflowStep {
  id: string
  title: string
  description: string
  icon: string
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'concept',
    title: 'Concept',
    description: 'Character design and reference development',
    icon: '💡'
  },
  {
    id: 'sculpt',
    title: 'Sculpt',
    description: 'Clay sculpture and detail refinement',
    icon: '🎨'
  },
  {
    id: 'mold',
    title: 'Mold',
    description: 'Creating negative molds for production',
    icon: '🔧'
  },
  {
    id: 'cast',
    title: 'Cast',
    description: 'Silicone appliance casting and finishing',
    icon: '⚒️'
  },
  {
    id: 'apply',
    title: 'Apply',
    description: 'On-set application and blending',
    icon: '✨'
  },
  {
    id: 'shoot',
    title: 'Shoot',
    description: 'Camera-ready performance and touch-ups',
    icon: '🎬'
  }
]
