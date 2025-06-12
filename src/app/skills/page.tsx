import { SkillDisplay } from '@/components/skill-display';
import type { Skill } from '@/types';
import { Code, Database, Cog, TerminalSquare, Palette } from 'lucide-react'; // Example icons

const dummySkills: Skill[] = [
  // Languages
  { name: 'JavaScript (ES6+)', proficiency: 95, category: 'Languages', icon: <Code /> },
  { name: 'TypeScript', proficiency: 90, category: 'Languages', icon: <Code /> },
  { name: 'HTML5', proficiency: 98, category: 'Languages', icon: <Code /> },
  { name: 'CSS3/SCSS', proficiency: 95, category: 'Languages', icon: <Palette /> },
  { name: 'Python', proficiency: 75, category: 'Languages', icon: <Code /> },
  // Frontend
  { name: 'React', proficiency: 95, category: 'Frontend', icon: <Cog /> },
  { name: 'Next.js', proficiency: 90, category: 'Frontend', icon: <Cog /> },
  { name: 'Redux/ Zustand', proficiency: 85, category: 'Frontend', icon: <Cog /> },
  { name: 'Tailwind CSS', proficiency: 95, category: 'Frontend', icon: <Palette /> },
  { name: 'Material UI / ShadCN UI', proficiency: 88, category: 'Frontend', icon: <Palette /> },
  // Backend
  { name: 'Node.js', proficiency: 85, category: 'Backend', icon: <Cog /> },
  { name: 'Express.js', proficiency: 80, category: 'Backend', icon: <Cog /> },
  { name: 'REST APIs / GraphQL', proficiency: 88, category: 'Backend', icon: <Cog /> },
  // Databases
  { name: 'PostgreSQL', proficiency: 75, category: 'Databases', icon: <Database /> },
  { name: 'MongoDB', proficiency: 70, category: 'Databases', icon: <Database /> },
  { name: 'Firebase', proficiency: 80, category: 'Databases', icon: <Database /> },
  // Tools
  { name: 'Git & GitHub', proficiency: 95, category: 'Tools', icon: <TerminalSquare /> },
  { name: 'Docker', proficiency: 70, category: 'Tools', icon: <TerminalSquare /> },
  { name: 'Webpack / Vite', proficiency: 80, category: 'Tools', icon: <TerminalSquare /> },
  { name: 'Jest / React Testing Library', proficiency: 75, category: 'Tools', icon: <TerminalSquare /> },
];

const skillCategories: Skill['category'][] = ['Languages', 'Frontend', 'Backend', 'Databases', 'Tools', 'Other'];

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <header className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-headline font-bold mb-4">My Skills</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical capabilities and proficiency levels across various technologies and tools.
        </p>
      </header>

      {skillCategories.map(category => {
        const skillsInCategory = dummySkills.filter(skill => skill.category === category);
        if (skillsInCategory.length === 0) return null;

        return (
          <section key={category} className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-headline font-semibold mb-6 sm:mb-8 border-b pb-3">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {skillsInCategory.map((skill) => (
                <SkillDisplay key={skill.name} skill={skill} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
