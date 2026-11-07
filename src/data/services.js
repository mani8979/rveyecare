/**
 * RV SUPERSPECIALITY EYE CARE - Scope & Non-Scope Services Data
 * Sourced directly from official hospital Scope of Services documentation.
 */

export const availableServices = [
  {
    id: 'general-eye-checkup',
    title: 'General Eye Check-up',
    teluguTitle: 'జనరల్ ఐ చెకప్',
    slug: 'general-eye-checkup',
    iconName: 'Eye',
    image: '/images/service-general.jpg',
    shortDescription: 'Comprehensive visual acuity assessment, refraction, slit-lamp bio-microscopy, and preventive ocular health evaluation.',
    overview: 'A routine comprehensive eye check-up is the foundation of preventive vision care. Many vision-threatening conditions develop silently without early symptoms. Our detailed examination screens your visual acuity, refractive status, anterior segment, and posterior ocular structures.',
    keyHighlights: [
      'Digital computerized refraction & subjective verification',
      'High-resolution slit lamp biomicroscopic anterior examination',
      'Non-contact tonometry for intraocular pressure screening',
      'Dilated fundus screening for retinal wellness',
      'Early detection of systemic disease signs (diabetes, hypertension)'
    ],
    whoShouldVisit: [
      'Anyone experiencing eye strain, headaches, or blurred vision',
      'Individuals aged 40+ for routine presbyopia and glaucoma checks',
      'Diabetic and hypertensive patients requiring annual retinal wellness',
      'Children and students requiring school vision screening',
      'Individuals spending prolonged hours on digital screens'
    ],
    preparation: 'Please bring your current spectacles or prescription. Dilation drops may temporarily blur your near vision for 2-3 hours; we recommend bringing sunglasses or an escort.'
  },
  {
    id: 'cataract-services',
    title: 'Cataract Services',
    teluguTitle: 'కాటరాక్ట్ సర్వీసెస్',
    slug: 'cataract-services',
    iconName: 'Sun',
    image: '/images/service-cataract.jpg',
    shortDescription: 'Advanced micro-incision phacoemulsification, optical biometry, and premium intraocular lens (IOL) counseling.',
    overview: 'Cataracts cause clouding of the natural lens, leading to gradual loss of clarity, poor night vision, and washed-out colors. At RV Superspeciality Eye Care, our cataract unit provides precision pre-operative biometry and modern surgical consultation for clear, restorative visual outcomes.',
    keyHighlights: [
      'High-precision optical biometry and keratometry',
      'Micro-incision stitchless phacoemulsification evaluation',
      'Comprehensive counseling for Monofocal, Toric, and Multifocal IOLs',
      'Dedicated day-care procedure guidance with rapid visual recovery',
      'Structured post-operative follow-up and vision rehabilitation'
    ],
    whoShouldVisit: [
      'Cloudy, foggy, or filmy vision making reading difficult',
      'Increased glare or halos around headlights during night driving',
      'Frequent changes in spectacle numbers in older adults',
      'Difficulty recognizing faces or reading street signs in bright light',
      'Fading or yellowing of vibrant colors'
    ],
    preparation: 'Biometry measurements require steady fixation. Patients who wear contact lenses should discontinue soft lenses 3 days prior to detailed corneal biometric measurements.'
  },
  {
    id: 'cornea-services',
    title: 'Cornea Services',
    teluguTitle: 'కార్నియా సర్వీసెస్',
    slug: 'cornea-services',
    iconName: 'Sparkles',
    image: '/images/service-cornea.jpg',
    shortDescription: 'Expert evaluation and medical management of corneal infections, dry eye syndrome, pterygium, and surface disorders.',
    overview: 'The cornea is the eye’s transparent front window. Corneal infections, surface dystrophies, and severe dry eyes can cause intense discomfort and compromise vision. Our cornea service provides detailed slit-lamp diagnostics, corneal scraping/staining, and targeted medical therapies.',
    keyHighlights: [
      'Evaluation of bacterial, fungal, and viral keratitis',
      'Comprehensive Dry Eye Disease (DED) tear film assessment & therapy',
      'Pterygium assessment and surgical planning with conjunctival autograft',
      'Allergic conjunctivitis and ocular surface inflammation control',
      'Corneal foreign body removal and corneal abrasion management'
    ],
    whoShouldVisit: [
      'Persistent eye redness, gritty sensation, or foreign body feeling',
      'Severe pain, sensitivity to light (photophobia), or watery eyes',
      'White or grayish spots visible on the clear part of the eye',
      'Chronic dry eyes aggravated by AC environments and screens',
      'Growth of fleshy tissue on the white of the eye (pterygium)'
    ],
    preparation: 'Do not use over-the-counter steroid eye drops before your consultation, as they can alter clinical staining and mask underlying fungal or viral infections.'
  },
  {
    id: 'glaucoma-services',
    title: 'Glaucoma Services',
    teluguTitle: 'గ్లకోమా సర్వీసెస్',
    slug: 'glaucoma-services',
    iconName: 'Activity',
    image: '/images/service-glaucoma.jpg',
    shortDescription: 'Early detection, Goldmann applanation tonometry, central corneal thickness assessment, and progressive visual preservation.',
    overview: 'Known as the "silent thief of sight," glaucoma causes irreversible damage to the optic nerve, typically associated with elevated intraocular pressure. Early detection is paramount because peripheral vision loss occurs painlessly until advanced stages.',
    keyHighlights: [
      'Goldmann Applanation Tonometry (the clinical gold standard)',
      'Gonioscopy for anterior chamber angle evaluation (open vs closed)',
      'Stereoscopic optic nerve head and retinal nerve fiber layer assessment',
      'Automated visual field testing coordination and monitoring',
      'Tailored pressure-lowering medical therapy and compliance counseling'
    ],
    whoShouldVisit: [
      'Family history of glaucoma or unexplained irreversible vision loss',
      'Individuals aged 40 and above with high refractive error (high myopia/hyperopia)',
      'Patients on long-term steroid medications for asthma, skin, or joint issues',
      'Frequent unexplained headaches or eye ache with colored halos around lights',
      'Individuals with diabetes, hypertension, or migraine history'
    ],
    preparation: 'Bring all previous eye drop bottles and past visual field reports. Continue your regular pressure-lowering drops on the day of the examination unless instructed otherwise.'
  },
  {
    id: 'medical-retina-services',
    title: 'Medical Retina Services',
    teluguTitle: 'మెడికల్ రెటీనా సేవలు',
    slug: 'medical-retina-services',
    iconName: 'ShieldCheck',
    image: '/images/service-retina.jpg',
    shortDescription: 'Non-surgical diagnostic evaluation and medical management of diabetic retinopathy, vein occlusions, and macular disorders.',
    overview: 'The medical retina service focuses on diagnosing and medically managing diseases of the retina and choroid without major vitreoretinal surgery. We specialize in screening and medically stabilizing diabetic retinopathy, retinal vascular occlusions, and age-related macular degeneration.',
    keyHighlights: [
      'Dilated indirect ophthalmoscopy and 90D/78D biomicroscopic retinal screening',
      'Diabetic retinopathy staging and personalized glycemic eye counseling',
      'Medical management and monitoring of retinal vein and artery occlusions',
      'Evaluation of age-related macular changes and dry AMD progression',
      'Timely referral coordination for cases requiring surgical vitrectomy'
    ],
    whoShouldVisit: [
      'Anyone diagnosed with Type 1 or Type 2 Diabetes Mellitus',
      'Sudden distortion of straight lines or wavy appearance of text',
      'Sudden onset of dark spots, floaters, or black cobwebs in vision',
      'Central dark patches or missing areas in vision',
      'Patients with high systemic blood pressure or cardiovascular conditions'
    ],
    preparation: 'Pupillary dilation is mandatory for complete retinal evaluation. Your eyes will be dilated using drops, causing temporary blurriness for 3 to 4 hours. Do not drive yourself to this appointment.'
  },
  {
    id: 'opticals',
    title: 'Opticals',
    teluguTitle: 'ఆప్టికల్స్',
    slug: 'opticals',
    iconName: 'Glasses',
    image: '/images/service-opticals.jpg',
    shortDescription: 'In-house precision optical dispensing unit featuring curated ergonomic frames and certified ophthalmic lenses.',
    overview: 'An accurate prescription is only as good as the dispensing quality of your eyeglasses. Our in-house optical center ensures your clinical prescription is translated into properly centered, certified lenses matched with comfortable, durable frames suited to your lifestyle.',
    keyHighlights: [
      'Precision optical pupillary distance (PD) and fitting height measurement',
      'Curated frames: lightweight titanium, flexible TR90, acetate, and rimless',
      'Single vision, bifocal, and progressive addition lenses (PALs)',
      'Advanced lens coatings: anti-reflective, blue-light filter, photochromic',
      'Complimentary frame adjustments, nose-pad replacements, and fit checks'
    ],
    whoShouldVisit: [
      'Patients with new spectacle prescriptions requiring accurate lens dispensing',
      'Screen users seeking certified blue-light filter computer glasses',
      'Professionals seeking comfortable progressive lenses without peripheral distortion',
      'Children and active individuals needing durable, impact-resistant frames',
      'Anyone whose current glasses cause dizziness, sliding, or temple pressure'
    ],
    preparation: 'Bring your newest prescription from our optometrist or ophthalmologist. If updating existing glasses, please bring your current pair for optical comparison.'
  }
];

