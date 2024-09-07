"use client";

import { Text } from "@mantine/core";
import classes from "./Journey.module.css";
import { useTranslations } from "next-intl";
import Journey from "@/app/components/Journey/Journey";

export default function About() {
  const t = useTranslations("JourneyPage");
  return (
    <section className={classes.section} id="journey">
      <Text className={classes.title}>{t("title")}</Text>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <Journey/>
        </div>
      </div>
    </section>
  );
}
