import Link from "next/link";
import { FC } from "react";
import { Project } from "@component/typings";

import classes from "./project-item.module.scss";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <li className={classes.post}>
      <Link href={`/projects/${project.id}`}>
        <div className={classes.content}>
          <h3>{project.name}</h3>
          <p>{project.type}</p>
          <p>{project.status}</p>
        </div>
      </Link>
    </li>
  );
};

export default ProjectItem;
