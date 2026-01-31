// About.tsx - Страница About + Contact
export default function About() {
  return (
    <div className="page-container about-page">
      <div className="about-grid">
        <div className="about-text">
          <h1>CHINASKII</h1>
          <p className="about-role">AI Creator / Visual Artist</p>
          <p className="about-bio">
            Санкт-Петербург. Работаю на стыке AI и motion design. 
            Специализация — нуарная эстетика и атмосферное сторителлинг.
          </p>
          <div className="about-status">
            Status: <span className="gold">Open for commissions</span>
          </div>
        </div>

        <div className="about-contact">
          <h3>Contact</h3>
          <a href="mailto:nosound947@gmail.com">nosound947@gmail.com</a>
          <div className="social-links">
            <a href="https://instagram.com/chinazzz89" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://t.me/chinazeightnine" target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
          <p className="location">Санкт-Петербург, Россия</p>
        </div>
      </div>
    </div>
  );
}
