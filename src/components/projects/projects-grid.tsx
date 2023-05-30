import { FC } from "react";
import { Project } from "@component/typings";
import classes from "./projects-grid.module.scss";
import ProjectItem from "@component/components/projects/project-item";

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGrid: FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <ul className={classes.grid}>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.id} />
      ))}
    </ul>
  );
};

export default ProjectsGrid;
