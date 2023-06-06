import { FC } from "react";
import Projects from "@component/components/projects/projects";
import { Project } from "@component/typings";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  return <Projects projects={_props.projects} />;
};

export const getServerSideProps: GetServerSideProps<
  ProjectsPageProps
> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
    projects: [],
  },
});

export default ProjectsPage;
