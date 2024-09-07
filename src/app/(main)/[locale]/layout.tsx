import "@mantine/core/styles.css";
import "@/app/globals.css";

import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  DEFAULT_THEME,
} from "@mantine/core";
import LayoutWrapper from "./components/LayoutWrapper/LayoutWrapper";

/// i18n ///
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
////////////

export const metadata: Metadata = {
  title: "HsiangYi's Website",
  description: "HsiangYi's Website",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/github-mark.svg",
        href: "/images/github-mark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/github-mark-white.svg",
        href: "/images/github-mark-white.svg",
      },
    ],
  },
};

/// font settings ///
const notoSansTC = Noto_Sans_TC({ subsets: ["latin"] });
const theme = createTheme({
  primaryColor: "violet",
  fontFamily: `${notoSansTC.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
});
/////////////////////

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const defaultColorScheme = "light";
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
      </head>
      <body className={notoSansTC.className}>
        <MantineProvider theme={theme} defaultColorScheme={defaultColorScheme}>
          <NextIntlClientProvider messages={messages}>
            <LayoutWrapper>{children}</LayoutWrapper>
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
