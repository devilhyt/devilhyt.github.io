"use client";

import { Text, Image } from "@mantine/core";
import classes from "./About.module.css";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("AboutPage");
  return (
    <section className={classes.section} id="about">
      <div className={classes.container}>
        <Text className={classes.title}>{t("about me")}</Text>
        <div className={classes.innerContainer}>
          <Image
            className={classes.authorPicture}
            src="/images/hsiangyi.jpg"
            alt="Picture of the author"
          />
          <Text className={classes.selfIntro}>{t("self intro")}</Text>
        </div>
      </div>
      <Text className={classes.photoDesc}>Image by freepik</Text>
    </section>
  );
}
