import React, { useState } from 'react';
import i18next from 'i18next';

const SupportedLanguages = [
  { id: 'en', text: 'English' },
  { id: 'es', text: 'Spanish' }
];

const LanguageSwitcher = () => {
  const lang1 = SupportedLanguages.filter((l) =>
    navigator.language.startsWith(l.id)
  );

  const [lang, setLang] = useState(
    lang1[0]?.text || SupportedLanguages[0].text
  );

  const handleLangaugeChange = (event) => {
    const newLanguage = event.target.value;
    setLang(newLanguage);
    i18next.changeLanguage(newLanguage);
  };

  return (
    <select onChange={handleLangaugeChange}>
      {SupportedLanguages.map((l, index) => {
        return (
          <option value={l.id} key={index} selected={lang.toLocaleLowerCase() === l.text.toLocaleLowerCase()}>
            {l.text}
          </option>
        );
      })}
    </select>
  );
};

LanguageSwitcher.propTypes = {};

export default LanguageSwitcher;
