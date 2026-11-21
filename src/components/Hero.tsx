import type { Lang, content } from '../content';
import photo from '../assets/photo.png';

type T = (typeof content)[Lang];

export default function Hero({ t }: { t: T }) {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-lead">{t.lead}</p>
          <div className="hero-actions">
            <a className="btn" href="#cases">{t.cta}</a>
            <a className="btn btn-secondary" href="/Dariia-Demko-CV.pdf" download>{t.cv}</a>
          </div>
        </div>
        <div className="polaroid">
          <div className="polaroid-card">
            <div className="polaroid-photo">
              <img src={photo} alt="Portrait of Dariia Demko" />
            </div>
            <p className="polaroid-sign">Dariia Demko</p>
          </div>
        </div>
      </div>
    </section>
  );
}