/**
 * NON-SCOPE OF SERVICES (Explicitly not available at RV Superspeciality Eye Care)
 * Important hospital disclosure poster items. Must be clearly separated and never mixed with available treatments.
 */
export const nonScopeServices = [
  {
    id: 'eye-bank',
    title: 'Eye Bank',
    teluguTitle: 'ఐ బ్యాంక్',
    description: 'RV Superspeciality Eye Care does not operate an in-house eye bank or donor cornea harvesting/storage facility. For corneal donor registration or corneal tissue procurement, patients are directed to authorized government and statutory eye bank institutions.',
    reasonNotice: 'Facility Policy & Statutory Scope'
  },
  {
    id: 'squint-surgery',
    title: 'Squint Surgery',
    teluguTitle: 'స్క్వింట్ సర్జరీ',
    description: 'While non-surgical pediatric vision screening and refractive assessment for strabismus are conducted, operative squint correction surgery is outside the current surgical scope of this centre. Patients requiring complex extraocular muscle surgery are guided to specialized pediatric strabismology units.',
    reasonNotice: 'Specialized Surgical Scope Restriction'
  },
  {
    id: 'vitreoretinal-surgery',
    title: 'Vitreoretinal Surgery',
    teluguTitle: 'విట్రో రెటినల్ సర్జరీ',
    description: 'Our hospital provides comprehensive Medical Retina services (including diagnostic screening, medical stabilization, and counseling). However, advanced surgical vitreoretinal interventions (such as pars plana vitrectomy, retinal detachment buckling, or complex endovitreal surgeries) are not performed on-site.',
    reasonNotice: 'Medical Retina Only - Non-Surgical Scope'
  }
];

