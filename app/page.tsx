import Image from "next/image";
import Header from "@/components/Header";
import OrderEnquire from "@/components/OrderEnquire";

const MENU = [
  {
    category: "Dosas",
    items: [
      {
        name: "Butter Masala Dosa",
        line: "Crisp golden dosa, buttery finish, potato masala.",
        price: "₹180",
      },
      {
        name: "Ghee Roast",
        line: "Thin, aromatic, served with sambar and chutneys.",
        price: "₹160",
      },
      {
        name: "Mysore Masala",
        line: "Spiced red chutney spread, classic comfort.",
        price: "₹190",
      },
    ],
  },
  {
    category: "Bowls & rice",
    items: [
      {
        name: "Bisi Bele Bath",
        line: "Our namesake — hot lentil-rice, tempered and comforting.",
        price: "₹170",
      },
      {
        name: "Curd Rice",
        line: "Cooling, tempered, a Kharghar favourite after spice.",
        price: "₹120",
      },
      {
        name: "Lemon Rice",
        line: "Bright, tangy, made fresh through the day.",
        price: "₹130",
      },
    ],
  },
  {
    category: "Idli & snacks",
    items: [
      {
        name: "Soft Idli (2)",
        line: "Steamed and fluffy, with sambar and coconut chutney.",
        price: "₹90",
      },
      {
        name: "Medu Vada",
        line: "Crisp outside, soft inside — the classic pair.",
        price: "₹100",
      },
      {
        name: "Filter Coffee",
        line: "Strong, frothy, South Indian style.",
        price: "₹60",
      },
    ],
  },
] as const;

