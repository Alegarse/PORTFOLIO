const LANG_SUPPORTED = ['es', 'en'];
const DEFAULT_LANG = 'es';

const detectLanguage = () => {
  // From url
  const url = new URL(window.location.href);
  const langFromURL = url.searchParams.get('lang');
  if (langFromURL && LANG_SUPPORTED.includes(langFromURL)) return langFromURL;

  // from local
  const localSaved = localStorage.getItem('language');
  if (localSaved && LANG_SUPPORTED.includes(localSaved)) return localSaved;

  //from Browser
  const navLangs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const lang of navLangs) {
    const langFormatted = String(lang).toLowerCase().split('-')[0];
    if (LANG_SUPPORTED.includes(langFormatted)) return langFormatted;
  }

  return DEFAULT_LANG;
};

export default detectLanguage;
