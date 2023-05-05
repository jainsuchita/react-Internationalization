import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import common_en from './locales/en/translation.json';
import common_es from './locales/es/translation.json';

const DETECTION_OPTIONS = {
  order: ['navigator']
};

i18n 
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({ 
    detection: DETECTION_OPTIONS,
    fallbackLng: 'en',
    resources: { 
      en: { 
        translation: common_en, 
      },
      es: { 
        translation: common_es,
      },
    },
  });

  export default i18n;