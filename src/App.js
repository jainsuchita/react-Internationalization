import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1>{t('hello')}</h1>
        <p>{t('welcome')}</p>
      </div>

      <LanguageSwitcher />
    </>
  );
}

export default App;
