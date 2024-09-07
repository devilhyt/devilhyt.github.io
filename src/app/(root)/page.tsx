"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { validateLocale } from "@/i18n/routing";

export default function RootPage() {
  const router = useRouter();
  let locale = getCookie("NEXT_LOCALE");

  locale = validateLocale(locale as string);

  useEffect(() => {
    router.replace(`/${locale}`);
  }, []);

  return null;
}
