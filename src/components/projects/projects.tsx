import { FC } from "react";
import ProjectsGrid from "@component/components/projects/projects-grid";
import { Project } from "@component/typings";
import classes from "./projects.module.scss";
import { useTranslation } from "next-i18next";

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const { t } = useTranslation("common");
  return (
    <section className={classes.posts}>
      <h1>{t("projects")}</h1>
      <ProjectsGrid projects={[]} />
    </section>
  );
};

export default Projects;
