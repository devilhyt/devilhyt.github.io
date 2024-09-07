"use client";

import type { useDisclosure } from "@mantine/hooks";
import { Group, Burger } from "@mantine/core";
import ThemeSwitch from "@/app/components/ThemeSwitch/ThemeSwitch";
import classes from "./NavBar.module.css";
import NavButtons from "./NavButtons";
import LangSelect from "../LangSelect/LangSelect";

type OpenedNavBar = ReturnType<typeof useDisclosure>[0];
type ToggleNavBar = ReturnType<typeof useDisclosure>[1]["toggle"];

export default function NavBar({
  openedNavBar,
  toggleNavBar,
}: {
  openedNavBar: OpenedNavBar;
  toggleNavBar: ToggleNavBar;
}) {
  return (
    <Group className={classes.bar} justify="space-between" wrap="nowrap">
      <Group wrap="nowrap">
        <Burger
          opened={openedNavBar}
          onClick={toggleNavBar}
          aria-label="Toggle navigation"
          hiddenFrom="sm"
        />
        <Group justify="center" visibleFrom="sm" wrap="nowrap">
          <NavButtons />
        </Group>
      </Group>
      <Group justify="right" wrap="nowrap">
        <LangSelect />
        <ThemeSwitch />
      </Group>
    </Group>
  );
}
