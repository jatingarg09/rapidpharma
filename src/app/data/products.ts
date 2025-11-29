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
  mrp: number; // Added MRP property
}
// This file contains a list of pharmaceutical products with their details.
export const products: Product[] = [
  {
    "name": "AZIRAP-500",
    "composition": "Azithromycin Dihydrate equivalent to Azithromycin 500mg",
    "category": "Tablet",
    "packaging": "10x3 Blister",
    "imageUrl": "/productswebp/AZIRAP-500.webp",
    "fullComposition": "Azithromycin Dihydrate IP eq. to Azithromycin 500mg",
    "therapeuticClass": "Antibiotic",
    "mrp": 755
  },
  {
    "name": "CEFIMELT-100DT",
    "composition": "Cefixime 100mg (Dispersible Tablets)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/CEFIMELT-100DT.webp",
    "fullComposition": "Cefixime IP 100mg",
    "therapeuticClass": "Antibiotic",
    "mrp": 900
  },
  {
    "name": "CEFIMELT-200LB",
    "composition": "Cefixime 200mg + Lactic Acid Bacillus",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/CEFIMELT-200LB.webp",
    "fullComposition": "Cefixime IP 200mg + Lactic Acid Bacillus 60 million spores",
    "therapeuticClass": "Antibiotic",
    "mrp": 1600
  },
  {
    "name": "CEFIMELT-S 1.5",
    "composition": "Ceftriaxone + Sulbactam",
    "category": "Injection",
    "packaging": "1 vial",
    "imageUrl": "/productswebp/CEFIMELT-S 1.5GM.webp",
    "fullComposition": "Ceftriaxone Sodium IP 1g + Sulbactam Sodium IP 500mg",
    "therapeuticClass": "Antibiotic",
    "mrp": 227.50
  },
  {
    "name": "CLARYMONT-L",
    "composition": "Montelukast + Levocetirizine",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/CLARYMONT-L.webp",
    "fullComposition": "Montelukast Sodium IP eq. to Montelukast 10mg + Levocetirizine Dihydrochloride IP 5mg",
    "therapeuticClass": "Antiallergic & Respiratory",
    "mrp": 999.90
  },
  {
    "name": "COFIRAP",
    "composition": "Ambroxol + Terbutaline + Guaiphenesin + Menthol",
    "category": "Syrup/Suspension",
    "packaging": "100ml bottle",
    "imageUrl": "/productswebp/COFIRAP.webp",
    "fullComposition": "Ambroxol Hydrochloride IP 15mg + Terbutaline Sulphate IP 1.25mg + Guaiphenesin IP 50mg + Menthol IP 2mg per 5ml",
    "therapeuticClass": "Cough & Cold",
    "mrp": 125
  },
  {
    "name": "COFIRAP-D",
    "composition": "Dextromethorphan + Phenylephrine + Chlorpheniramine",
    "category": "Syrup/Suspension",
    "packaging": "100ml bottle",
    "imageUrl": "/productswebp/COFIRAP-D.webp",
    "fullComposition": "Dextromethorphan Hydrobromide IP 10mg + Phenylephrine Hydrochloride IP 5mg + Chlorpheniramine Maleate IP 2mg per 5ml",
    "therapeuticClass": "Cough & Cold",
    "mrp": 125
  },
  {
    "name": "COFIRAP-LS",
    "composition": "Ambroxol 30mg + Levosalbutamol 1mg + Guaifenesin 50mg/5ml",
    "category": "Syrup/Suspension",
    "packaging": "100ml bottle",
    "imageUrl": "/productswebp/COFIRAP-LS.webp",
    "fullComposition": "Ambroxol Hydrochloride IP 30mg + Levosalbutamol Hydrochloride IP 1mg + Guaifenesin IP 50mg per 5ml",
    "therapeuticClass": "Cough & Cold",
    "mrp": 125
  },
  {
    "name": "D3NOW",
    "composition": "Vitamin D3 60000 IU",
    "category": "Capsule",
    "packaging": "10x1x4 Blister",
    "imageUrl": "/productswebp/D3 NOW-2.webp",
    "fullComposition": "Cholecalciferol (Vitamin D3) IP 60000 IU",
    "therapeuticClass": "Vitamin Supplement",
    "mrp": 1299
  },
  {
    "name": "D3NOW NANO",
    "composition": "Vitamin D3 Oral Solution 60000 IU",
    "category": "Syrup/Suspension",
    "packaging": "5ml Shot",
    "imageUrl": "/productswebp/D3 NOW.webp",
    "fullComposition": "Cholecalciferol (Vitamin D3) IP 60000 IU per 5ml",
    "therapeuticClass": "Vitamin Supplement",
    "mrp": 320
  },
  {
    "name": "DECARAP 50",
    "composition": "Nandrolone Decanoate 50mg/ml",
    "category": "Injection",
    "packaging": "1 ampoule",
    "imageUrl": "/productswebp/DECARAP-50.webp",
    "fullComposition": "Nandrolone Decanoate IP 50mg per ml",
    "therapeuticClass": "Steroid",
    "mrp": 240
  },
  {
    "name": "DEFZORAP-6",
    "composition": "Deflazacort 6mg",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/DEFZORAP-6.webp",
    "fullComposition": "Deflazacort IP 6mg",
    "therapeuticClass": "Steroid",
    "mrp": 1300
  },
  {
    "name": "DOMERAP-R",
    "composition": "Rabeprazole Sodium (EC) + Domperidone (SR)",
    "category": "Capsule",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/DOMERAP-R.webp",
    "fullComposition": "Rabeprazole Sodium IP 20mg (Enteric Coated) + Domperidone IP 30mg (Sustained Release)",
    "therapeuticClass": "Gastrointestinal",
    "mrp": 990
  },
  {
    "name": "DOMPANT-SR",
    "composition": "Pantoprazole Sodium (EC) + Domperidone (SR)",
    "category": "Capsule",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/DOMPANT-SR.webp",
    "fullComposition": "Pantoprazole Sodium IP 40mg (Enteric Coated) + Domperidone IP 30mg (Sustained Release)",
    "therapeuticClass": "Gastrointestinal",
    "mrp": 1100
  },
  {
    "name": "ESMORIZE-D",
    "composition": "Esomeprazole (EC) + Domperidone (SR)",
    "category": "Capsule",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/ESMORIZE-D.webp",
    "fullComposition": "Esomeprazole Magnesium IP 40mg (Enteric Coated) + Domperidone IP 30mg (Sustained Release)",
    "therapeuticClass": "Gastrointestinal",
    "mrp": 1100
  },
  {
    "name": "ESMORIZE-LSR",
    "composition": "Esomeprazole + Domperidone + Levosulpiride",
    "category": "Capsule",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/ESMORIZE-LSR.webp",
    "fullComposition": "Esomeprazole Magnesium IP 40mg + Domperidone IP 30mg + Levosulpiride IP 25mg",
    "therapeuticClass": "Gastrointestinal",
    "mrp": 1900
  },
  {
    "name": "ETOBRAN-TH",
    "composition": "Etoricoxib + Thiocolchicoside",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/ETOBRAN-TH.webp",
    "fullComposition": "Etoricoxib IP 60mg + Thiocolchicoside IP 4mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
    "mrp": 2290
  },
  {
    "name": "GASTRONEX IV",
    "composition": "Pantoprazole Sodium 40mg",
    "category": "Injection",
    "packaging": "1 vial",
    "imageUrl": "/productswebp/GASTRONEX-IV.webp",
    "fullComposition": "Pantoprazole Sodium IP 40mg per vial",
    "therapeuticClass": "Gastrointestinal",
    "mrp": 56.50
  },
  {
    "name": "GINSORAP 9G",
    "composition": "Green Tea Extract + Ginseng + Ginkgo Biloba + others",
    "category": "Capsule",
    "packaging": "10x10 Softgel Capsule",
    "imageUrl": "/productswebp/GINSORAP 9G.webp",
    "fullComposition": "Green Tea Extract 50mg + Ginseng Extract 42.5mg + Ginkgo Biloba Extract 20mg + Multivitamins + Multiminerals per softgel capsule",
    "therapeuticClass": "Nutraceutical",
    "mrp": 2500
  },
  {
    "name": "GINSORAP A-Z",
    "composition": "Ginseng + Multivitamins + Multiminerals + Probiotics",
    "category": "Capsule",
    "packaging": "10x10 Softgel Capsule",
    "imageUrl": "/productswebp/GINSORAP A-Z.webp",
    "fullComposition": "Ginseng Extract 42.5mg + Multivitamins + Multiminerals + Probiotics per softgel capsule",
    "therapeuticClass": "Nutraceutical",
    "mrp": 1320
  },
  {
    "name": "GLYNORAP-M1",
    "composition": "Glimepiride + Metformin (SR)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/GLYNORAP-M1.webp",
    "fullComposition": "Glimepiride IP 1mg + Metformin Hydrochloride IP 500mg (Sustained Release)",
    "therapeuticClass": "Antidiabetic",
    "mrp": 799
  },
  {
    "name": "GLYNORAP-M2",
    "composition": "Glimepiride + Metformin (SR)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/GLYNORAP-M2.webp",
    "fullComposition": "Glimepiride IP 2mg + Metformin Hydrochloride IP 500mg (Sustained Release)",
    "therapeuticClass": "Antidiabetic",
    "mrp": 990
  },
  {
    "name": "LIVERGLOW",
    "composition": "Liver syrup",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle",
    "imageUrl": "/productswebp/LIVERGLOW.webp",
    "fullComposition": "Ayurvedic Liver Extracts (Detailed composition as per label) per 10ml",
    "therapeuticClass": "Liver Tonic",
    "mrp": 120
  },
  {
    "name": "MAGZORAP",
    "composition": "Magaldrate + Simethicone",
    "category": "Syrup/Suspension",
    "packaging": "170ml bottle",
    "imageUrl": "/productswebp/MAGZORAP.webp",
    "fullComposition": "Magaldrate IP 400mg + Simethicone IP 20mg per 5ml",
    "therapeuticClass": "Antacid",
    "mrp": 105
  },
  {
    "name": "MEFAPED-125",
    "composition": "Mefenamic Acid 50mg + Paracetamol 125mg/5ml",
    "category": "Syrup/Suspension",
    "packaging": "60ml bottle",
    "imageUrl": "/productswebp/MEFAPED-125.webp",
    "fullComposition": "Mefenamic Acid IP 50mg + Paracetamol IP 125mg per 5ml",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
    "mrp": 51.65
  },
  {
    "name": "NIMRAP-P",
    "composition": "Nimesulide + Paracetamol",
    "category": "Tablet",
    "packaging": "20x10 Alu Alu",
    "imageUrl": "/productswebp/NIMRAP-P.webp",
    "fullComposition": "Nimesulide IP 100mg + Paracetamol IP 325mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
    "mrp": 1000
  },
  {
    "name": "PIPZORAP-TZ",
    "composition": "Piperacillin + Tazobactam",
    "category": "Injection",
    "packaging": "1 vial",
    "imageUrl": "/productswebp/PIPZORAP-TZ.webp",
    "fullComposition": "Piperacillin Sodium IP 4g + Tazobactam Sodium IP 0.5g per vial",
    "therapeuticClass": "Antibiotic",
    "mrp": 455.12
  },
  {
    "name": "PRO FC",
    "composition": "Ferrous Ascorbate + Folic Acid + Zinc Sulphate",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/PRO-FC.webp",
    "fullComposition": "Ferrous Ascorbate IP 100mg + Folic Acid IP 1.5mg + Zinc Sulphate IP 22.5mg",
    "therapeuticClass": "Iron Supplement",
    "mrp": 1320
  },
  {
    "name": "RAPIKACIN-500",
    "composition": "Amikacin Sulphate 500mg/2ml",
    "category": "Injection",
    "packaging": "1 ampoule",
    "imageUrl": "/productswebp/RAPIKACIN-500.webp",
    "fullComposition": "Amikacin Sulphate IP 500mg per 2ml ampoule",
    "therapeuticClass": "Antibiotic",
    "mrp": 113.76
  },
  {
    "name": "RAPIFLAM-KT",
    "composition": "Ketorolac Tromethamine",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/RAPIFLAM-KT.webp",
    "fullComposition": "Ketorolac Tromethamine IP 10mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
    "mrp": 1500
  },
  {
    "name": "RAPIFEVA-P",
    "composition": "Ibuprofen + Paracetamol",
    "category": "Syrup/Suspension",
    "packaging": "60ml bottle",
    "imageUrl": "/productswebp/RAPIFEVA-P.webp",
    "fullComposition": "Ibuprofen IP 100mg + Paracetamol IP 162.5mg per 5ml",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
    "mrp": 47.71
  },
  {
    "name": "RAPIFUR",
    "composition": "Nitrofurantoin 100mg (Sustained Release)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/RAPIFUR.webp",
    "fullComposition": "Nitrofurantoin IP 100mg (Sustained Release)",
    "therapeuticClass": "Antibiotic",
    "mrp": 920
  },
  {
    "name": "RAPINAK-D",
    "composition": "Aceclofenac + Drotaverine Hydrochloride",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/RAPINAK-D.webp",
    "fullComposition": "Aceclofenac IP 100mg + Drotaverine Hydrochloride IP 80mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
    "mrp": 1299
  },
  {
    "name": "RAPINAK-P",
    "composition": "Aceclofenac + Paracetamol",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/RAPINAK-P.webp",
    "fullComposition": "Aceclofenac IP 100mg + Paracetamol IP 325mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
    "mrp": 599
  },
  {
    "name": "RAPINAK-SP",
    "composition": "Aceclofenac + Paracetamol + Serratiopeptidase",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/RAPINAK-SP.webp",
    "fullComposition": "Aceclofenac IP 100mg + Paracetamol IP 325mg + Serratiopeptidase IP 15mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
    "mrp": 1200
  },
  {
    "name": "RAPINFLAM-FORTE",
    "composition": "Trypsin + Bromelain + Rutoside Trihydrate + Diclofenac Sodium",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/RAPINFLAM-FORTE.webp",
    "fullComposition": "Trypsin BP 48mg + Bromelain BP 90mg + Rutoside Trihydrate BP 100mg + Diclofenac Sodium IP 50mg",
    "therapeuticClass": "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
    "mrp": 2250
  },
  {
    "name": "RAPINOVA",
    "composition": "Lycopene + Zinc + Manganese + others",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle",
    "imageUrl": "/productswebp/RAPINOVA.webp",
    "fullComposition": "Lycopene 5000mcg + Zinc 7.5mg + Manganese 1mg + Multivitamins + Multiminerals per 10ml",
    "therapeuticClass": "Nutraceutical",
    "mrp": 160
  },
  {
    "name": "RAPIPOD-200",
    "composition": "Cefpodoxime Proxetil 200mg",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/RAPIPOD-200.webp",
    "fullComposition": "Cefpodoxime Proxetil IP 200mg",
    "therapeuticClass": "Antibiotic",
    "mrp": 2050
  },
  {
    "name": "RAPISART-40",
    "composition": "Telmisartan",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/RAPISART-40.webp",
    "fullComposition": "Telmisartan IP 40mg",
    "therapeuticClass": "Antihypertensive",
    "mrp": 991.80
  },
  {
    "name": "RAPISART-AM",
    "composition": "Telmisartan + Amlodipine",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/RAPISART-AM.webp",
    "fullComposition": "Telmisartan IP 40mg + Amlodipine Besylate IP 5mg",
    "therapeuticClass": "Antihypertensive",
    "mrp": 1500
  },
  {
    "name": "RAPISART-H",
    "composition": "Telmisartan + Hydrochlorothiazide",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/RAPISART-H.webp",
    "fullComposition": "Telmisartan IP 40mg + Hydrochlorothiazide IP 12.5mg",
    "therapeuticClass": "Antihypertensive",
    "mrp": 1300
  },
  {
    "name": "RAPISULAN-D",
    "composition": "Tamsulosin (ER) + Dutasteride",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/RAPISULAN-D.webp",
    "fullComposition": "Tamsulosin Hydrochloride IP 0.4mg (Extended Release) + Dutasteride IP 0.5mg",
    "therapeuticClass": "Urology",
    "mrp": 1850
  },
  // {
  //   "name": "RAPIZOLID-600",
  //   "composition": "Linezolid 600mg",
  //   "category": "Tablet",
  //   "packaging": "10x10 Alu Alu",
  //   "imageUrl": "/productswebp/RAPIZOLID-600.webp"
  // },
  {
    "name": "RAPMOX-CV",
    "composition": "Amoxycillin + Clavulanic Acid + Lactic Acid Bacillus",
    "category": "Tablet",
    "packaging": "10x6 Alu Alu",
    "imageUrl": "/productswebp/RAPMOX-CV.webp",
    "fullComposition": "Amoxycillin Trihydrate IP 500mg + Potassium Clavulanate IP 125mg + Lactic Acid Bacillus 60 million spores",
    "therapeuticClass": "Antibiotic",
    "mrp": 2500
  },
  {
    "name": "RAPVERT 16",
    "composition": "Betahistine",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/RAPVERT-16.webp",
    "fullComposition": "Betahistine Dihydrochloride IP 16mg",
    "therapeuticClass": "Vertigo",
    "mrp": 1050
  },
  {
    "name": "SITARAP-D",
    "composition": "Dapagliflozin + Sitagliptin",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/SITARAP-D.webp",
    "fullComposition": "Dapagliflozin IP 10mg + Sitagliptin Phosphate Monohydrate IP 100mg",
    "therapeuticClass": "Antidiabetic",
    "mrp": 2050
  },
  {
    "name": "SITARAP-M500",
    "composition": "Sitagliptin + Metformin (SR)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/productswebp/SITARAP-M500.webp",
    "fullComposition": "Sitagliptin Phosphate Monohydrate IP 50mg + Metformin Hydrochloride IP 500mg (Sustained Release)",
    "therapeuticClass": "Antidiabetic",
    "mrp": 2400
  },
  {
    "name": "VISQURA GEL",
    "composition": "Carboxymethylcellulose Sodium + Stabilized Oxychloro Complex",
    "category": "Eye Drops",
    "packaging": "10ml",
    "imageUrl": "/productswebp/VISQURA GEL.webp",
    "fullComposition": "Carboxymethylcellulose Sodium IP 0.5% w/v + Stabilized Oxychloro Complex 0.01% w/v per ml",
    "therapeuticClass": "Ophthalmic",
    "mrp": 179.60
  },
  {
    "name": "VITABORON",
    "composition": "Calcitriol + Omega-3 + Methylcobalamin + Folic Acid + Boron + Calcium Carbonate",
    "category": "Capsule",
    "packaging": "10x10 Softgel Capsule",
    "imageUrl": "/productswebp/VITABORON.webp",
    "fullComposition": "Calcitriol IP 0.25mcg + Omega-3 Fatty Acids 100mg + Methylcobalamin IP 1500mcg + Folic Acid IP 400mcg + Boron 1.5mg + Calcium Carbonate IP 250mg per softgel capsule",
    "therapeuticClass": "Nutraceutical",
    "mrp": 2500
  },
  {
    "name": "VITABORON-PLUS",
    "composition": "Calcium Citrate + Calcitriol + EPA + DHA + L-Methylfolate + others",
    "category": "Capsule",
    "packaging": "10x10 Softgel Capsule",
    "imageUrl": "/productswebp/VITABORON-PLUS.webp",
    "fullComposition": "Calcium Citrate IP 500mg + Calcitriol IP 0.25mcg + EPA 90mg + DHA 60mg + L-Methylfolate Calcium 400mcg + Multivitamins + Multiminerals per softgel capsule",
    "therapeuticClass": "Nutraceutical",
    "mrp": 2500
  },
  {
    "name": "ZYMELYT",
    "composition": "Fungal Diastase + Pepsin",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle",
    "imageUrl": "/productswebp/ZYMELYT.webp",
    "fullComposition": "Fungal Diastase IP 50mg + Pepsin IP 10mg per 5ml",
    "therapeuticClass": "Digestive Enzyme",
    "mrp": 175
  },
  {
    "name": "ZYLIVIN",
    "composition": "Silymarin + L-Ornithine L-Aspartate + Tricholine Citrate + others",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle",
    "imageUrl": "/productswebp/ZYLIVIN.webp",
    "fullComposition": "Silymarin IP 35mg + L-Ornithine L-Aspartate IP 150mg + Tricholine Citrate IP 250mg + Multivitamins + Multiminerals per 10ml",
    "therapeuticClass": "Liver Tonic",
    "mrp": 190
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