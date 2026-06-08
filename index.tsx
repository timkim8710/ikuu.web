import { createFileRoute, Link } from '@tanstack/react-router';

export const route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="flex flex-col grow animate-fade-in">
      {/* Structural Hero Header Section */}
      <div className="bg-gradient-to-r from-ikuu-navy via-ikuu-blue to-ikuu-navy text-white py-16 text-center shadow-inner relative">
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        <h2 className="text-3xl md:text-5xl font-black tracking-tight relative z-10 drop-shadow-sm">
          Welcome to the Knowledge Citadel
        </h2>
        <p className="text-slate-300 text-sm md:text-base mt-3 max-w-2xl mx-auto px-4 font-medium relative z-10">
          Striving for premium academic excellence and standard-setting discipline metrics as a leading National Center.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 w-full grow">
        
        {/* Main Infrastructure Gate Showcase Asset Wrapper */}
        <div className="w-full h-64 md:h-[480px] rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200 mb-12 relative group">
          <img 
            src="/ikuu gate.jpg" 
            alt="Ikuu Boys High School Main Entrance Gate" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 text-white">
            <span className="bg-ikuu-gold text-ikuu-navy font-bold text-xs px-2.5 py-1 rounded uppercase tracking-wider">Campus View</span>
            <h3 className="text-lg font-bold mt-1">Main Institutional Entrance Gate Compound</h3>
          </div>
        </div>

        {/* Informational Presentation Layer Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <section className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-ikuu-navy border-b border-slate-100 pb-4 mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-ikuu-gold rounded-full inline-block" />
                Institutional Overview
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Welcome to Ikuu Boys' High School, where we foster holistic student progression through solid academic foundations, rigid discipline boundaries, and premium extra-curricular execution channels.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4 font-medium">
                Our modern digital workspace allows guardians and prospective candidates to access fee matrix calculators, review ongoing procurement briefs, or initialize dynamic contacts with our admissions panel registry.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Motto: Onwards to Excellence</span>
              <Link 
                to="/admissions" 
                className="bg-ikuu-navy hover:bg-ikuu-blue text-white font-bold text-xs px-5 py-3 rounded-lg shadow-md transition-all uppercase tracking-wider border-b-4 border-ikuu-gold"
              >
                Admissions Desk &rarr;
              </Link>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-ikuu-navy border-b border-slate-100 pb-4 mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-ikuu-gold rounded-full inline-block" />
                Academic Assembly
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                Our student population participates in structured daily morning assemblies designed to build spiritual growth, community accountability, and strict administrative synchronization.
              </p>
            </div>
            
            {/* Assembly Structural Embedded Image Asset */}
            <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 max-h-64 relative group">
              <img 
                src="/students.jpg" 
                alt="Ikuu Boys High School Student Assembly Session" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
