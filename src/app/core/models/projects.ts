export interface Projects {
  image: string;
  name: string;
  technologies: Technologies[];
  database?: string;
  description: string;
  repository: string;
}

interface Technologies {
  name: string;
  color: string;
  icon: string;
}
