import enUS from 'antd/es/locale/en_US';
import frFR from 'antd/es/locale/fr_FR';

const defaultLocale = enUS;
const localeMap = {
  en: enUS,
  fr: frFR
};

export const getLocale = (key) =>
  localeMap[key] ? localeMap[key] : defaultLocale;
