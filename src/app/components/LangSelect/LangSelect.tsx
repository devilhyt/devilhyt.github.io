"use client";
import { Select } from "@mantine/core";
import { usePathname, useRouter, validateLocale } from "@/i18n/routing";
import classes from "./LangSelect.module.css";
import { useLocale } from "next-intl";

export default function LangSelect() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  return (
    <Select
      className={classes.langSelect}
      checkIconPosition="right"
      allowDeselect={false}
      defaultValue={locale}
      data={[
        { value: "en", label: "English" },
        { value: "zh-tw", label: "中文" },
      ]}
      onChange={(value) => {
        const l = validateLocale(value as string);
        router.replace(pathname, { locale: l });
      }}
    />
  );
}
