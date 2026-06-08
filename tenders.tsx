import { createFileRoute } from '@tanstack/react-router';

export const route = createFileRoute('/tenders')({
  component: TendersComponent,
});

function TendersComponent() {
  return (
    <div className="flex flex-col grow">
      <div className="bg-gradient-to-r from-ikuu-navy via-ikuu-blue to-ikuu-navy text-white py-14 text-center shadow-inner">
        <h2 className="text-3xl font-black tracking-tight">Procurement Opportunities & PPIP Compliance</h2>
        <p className="text-slate-300 text-sm mt-1.5 font-medium">Public Procurement Information Portal configurations for school supplies</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 w-full grow">
        <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-200">
          <h3 className="text-2xl font-extrabold text-ikuu-navy mb-2 flex items-center gap-2">
            <span className="w-2 h-6 bg-ikuu-gold rounded-full inline-block" />
            Open Tender Applications
          </h3>
          
          <div className="divide-y divide-slate-100 mt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between py-5 gap-4">
              <div>
                <h4 className="font-bold text-slate-800 text-base">Tender No: IBHS/T/04/2026 — Supply of Fresh Foodstuffs</h4>
                <p className="text-xs font-semibold text-rose-600 mt-1 bg-rose-50 px-2 py-0.5 rounded inline-block">Closing Date: June 25, 2026</p>
              </div>
              <button onClick={() => alert('Accessing BOQ Document Profile...')} className="bg-ikuu-navy hover:bg-ikuu-blue text-white text-xs font-bold px-4 py-2.5 rounded-lg border-b-2 border-ikuu-gold tracking-wide">
                Download BOQ Pack
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
