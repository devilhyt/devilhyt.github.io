import type { useDisclosure } from "@mantine/hooks";
import { Button } from "@mantine/core";
import Link from "next/link";
import navJson from "@/data/nav.json";
import classes from "./NavButtons.module.css";
import { useTranslations } from "next-intl";

type CloseNavBar = ReturnType<typeof useDisclosure>[1]["close"];

export default function NavButtons({
  closeNavBar = () => {},
}: {
  closeNavBar?: CloseNavBar;
}) {
  const t = useTranslations("Nav");
  const navButtons = Object.keys(navJson).map((key) => (
    <Button
      className={classes.navButtons}
      variant="subtle"
      component={Link}
      href={`#${key}`}
      onClick={closeNavBar}
      key={key}
    >
      {t(key)}
    </Button>
  ));

  return <>{navButtons}</>;
}
