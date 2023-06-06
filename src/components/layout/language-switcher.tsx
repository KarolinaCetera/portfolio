import { useRouter } from "next/router";
import Link from "next/link";
import classes from "./language-switcher.module.scss";
import Image from "next/image";
import pl from "../../../public/pl.svg";
import uk from "../../../public/uk.svg";

const LanguageSwitcher = () => {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  const Flag = ({ country }: { country: string }) => (
    <Image
      className={classes.flag}
      width={20}
      height={20}
      src={country}
      alt="flag"
    />
  );

  return (
    <span>
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <Link
            key={locale}
            className={classes.switcher}
            href={{ pathname, query }}
            as={asPath}
            locale={locale}
          >
            {activeLocale === "en" ? (
              <Flag country={uk} />
            ) : (
              <Flag country={pl} />
            )}
          </Link>
        );
      })}
    </span>
  );
};

export default LanguageSwitcher;
