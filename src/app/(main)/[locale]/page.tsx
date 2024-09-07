import Hero from "@/app/(main)/[locale]/components/Hero/Hero";
import About from "@/app/(main)/[locale]/components/About/About";
import Projects from "@/app/(main)/[locale]/components/Projects/Projects";
import Journey from "@/app/(main)/[locale]/components/Journey/Journey";
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Journey />
    </>
  );
}
