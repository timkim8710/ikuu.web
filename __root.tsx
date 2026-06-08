import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased font-sans">
      
      {/* Top Banner & Scrolling News Marquee Ticker */}
      <div className="bg-ikuu-navy border-b-2 border-ikuu-gold text-white py-2.5 overflow-hidden sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center">
          <span className="bg-ikuu-gold text-ikuu-navy font-black text-xs uppercase px-2.5 py-1 rounded shadow-sm mr-4 shrink-0 tracking-wide z-10">
            Official Updates
          </span>
          <div className="animate-ticker whitespace-nowrap text-sm font-semibold opacity-95">
            Welcome to the Ikuu Boys' High School Digital Portal. • Form 1 onboarding clearance pathways are now fully operational. • Open procurement parameters and tender files have been published to the PPIP module. • Term fees are payable only through official school banking slips.
          </div>
        </div>
      </div>

      {/* Corporate Identity Structural Header Block Link */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-[44px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Institutional Crest Mapping Layout */}
          <Link to="/" className="flex items-center gap-4 group cursor-pointer">
            <img 
              src="/logo.png.png" 
              alt="Ikuu Boys High School Crest" 
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-tight text-ikuu-navy leading-none">
                IKUU BOYS' HIGH SCHOOL
              </h1>
              <p className="text-xs font-bold uppercase tracking-widest text-ikuu-gold-dark mt-1">
                National Academic Center
              </p>
            </div>
          </Link>

          {/* Navigation Control Panel Panel */}
          <nav className="flex items-center gap-1 sm:gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <Link 
              to="/" 
              activeProps={{ className: 'bg-white text-ikuu-gold-dark shadow-sm' }} 
              className="px-4 py-2 rounded-md font-bold text-sm text-ikuu-blue hover:text-ikuu-gold-dark transition-all"
            >
              Home
            </Link>
            <Link 
              to="/admissions" 
              activeProps={{ className: 'bg-white text-ikuu-gold-dark shadow-sm' }} 
              className="px-4 py-2 rounded-md font-bold text-sm text-ikuu-blue hover:text-ikuu-gold-dark transition-all"
            >
              Admissions
            </Link>
            <Link 
              to="/tenders" 
              activeProps={{ className: 'bg-white text-ikuu-gold-dark shadow-sm' }} 
              className="px-4 py-2 rounded-md font-bold text-sm text-ikuu-blue hover:text-ikuu-gold-dark transition-all"
            >
              Procurement
            </Link>
            <Link 
              to="/contact" 
              activeProps={{ className: 'bg-white text-ikuu-gold-dark shadow-sm' }} 
              className="px-4 py-2 rounded-md font-bold text-sm text-ikuu-blue hover:text-ikuu-gold-dark transition-all"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Dynamic Content Views Render Outlet Section */}
      <main className="grow flex flex-col">
        <Outlet />
      </main>

      {/* Core Institutional Site Wide Footer */}
      <footer className="bg-ikuu-navy text-white py-12 border-t-4 border-ikuu-gold mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm opacity-90">
          <div>
            <h4 className="font-bold text-ikuu-gold text-base mb-3 uppercase tracking-wider">Institution Hub</h4>
            <p>Ikuu Boys' High School stands as a leading National school in Kenya dedicated to holistic youth mentorship, academic excellence, and premium spiritual discipline.</p>
          </div>
          <div>
            <h4 className="font-bold text-ikuu-gold text-base mb-3 uppercase tracking-wider">Quick Navigation Links</h4>
            <ul className="space-y-2 font-medium">
              <li><Link to="/" className="hover:text-ikuu-gold transition-colors">&raquo; Home Page</Link></li>
              <li><Link to="/admissions" className="hover:text-ikuu-gold transition-colors">&raquo; Clearance & Fees</Link></li>
              <li><Link to="/tenders" className="hover:text-ikuu-gold transition-colors">&raquo; Tender Applications</Link></li>
              <li><Link to="/contact" className="hover:text-ikuu-gold transition-colors">&raquo; Contact Registrar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-ikuu-gold text-base mb-3 uppercase tracking-wider">Registry Contact</h4>
            <p className="leading-relaxed">
              P.O. Box 40 – 60400, Chuka, Kenya<br />
              Registry: 0739 902 196<br />
              Email: ikuuboysh@yahoo.co.uk
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center pt-8 mt-8 border-t border-slate-800 text-xs text-slate-400">
          &copy; 2026 Ikuu Boys' High School. All Rights Reserved. Powered by TanStack Start.
        </div>
      </footer>
    </div>
  );
}
