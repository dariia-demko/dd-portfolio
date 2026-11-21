import type { Lang, content } from '../content';
import photo from '../assets/photo.png';

type T = (typeof content)[Lang];

export default function Hero({ t }: { t: T }) {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <h1 className="hero-title">{t.title}</h1>
        <p className="hero-lead">{t.lead}</p>
        <a className="btn" href="#cases">{t.cta}</a>
      </div>
      <div className="polaroid" aria-hidden="false">
        <div className="polaroid-back" />
        <div className="polaroid-card">
          <div className="polaroid-photo">
            <img src={photo} alt="Portrait of Dariia Demko" />
          </div>
          <p className="polaroid-sign">{t.name}</p>
        </div>
      </div>
    </section>
  );
}