const FAVOURITES = [
  {
    badge: "House favourite",
    name: "Butter Masala Dosa",
    line: "The plate most people order first — and often again.",
  },
  {
    badge: "Namesake",
    name: "Bisi Bele Bath",
    line: "Hot, hearty, and exactly what the board promises.",
  },
  {
    badge: "Light & fresh",
    name: "Soft Idli + Filter Coffee",
    line: "A calm start or mid-day reset.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div id="top">
        <div className="utility-bar">
          <div className="utility-inner">
            <p className="utility-text">
              Kharghar&apos;s home for authentic South Indian flavours
            </p>
            <a className="utility-find" href="#visit">
              Find us →
            </a>
          </div>
        </div>

        <Header />
      </div>

      <main id="main" tabIndex={-1}>
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-heading">
          <Image
            className="hero-bg"
            src="/demo-bisi-bele.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-card">
              <p className="eyebrow">Kharghar, Navi Mumbai</p>
              <h1 id="hero-heading">South Indian soul, served hot.</h1>
              <p className="lede">
                Buttery dosas, comforting bowls and familiar flavours—made
                fresh, the way they should be.
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="#menu">
                  Explore today&apos;s menu →
                </a>
                <a className="btn-secondary-link" href="#favourites">
                  Meet the favourites ↓
                </a>
              </div>
              <p className="concept-chip">
                Self-initiated concept demo. Not a live restaurant site.
              </p>
            </div>
          </div>
        </section>

        {/* Food-led identity / story */}
        <section id="story" className="section identity" aria-labelledby="story-heading">
          <div className="section-inner">
            <p className="section-label">Our story</p>
            <h2 id="story-heading">Food first. Always.</h2>
            <p className="section-intro">
              Bisi Bele is a concept for a neighbourhood South Indian kitchen in
              Kharghar — where the plate leads, and the next step (menu, visit,
              or enquire) stays easy to find.
            </p>
            <div className="identity-grid">
              <article className="identity-card">
                <h3>Made fresh</h3>
                <p>
                  Batters, tempering, and chutneys prepared the way they should
                  be — for flavour you can recognise.
                </p>
              </article>
              <article className="identity-card">
                <h3>Familiar favourites</h3>
                <p>
                  Dosas, bowls, idli, and filter coffee — the everyday plates
                  people come back for.
                </p>
              </article>
              <article className="identity-card">
                <h3>Kharghar context</h3>
                <p>
                  Local dining, clear directions, and a simple path to visit or
                  enquire.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Menu discovery */}
        <section id="menu" className="section menu-section" aria-labelledby="menu-heading">
          <div className="section-inner">
            <p className="section-label">Today&apos;s menu</p>
            <h2 id="menu-heading">What&apos;s on offer</h2>
            <p className="section-intro">
              Scan the board, pick a favourite, then visit or send a demo
              enquiry. Concept dishes below — clearly labeled.
            </p>
            <p className="concept-note">Concept menu · prices for demo only</p>

            {MENU.map((group) => (
              <div key={group.category} style={{ marginBottom: "2rem" }}>
                <h3
                  style={{
                    margin: "0 0 0.85rem",
                    fontSize: "1.05rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "var(--forest)",
                  }}
                >
                  {group.category}
                </h3>
                <div className="menu-grid">
                  {group.items.map((dish) => (
                    <article className="dish-card" key={dish.name}>
                      <div>
                        <h3>{dish.name}</h3>
                        <p>{dish.line}</p>
                      </div>
                      <div className="dish-price">
                        {dish.price}
                        <small>Concept</small>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Favourites */}
        <section
          id="favourites"
          className="section favourites"
          aria-labelledby="fav-heading"
        >
          <div className="section-inner">
            <p className="section-label">Favourites</p>
            <h2 id="fav-heading">Meet the favourites</h2>
            <p className="section-intro">
              A short shortlist if you only have a minute — then explore the
              full menu above or plan a visit.
            </p>
            <div className="fav-grid">
              {FAVOURITES.map((f) => (
                <article className="fav-card" key={f.name}>
                  <span className="fav-badge">{f.badge}</span>
                  <h3>{f.name}</h3>
                  <p>{f.line}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Visit */}
        <section id="visit" className="section visit-section" aria-labelledby="visit-heading">
          <div className="section-inner">
            <p className="section-label">Visit</p>
            <h2 id="visit-heading">Find us in Kharghar</h2>
            <p className="section-intro">
              Concept location and hours for this demo. Use the details as a
              pattern for a live restaurant site.
            </p>
            <div className="visit-grid">
              <div className="visit-card">
                <h3>Address (concept)</h3>
                <p>
                  Near Sector 7 / Kharghar node
                  <br />
                  Kharghar, Navi Mumbai
                  <br />
                  Maharashtra
                </p>
                <h3 style={{ marginTop: "1.25rem" }}>Hours (concept)</h3>
                <ul>
                  <li>Mon–Fri · 8:00 am – 10:30 pm</li>
                  <li>Sat–Sun · 8:00 am – 11:00 pm</li>
                </ul>
                <p style={{ marginTop: "1rem", fontSize: "0.85rem" }}>
                  Hours and address are illustrative for this concept demo.
                </p>
              </div>
              <div className="map-placeholder" aria-label="Map placeholder">
                <strong>Kharghar, Navi Mumbai</strong>
                <p>
                  Directions placeholder — no Maps API in this concept demo.
                </p>
                <a
                  className="btn-ghost"
                  href="https://www.google.com/maps/search/?api=1&query=Kharghar+Navi+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open area in Maps →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Order / enquire */}
        <section id="order" className="section order-section" aria-labelledby="order-heading">
          <div className="section-inner">
            <p className="section-label">Order · enquire</p>
            <h2 id="order-heading">Plan a visit or send an enquiry</h2>
            <p className="section-intro">
              Demo form only. Submit to see a fake success state — nothing is
              sent to a kitchen, and no payment is collected.
            </p>
            <OrderEnquire />
          </div>
        </section>

        {/* Disclaimer */}
        <aside className="disclaimer" aria-label="Concept disclaimer">
          <p>Self-initiated concept demo. Not a live restaurant site.</p>
        </aside>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <span className="logo-mark" aria-hidden="true">
                BB
              </span>
              Bisi Bele
            </a>
            <p>
              South Indian soul, served hot — a portfolio concept for menu
              discovery and local visit paths.
            </p>
          </div>
          <ul className="footer-nav">
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#story">Our Story</a>
            </li>
            <li>
              <a href="#visit">Visit</a>
            </li>
            <li>
              <a href="#order">Order</a>
            </li>
          </ul>
        </div>
        <p className="footer-meta">
          Self-initiated concept demo. Not a live restaurant site. · EN only
        </p>
      </footer>
    </>
  );
}
