import { useState } from 'react';
import { content, type Lang } from './content';
import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const t = content[lang];
  return (
    <>
      <Header t={t} lang={lang} onLang={setLang} />
      <Hero t={t} />
    </>
  );
}
