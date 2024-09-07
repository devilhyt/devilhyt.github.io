import { Card, Group, Text, Badge, ActionIcon, Image } from "@mantine/core";
import classes from "./ProjectCard.module.css";
import {
  IconBrandGithub,
  IconBrandYoutubeFilled,
  IconExternalLink,
} from "@tabler/icons-react";
import Link from "next/link";

export default function ProjectCard({
  name,
  description,
  imageUrl,
  keywords,
  links,
}: {
  name: string;
  description: string;
  imageUrl: string;
  keywords: string[];
  links: {
    github?: string;
    video?: string;
    link?: string;
  };
}) {
  const badges = keywords.map((k) => (
    <Badge variant="light" key={k}>
      {k}
    </Badge>
  ));

  return (
    <Card
      className={classes.card}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section withBorder pb="xs">
        <Image
          className={classes.image}
          src={imageUrl}
          h={200}
          fit="contain"
          alt="Norway"
        />
      </Card.Section>

      <Card.Section withBorder inheritPadding py="xs">
        <Group gap="xs" justify="center">
          {links.github && (
            <ActionIcon
              variant="light"
              size="lg"
              component={Link}
              href={links.github}
              target="_blank"
            >
              <IconBrandGithub />
            </ActionIcon>
          )}
          {links.video && (
            <ActionIcon
              variant="light"
              size="lg"
              component={Link}
              href={links.video}
              target="_blank"
            >
              <IconBrandYoutubeFilled />
            </ActionIcon>
          )}
          {links.link && (
            <ActionIcon
              variant="light"
              size="lg"
              component={Link}
              href={links.link}
              target="_blank"
            >
              <IconExternalLink />
            </ActionIcon>
          )}
        </Group>
      </Card.Section>

      <Card.Section inheritPadding py="xs">
        <Text size="lg" fw={500} pb="xs">
          {name}
        </Text>

        <Text size="md" c="dimmed" pb="xs">
          {description}
        </Text>
      </Card.Section>

      <Group gap="xs">{badges}</Group>
    </Card>
  );
}
