export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  deploy?: string;
};

export interface ProjectsListProps {
  projects: Project[];
  title?: string;
}