export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  imageHint?: string;
  tags: string[];
  liveLink?: string;
  sourceLink?: string;
  category: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  imageHint?: string;
  tags: string[];
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Languages' | 'Databases' | 'Other';
  icon?: React.ReactNode; // Optional: for custom icons or Lucide icons
}
