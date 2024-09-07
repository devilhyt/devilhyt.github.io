"use client";

import { Text } from "@mantine/core";
import classes from "./Projects.module.css";
import { useTranslations } from "next-intl";
import ProjectCards from "@/app/components/ProjectCards/ProjectCards";

export default function About() {
  const t = useTranslations("ProjectsPage");
  return (
    <section className={classes.section} id="projects">
      <Text className={classes.title}>{t("title")}</Text>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <ProjectCards/>
        </div>
      </div>
    </section>
  );
}
