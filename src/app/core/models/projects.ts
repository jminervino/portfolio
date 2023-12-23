export interface Projects {
  image: string;
  name: string;
  technologies: Technologies[];
  database?: string;
  description: string;
  repository: string;
  ano: string;
}

export interface Technologies {
  name: string;
  color: string;
  icon: string;
  documentation?: string;
}
