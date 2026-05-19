// ==========================================================
// Las Fuentes — App
// ==========================================================
const { useState } = React;

function App() {
  const [drawer, setDrawer] = useState(false);
  return (
    <React.Fragment>
      <Nav onOpenDrawer={() => setDrawer(true)} />
      <Drawer open={drawer} onClose={() => setDrawer(false)} />
      <Hero />
      <HotelSection />
      <RestaurantSection />
      <EventsSection />
      <AmenitiesSection />
      <LocationSection />
      <Footer />
      <WhatsAppFab />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
