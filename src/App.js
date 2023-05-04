import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <h1>{t('hello')}</h1>
        <p>{t('welcome')}</p>
      </div>

      <button onClick={() => i18next.changeLanguage('en')}>English</button>
      <button onClick={() => i18next.changeLanguage('es')}>Spanish</button>
    </>
  );
}

export default App;
