import type { BlogPost } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CalendarDays, User } from 'lucide-react';

interface BlogPostPreviewProps {
  post: BlogPost;
}

export function BlogPostPreview({ post }: BlogPostPreviewProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 ease-in-out hover:shadow-xl animate-scale-up-hover">
      {post.imageUrl && (
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={post.imageUrl}
            alt={post.title}
            data-ai-hint={post.imageHint}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <CardHeader>
        <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
          <CardTitle className="font-headline text-xl mb-1">{post.title}</CardTitle>
        </Link>
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="flex items-center">
            <User className="mr-1.5 h-3.5 w-3.5" />
            {post.author}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm mb-4 line-clamp-3">{post.excerpt}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="text-accent p-0">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
