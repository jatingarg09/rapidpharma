// src/app/data/products.ts
export interface Product {
  name: string;
  composition: string;
  category: string;
  packaging: string;
  imageUrl: string; // Added imageUrl property
  slug?: string; // Optional slug property for URL
  fullComposition: string; // Added
  therapeuticClass: string; // Added therapeuticClass property
}
// This file contains a list of pharmaceutical products with their details.
export const products: Product[] = [
  {
    "name": "AZIRAP-500",
    "composition": "Azithromycin Dihydrate equivalent to Azithromycin 500mg",
    "category": "Tablet",
    "packaging": "10x3 Blister",
    "imageUrl": "/products/AZIRAP-500.png",
    "fullComposition": "Azithromycin Dihydrate IP eq. to Azithromycin 500mg",
    "therapeuticClass": "Antibiotic"
  },
  {
    "name": "CEFIMELT-100DT",
    "composition": "Cefixime 100mg (Dispersible Tablets)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/CEFIMELT-100DT.jpg",
    "fullComposition": "Cefixime IP 100mg",
    "therapeuticClass": "Antibiotic"
  },
  {
    "name": "CEFIMELT-200LB",
    "composition": "Cefixime 200mg + Lactic Acid Bacillus",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/CEFIMELT-200LB.jpg",
    "fullComposition": "Cefixime IP 200mg + Lactic Acid Bacillus 60 million spores",
    "therapeuticClass": "Antibiotic"
  },
  {
    "name": "CEFIMELT-S 1.5",
    "composition": "Ceftriaxone + Sulbactam",
    "category": "Injection",
    "packaging": "1 vial",
    "imageUrl": "/products/CEFIMELT-S 1.5GM.jpg",
    "fullComposition": "Ceftriaxone Sodium IP 1g + Sulbactam Sodium IP 500mg",
    "therapeuticClass": "Antibiotic"
  },
  {
    "name": "CLARYMONT-L",
    "composition": "Montelukast + Levocetirizine",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/CLARYMONT-L.jpg",
    "fullComposition": "Montelukast Sodium IP eq. to Montelukast 10mg + Levocetirizine Dihydrochloride IP 5mg",
    "therapeuticClass": "Antiallergic & Respiratory"
  },
  {
    "name": "COFIRAP",
    "composition": "Ambroxol + Terbutaline + Guaiphenesin + Menthol",
    "category": "Syrup/Suspension",
    "packaging": "100ml bottle",
    "imageUrl": "/products/COFIRAP.jpg",
    "fullComposition": "Ambroxol Hydrochloride IP 15mg + Terbutaline Sulphate IP 1.25mg + Guaiphenesin IP 50mg + Menthol IP 2mg per 5ml",
    "therapeuticClass": "Cough & Cold"
  },
  {
    "name": "COFIRAP-D",
    "composition": "Dextromethorphan + Phenylephrine + Chlorpheniramine",
    "category": "Syrup/Suspension",
    "packaging": "100ml bottle",
    "imageUrl": "/products/COFIRAP-D.jpg",
    "fullComposition": "Dextromethorphan Hydrobromide IP 10mg + Phenylephrine Hydrochloride IP 5mg + Chlorpheniramine Maleate IP 2mg per 5ml",
    "therapeuticClass": "Cough & Cold"
  },
  {
    "name": "COFIRAP-LS",
    "composition": "Ambroxol 30mg + Levosalbutamol 1mg + Guaifenesin 50mg/5ml",
    "category": "Syrup/Suspension",
    "packaging": "100ml bottle",
    "imageUrl": "/products/COFIRAP-LS.jpg",
    "fullComposition": "Ambroxol Hydrochloride IP 30mg + Levosalbutamol Hydrochloride IP 1mg + Guaifenesin IP 50mg per 5ml",
    "therapeuticClass": "Cough & Cold"
  },
  {
    "name": "D3NOW",
    "composition": "Vitamin D3 60000 IU",
    "category": "Capsule",
    "packaging": "10x1x4 Blister",
    "imageUrl": "/products/D3 NOW-2.jpg",
    "fullComposition": "Cholecalciferol (Vitamin D3) IP 60000 IU",
    "therapeuticClass": "Vitamin Supplement"
  },
  {
    "name": "D3NOW NANO",
    "composition": "Vitamin D3 Oral Solution 60000 IU",
    "category": "Syrup/Suspension",
    "packaging": "5ml Shot",
    "imageUrl": "/products/D3 NOW.jpg",
    "fullComposition": "Cholecalciferol (Vitamin D3) IP 60000 IU per 5ml",
    "therapeuticClass": "Vitamin Supplement"
  },
  {
    "name": "DECARAP 50",
    "composition": "Nandrolone Decanoate 50mg/ml",
    "category": "Injection",
    "packaging": "1 ampoule",
    "imageUrl": "/products/DECARAP-50.jpg",
    "fullComposition": "Nandrolone Decanoate IP 50mg per ml",
    "therapeuticClass": "Steroid"
  },
  {
    "name": "DEFZORAP-6",
    "composition": "Deflazacort 6mg",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/DEFZORAP-6.jpg",
    "fullComposition": "Deflazacort IP 6mg",
    "therapeuticClass": "Steroid"
  },
  {
    "name": "DOMERAP-R",
    "composition": "Rabeprazole Sodium (EC) + Domperidone (SR)",
    "category": "Capsule",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/DOMERAP-R.jpg",
    "fullComposition": "Rabeprazole Sodium IP 20mg (Enteric Coated) + Domperidone IP 30mg (Sustained Release)",
    "therapeuticClass": "Gastrointestinal"
  },
  {
    "name": "DOMPANT-SR",
    "composition": "Pantoprazole Sodium (EC) + Domperidone (SR)",
    "category": "Capsule",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/DOMPANT-SR.jpg",
    "fullComposition": "Pantoprazole Sodium IP 40mg (Enteric Coated) + Domperidone IP 30mg (Sustained Release)",
    "therapeuticClass": "Gastrointestinal"
  },
  {
    "name": "ESMORIZE-D",
    "composition": "Esomeprazole (EC) + Domperidone (SR)",
    "category": "Capsule",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/ESMORIZE-D.jpg",
    "fullComposition": "Esomeprazole Magnesium IP 40mg (Enteric Coated) + Domperidone IP 30mg (Sustained Release)",
    "therapeuticClass": "Gastrointestinal"
  },
  {
    "name": "ESMORIZE-LSR",
    "composition": "Esomeprazole + Domperidone + Levosulpiride",
    "category": "Capsule",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/ESMORIZE-LSR.jpg",
    "fullComposition": "Esomeprazole Magnesium IP 40mg + Domperidone IP 30mg + Levosulpiride IP 25mg",
    "therapeuticClass": "Gastrointestinal"
  },
  {
    "name": "ETOBRAN-TH",
    "composition": "Etoricoxib + Thiocolchicoside",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/ETOBRAN-TH.jpg",
    "fullComposition": "Etoricoxib IP 60mg + Thiocolchicoside IP 4mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)"
  },
  {
    "name": "GASTRONEX IV",
    "composition": "Pantoprazole Sodium 40mg",
    "category": "Injection",
    "packaging": "1 vial",
    "imageUrl": "/products/GASTRONEX-IV.jpg",
    "fullComposition": "Pantoprazole Sodium IP 40mg per vial",
    "therapeuticClass": "Gastrointestinal"
  },
  {
    "name": "GINSORAP 9G",
    "composition": "Green Tea Extract + Ginseng + Ginkgo Biloba + others",
    "category": "Capsule",
    "packaging": "10x10 Softgel Capsule",
    "imageUrl": "/products/GINSORAP 9G.jpg",
    "fullComposition": "Green Tea Extract 50mg + Ginseng Extract 42.5mg + Ginkgo Biloba Extract 20mg + Multivitamins + Multiminerals per softgel capsule",
    "therapeuticClass": "Nutraceutical"
  },
  {
    "name": "GINSORAP A-Z",
    "composition": "Ginseng + Multivitamins + Multiminerals + Probiotics",
    "category": "Capsule",
    "packaging": "10x10 Softgel Capsule",
    "imageUrl": "/products/GINSORAP A-Z.jpg",
    "fullComposition": "Ginseng Extract 42.5mg + Multivitamins + Multiminerals + Probiotics per softgel capsule",
    "therapeuticClass": "Nutraceutical"
  },
  {
    "name": "GLYNORAP-M1",
    "composition": "Glimepiride + Metformin (SR)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/GLYNORAP-M1.jpg",
    "fullComposition": "Glimepiride IP 1mg + Metformin Hydrochloride IP 500mg (Sustained Release)",
    "therapeuticClass": "Antidiabetic"
  },
  {
    "name": "GLYNORAP-M2",
    "composition": "Glimepiride + Metformin (SR)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/GLYNORAP-M2.jpg",
    "fullComposition": "Glimepiride IP 2mg + Metformin Hydrochloride IP 500mg (Sustained Release)",
    "therapeuticClass": "Antidiabetic"
  },
  {
    "name": "LIVERGLOW",
    "composition": "Liver syrup",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle",
    "imageUrl": "/products/LIVERGLOW.jpg",
    "fullComposition": "Ayurvedic Liver Extracts (Detailed composition as per label) per 10ml",
    "therapeuticClass": "Liver Tonic"
  },
  {
    "name": "MAGZORAP",
    "composition": "Magaldrate + Simethicone",
    "category": "Syrup/Suspension",
    "packaging": "170ml bottle",
    "imageUrl": "/products/MAGZORAP.jpg",
    "fullComposition": "Magaldrate IP 400mg + Simethicone IP 20mg per 5ml",
    "therapeuticClass": "Antacid"
  },
  {
    "name": "MEFAPED-125",
    "composition": "Mefenamic Acid 50mg + Paracetamol 125mg/5ml",
    "category": "Syrup/Suspension",
    "packaging": "60ml bottle",
    "imageUrl": "/products/MEFAPED-125.jpg",
    "fullComposition": "Mefenamic Acid IP 50mg + Paracetamol IP 125mg per 5ml",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)"
  },
  {
    "name": "NIMRAP-P",
    "composition": "Nimesulide + Paracetamol",
    "category": "Tablet",
    "packaging": "20x10 Alu Alu",
    "imageUrl": "/products/NIMRAP-P.jpg",
    "fullComposition": "Nimesulide IP 100mg + Paracetamol IP 325mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)"
  },
  {
    "name": "PIPZORAP-TZ",
    "composition": "Piperacillin + Tazobactam",
    "category": "Injection",
    "packaging": "1 vial",
    "imageUrl": "/products/PIPZORAP-TZ.jpg",
    "fullComposition": "Piperacillin Sodium IP 4g + Tazobactam Sodium IP 0.5g per vial",
    "therapeuticClass": "Antibiotic"
  },
  {
    "name": "PRO FC",
    "composition": "Ferrous Ascorbate + Folic Acid + Zinc Sulphate",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/PRO-FC.jpg",
    "fullComposition": "Ferrous Ascorbate IP 100mg + Folic Acid IP 1.5mg + Zinc Sulphate IP 22.5mg",
    "therapeuticClass": "Iron Supplement"
  },
  {
    "name": "RAPIKACIN-500",
    "composition": "Amikacin Sulphate 500mg/2ml",
    "category": "Injection",
    "packaging": "1 ampoule",
    "imageUrl": "/products/RAPIKACIN-500.jpg",
    "fullComposition": "Amikacin Sulphate IP 500mg per 2ml ampoule",
    "therapeuticClass": "Antibiotic"
  },
  {
    "name": "RAPIFLAM-KT",
    "composition": "Ketorolac Tromethamine",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPIFLAM-KT.jpg",
    "fullComposition": "Ketorolac Tromethamine IP 10mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)"
  },
  {
    "name": "RAPIFEVA-P",
    "composition": "Ibuprofen + Paracetamol",
    "category": "Syrup/Suspension",
    "packaging": "60ml bottle",
    "imageUrl": "/products/RAPIFEVA-P.png",
    "fullComposition": "Ibuprofen IP 100mg + Paracetamol IP 162.5mg per 5ml",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)"
  },
  {
    "name": "RAPIFUR",
    "composition": "Nitrofurantoin 100mg (Sustained Release)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPIFUR.jpg",
    "fullComposition": "Nitrofurantoin IP 100mg (Sustained Release)",
    "therapeuticClass": "Antibiotic"
  },
  {
    "name": "RAPINAK-D",
    "composition": "Aceclofenac + Drotaverine Hydrochloride",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPINAK-D.jpg",
    "fullComposition": "Aceclofenac IP 100mg + Drotaverine Hydrochloride IP 80mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)"
  },
  {
    "name": "RAPINAK-P",
    "composition": "Aceclofenac + Paracetamol",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPINAK-P.jpg",
    "fullComposition": "Aceclofenac IP 100mg + Paracetamol IP 325mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)"
  },
  {
    "name": "RAPINAK-SP",
    "composition": "Aceclofenac + Paracetamol + Serratiopeptidase",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPINAK-SP.jpg",
    "fullComposition": "Aceclofenac IP 100mg + Paracetamol IP 325mg + Serratiopeptidase IP 15mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)"
  },
  {
    "name": "RAPINFLAM-FORTE",
    "composition": "Trypsin + Bromelain + Rutoside Trihydrate + Diclofenac Sodium",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPINFLAM-FORTE.jpg",
    "fullComposition": "Trypsin BP 48mg + Bromelain BP 90mg + Rutoside Trihydrate BP 100mg + Diclofenac Sodium IP 50mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)"
  },
  {
    "name": "RAPINOVA",
    "composition": "Lycopene + Zinc + Manganese + others",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle",
    "imageUrl": "/products/RAPINOVA.jpg",
    "fullComposition": "Lycopene 5000mcg + Zinc 7.5mg + Manganese 1mg + Multivitamins + Multiminerals per 10ml",
    "therapeuticClass": "Nutraceutical"
  },
  {
    "name": "RAPIPOD-200",
    "composition": "Cefpodoxime Proxetil 200mg",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPIPOD-200.jpg",
    "fullComposition": "Cefpodoxime Proxetil IP 200mg",
    "therapeuticClass": "Antibiotic"
  },
  {
    "name": "RAPISART-40",
    "composition": "Telmisartan",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPISART-40.jpg",
    "fullComposition": "Telmisartan IP 40mg",
    "therapeuticClass": "Antihypertensive"
  },
  {
    "name": "RAPISART-AM",
    "composition": "Telmisartan + Amlodipine",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPISART-AM.jpg",
    "fullComposition": "Telmisartan IP 40mg + Amlodipine Besylate IP 5mg",
    "therapeuticClass": "Antihypertensive"
  },
  {
    "name": "RAPISART-H",
    "composition": "Telmisartan + Hydrochlorothiazide",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPISART-H.jpg",
    "fullComposition": "Telmisartan IP 40mg + Hydrochlorothiazide IP 12.5mg",
    "therapeuticClass": "Antihypertensive"
  },
  {
    "name": "RAPISULAN-D",
    "composition": "Tamsulosin (ER) + Dutasteride",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPISULAN-D.jpg",
    "fullComposition": "Tamsulosin Hydrochloride IP 0.4mg (Extended Release) + Dutasteride IP 0.5mg",
    "therapeuticClass": "Urology"
  },
  // {
  //   "name": "RAPIZOLID-600",
  //   "composition": "Linezolid 600mg",
  //   "category": "Tablet",
  //   "packaging": "10x10 Alu Alu",
  //   "imageUrl": "/products/RAPIZOLID-600.jpg"
  // },
  {
    "name": "RAPMOX-CV",
    "composition": "Amoxycillin + Clavulanic Acid + Lactic Acid Bacillus",
    "category": "Tablet",
    "packaging": "10x6 Alu Alu",
    "imageUrl": "/products/RAPMOX-CV.jpg",
    "fullComposition": "Amoxycillin Trihydrate IP 500mg + Potassium Clavulanate IP 125mg + Lactic Acid Bacillus 60 million spores",
    "therapeuticClass": "Antibiotic"
  },
  {
    "name": "RAPVERT 16",
    "composition": "Betahistine",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPVERT-16.jpg",
    "fullComposition": "Betahistine Dihydrochloride IP 16mg",
    "therapeuticClass": "Vertigo"
  },
  {
    "name": "SITARAP-D",
    "composition": "Dapagliflozin + Sitagliptin",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/SITARAP-D.jpg",
    "fullComposition": "Dapagliflozin IP 10mg + Sitagliptin Phosphate Monohydrate IP 100mg",
    "therapeuticClass": "Antidiabetic"
  },
  {
    "name": "SITARAP-M500",
    "composition": "Sitagliptin + Metformin (SR)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/SITARAP-M500.jpg",
    "fullComposition": "Sitagliptin Phosphate Monohydrate IP 50mg + Metformin Hydrochloride IP 500mg (Sustained Release)",
    "therapeuticClass": "Antidiabetic"
  },
  {
    "name": "VISQURA GEL",
    "composition": "Carboxymethylcellulose Sodium + Stabilized Oxychloro Complex",
    "category": "Eye Drops",
    "packaging": "10ml",
    "imageUrl": "/products/VISQURA GEL.jpg",
    "fullComposition": "Carboxymethylcellulose Sodium IP 0.5% w/v + Stabilized Oxychloro Complex 0.01% w/v per ml",
    "therapeuticClass": "Ophthalmic"
  },
  {
    "name": "VITABORON",
    "composition": "Calcitriol + Omega-3 + Methylcobalamin + Folic Acid + Boron + Calcium Carbonate",
    "category": "Capsule",
    "packaging": "10x10 Softgel Capsule",
    "imageUrl": "/products/VITABORON.jpg",
    "fullComposition": "Calcitriol IP 0.25mcg + Omega-3 Fatty Acids 100mg + Methylcobalamin IP 1500mcg + Folic Acid IP 400mcg + Boron 1.5mg + Calcium Carbonate IP 250mg per softgel capsule",
    "therapeuticClass": "Nutraceutical"
  },
  {
    "name": "VITABORON-PLUS",
    "composition": "Calcium Citrate + Calcitriol + EPA + DHA + L-Methylfolate + others",
    "category": "Capsule",
    "packaging": "10x10 Softgel Capsule",
    "imageUrl": "/products/VITABORON-PLUS.jpg",
    "fullComposition": "Calcium Citrate IP 500mg + Calcitriol IP 0.25mcg + EPA 90mg + DHA 60mg + L-Methylfolate Calcium 400mcg + Multivitamins + Multiminerals per softgel capsule",
    "therapeuticClass": "Nutraceutical"
  },
  {
    "name": "ZYMELYT",
    "composition": "Fungal Diastase + Pepsin",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle",
    "imageUrl": "/products/ZYMELYT.jpg",
    "fullComposition": "Fungal Diastase IP 50mg + Pepsin IP 10mg per 5ml",
    "therapeuticClass": "Digestive Enzyme"
  },
  {
    "name": "ZYLIVIN",
    "composition": "Silymarin + L-Ornithine L-Aspartate + Tricholine Citrate + others",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle",
    "imageUrl": "/products/ZYLIVIN.jpg",
    "fullComposition": "Silymarin IP 35mg + L-Ornithine L-Aspartate IP 150mg + Tricholine Citrate IP 250mg + Multivitamins + Multiminerals per 10ml",
    "therapeuticClass": "Liver Tonic"
  }
];

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // replace spaces/symbols with hyphen
    .replace(/^-+|-+$/g, '');    // remove trailing hyphens
}

// --- Add slugs dynamically ---
(function addUniqueSlugs() {
  const slugCounts: Record<string, number> = {};

  products.forEach(product => {
    let baseSlug = generateSlug(product.composition);
    let slug = baseSlug;

    // Ensure uniqueness by appending a number if needed
    if (slugCounts[baseSlug]) {
      slugCounts[baseSlug]++;
      slug = `${baseSlug}-${slugCounts[baseSlug]}`;
    } else {
      slugCounts[baseSlug] = 1;
    }

    product.slug = slug;
  });
})();