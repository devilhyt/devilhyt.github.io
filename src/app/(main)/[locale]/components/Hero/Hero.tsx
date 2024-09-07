import { Text } from "@mantine/core";
import classes from "./Hero.module.css";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage");
  return (
    <section className={classes.section} id="home">
      <div className={classes.container}>
        <Text className={classes.title}>{t("greet")}</Text>
        <Text className={classes.title}>
          {t("title")}
          <Text className={classes.titleName} span inherit>
            {t("name")}
          </Text>
        </Text>
        <Text className={classes.subtitle}>{t("subtitle")}</Text>
      </div>
      <Text className={classes.photoDesc}>Taken in Prague</Text>
    </section>
  );
}
