import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode
}

export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools'
  level: number // 1-5 scale
}

export interface Experience {
  company: string
  position: string
  location: string
  period: string
  current: boolean
  description: string[]
  technologies: string[]
}

export interface FormData {
  name: string
  email: string
  message: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string
  featured: boolean
  completedDate: string
}