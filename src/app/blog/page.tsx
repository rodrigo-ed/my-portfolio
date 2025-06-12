import { BlogPostPreview } from '@/components/blog-post-preview';
import type { BlogPost } from '@/types';

const dummyBlogPosts: BlogPost[] = [
  {
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks: A Deep Dive',
    date: '2023-10-26',
    author: 'Your Name',
    excerpt: 'Explore the power of React Hooks, understand their nuances, and learn best practices for building efficient and maintainable components.',
    content: 'Full content of the blog post about React Hooks...',
    imageUrl: 'https://placehold.co/600x400.png?text=React+Hooks',
    imageHint: 'code abstract',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
  },
  {
    slug: 'nextjs-ssr-vs-ssg',
    title: 'Next.js: SSR vs SSG - Choosing the Right Strategy',
    date: '2023-11-15',
    author: 'Your Name',
    excerpt: 'Understand the differences between Server-Side Rendering (SSR) and Static Site Generation (SSG) in Next.js and when to use each approach.',
    content: 'Full content of the blog post about Next.js rendering strategies...',
    imageUrl: 'https://placehold.co/600x400.png?text=Next.js+Rendering',
    imageHint: 'server technology',
    tags: ['Next.js', 'Web Performance', 'SSR', 'SSG'],
  },
  {
    slug: 'tailwind-css-for-modern-ui',
    title: 'Building Modern UIs with Tailwind CSS',
    date: '2023-12-05',
    author: 'Your Name',
    excerpt: 'A guide to leveraging Tailwind CSS for rapid UI development, customization, and creating responsive designs with ease.',
    content: 'Full content of the blog post about Tailwind CSS...',
    imageUrl: 'https://placehold.co/600x400.png?text=Tailwind+CSS',
    imageHint: 'design system',
    tags: ['Tailwind CSS', 'CSS', 'UI Design', 'Frontend'],
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <header className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-headline font-bold mb-4">My Blog</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Sharing insights on technology, web development, personal growth, and industry trends.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {dummyBlogPosts.map((post) => (
          <BlogPostPreview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
