// Two languages without a library: English at "/", Portuguese at "/pt/".
// The language comes from the path; each page is a static HTML file with its own
// <html lang>, title, description and hreflang (index.html and pt/index.html).
import { createContext, useContext } from 'react';
import en from './constants/content.en';
import pt from './constants/content.pt';

export const contents = { en, pt };

export const langFromPath = (pathname) => (/^\/pt(\/|$)/.test(pathname) ? 'pt' : 'en');

export const LangContext = createContext(en);

export const useContent = () => useContext(LangContext);

// Keeps the document in step with the language (the static HTML already has it;
// this covers client-side fallbacks such as the SPA redirect).
export const applyDocumentLanguage = (content) => {
  document.documentElement.lang = content.htmlLang;
  document.title = content.meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', content.meta.description);
};
