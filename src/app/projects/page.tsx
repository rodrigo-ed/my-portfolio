import { ProjectCard } from '@/components/project-card';
import type { Project } from '@/types';

const dummyProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with Next.js, Stripe, and Tailwind CSS.',
    longDescription: 'Detailed description of the e-commerce platform, challenges faced, solutions implemented, and key features like user authentication, product management, shopping cart, and payment integration.',
    imageUrl: 'https://placehold.co/600x400.png?text=E-commerce',
    imageHint: 'online store',
    tags: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Tailwind CSS', 'Prisma'],
    liveLink: '#',
    sourceLink: '#',
    category: 'Web Application',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management tool built with React and Firebase.',
    longDescription: 'In-depth look at the task management app, focusing on real-time collaboration features, data synchronization with Firebase, and user interface design for productivity.',
    imageUrl: 'https://placehold.co/600x400.png?text=Task+App',
    imageHint: 'productivity tool',
    tags: ['React', 'Firebase', 'JavaScript', 'Material UI'],
    liveLink: '#',
    category: 'Web Application',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'This very portfolio website, designed to showcase skills and projects.',
    longDescription: 'An overview of the development process for this portfolio, highlighting the choice of technologies (Next.js, ShadCN UI, Tailwind CSS), design considerations, and deployment strategy.',
    imageUrl: 'https://placehold.co/600x400.png?text=Portfolio',
    imageHint: 'personal website',
    tags: ['Next.js', 'Tailwind CSS', 'ShadCN UI', 'TypeScript'],
    sourceLink: '#',
    category: 'Web Development',
  },
  {
    id: '4',
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets using D3.js and React.',
    longDescription: 'Exploring the challenges of building an interactive data visualization dashboard. Covers data processing, chart rendering with D3.js integrated into React, and performance optimization for large datasets.',
    imageUrl: 'https://placehold.co/600x400.png?text=Dashboard',
    imageHint: 'charts graphs',
    tags: ['React', 'D3.js', 'Node.js', 'Express'],
    liveLink: '#',
    category: 'Data Science',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <header className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-headline font-bold mb-4">My Projects</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of my work, demonstrating my skills in web development, design, and problem-solving.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {dummyProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
