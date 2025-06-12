import type { Skill } from '@/types';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillDisplayProps {
  skill: Skill;
}

export function SkillDisplay({ skill }: SkillDisplayProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-headline flex items-center">
            {skill.icon && <span className="mr-2 text-accent">{skill.icon}</span>}
            {skill.name}
          </CardTitle>
          <span className="text-sm font-medium text-primary">{skill.proficiency}%</span>
        </div>
      </CardHeader>
      <CardContent>
        <Progress value={skill.proficiency} aria-label={`${skill.name} proficiency ${skill.proficiency}%`} className="h-3"/>
      </CardContent>
    </Card>
  );
}
