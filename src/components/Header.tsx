import { useEffect, useState } from 'react';
import type { Lang, content } from '../content';
import logo from '../assets/logo.svg';

type T = (typeof content)[Lang];

// Below this width the menu collapses into a burger dropdown (keep in sync with styles.css)
const DESKTOP_MENU = '(min-width: 1024px)';

export default function Header({ t, lang, onLang }: { t: T; lang: Lang; onLang: (l: Lang) => void }) {
  const hrefs = ['#cases', '#about', '#contacts'];
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia(DESKTOP_MENU);
    const onChange = () => mq.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
    };
  }, [open]);

  return (
    <>
    {/* Dims the page behind the open burger menu; click to close */}
    {open && <div className="menu-backdrop" onClick={close} aria-hidden="true" />}
    <header className="menu" data-open={open}>
      <a className="logo" href="#top" aria-label="Dariia Demko — UI/UX Designer" onClick={close}>
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
        {/* On desktop this wrapper is display:contents; below 1024px it is the dropdown panel */}
        <div className="menu-collapse" id="site-menu">
          <nav className="menu-items" aria-label="Main">
            {/* Home is shown only in the burger menu; on desktop the logo already links home */}
            <a className="menu-home" href="#top" onClick={close}>{t.home}</a>
            {t.nav.map((label, i) => (
              <a key={label} href={hrefs[i]} onClick={close}>{label}</a>
            ))}
          </nav>
          <a className="btn btn-sm menu-cta" href="#contacts" onClick={close}>{t.write}</a>
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? t.menuClose : t.menuOpen}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="burger" aria-hidden="true" />
        </button>
      </div>
    </header>
    </>
  );
}
