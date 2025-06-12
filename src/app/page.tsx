import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Briefcase, Lightbulb, MessageCircle, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const keySkills = [
  { name: "Next.js", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0-7.07 17.07"/><path d="M12 22a10 10 0 0 0 7.07-17.07"/><path d="M12 2L12 22"/><path d="M2 12L22 12"/></svg> }, 
  { name: "React", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="12" r="6.5"/><path d="M12 2v2m0 16v2m-9-9H1m18 0h-2m-2.76 6.24l-1.42-1.42M6.18 6.18l-1.42-1.42m10.4 10.4l1.42 1.42m-13.16-1.42l1.42-1.42"/></svg> }, 
  { name: "TypeScript", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.5V18a2 2 0 0 0 2 2h1.5M4 9.5V6a2 2 0 0 1 2-2h1.5M20 14.5V18a2 2 0 0 1-2 2h-1.5M20 9.5V6a2 2 0 0 0-2-2h-1.5M9 16v-1.5A2.5 2.5 0 0 0 6.5 12H4M15 16v-1.5A2.5 2.5 0 0 1 17.5 12H20M9 8V9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8"/></svg> }, 
  { name: "Node.js", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.907 8.679A8.464 8.464 0 0 0 12.529.262a1.075 1.075 0 0 0-1.058 0 8.464 8.464 0 0 0-8.378 8.417v6.642a1.075 1.075 0 0 0 .54 1.004l7.84 4.408a1.075 1.075 0 0 0 1.058 0l7.84-4.408a1.075 1.075 0 0 0 .54-1.004V8.68zm-9.428-5.64a6.313 6.313 0 0 1 2.042 0L12 7.408l-1.521-4.369zM3.607 9.22L12 13.628l8.393-4.408L12 4.812 3.607 9.22zM5.203 15.32L12 11.49l6.797 3.83v3.32L12 20.812l-6.797-2.162v-3.33z"/></svg> }, 
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <section className="text-center mb-16 sm:mb-24">
        <Image 
          src="https://placehold.co/150x150.png" 
          alt="Your Name"
          data-ai-hint="professional portrait" 
          width={150} 
          height={150} 
          className="rounded-full mx-auto mb-6 shadow-lg animate-slide-in-up-subtle"
          style={{ animationDelay: '0s' }}
        />
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold mb-4 animate-slide-in-up-subtle"
          style={{ animationDelay: '0.2s' }}
        >
          Welcome to Code Canvas
        </h1>
        <p 
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-in-up-subtle"
          style={{ animationDelay: '0.4s' }}
        >
          I'm a passionate software developer specializing in creating modern, responsive, and user-friendly web applications. Explore my work and let's build something amazing together.
        </p>
        <div 
          className="space-x-4 animate-slide-in-up-subtle"
          style={{ animationDelay: '0.6s' }}
        >
          <Button size="lg" asChild>
            <Link href="/projects">View My Projects <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <section className="mb-16 sm:mb-24">
        <h2 className="text-3xl sm:text-4xl font-headline font-semibold text-center mb-10 sm:mb-12">My Core Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {keySkills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-initial-scale-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit mb-3 text-accent">
                  {skill.icon}
                </div>
                <CardTitle className="font-headline">{skill.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Proficient in building dynamic and scalable applications with {skill.name}.</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div>
          <Image 
            src="https://placehold.co/600x400.png"
            data-ai-hint="modern workspace" 
            alt="My Workspace" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-headline font-semibold">Why Work With Me?</h2>
          <p className="text-muted-foreground text-lg">
            I combine technical expertise with a creative approach to problem-solving. My focus is on delivering high-quality, maintainable code and intuitive user experiences.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Lightbulb className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
              <span>Innovative Solutions: Always exploring new technologies to deliver cutting-edge products.</span>
            </li>
            <li className="flex items-start">
              <UserCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
              <span>Client-Focused: I prioritize understanding your needs to ensure the final product meets your vision.</span>
            </li>
            <li className="flex items-start">
              <MessageCircle className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
              <span>Clear Communication: Keeping you updated throughout the development process.</span>
            </li>
          </ul>
          <Button asChild variant="link" className="text-accent p-0 text-lg">
            <Link href="/about">Learn More About Me <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
