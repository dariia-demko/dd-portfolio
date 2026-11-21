import type { Lang, content } from '../content';
import logo from '../assets/logo.svg';

type T = (typeof content)[Lang];

export default function Header({ t, lang, onLang }: { t: T; lang: Lang; onLang: (l: Lang) => void }) {
  const hrefs = ['#cases', '#about', '#contacts'];
  return (
    <header className="menu">
      <a className="logo" href="#top" aria-label="Dariia Demko — UI/UX Designer">
        <img src={logo} alt="Dariia Demko — UI/UX Designer" />
      </a>
      <div className="menu-right">
        <div className="lang" role="group" aria-label="Language">
          {(['en', 'ua'] as Lang[]).map((l) => (
            <button key={l} className={l === lang ? 'lang-btn active' : 'lang-btn'} aria-pressed={l === lang} onClick={() => onLang(l)}>
              {l}
            </button>
          ))}
        </div>
        <nav className="menu-items">
          {t.nav.map((label, i) => (
            <a key={label} href={hrefs[i]}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-sm" href="#contacts">{t.write}</a>
      </div>
    </header>
  );
}
