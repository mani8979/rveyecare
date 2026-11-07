import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar,
  Sparkles,
  ShieldCheck,
  ShieldAlert
} from 'lucide-react';
import { availableServices } from '../data/services';

export default function SymptomGuide() {
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const symptomOptions = [
    {
      id: 'general',
      label: 'Routine Check-up / Eye Strain',
      telugu: 'జనరల్ చెకప్ / కంటి అలసట',
      icon: 'Eye',
      serviceId: 'general-eye-checkup',
      serviceTitle: 'General Eye Check-up',
      serviceTelugu: 'జనరల్ ఐ చెకప్',
      explanation: 'Ideal for uncorrected refractive errors, headaches from screen use, or annual vision screening for students and adults.',
      isAvailable: true
    },
    {
      id: 'cataract',
      label: 'Cloudy Vision / Night Glare',
      telugu: 'మసక దృష్టి / రాత్రి వెలుగుల సమస్య',
      icon: 'Sun',
      serviceId: 'cataract-services',
      serviceTitle: 'Cataract Services',
      serviceTelugu: 'కాటరాక్ట్ సర్వీసెస్',
      explanation: 'Indicates potential natural lens opacification. Recommended for micro-incision phacoemulsification evaluation and premium IOL consultation.',
      isAvailable: true
    },
    {
      id: 'cornea',
      label: 'Dry Eyes / Gritty Sensation / Redness',
      telugu: 'కళ్లు పొడిబారడం / ఎరుపు / నలక పడినట్లు',
      icon: 'Sparkles',
      serviceId: 'cornea-services',
      serviceTitle: 'Cornea Services',
      serviceTelugu: 'కార్నియా సర్వీసెస్',
      explanation: 'Evaluates tear film instability, ocular surface inflammation, allergic conjunctivitis, or corneal infections.',
      isAvailable: true
    },
    {
      id: 'glaucoma',
      label: 'Family History / High Eye Pressure',
      telugu: 'వంశపారంపర్య గ్లకోమా / కంటి ఒత్తిడి',
      icon: 'Activity',
      serviceId: 'glaucoma-services',
      serviceTitle: 'Glaucoma Services',
      serviceTelugu: 'గ్లకోమా సర్వీసెస్',
      explanation: 'Essential for early detection via Goldmann tonometry and visual field analysis to protect the optic nerve.',
      isAvailable: true
    },
    {
      id: 'retina',
      label: 'Diabetes / Sudden Floaters / Wavy Lines',
      telugu: 'షుగర్ వ్యాధి / కంటిలో మచ్చలు',
      icon: 'ShieldCheck',
      serviceId: 'medical-retina-services',
      serviceTitle: 'Medical Retina Services',
      serviceTelugu: 'మెడికల్ రెటీనా సేవలు',
      explanation: 'Requires detailed dilated fundus biomicroscopy for diabetic retinopathy staging and retinal vascular care.',
      isAvailable: true
    },
    {
      id: 'opticals',
      label: 'New Spectacles / Blue-Cut Computer Glasses',
      telugu: 'కొత్త కళ్లజోడు / కంప్యూటర్ గ్లాసెస్',
      icon: 'Glasses',
      serviceId: 'opticals',
      serviceTitle: 'Opticals Unit',
      serviceTelugu: 'ఆప్టికల్స్',
      explanation: 'In-house optical counter offering verified prescription lenses, progressive lenses, and lightweight frames.',
      isAvailable: true
    },
    {
      id: 'squint-vitrectomy',
      label: 'Squint Surgery / Vitreoretinal Surgery',
      telugu: 'స్క్వింట్ / విట్రెక్టమీ సర్జరీ',
      icon: 'ShieldAlert',
      serviceId: 'non-scope',
      serviceTitle: 'Non-Scope of Services (Services Not Available)',
      serviceTelugu: 'లభించని వైద్య సేవలు',
      explanation: 'Operative squint surgery and vitreoretinal vitrectomy surgeries are outside the facility scope. We provide initial evaluation and formal referral guidance.',
      isAvailable: false
    }
  ];

  return (
    <div className="card p-6 sm:p-10 bg-white border border-[#E3E9F4] rounded-3xl shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
        <div>
          <div className="inline-flex items-center gap-2 mb-1.5">
            <span className="badge badge-navy">INTERACTIVE CLINICAL GUIDE</span>
            <span className="text-xs font-telugu font-semibold px-2 py-0.5 rounded bg-orange-50 text-[#F36B16]">
              లక్షణాల మార్గదర్శి
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#142F80]">
            Which Eye Care Service Do You Need?
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Click your primary visual concern to discover the relevant hospital department.
          </p>
        </div>

        <div className="text-xs text-gray-400 bg-[#F3F6FC] px-3 py-1.5 rounded-lg border border-[#E3E9F4] self-start md:self-auto">
          Scope Guidance Tool
        </div>
      </div>

      {/* Symptoms Choice Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {symptomOptions.map((opt) => {
          const isSelected = selectedSymptom?.id === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedSymptom(opt)}
              className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'border-[#F36B16] bg-[#FFF5EE] shadow-sm ring-1 ring-[#F36B16]'
                  : opt.isAvailable
                  ? 'border-[#E3E9F4] bg-[#F8FAFD] hover:border-[#142F80]/40 hover:bg-white'
                  : 'border-orange-200 bg-orange-50/40 hover:bg-orange-50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-bold ${
                    isSelected ? 'text-[#F36B16]' : 'text-[#142F80]'
                  }`}>
                    {opt.label}
                  </span>
                  {!opt.isAvailable && (
                    <span className="text-[10px] font-bold text-red-600 bg-red-100/60 px-1.5 py-0.5 rounded">
                      Non-Scope
                    </span>
                  )}
                </div>
                <div className="text-[11.5px] font-telugu text-gray-500">
                  {opt.telugu}
                </div>
              </div>

              <div className="mt-3 text-right">
                <span className={`text-[11px] font-bold ${
                  isSelected ? 'text-[#F36B16]' : 'text-gray-400'
                }`}>
                  {isSelected ? 'Selected' : 'Select'} &rarr;
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Result Card */}
      {selectedSymptom ? (
        <div className={`p-6 rounded-2xl border animate-fadeIn ${
          selectedSymptom.isAvailable
            ? 'bg-[#EDF3FC] border-[#CBD9F5]'
            : 'bg-[#FFF8F6] border-[#FDBA74]'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {selectedSymptom.isAvailable ? (
                  <CheckCircle2 size={18} className="text-[#059669]" />
                ) : (
                  <ShieldAlert size={18} className="text-[#C2410C]" />
                )}
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  {selectedSymptom.isAvailable ? 'Recommended Scope Service:' : 'Statutory Scope Clarification:'}
                </span>
              </div>

              <h4 className={`text-xl font-extrabold ${
                selectedSymptom.isAvailable ? 'text-[#142F80]' : 'text-[#9A3412]'
              }`}>
                {selectedSymptom.serviceTitle}{' '}
                <span className="font-telugu text-sm font-normal">
                  ({selectedSymptom.serviceTelugu})
                </span>
              </h4>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-2 max-w-2xl">
                {selectedSymptom.explanation}
              </p>
            </div>

            <div className="flex-shrink-0">
              {selectedSymptom.isAvailable ? (
                <Link
                  to={`/appointment?service=${selectedSymptom.serviceId}`}
                  className="btn btn-primary shadow-sm hover:shadow-orange"
                >
                  <Calendar size={16} />
                  <span>Book for This Service</span>
                </Link>
              ) : (
                <Link
                  to="/services#non-scope"
                  className="btn bg-[#C2410C] hover:bg-[#9A3412] text-white border-transparent text-sm"
                >
                  <span>View Non-Scope Policy</span>
                  <ArrowRight size={15} />
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center p-4 bg-gray-50 rounded-xl text-xs text-gray-500 italic">
          Select any visual concern above to view the clinical recommendation and consultation option.
        </div>
      )}
    </div>
  );
}

