import { FC } from "react";
import ProjectsGrid from "@component/components/projects/projects-grid";
import { Project } from "@component/typings";
import classes from "./projects.module.scss";

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className={classes.posts}>
      <h1>All Projects</h1>
      <ProjectsGrid projects={[]} />
    </section>
  );
};

export default Projects;
