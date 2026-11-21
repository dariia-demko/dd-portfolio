import type { Lang, content } from '../content';
import d1 from '../assets/logo-d-1.svg';
import d2 from '../assets/logo-d-2.svg';
import demko from '../assets/logo-demko.svg';
import dariia from '../assets/logo-dariia.svg';
import line from '../assets/logo-line.svg';

type T = (typeof content)[Lang];

export default function Header({ t, lang, onLang }: { t: T; lang: Lang; onLang: (l: Lang) => void }) {
  const hrefs = ['#cases', '#about', '#contacts'];
  return (
    <header className="menu">
      <a className="logo" href="#top" aria-label="Dariia Demko — UI/UX Designer">
        <img className="logo-d1" src={d1} alt="" />
        <img className="logo-d2" src={d2} alt="" />
        <span className="logo-words">
          <span className="logo-names">
            <img src={dariia} alt="" className="logo-dariia" />
            <img src={demko} alt="" className="logo-demko" />
          </span>
          <img src={line} alt="" className="logo-line" />
        </span>
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
