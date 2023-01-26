import "@/assets/globals.css";
import LocaleSwitcher from "./components/locale-switcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="grid min-h-screen grid-rows-auto/fr/auto">
        <header className="flex items-center justify-between border border-red-400 p-4">
          <a href="/" className="text-2xl">
            IO
          </a>
          <LocaleSwitcher />
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
