import type { BlogPost } from '@/types';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { CalendarDays, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Dummy data - in a real app, this would come from a CMS or database
const dummyBlogPosts: BlogPost[] = [
  {
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks: A Deep Dive',
    date: '2023-10-26',
    author: 'Your Name',
    excerpt: 'Explore the power of React Hooks, understand their nuances, and learn best practices for building efficient and maintainable components.',
    content: `
<p>React Hooks have revolutionized the way we write React components, allowing us to use state and other React features without writing a class. In this deep dive, we'll explore some of the most commonly used hooks like <code>useState</code>, <code>useEffect</code>, and <code>useContext</code>, as well as more advanced ones like <code>useReducer</code> and <code>useCallback</code>.</p>
<h2 class="text-2xl font-headline font-semibold mt-6 mb-3">Understanding useState</h2>
<p>The <code>useState</code> hook is fundamental for adding state to functional components. It returns a pair: the current state value and a function that lets you update it. We'll look at common patterns and pitfalls.</p>
<pre class="bg-muted p-4 rounded-md my-4 overflow-x-auto"><code class="language-javascript font-code">
const [count, setCount] = useState(0);
</code></pre>
<h2 class="text-2xl font-headline font-semibold mt-6 mb-3">Managing Side Effects with useEffect</h2>
<p><code>useEffect</code> lets you perform side effects in function components. This includes data fetching, subscriptions, or manually changing the DOM. We'll cover cleanup functions and dependency arrays to control when effects run.</p>
<p>Understanding the dependency array is crucial for avoiding infinite loops and optimizing performance. An empty dependency array (<code>[]</code>) means the effect runs once after the initial render and cleans up on unmount. If you omit the dependency array, the effect runs after every render.</p>
<h2 class="text-2xl font-headline font-semibold mt-6 mb-3">Best Practices</h2>
<ul class="list-disc list-inside space-y-2 my-4">
  <li>Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.</li>
  <li>Only call Hooks from React function components or custom Hooks.</li>
  <li>Follow the Rules of Hooks meticulously.</li>
</ul>
<p>By mastering these concepts, you can build more robust, readable, and maintainable React applications.</p>
    `,
    imageUrl: 'https://placehold.co/800x400.png?text=React+Deep+Dive',
    imageHint: 'code lines',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development', 'Hooks'],
  },
  {
    slug: 'nextjs-ssr-vs-ssg',
    title: 'Next.js: SSR vs SSG - Choosing the Right Strategy',
    date: '2023-11-15',
    author: 'Your Name',
    excerpt: 'Understand the differences between Server-Side Rendering (SSR) and Static Site Generation (SSG) in Next.js and when to use each approach.',
    content: `
<p>Next.js offers powerful rendering strategies that can significantly impact your application's performance, SEO, and user experience. Two primary methods are Server-Side Rendering (SSR) and Static Site Generation (SSG). Let's break them down.</p>
<h2 class="text-2xl font-headline font-semibold mt-6 mb-3">Static Site Generation (SSG)</h2>
<p>With SSG, the HTML is generated at build time and can be served directly from a CDN. This results in incredibly fast load times and is great for content that doesn't change often, like blogs, documentation, or marketing pages.</p>
<p>You implement SSG using <code>getStaticProps</code> to fetch data at build time and <code>getStaticPaths</code> for dynamic routes.</p>
<pre class="bg-muted p-4 rounded-md my-4 overflow-x-auto"><code class="language-javascript font-code">
export async function getStaticProps(context) {
  // Fetch data at build time
  return { props: { data } };
}
</code></pre>
<h2 class="text-2xl font-headline font-semibold mt-6 mb-3">Server-Side Rendering (SSR)</h2>
<p>SSR generates HTML on each request. This is useful for pages with highly dynamic content or data that needs to be fresh for every user, such as user dashboards or e-commerce sites with personalized content.</p>
<p>SSR is implemented using <code>getServerSideProps</code>, which fetches data on each request.</p>
<pre class="bg-muted p-4 rounded-md my-4 overflow-x-auto"><code class="language-javascript font-code">
export async function getServerSideProps(context) {
  // Fetch data on each request
  return { props: { data } };
}
</code></pre>
<h2 class="text-2xl font-headline font-semibold mt-6 mb-3">Which to Choose?</h2>
<p>The choice depends on your application's needs:</p>
<ul class="list-disc list-inside space-y-2 my-4">
  <li><strong>SSG:</strong> Best for performance and SEO when content is mostly static or can be pre-rendered. Ideal for blogs, marketing sites, documentation.</li>
  <li><strong>SSR:</strong> Necessary when data is highly dynamic, user-specific, or needs to be up-to-the-minute fresh. Good for dashboards, e-commerce product pages that change frequently.</li>
</ul>
<p>Next.js also allows for a hybrid approach, where you can use SSG for some pages and SSR for others within the same application, offering great flexibility.</p>
    `,
    imageUrl: 'https://placehold.co/800x400.png?text=Next.js+Architecture',
    imageHint: 'network diagram',
    tags: ['Next.js', 'Web Performance', 'SSR', 'SSG', 'Architecture'],
  },
   {
    slug: 'tailwind-css-for-modern-ui',
    title: 'Building Modern UIs with Tailwind CSS',
    date: '2023-12-05',
    author: 'Your Name',
    excerpt: 'A guide to leveraging Tailwind CSS for rapid UI development, customization, and creating responsive designs with ease.',
    content: `
<p>Tailwind CSS has gained immense popularity as a utility-first CSS framework that allows for rapid UI development without writing custom CSS. It provides low-level utility classes that can be composed to build any design, directly in your markup.</p>
<h2 class="text-2xl font-headline font-semibold mt-6 mb-3">Why Tailwind CSS?</h2>
<ul class="list-disc list-inside space-y-2 my-4">
  <li><strong>Rapid Development:</strong> Build complex UIs quickly by applying pre-defined utility classes.</li>
  <li><strong>Highly Customizable:</strong> Tailwind is designed to be customized. You can configure everything from colors and spacing to fonts and breakpoints via its <code>tailwind.config.js</code> file.</li>
  <li><strong>Responsive Design:</strong> Easily create responsive layouts using Tailwind's intuitive responsive prefixes (e.g., <code>sm:</code>, <code>md:</code>, <code>lg:</code>).</li>
  <li><strong>No Naming Conventions:</strong> Say goodbye to figuring out CSS class names. You style elements directly.</li>
  <li><strong>Performance:</strong> With PurgeCSS (or its built-in JIT engine), Tailwind removes unused styles in production, resulting in very small CSS bundles.</li>
</ul>
<h2 class="text-2xl font-headline font-semibold mt-6 mb-3">Getting Started</h2>
<p>Integrating Tailwind into a project is straightforward. For a Next.js project, you typically install Tailwind, PostCSS, and Autoprefixer, then configure them.</p>
<pre class="bg-muted p-4 rounded-md my-4 overflow-x-auto"><code class="language-html font-code">
&lt;!-- Example of a Tailwind styled button --&gt;
&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;
  Click Me
&lt;/button&gt;
</code></pre>
<h2 class="text-2xl font-headline font-semibold mt-6 mb-3">Tips for Productivity</h2>
<ul class="list-disc list-inside space-y-2 my-4">
  <li><strong>Use <code>@apply</code> for Reusable Components:</strong> While utility-first is key, you can extract component classes in your CSS files using <code>@apply</code> for common patterns.</li>
  <li><strong>Leverage the JIT Engine:</strong> The Just-In-Time (JIT) engine compiles styles on-demand, making development faster and enabling arbitrary value support.</li>
  <li><strong>Explore Plugins:</strong> Extend Tailwind's functionality with official and community plugins (e.g., for typography, forms, aspect ratio).</li>
</ul>
<p>Tailwind CSS empowers developers to build beautiful, custom UIs with remarkable speed and flexibility. It's a fantastic tool for modern web development.</p>
    `,
    imageUrl: 'https://placehold.co/800x400.png?text=Tailwind+UI',
    imageHint: 'ui components',
    tags: ['Tailwind CSS', 'CSS', 'UI Design', 'Frontend', 'Frameworks'],
  }
];

export async function generateStaticParams() {
  return dummyBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string): Promise<BlogPost | undefined> {
  return dummyBlogPosts.find((post) => post.slug === slug);
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">Sorry, the blog post you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-8 sm:py-16 max-w-3xl">
      <Button variant="outline" asChild className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>
      {post.imageUrl && (
        <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.imageUrl}
            alt={post.title}
            data-ai-hint={post.imageHint}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="flex items-center">
            <User className="mr-1.5 h-4 w-4" />
            By {post.author}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </header>
      
      <div 
        className="prose prose-quoteless prose-neutral dark:prose-invert max-w-none 
                   prose-headings:font-headline prose-headings:text-foreground 
                   prose-p:text-muted-foreground prose-p:leading-relaxed
                   prose-a:text-accent hover:prose-a:text-primary prose-a:transition-colors
                   prose-strong:text-foreground
                   prose-code:font-code prose-code:bg-muted prose-code:p-1 prose-code:rounded-sm prose-code:text-sm
                   prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-md prose-pre:overflow-x-auto
                   prose-ul:list-disc prose-ul:ml-5 prose-ul:space-y-1
                   prose-ol:list-decimal prose-ol:ml-5 prose-ol:space-y-1"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </article>
  );
}
