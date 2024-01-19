import { useTranslation } from "react-i18next";

export default <T>(locale: string): T => {
  const { t } = useTranslation();
  return t(locale, { returnObjects: true }) as T;
};
