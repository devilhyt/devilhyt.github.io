import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";
import { useTranslations } from "next-intl";

export default function ProjectCards() {
  const t = useTranslations("ProjectsPage.projects");
  const projectCards = projects.map((project) => (
    <ProjectCard
      key={project.key}
      name={t(`${project.key}.name`)}
      description={t(`${project.key}.description`)}
      imageUrl={project.imageUrl}
      keywords={project.keywords}
      links={project.links}
    />
  ));

  return <>{projectCards}</>;
}
