import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'zh-tw'],
  defaultLocale: 'en',
});

export type Locale = (typeof routing.locales)[number];

export const validateLocale = (locale: string): Locale => {
  if (routing.locales.includes(locale as any)) {
    return locale as Locale;
  }
  return routing.defaultLocale;
}

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);