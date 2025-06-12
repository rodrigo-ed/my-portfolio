import type { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] animate-scale-up-hover">
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={project.imageUrl}
          alt={project.title}
          data-ai-hint={project.imageHint}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
        <CardDescription className="text-sm h-20 overflow-hidden text-ellipsis">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-2">
        {project.liveLink && (
          <Button variant="outline" size="sm" asChild>
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live
            </Link>
          </Button>
        )}
        {project.sourceLink && (
          <Button variant="ghost" size="sm" asChild>
            <Link href={project.sourceLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Source
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
