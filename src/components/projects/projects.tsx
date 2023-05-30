import classes from "./projects.module.scss";
import ProjectsGrid from "@component/components/projects/projects-grid";
import { Project } from "@component/typings";
import { FC } from "react";
import { dummyPosts } from "@component/consts";

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className={classes.posts}>
      <h1>All Projects</h1>
      <ProjectsGrid projects={dummyPosts} />
    </section>
  );
};

export default Projects;
