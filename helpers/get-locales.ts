import type { Locale } from "@/i18-config";
import "server-only";

const dictionaries = {
  en: () =>
    import("@/public/locales/en/common.json").then((module) => module.default),
  ru: () =>
    import("@/public/locales/ru/common.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  const dictionary = await dictionaries[locale]();

  return { translate: (key: keyof typeof dictionary) => dictionary[key] };
};
