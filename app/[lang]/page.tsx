import { getDictionary } from "@/helpers";
import { Locale } from "@/i18-config";

export default async function Home(props: { params: { lang: Locale } }) {
  const { translate } = await getDictionary(props.params.lang);

  return (
    <div className="flex h-full items-center justify-center">
      <p>{translate("Hello world!")}</p>
    </div>
  );
}
