// ==========================================================
// Las Fuentes — UI Components
// ==========================================================
const { useState, useEffect } = React;

// --- Nav --------------------------------------------------------------------
function Nav({ onOpenDrawer }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo logo-plate" aria-label="Las Fuentes — Inicio">
          <img src="assets/logo-transparent.png" alt="Centro Recreativo Las Fuentes" />
        </a>
        <nav className="nav-links" aria-label="Principal">
          <a href="#hotel">Hotel</a>
          <a href="#restaurante">Restaurante</a>
          <a href="#amenidades">Centro Recreativo</a>
          <a href="#eventos">Eventos</a>
        </nav>
        <div className="nav-cta">
          <a
            className="btn btn-wa btn-sm"
            href={wa("¡Hola! Me gustaría reservar / preguntar sobre Las Fuentes.")}
            target="_blank"
            rel="noopener"
          >
            <Icon.Whatsapp size={16} />
            <span><span className="label-long">Reservar / </span>Contacto</span>
          </a>
          <button className="nav-burger" aria-label="Abrir menú" onClick={onOpenDrawer}>
            <Icon.Menu />
          </button>
        </div>
      </div>
    </header>
  );
}

function Drawer({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const go = (id) => { onClose(); setTimeout(() => { document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }, 250); };
  return (
    <div className={`drawer ${open ? "open" : ""}`} onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-head">
          <img src="assets/logo-transparent.png" alt="Las Fuentes" />
          <button className="drawer-close" aria-label="Cerrar" onClick={onClose}><Icon.X /></button>
        </div>
        <div className="drawer-links">
          <a onClick={(e) => { e.preventDefault(); go("#hotel"); }} href="#hotel">Hotel<Icon.ArrowRight /></a>
          <a onClick={(e) => { e.preventDefault(); go("#restaurante"); }} href="#restaurante">Restaurante<Icon.ArrowRight /></a>
          <a onClick={(e) => { e.preventDefault(); go("#amenidades"); }} href="#amenidades">Centro Recreativo<Icon.ArrowRight /></a>
          <a onClick={(e) => { e.preventDefault(); go("#eventos"); }} href="#eventos">Eventos<Icon.ArrowRight /></a>
          <a onClick={(e) => { e.preventDefault(); go("#contacto"); }} href="#contacto">Cómo llegar<Icon.ArrowRight /></a>
        </div>
        <div className="drawer-foot">
          <a
            className="btn btn-wa"
            style={{ width: "100%" }}
            href={wa("¡Hola! Me gustaría reservar / preguntar sobre Las Fuentes.")}
            target="_blank"
            rel="noopener"
          >
            <Icon.Whatsapp size={18} />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

// --- Hero -------------------------------------------------------------------
function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-location-bar" aria-label="Ubicación">
        <Icon.Pin size={12} />
        <span>Chiantla · Huehuetenango · Guatemala</span>
      </div>

      <div className="hero-pane hero-recreativo has-img">
        <img src="assets/centro-recreativo.jpg" alt="" className="hero-bg" aria-hidden="true" />
        <div className="hero-tag"><span className="dot" />Centro Recreativo · Piscinas</div>
        <h1 className="hero-h">
          Disfruta
          <span className="script">en la naturaleza</span>
        </h1>
        <p className="hero-sub">Piscinas, jardines recreativos y actividades para toda la familia en plena sierra de los Cuchumatanes.</p>
        <div className="hero-actions">
          <a
            className="btn btn-wa"
            href={wa("¡Hola! Quisiera información sobre el centro recreativo Las Fuentes — piscinas, jardines y actividades.")}
            target="_blank"
            rel="noopener"
          >
            <Icon.Whatsapp size={18} />
            Más información
          </a>
          <a className="btn btn-outline-light btn-sm" href="#amenidades">
            Ver amenidades <Icon.ArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="hero-divider" aria-hidden="true" />
      <div className="hero-divider hero-divider-2" aria-hidden="true" />
      <div className="hero-emblem" aria-hidden="true">
        <img src="assets/logo-transparent.png" alt="" />
      </div>

      <div className="hero-pane hero-hotel has-img">
        <img src="assets/hero-hotel.jpg" alt="" className="hero-bg" aria-hidden="true" />
        <div className="hero-tag"><span className="dot" />Hotel · Habitaciones</div>
        <h1 className="hero-h">
          Descansa
          <span className="script">entre pinos</span>
        </h1>
        <p className="hero-sub">Habitaciones cómodas y limpias, rodeadas de bosque y aire fresco de los Cuchumatanes.</p>
        <div className="hero-actions">
          <a
            className="btn btn-wa"
            href={wa("¡Hola! Quisiera reservar una habitación en el hotel Las Fuentes. ¿Me ayudan con la disponibilidad?")}
            target="_blank"
            rel="noopener"
          >
            <Icon.Whatsapp size={18} />
            Hospédate aquí
          </a>
          <a className="btn btn-outline-light btn-sm" href="#hotel">
            Ver habitaciones <Icon.ArrowRight size={14} />
          </a>
        </div>
      </div>

      <div className="hero-pane hero-restaurant has-img">
        <img src="assets/hero-restaurante.jpg" alt="" className="hero-bg" aria-hidden="true" />
        <div className="hero-tag"><span className="dot" />Restaurante · Cocina local</div>
        <h1 className="hero-h">
          Sabores
          <span className="script">de la sierra</span>
        </h1>
        <p className="hero-sub">Cocina contemporanea con ingredientes frescos, servida en el jardín al aire libre.</p>
        <div className="hero-actions">
          <a
            className="btn btn-wa"
            href={wa("¡Hola! Me gustaría reservar mesa en el restaurante Las Fuentes.")}
            target="_blank"
            rel="noopener"
          >
            <Icon.Whatsapp size={18} />
            Reservar mesa
          </a>
          <a className="btn btn-outline-light btn-sm" href="#restaurante">
            Ver el menú <Icon.ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

// --- Hotel ------------------------------------------------------------------
function HotelSection() {
  const [active, setActive] = useState(ROOMS[0].id);
  const room = ROOMS.find((r) => r.id === active);
  return (
    <section id="hotel" className="section hotel">
      <div className="container">
        <div className="section-head">
          <span className="section-num">01 / HOTEL</span>
          <h2 className="section-h">Habitaciones <span className="script">limpias, cálidas, en el bosque.</span></h2>
          <p className="section-lede">Cuatro opciones pensadas para una persona, parejas, amigos y familias. Todas con baño privado y ropa de cama cuidada.</p>
        </div>

        <div className="hotel-grid">
          <div className="room-card" key={room.id}>
            <div className="room-photo">
              <img src={room.img} alt={room.name} />
            </div>
            <div className="room-body">
              <div className="room-tier">{room.tier}</div>
              <h3 className="room-name">{room.name}</h3>
              <p className="room-desc">{room.desc}</p>
              <div className="room-feat">
                {room.features.map((f) => <span key={f}>{f}</span>)}
              </div>
              <div className="room-foot">
                <div>
                  <div className="room-price-row">
                    <span className="room-price-from">desde</span>
                    <span className="room-price">Q{room.price}</span>
                    <small>&nbsp;/ noche</small>
                  </div>
                  <div style={{ fontSize: 11, color: "var(--char-mute)", marginTop: 3 }}>Persona extra: +Q50</div>
                </div>
                <a
                  className="btn btn-wa"
                  href={wa(`¡Hola! Me interesa reservar la "${room.name}" en Las Fuentes (desde Q${room.price}/noche). ¿Tienen disponibilidad?`)}
                  target="_blank"
                  rel="noopener"
                >
                  <Icon.Whatsapp size={16} /> Reservar ahora
                </a>
              </div>
            </div>
          </div>

          <aside className="hotel-side">
            <div className="hotel-tabs" role="tablist" aria-label="Tipo de habitación">
              {ROOMS.map((r) => (
                <button
                  key={r.id}
                  className={`hotel-tab ${active === r.id ? "active" : ""}`}
                  onClick={() => setActive(r.id)}
                  role="tab"
                  aria-selected={active === r.id}
                >
                  <span>
                    <div className="ht-name">{r.name}</div>
                    <div className="ht-price">{r.tier} · desde Q{r.price} / noche</div>
                  </span>
                  <span className="ht-arrow"><Icon.ArrowRight /></span>
                </button>
              ))}
            </div>

            <div className="hotel-promise">
              <div className="eyebrow">Lo que incluye</div>
              <p>Una noche cómoda, sin distracciones — solo el sonido del arrollo y los pinos.</p>
              <ul className="promise-list">
                <li><Icon.Check /> Barra abierta hasta las 10:00 PM</li>
                <li><Icon.Check /> Acceso libre a las 3 piscinas</li>
                <li><Icon.Check /> Wi-Fi en áreas comunes</li>
                <li><Icon.Check /> Parqueo para huéspedes</li>
              </ul>
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.15)", display: "flex", gap: 28 }}>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.6, marginBottom: 4 }}>Check in</div>
                  <div style={{ fontFamily: "var(--f-display)", fontSize: 20 }}>14:00 h</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.6, marginBottom: 4 }}>Check out</div>
                  <div style={{ fontFamily: "var(--f-display)", fontSize: 20 }}>12:30 h</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// --- Restaurant -------------------------------------------------------------
function RestaurantSection() {
  return (
    <section id="restaurante" className="section restaurant">
      <div className="container">
        <div className="section-head">
          <span className="section-num">02 / RESTAURANTE</span>
          <h2 className="section-h">Cocina contemporanea, <span className="script">al aire libre.</span></h2>
          <p className="section-lede"> Comer entre los árboles del jardín, mientras se enfría la tarde.</p>
        </div>

        <div className="menu-grid">
          {DISHES.map((d) =>
            d.id === 1 ? (
              <a
                key={d.id}
                href="assets/menu.pdf"
                target="_blank"
                rel="noopener"
                className={`dish dish-menu-cta ${d.span} has-img`}
                style={{ backgroundImage: `url('${d.img}')`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="dish-menu-label">Ver menú</div>
                <div className="dish-menu-sub">Carta completa · PDF</div>
                <Icon.ArrowRight size={28} />
              </a>
            ) : (
              <article
                key={d.id}
                className={`dish ${d.span} has-img`}
                style={{ backgroundImage: `url('${d.img}')`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="dish-eyebrow">{d.eyebrow}</div>
                <h3 className="dish-name">{d.name}</h3>
                <p className="dish-desc">{d.desc}</p>
              </article>
            )
          )}
          <article className="menu-cta-card">
            <div>
              <div className="eyebrow mc-eyebrow">¿Listo para comer?</div>
              <h3>Reserva tu mesa o escríbenos.</h3>
              <p>Entradas, sopas, carnes a la parrilla, postres caseros y bebidas naturales. Todos los días de 7 a.m. a 9 p.m.</p>
            </div>
            <div className="menu-cta-actions">
              <a
                className="btn btn-wa"
                href={wa("¡Hola! Me gustaría reservar mesa en el restaurante Las Fuentes. ¿Para cuántas personas tienen disponibilidad?")}
                target="_blank"
                rel="noopener"
              >
                <Icon.Whatsapp size={16} /> Reservar mesa
              </a>
            </div>
          </article>
        </div>

        <div className="hours-strip">
          <div className="item"><span className="lbl">Restaurante</span><span className="val">7:00 a.m. — 6:00 p.m.</span></div>
          <div className="item"><span className="lbl">Barra</span><span className="val">7:00 a.m. — 10:00 p.m.</span></div>
          <div className="item"><span className="lbl">Para llevar</span><span className="val">Disponible</span></div>
          <div className="item"><span className="lbl">Tiendita</span><span className="val">Chucherías y bebidas</span></div>
          <div className="item"><span className="lbl">Días</span><span className="val">Todos los días</span></div>
        </div>
      </div>
    </section>
  );
}

// --- Events -----------------------------------------------------------------
function EventsSection() {
  return (
    <section id="eventos" className="section events">
      <div className="container">
        <div className="events-layout">
          <div>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="section-num">03 / EVENTOS</span>
              <h2 className="section-h">Tu evento, <span className="script">en plena naturaleza.</span></h2>
              <p className="section-lede">Salón cubierto y jardines abiertos para celebrar bodas, cumpleaños, primeras comuniones y reuniones de empresa con la sierra como telón de fondo.</p>
            </div>

            <div className="event-types">
              <span>Bodas</span>
              <span>Cumpleaños</span>
              <span>Quinceaños</span>
              <span>Corporativos</span>
              <span>Bautizos</span>
              <span>Bautizos evangélicos</span>
              <span>Reuniones familiares</span>
            </div>

            <div className="event-incl">
              <div className="lbl">Nuestros paquetes incluyen</div>
              <ul className="event-incl-list">
                <li><Icon.Check />Mesas y sillas para tus invitados</li>
                <li><Icon.Check />Servicio de catering disponible</li>
                <li><Icon.Check />Mantelería y montaje básico</li>
                <li><Icon.Check />Sonido y energía eléctrica</li>
                <li><Icon.Check />Churrasqueras</li>
                <li><Icon.Check />Parqueo amplio</li>
                <li><Icon.Check />Espacios cubiertos y al aire libre</li>
                <li><Icon.Check />Piscina para bautizos evangélicos</li>
              </ul>
            </div>

            <a
              className="btn btn-wa btn-lg"
              href={wa("¡Hola! Quiero información para organizar un evento en Las Fuentes. ¿Me cuentan sobre los paquetes y la disponibilidad?")}
              target="_blank"
              rel="noopener"
            >
              <Icon.Whatsapp size={18} /> Cotizar mi evento por WhatsApp
            </a>
          </div>

          <div className="events-collage">
            {EVENTS.map((e) => (
              <div
                key={e.cls}
                className={`ec ${e.cls} has-img`}
                style={{ backgroundImage: `url('${e.img}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                role="img"
                aria-label={e.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Amenities --------------------------------------------------------------
function AmenitiesSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = AMENITIES.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent(c => (c + 1) % total), 5000);
    return () => clearInterval(id);
  }, [paused, total]);

  const go = (i) => setCurrent((i + total) % total);

  return (
    <section id="amenidades" className="section amenities">
      <div className="container">
        <div className="section-head">
          <span className="section-num">04 / AMENIDADES</span>
          <h2 className="section-h">Todo en un mismo lugar, <span className="script">rodeado de bosque.</span></h2>
        </div>

        <div
          className="amen-gallery"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {AMENITIES.map((a, i) => {
            const IconCmp = Icon[a.icon];
            return (
              <div key={a.name} className={`amen-slide ${i === current ? "active" : ""}`} aria-hidden={i !== current}>
                <img src={a.img} alt={a.name} className="amen-slide-img" />
                <div className="amen-slide-overlay">
                  <div className="amen-slide-icon"><IconCmp /></div>
                  <h3 className="amen-slide-name">{a.name}</h3>
                  <p className="amen-slide-desc">{a.desc}</p>
                </div>
              </div>
            );
          })}

          <button className="amen-nav amen-prev" onClick={() => go(current - 1)} aria-label="Anterior">&#8249;</button>
          <button className="amen-nav amen-next" onClick={() => go(current + 1)} aria-label="Siguiente">&#8250;</button>

          <div className="amen-counter">{current + 1} / {total}</div>
        </div>

        <div className="amen-dots" role="tablist">
          {AMENITIES.map((a, i) => (
            <button
              key={a.name}
              className={`amen-dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={a.name}
              role="tab"
              aria-selected={i === current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Location ---------------------------------------------------------------
function LocationSection() {
  return (
    <section id="contacto" className="location">
      <div className="container">
        <div className="location-inner">
          <div>
            <span className="section-num" style={{ color: "rgba(250,247,240,0.5)" }}>05 / CÓMO LLEGAR</span>
            <h2 className="section-h" style={{ marginTop: 14 }}>
              En Chiantla, Huehuetenango <span className="script">a un paso de la sierra.</span>
            </h2>
            <p className="section-lede" style={{ color: "rgba(250,247,240,0.7)", marginTop: 14 }}>
              Camino a los Cuchumatanes, rodeados de pinares y aire de montaña. A 12 minutos del centro de Huehuetenango.
            </p>

            <div className="location-meta">
              <div className="item"><span className="lbl">Dirección</span><span className="val">Las Fuentes, Aldea Los Regadíos, Chiantla<small>Huehuetenango, Guatemala</small></span></div>
              <div className="item"><span className="lbl">Teléfono</span><span className="val">+502 5584-6968<small>Llamadas y WhatsApp</small></span></div>
              <div className="item"><span className="lbl">Hotel</span><span className="val">24 / 7<small>Recepción siempre disponible</small></span></div>
              <div className="item"><span className="lbl">Restaurante</span><span className="val">7:00 a.m. — 6:00 p.m.<small>Todos los días</small></span></div>
              <div className="item"><span className="lbl">Centro recreativo</span><span className="val">9:00 a.m. — 8:00 p.m.<small>Todos los días</small></span></div>
              <div className="item"><span className="lbl">Barra</span><span className="val">7:00 a.m. — 10:00 p.m.<small>Todos los días</small></span></div>
              <div className="item"><span className="lbl">Email</span><span className="val">lasfuenteschiantla@gmail.com<small>Respuesta en 24 h</small></span></div>
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <a className="btn btn-wa" href={wa("¡Hola! ¿Me pueden enviar la ubicación de Las Fuentes?")} target="_blank" rel="noopener">
                <Icon.Whatsapp size={18} /> Pedir ubicación
              </a>
              <a className="btn btn-outline-light" href="https://maps.app.goo.gl/ZqDfg9SMSZjkJdDP7" target="_blank" rel="noopener">
                <Icon.Pin /> Abrir en Google Maps
              </a>
            </div>
          </div>

          <div className="location-map" aria-label="Mapa de ubicación — Centro Recreativo Las Fuentes, Chiantla">
            <iframe
              src="https://maps.google.com/maps?q=15.3610512,-91.4727492&z=17&output=embed&t=k"
              title="Ubicación Centro Recreativo Las Fuentes"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
            <div className="map-pin">
              <span className="pin-dot" />
              <span className="pin-label">Las Fuentes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer -----------------------------------------------------------------
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <img src="assets/logo-transparent.png" alt="Las Fuentes" />
            <p>Centro Recreativo Las Fuentes — Hotel, restaurante y centro de eventos rodeado de naturaleza en Chiantla, Huehuetenango.</p>
            <div className="foot-social">
              <a href="#" aria-label="Instagram"><Icon.Instagram /></a>
              <a href="#" aria-label="Facebook"><Icon.Facebook /></a>
              <a href={wa("¡Hola!")} aria-label="WhatsApp" target="_blank" rel="noopener"><Icon.Whatsapp size={16} /></a>
            </div>
          </div>
          <div className="foot-col">
            <h4>Explora</h4>
            <ul>
              <li><a href="#hotel">Hotel</a></li>
              <li><a href="#restaurante">Restaurante</a></li>
              <li><a href="#eventos">Eventos</a></li>
              <li><a href="#amenidades">Amenidades</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href={wa("¡Hola!")} target="_blank" rel="noopener">WhatsApp · +502 5584-6968</a></li>
              <li><a href="tel:+50255846968">Tel. +502 5584-6968</a></li>
              <li><a href="mailto:hola@lasfuentes.gt">hola@lasfuentes.gt</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Horarios</h4>
            <ul>
              <li>Hotel · 24 / 7</li>
              <li>Restaurante · 7:00 a.m. — 6:00 p.m.</li>
              <li>Centro recreativo · 9:00 a.m. — 8:00 p.m.</li>
              <li>Barra · 7:00 a.m. — 10:00 p.m.</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Centro Recreativo Las Fuentes. Todos los derechos reservados.</span>
          <span>Chiantla, Huehuetenango — Guatemala</span>
        </div>
      </div>
    </footer>
  );
}

// --- Floating WhatsApp ------------------------------------------------------
function WhatsAppFab() {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const t  = setTimeout(() => setExpanded(true),  1600);
    const t2 = setTimeout(() => setExpanded(false), 5200);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);
  return (
    <a
      className={`wa-fab ${expanded ? "expanded" : ""}`}
      href={wa("¡Hola! Tengo una consulta sobre Las Fuentes.")}
      target="_blank"
      rel="noopener"
      aria-label="¿Necesitas ayuda? Escríbenos por WhatsApp"
    >
      <span className="wa-pulse" />
      <Icon.Whatsapp />
      <span className="wa-text">¿Necesitas ayuda? Escríbenos</span>
    </a>
  );
}

Object.assign(window, { Nav, Drawer, Hero, HotelSection, RestaurantSection, EventsSection, AmenitiesSection, LocationSection, Footer, WhatsAppFab });
