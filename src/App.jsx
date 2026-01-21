import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Contact } from "./components";

const App = () => (
   <div className="bg-primary w-full overflow-hidden">

      {/* ============================================= */}
      {/*  NAVIGATION BAR - is FULL WIDTH + STICKY  */}
      {/*  fisrtly it was inside in boxWidth → thats why was smaller */}
      {/*  now removed ! */}
      {/* ============================================= */}
      <Navbar />

   {/* ===== HERO SECTION ===== */}
    <div className={`bg-primary ${styles.flexStart} mt-[80px]`}>
       <div className={`${styles.boxWidth} mx-auto w-full`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Contact /> {/* ← new section contact */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
