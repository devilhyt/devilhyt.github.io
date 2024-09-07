import { Timeline, Text, Image } from "@mantine/core";
import { useTranslations } from "next-intl";
import classes from "./Journey.module.css";
import journey from "@/data/journey.json";

export default function Journey() {
  const t = useTranslations("JourneyPage.journey");

  const active = journey.length - 2;
  const timeLines = journey.map((j) => {
    return (
      <Timeline.Item
        classNames={{ itemTitle: classes.title }}
        title={t(`${j.key}.name`)}
        key={j.key}
      >
        {j.imageUrl && (
          <Image
            className={classes.image}
            fit="contain"
            src={j.imageUrl}
            alt={t(`${j.key}.name`)}
            radius="md"
          />
        )}
        <Text size="xs" mt={4} c="violet">
          {t(`${j.key}.location`) + " " + j.date}
        </Text>
      </Timeline.Item>
    );
  });

  return (
    <Timeline reverseActive active={active} bulletSize={24} lineWidth={2}>
      {timeLines}
    </Timeline>
  );
}
