import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download, Zap, Coffee, BookOpen } from 'lucide-react';
import Link from 'next/link';

const coreValues = [
  { title: 'Continuous Learning', description: "I'm always eager to learn new technologies and improve my skills.", icon: <BookOpen className="h-6 w-6 text-accent" /> },
  { title: 'Problem Solver', description: 'I enjoy tackling complex challenges and finding elegant solutions.', icon: <Zap className="h-6 w-6 text-accent" /> },
  { title: 'Detail-Oriented', description: 'Passionate about crafting pixel-perfect UIs and robust backend systems.', icon: <CheckCircle className="h-6 w-6 text-accent" /> },
  { title: 'Team Player', description: 'I thrive in collaborative environments and value open communication.', icon: <Coffee className="h-6 w-6 text-accent" /> },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <header className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-headline font-bold mb-4">About Me</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover more about my journey, skills, and what drives my passion for technology.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-24">
        <div className="relative group">
          <Image
            src="https://placehold.co/500x600.png"
            alt="Your Name - Professional"
            data-ai-hint="developer coding"
            width={500}
            height={600}
            className="rounded-xl shadow-2xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div>
          <h2 className="text-3xl font-headline font-semibold mb-6">My Story</h2>
          <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
            Hello! I'm a dedicated software developer with a strong foundation in modern web technologies. My journey into the world of coding began with a fascination for how websites and applications come to life. Since then, I've been on a relentless quest to build intuitive, efficient, and impactful digital experiences.
          </p>
          <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
            I specialize in full-stack development, with a particular focus on the JavaScript ecosystem, including React, Next.js, and Node.js. I believe in writing clean, scalable, and well-documented code.
          </p>
          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
            Beyond coding, I'm passionate about user experience design and ensuring that every project I work on is not only functional but also enjoyable to use.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Let's Connect</Link>
          </Button>
        </div>
      </section>

      <section className="mb-16 sm:mb-24">
        <h2 className="text-3xl sm:text-4xl font-headline font-semibold text-center mb-10 sm:mb-12">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {coreValues.map((value) => (
            <Card key={value.title} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                 <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-3">
                    {value.icon}
                 </div>
                <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="text-center bg-secondary py-12 sm:py-20 rounded-xl shadow-inner">
        <h2 className="text-3xl sm:text-4xl font-headline font-semibold mb-6">Interests & Hobbies</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
          When I'm not coding, I enjoy exploring new hiking trails, diving into sci-fi novels, and experimenting with new recipes in the kitchen. I also contribute to open-source projects when I can.
        </p>
        {/* Optional: Add a call to action to download CV or view skills */}
        <div className="space-x-4">
            <Button variant="default" size="lg" asChild>
                <Link href="/skills">View My Skills</Link>
            </Button>
            {/* <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download CV
            </Button> */}
        </div>
      </section>
    </div>
  );
}
