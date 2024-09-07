"use client";

import NavBar from "@/app/components/NavBar/NavBar";
import { useDisclosure } from "@mantine/hooks";
import NavButtons from "@/app/components/NavBar/NavButtons";
import classes from "./LayoutWrapper.module.css";
import { useEffect } from "react";
import { clsx } from "clsx";

export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openedNavBar, { toggle: toggleNavBar, close: closeNavBar }] =
    useDisclosure(false);

  useEffect(() => {
    // TODO: add eventlistener to update header height
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    document.documentElement.style.setProperty(
      "--header-height",
      headerHeight + "px"
    );
  }, []);

  return (
    <>
      <header className={classes.header}>
        <nav>
          <NavBar openedNavBar={openedNavBar} toggleNavBar={toggleNavBar} />
        </nav>
      </header>
      <nav
        className={clsx(
          classes.navMobile,
          openedNavBar && classes.navMobileVisible
        )}
      >
        <NavButtons closeNavBar={closeNavBar} />
      </nav>
      <main className={classes.main}>{children}</main>
    </>
  );
}
