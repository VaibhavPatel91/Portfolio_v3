import { notFound } from 'next/navigation'
import { projects } from '@/constants/projects'
import CaseStudyContent from '@/components/CaseStudyContent'

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: Props) {
  const resolvedParams = await params
  const { slug } = resolvedParams
  
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  // Determine Next Project for the footer CTA
  const currentIndex = projects.findIndex(p => p.slug === slug)
  const nextProject = projects[currentIndex + 1] || projects[0]

  return <CaseStudyContent project={project} nextProject={nextProject} />
}
