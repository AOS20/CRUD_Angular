

export interface Experience {
  id?: number;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
}

export interface Education {
  id?: number;
  school: string;
  degree: string;
  startDate: Date;
  endDate?: Date;
}

export interface Skill {
  id?: number;
  name: string;
  level: number; // del 1 al 5
}

export interface Project {
  id?: number;
  name: string;
  description: string;
  technologies: string[];
}
