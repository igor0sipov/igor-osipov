import type { Locale } from "@/i18-config";
import en from "@/public/locales/en/common.json";
import ru from "@/public/locales/ru/common.json";
import "server-only";

const dictionaries = {
  en,
  ru,
};

export const getDictionary = async (locale: Locale) => {
  const dictionary = await dictionaries[locale];

  return { translate: (key: keyof typeof dictionary) => dictionary[key] };
};
