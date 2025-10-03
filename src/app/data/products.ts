// src/app/data/products.ts
export interface Product {
  name: string;
  composition: string;
  category: string;
  packaging: string;
  imageUrl: string; // Added imageUrl property
}
// This file contains a list of pharmaceutical products with their details.
export const products: Product[] = [
  {
    "name": "AZIRAP-500",
    "composition": "Azithromycin Dihydrate equivalent to Azithromycin 500mg",
    "category": "Tablet",
    "packaging": "10x5 Blister",
    "imageUrl": "/products/AZIRAP-500.png"
  },
  {
    "name": "CEFIMELT-100DT",
    "composition": "Cefixime 100mg (Dispersible Tablets)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/CEFIMELT-100DT.jpg"
  },
  {
    "name": "CEFIMELT-200LB",
    "composition": "Cefixime 200mg + Lactic Acid Bacillus",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/CEFIMELT-200LB.jpg"
  },
  {
    "name": "CEFIMELT-S 1.5",
    "composition": "Ceftriaxone + Sulbactam",
    "category": "Injection",
    "packaging": "1 vial",
    "imageUrl": "/products/CEFIMELT-S 1.5GM.jpg"
  },
  {
    "name": "CLARYMONT-L",
    "composition": "Montelukast + Levocetirizine",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/CLARYMONT-L.jpg"
  },
  {
    "name": "COFIRAP",
    "composition": "Ambroxol + Terbutaline + Guaiphenesin + Menthol",
    "category": "Syrup/Suspension",
    "packaging": "100ml bottle",
    "imageUrl": "/products/COFIRAP.jpg"
  },
  {
    "name": "COFIRAP-D",
    "composition": "Dextromethorphan + Phenylephrine + Chlorpheniramine",
    "category": "Syrup/Suspension",
    "packaging": "100ml bottle",
    "imageUrl": "/products/COFIRAP-D.jpg"
  },
  {
    "name": "COFIRAP-LS",
    "composition": "Ambroxol 30mg + Levosalbutamol 1mg + Guaifenesin 50mg/5ml",
    "category": "Syrup/Suspension",
    "packaging": "100ml bottle",
    "imageUrl": "/products/COFIRAP-LS.jpg"
  },
  {
    "name": "D3NOW",
    "composition": "Vitamin D3 60000 IU",
    "category": "Tablet",
    "packaging": "10x1x4 Blister",
    "imageUrl": "/products/D3 NOW-2.jpg"
  },
  {
    "name": "D3NOW NANO",
    "composition": "Vitamin D3 Oral Solution 60000 IU",
    "category": "Syrup/Suspension",
    "packaging": "5ml Shot",
    "imageUrl": "/products/D3 NOW.jpg"
  },
  {
    "name": "DECARAP 50",
    "composition": "Nandrolone Decanoate 50mg/ml",
    "category": "Injection",
    "packaging": "1 ampoule",
    "imageUrl": "/products/DECARAP-50.jpg"
  },
  {
    "name": "DEFZORAP-6",
    "composition": "Deflazacort 6mg",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/DEFZORAP-6.jpg"
  },
  {
    "name": "DOMERAP-R",
    "composition": "Rabeprazole Sodium (EC) + Domperidone (SR)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/DOMERAP-R.jpg"
  },
  {
    "name": "ESMORIZE-D",
    "composition": "Esomeprazole (EC) + Domperidone (SR)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/ESMORIZE-D.jpg"
  },
  {
    "name": "ESMORIZE-LSR",
    "composition": "Esomeprazole + Domperidone + Levosulpiride",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/ESMORIZE-LSR.jpg"
  },
  {
    "name": "ETOBRAN-TH",
    "composition": "Etoricoxib + Thiocolchicoside",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/ETOBRAN-TH.jpg"
  },
  {
    "name": "GASTRONEX IV",
    "composition": "Pantoprazole Sodium 40mg",
    "category": "Injection",
    "packaging": "1 vial",
    "imageUrl": "/products/GASTRONEX-IV.jpg"
  },
  {
    "name": "GINSORAP 9G",
    "composition": "Green Tea Extract + Ginseng + Ginkgo Biloba + others",
    "category": "Capsule",
    "packaging": "10x10 Softgel Capsule",
    "imageUrl": "/products/GINSORAP 9G.jpg"
  },
  {
    "name": "GINSORAP A-Z",
    "composition": "Ginseng + Multivitamins + Multiminerals + Probiotics",
    "category": "Capsule",
    "packaging": "10x10 Softgel Capsule",
    "imageUrl": "/products/GINSORAP A-Z.jpg"
  },
  {
    "name": "GLYNORAP-M1",
    "composition": "Glimepiride + Metformin (SR)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/GLYNORAP-M1.jpg"
  },
  {
    "name": "GLYNORAP-M2",
    "composition": "Glimepiride + Metformin (SR)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/GLYNORAP-M2.jpg"
  },
  {
    "name": "LIVERGLOW",
    "composition": "Liver syrup",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle",
    "imageUrl": "/products/LIVERGLOW.jpg"
  },
  {
    "name": "MAGZORAP",
    "composition": "Magaldrate + Simethicone",
    "category": "Syrup/Suspension",
    "packaging": "170ml bottle",
    "imageUrl": "/products/MAGZORAP.jpg"
  },
  {
    "name": "MEFAPED-125",
    "composition": "Mefenamic Acid 50mg + Paracetamol 125mg/5ml",
    "category": "Syrup/Suspension",
    "packaging": "60ml bottle",
    "imageUrl": "/products/MEFAPED-125.jpg"
  },
  {
    "name": "NIMRAP-P",
    "composition": "Nimesulide + Paracetamol",
    "category": "Tablet",
    "packaging": "20x10 Alu Alu",
    "imageUrl": "/products/NIMRAP-P.jpg"
  },
  {
    "name": "PIPZORAP-TZ",
    "composition": "Piperacillin + Tazobactam",
    "category": "Injection",
    "packaging": "1 vial",
    "imageUrl": "/products/PIPZORAP-TZ.jpg"
  },
  {
    "name": "PRO FC",
    "composition": "Ferrous Ascorbate + Folic Acid + Zinc Sulphate",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/PRO-FC.jpg"
  },
  {
    "name": "RAPIKACIN-500",
    "composition": "Amikacin Sulphate 500mg/2ml",
    "category": "Injection",
    "packaging": "1 ampoule",
    "imageUrl": "/products/RAPIKACIN-500.jpg"
  },
  {
    "name": "RAPIFLAM-KT",
    "composition": "Ketorolac Tromethamine",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPIFLAM-KT.jpg"
  },
  {
    "name": "RAPIFEVA-P",
    "composition": "Ibuprofen + Paracetamol",
    "category": "Syrup/Suspension",
    "packaging": "60ml bottle",
    "imageUrl": "/products/RAPIFEVA-P.png"
  },
  {
    "name": "RAPIFUR",
    "composition": "Nitrofurantoin 100mg (Sustained Release)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPIFUR.jpg"
  },
  {
    "name": "RAPINAK-D",
    "composition": "Aceclofenac 100mg + Drotaverine Hydrochloride 80mg",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPINAK-D.jpg"
  },
  {
    "name": "RAPINAK-P",
    "composition": "Aceclofenac 100mg + Paracetamol 325mg",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPINAK-P.jpg"
  },
  {
    "name": "RAPINAK-SP",
    "composition": "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPINAK-SP.jpg"
  },
  {
    "name": "RAPINFLAM-FORTE",
    "composition": "Trypsin + Bromelain + Rutoside Trihydrate + Diclofenac Sodium",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPINFLAM-FORTE.jpg"
  },
  {
    "name": "RAPINOVA",
    "composition": "Lycopene + Zinc + Manganese + others",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle",
    "imageUrl": "/products/RAPINOVA.jpg"
  },
  {
    "name": "RAPIPOD-200",
    "composition": "Cefpodoxime Proxetil 200mg",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPIPOD-200.jpg"
  },
  {
    "name": "RAPISART-40",
    "composition": "Telmisartan 40mg",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPISART-40.jpg"
  },
  {
    "name": "RAPISART-AM",
    "composition": "Telmisartan + Amlodipine",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPISART-AM.jpg"
  },
  {
    "name": "RAPISART-H",
    "composition": "Telmisartan + Hydrochlorothiazide",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPISART-H.jpg"
  },
  {
    "name": "RAPISULAN-D",
    "composition": "Tamsulosin (ER) + Dutasteride",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPISULAN-D.jpg"
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
    "imageUrl": "/products/RAPMOX-CV.jpg"
  },
  {
    "name": "RAPVERT 16",
    "composition": "Betahistine 16mg",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/RAPVERT-16.jpg"
  },
  {
    "name": "SITARAP-D",
    "composition": "Dapagliflozin + Sitagliptin",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/SITARAP-D.jpg"
  },
  {
    "name": "SITARAP-M500",
    "composition": "Sitagliptin + Metformin (SR)",
    "category": "Tablet",
    "packaging": "10x10 Alu Alu",
    "imageUrl": "/products/SITARAP-M500.jpg"
  },
  {
    "name": "VISQURA GEL",
    "composition": "Carboxymethylcellulose Sodium + Stabilized Oxychloro Complex",
    "category": "Eye Drops",
    "packaging": "10ml",
    "imageUrl": "/products/VISQURA GEL.jpg"
  },
  {
    "name": "VITABORON",
    "composition": "Calcitriol + Omega-3 + Methylcobalamin + Folic Acid + Boron + Calcium Carbonate",
    "category": "Capsule",
    "packaging": "10x10 Softgel Capsule",
    "imageUrl": "/products/VITABORON.jpg"
  },
  {
    "name": "VITABORON-PLUS",
    "composition": "Calcium Citrate + Calcitriol + EPA + DHA + L-Methylfolate + others",
    "category": "Capsule",
    "packaging": "10x10 Softgel Capsule",
    "imageUrl": "/products/VITABORON-PLUS.jpg"
  },
  {
    "name": "ZYMELYT",
    "composition": "Fungal Diastase + Pepsin",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle",
    "imageUrl": "/products/ZYMELYT.jpg"
  },
  {
    "name": "ZYLIVIN",
    "composition": "Silymarin + L-Ornithine L-Aspartate + Tricholine Citrate + others",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle",
    "imageUrl": "/products/ZYLIVIN.jpg"
  }
];