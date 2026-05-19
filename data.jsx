// ==========================================================
// Las Fuentes — Icons, Data, Helpers
// ==========================================================

const WA_NUMBER = "50255846968";
const wa = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// --- Inline SVG icons -------------------------------------------------------
const Icon = {
  Whatsapp: ({ size = 22 }) => (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor">
      <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.385.696 4.604 1.892 6.474L4 29l7.713-1.84A11.946 11.946 0 0 0 16 27c6.628 0 12-5.373 12-12S22.629 3 16.001 3zm0 21.6c-1.93 0-3.733-.563-5.247-1.534l-.376-.236-4.58 1.092 1.124-4.466-.245-.387A9.578 9.578 0 0 1 6.4 15c0-5.298 4.301-9.6 9.6-9.6s9.6 4.302 9.6 9.6-4.302 9.6-9.6 9.6zm5.275-7.193c-.288-.144-1.707-.842-1.97-.938-.264-.096-.456-.144-.648.144-.192.288-.745.938-.913 1.13-.168.193-.336.217-.624.072-.288-.144-1.215-.448-2.314-1.429-.855-.762-1.432-1.704-1.6-1.992-.168-.288-.018-.443.127-.587.13-.13.288-.336.432-.504.144-.168.192-.288.288-.48.096-.193.048-.36-.024-.504-.072-.144-.648-1.56-.888-2.135-.234-.563-.473-.486-.648-.495l-.553-.01a1.07 1.07 0 0 0-.775.36c-.264.287-1.008.984-1.008 2.4 0 1.416 1.032 2.784 1.176 2.976.144.192 2.04 3.106 4.94 4.354.69.298 1.227.476 1.646.61.691.22 1.32.188 1.818.115.555-.083 1.708-.697 1.95-1.371.24-.673.24-1.25.168-1.37-.07-.122-.263-.193-.55-.337z"/>
    </svg>
  ),
  ArrowRight: ({ size = 16 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  ArrowDown: ({ size = 14 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
    </svg>
  ),
  Check: ({ size = 14 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Menu: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  ),
  Pdf: ({ size = 16 }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13h1.5a1.5 1.5 0 0 1 0 3H9zM14 13v3M17 13v3M14 14.5h2"/>
    </svg>
  ),
  Pool:    () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22c2 0 2-2 5-2s3 2 6 2 3-2 6-2 3 2 5 2M3 27c2 0 2-2 5-2s3 2 6 2 3-2 6-2 3 2 5 2"/><path d="M10 22V8a3 3 0 0 1 6 0v14M16 14h6M16 9h6"/></svg>,
  Soccer:  () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="11"/><path d="M16 9l5 3.5-2 5.5h-6l-2-5.5L16 9zM16 9V5M19 18l3 3M13 18l-3 3M21 12.5l4-1M11 12.5l-4-1"/></svg>,
  Chapel:  () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4v6M13 7h6M7 27V14l9-6 9 6v13zM13 27v-7a3 3 0 0 1 6 0v7"/></svg>,
  Garden:  () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 26v-8M12 18c0-3 2-5 4-5s4 2 4 5M9 22c0-2 1.5-3.5 3-3.5M23 22c0-2-1.5-3.5-3-3.5M5 26h22"/><path d="M11 13c0-2 1-4 3-4M21 13c0-2-1-4-3-4"/></svg>,
  Walk:    () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="6" r="2"/><path d="M14 28l3-9-3-3v-4l4-2 4 4 3 1M12 16l3-4M10 22l-2 6"/></svg>,
  View:    () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 26l8-12 5 7 4-5 9 10zM3 26h26"/><circle cx="23" cy="9" r="3"/></svg>,
  Tree:    () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4l-7 9h3l-4 6h3l-4 5h18l-4-5h3l-4-6h3z"/><path d="M16 24v4"/></svg>,
  Wifi:    () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13a16 16 0 0 1 22 0M9 17a10 10 0 0 1 14 0M13 21a4 4 0 0 1 6 0"/><circle cx="16" cy="25" r="1.2" fill="currentColor"/></svg>,
  Parking: () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="5" width="22" height="22" rx="3"/><path d="M13 22V10h4a3.5 3.5 0 0 1 0 7h-4"/></svg>,
  Phone:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Pin:     ({ size = 18 }) => <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Clock:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Instagram: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>,
  Facebook:  () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>,
  // New amenity icons
  Park:    () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4l-5 7h3l-4 6h12l-4-6h3z"/><path d="M16 17v7"/><path d="M4 28h24"/><path d="M7 28v-5"/><circle cx="7" cy="19" r="3"/><path d="M25 28v-5"/><circle cx="25" cy="19" r="3"/></svg>,
  Tienda:  () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 9h18l-2 15H9L7 9z"/><path d="M12 9c0-2.2 1.8-4 4-4s4 1.8 4 4"/><path d="M12 18h8"/><path d="M12 22h5"/></svg>,
  Barra:   () => <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h16L16 18v8"/><path d="M12 26h8"/><path d="M8 6l8 10M24 6l-8 10"/></svg>,
};

// --- Habitaciones (precios reales) -----------------------------------------
const ROOMS = [
  {
    id: "unipersonal",
    tier: "Individual",
    name: "Habitación individual",
    desc: "Para una persona. Cama individual, baño privado y vista al jardín. Tranquilidad y descanso garantizados.",
    capacity: "1 persona",
    price: 175,
    features: ["1 cama individual", "Baño privado", "Wi-Fi", "Vista al jardín"],
    img: "assets/cuarto-bosque.jpg",
  },
  {
    id: "dos-camas",
    tier: "Doble",
    name: "Habitación con 2 camas",
    desc: "Para 2 adultos y 2 niños menores de 7 años. Cómoda y amplia, ideal para familias pequeñas.",
    capacity: "2 adultos + 2 niños (< 7 años)",
    price: 250,
    features: ["2 camas", "2 adultos + 2 niños (<7 años)", "Baño privado", "Wi-Fi"],
    img: "assets/cuarto-ribera.jpg",
  },
  {
    id: "tres-camas",
    tier: "Triple",
    name: "Habitación con 3 camas",
    desc: "Para 3 adultos y 2 niños menores de 7 años. Espacio de sobra para toda la familia.",
    capacity: "3 adultos + 2 niños (< 7 años)",
    price: 375,
    features: ["3 camas", "3 adultos + 2 niños (<7 años)", "Baño privado", "Wi-Fi"],
    img: "assets/cuarto-suite.jpeg",
  },
  {
    id: "casita",
    tier: "Casita",
    name: "Casita",
    desc: "Espacio privado e independiente para hasta 5 personas. Ideal para grupos y familias grandes.",
    capacity: "5 personas",
    price: 500,
    features: ["Hasta 5 personas", "Espacio privado", "Baño privado", "Wi-Fi"],
    img: "assets/cuarto-suite.jpeg",
  },
];

// --- Collage de eventos ----------------------------------------------------
const EVENTS = [
  { cls: "ec-1", img: "assets/eventos-generico.jpeg",  label: "Evento en Las Fuentes" },
  { cls: "ec-2", img: "assets/evento-zumba.jpg",       label: "Actividades y recreación" },
  { cls: "ec-3", img: "assets/evento-ciclismo.jpg",    label: "Actividades al aire libre" },
  { cls: "ec-4", img: "assets/evento-psicina.jpg",     label: "Área de piscinas" },
  { cls: "ec-5", img: "assets/evento-bautizo.jpg",     label: "Piscina para bautizos evangélicos" },
];

// --- Amenidades ------------------------------------------------------------
const AMENITIES = [
  { icon: "Pool",    name: "3 Piscinas",               desc: "Para adultos, niños y temperatura agradable. El corazón del centro recreativo.", img: "assets/evento-psicina.jpg" },
  { icon: "Park",    name: "Habitaciones limpias",     desc: "Cómodas, tranquilas y rodeadas de bosque. Cada habitación con baño privado, ropa de cama cuidada y vista al jardín.", img: "assets/cuarto-bosque.jpg" },
  { icon: "Soccer",  name: "Cancha de fútbol",         desc: "Césped natural para partidos y actividades deportivas. También habilitamos el espacio para eventos deportivos, competencias y actividades grupales al aire libre.", img: "assets/evento-ciclismo.jpg" },
  { icon: "Garden",  name: "Jardines del hotel",       desc: "Senderos floridos entre los árboles, perfectos para caminar al amanecer.",       img: "assets/amen-jardines-hotel.jpg" },
  { icon: "Tree",    name: "Jardines del restaurante", desc: "Comer al aire libre, rodeado de pinos y brisa de montaña.",                      img: "assets/amen-jardines-restaurante.jpg" },
  { icon: "Walk",    name: "Caminatas naturales",      desc: "Senderos limpios dentro del centro recreativo para explorar el bosque.",         img: "assets/amen-caminatas.jpg" },
  { icon: "View",    name: "Espacios amplios",      desc: "Vistas amplias de la sierra de los Cuchumatanes.",                              img: "assets/amen-mirador.jpg" },
  { icon: "Chapel",  name: "Capilla privada",          desc: "Para ceremonias íntimas, bendiciones y momentos de reflexión.",                  img: "assets/amen-capilla.jpg" },
  { icon: "Tienda",  name: "Tiendita",                 desc: "Chucherías, snacks y toda clase de bebidas para el antojo.",                     img: "assets/amen-tienda.jpg" },
  { icon: "Barra",   name: "Barra",                    desc: "Tragos, cervezas, bebidas artesanales y refrescos para todos.",                  img: "assets/amen-barra.jpg" },
  { icon: "Parking", name: "Parqueo amplio",           desc: "Para vehículos particulares y buses. Seguro y techado.",                         img: "assets/amen-parqueo.jpg" },
];

// --- Platillos (restaurante) -----------------------------------------------
const DISHES = [
  { id: 1, eyebrow: "Especialidad de la casa", name: "Platillo del chef",  desc: "Ingredientes frescos del día, preparados a la leña.",   span: "span-7", img: "assets/plato-comida.png" },
  { id: 2, eyebrow: "Para compartir",          name: "Plato cervecero",    desc: "Antojitos, embutidos y acompañamientos para el grupo.", span: "span-5", img: "assets/plato-cervecero.jpeg" },
  { id: 3, eyebrow: "Botana",                  name: "Nachos especiales",  desc: "Crujientes, con guacamol, frijoles y crema.",           span: "span-4", img: "assets/plato-nachos.jpg" },
  { id: 4, eyebrow: "Bebidas",                 name: "Bebidas refrescantes",  desc: "Refrescante, natural, preparado al momento.",           span: "span-4", img: "assets/plato-mojito.png" },
];

Object.assign(window, { Icon, WA_NUMBER, wa, ROOMS, EVENTS, AMENITIES, DISHES });
