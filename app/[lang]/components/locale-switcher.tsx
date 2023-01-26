"use client";

import { i18n } from "@/i18-config";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  console.log(pathName);

  return (
    <div>
      <ul className="grid grid-cols-2 gap-x-2">
        {i18n.locales.map((locale: any) => {
          return (
            <li
              className={clsx(
                { underline: pathName === `/${locale}` },
                "leading-tight"
              )}
              key={locale}
            >
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
