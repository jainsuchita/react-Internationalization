import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common_en from './locales/en/translation.json';
import common_es from './locales/es/translation.json';

i18n 
  .use(initReactI18next)
  .init({ 
    lng: 'en', 
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