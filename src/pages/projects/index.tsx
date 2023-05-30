import { FC } from "react";
import Projects from "@component/components/projects/projects";
import { Project } from "@component/typings";

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage: FC<ProjectsPageProps> = ({ projects }) => {
  return <Projects projects={projects} />;
};

export default ProjectsPage;
