import Link from 'next/link';
import { CodeXml, Home, User, Briefcase, Newspaper, Mail, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/about', label: 'About', icon: User },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/skills', label: 'Skills', icon: Target },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          <CodeXml className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-200" />
          <span className="font-bold font-headline text-lg group-hover:text-accent transition-colors">Code Canvas</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-1 sm:space-x-2">
          {navLinks.map((link) => (
            <Button 
              key={link.href} 
              variant="ghost" 
              asChild 
              className="text-sm font-medium text-muted-foreground hover:text-foreground data-[active]:text-foreground hover:scale-[1.03]"
            >
              <Link href={link.href} className="group">
                <link.icon className="mr-2 h-4 w-4 sm:hidden group-hover:scale-110 transition-transform duration-200" /> 
                <span className="hidden sm:inline">{link.label}</span> 
                 <span className="sm:hidden inline text-xs">{link.label}</span> 
              </Link>
            </Button>
          ))}
        </nav>
        <Button variant="default" asChild className="hover:scale-[1.03]">
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </div>
    </header>
  );
}
