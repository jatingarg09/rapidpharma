// src/app/data/products.ts
export interface Product {
  name: string;
  composition: string;
  category: string;
  packaging: string;
}
// This file contains a list of pharmaceutical products with their details.
export const products: Product[] = [
  {
    "name": "AZIRAP-500",
    "composition": "Azithromycin Dihydrate equivalent to Azithromycin 500mg",
    "category": "Tablet",
    "packaging": "10x5"
  },
  {
    "name": "CEFIMELT-100DT",
    "composition": "Cefixime 100mg (Dispersible Tablets)",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "CEFIMELT-200",
    "composition": "Cefixime 200mg + Lactic Acid Bacillus",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "CEFIMELT-S 1.5",
    "composition": "Ceftriaxone + Sulbactam",
    "category": "Injection",
    "packaging": "1 vial"
  },
  {
    "name": "CLARYMONT-L",
    "composition": "Montelukast + Levocetirizine",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "COFIRAP",
    "composition": "Ambroxol + Terbutaline + Guaiphenesin + Menthol",
    "category": "Syrup/Suspension",
    "packaging": "100ml bottle"
  },
  {
    "name": "COFIRAP-D",
    "composition": "Dextromethorphan + Phenylephrine + Chlorpheniramine",
    "category": "Syrup/Suspension",
    "packaging": "100ml bottle"
  },
  {
    "name": "COFIRAP-LS",
    "composition": "Ambroxol 30mg + Levosalbutamol 1mg + Guaifenesin 50mg/5ml",
    "category": "Syrup/Suspension",
    "packaging": "100ml bottle"
  },
  {
    "name": "D3NOW",
    "composition": "Vitamin D3 60000 IU",
    "category": "Tablet",
    "packaging": "10x1x4"
  },
  {
    "name": "D3NOW NANO",
    "composition": "Vitamin D3 Oral Solution 60000 IU",
    "category": "Syrup/Suspension",
    "packaging": "5ml Shot"
  },
  {
    "name": "DECARAP 50",
    "composition": "Nandrolone Decanoate 50mg/ml",
    "category": "Injection",
    "packaging": "1 ampoule"
  },
  {
    "name": "DEFZORAP-6",
    "composition": "Deflazacort 6mg",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "DOMERAP-R",
    "composition": "Rabeprazole Sodium (EC) + Domperidone (SR)",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "ESMOTEC-D",
    "composition": "Esomeprazole (EC) + Domperidone (SR)",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "ESMOTEC-LSR",
    "composition": "Esomeprazole + Domperidone + Levosulpiride",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "ETOBRAN-TH",
    "composition": "Etoricoxib + Thiocolchicoside",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "GASTONEX IV",
    "composition": "Pantoprazole Sodium 40mg",
    "category": "Injection",
    "packaging": "1 vial"
  },
  {
    "name": "GINSORAP 9G",
    "composition": "Green Tea Extract + Ginseng + Ginkgo Biloba + others",
    "category": "Capsule",
    "packaging": "10x10"
  },
  {
    "name": "GINSORAP A-Z",
    "composition": "Ginseng + Multivitamins + Multiminerals + Probiotics",
    "category": "Capsule",
    "packaging": "10x10"
  },
  {
    "name": "GLYNORAP-M1",
    "composition": "Glimepiride + Metformin (SR)",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "GLYNORAP-M2",
    "composition": "Glimepiride + Metformin (SR)",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "LIVERGROW",
    "composition": "Liver syrup",
    "category": "Syrup",
    "packaging": "200ml bottle"
  },
  {
    "name": "MAGZORAP",
    "composition": "Magaldrate + Simethicone",
    "category": "Syrup/Suspension",
    "packaging": "170ml bottle"
  },
  {
    "name": "MEFAPED-125",
    "composition": "Mefenamic Acid 50mg + Paracetamol 125mg/5ml",
    "category": "Syrup/Suspension",
    "packaging": "60ml bottle"
  },
  {
    "name": "NIMRAP-P",
    "composition": "Nimesulide + Paracetamol",
    "category": "Tablet",
    "packaging": "20x10"
  },
  {
    "name": "PIPZORAP-TZ",
    "composition": "Piperacillin + Tazobactam",
    "category": "Injection",
    "packaging": "1 vial"
  },
  {
    "name": "PRO FC",
    "composition": "Ferrous Ascorbate + Folic Acid + Zinc Sulphate",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPIKACIN",
    "composition": "Amikacin Sulphate 500mg/2ml",
    "category": "Injection",
    "packaging": "1 ampoule"
  },
  {
    "name": "RAPIFLAM-KT",
    "composition": "Ketorolac Tromethamine",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPIFEVA-P",
    "composition": "Ibuprofen + Paracetamol",
    "category": "Syrup/Suspension",
    "packaging": "60ml bottle"
  },
  {
    "name": "RAPIFUR",
    "composition": "Nitrofurantoin 100mg (Sustained Release)",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPINAK-D",
    "composition": "Aceclofenac 100mg + Drotaverine Hydrochloride 80mg",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPINAK-P",
    "composition": "Aceclofenac 100mg + Paracetamol 325mg",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPINAK-SP",
    "composition": "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPINFLAM-FORTE",
    "composition": "Trypsin + Bromelain + Rutoside Trihydrate + Diclofenac Sodium",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPINOVA",
    "composition": "Lycopene + Zinc + Manganese + others",
    "category": "Syrup",
    "packaging": "200ml bottle"
  },
  {
    "name": "RAPIPOD-200",
    "composition": "Cefpodoxime Proxetil 200mg",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPISART-40",
    "composition": "Telmisartan 40mg",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPISART-AM",
    "composition": "Telmisartan + Amlodipine",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPISART-H",
    "composition": "Telmisartan + Hydrochlorothiazide",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPISULAN-D",
    "composition": "Tamsulosin (ER) + Dutasteride",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPIZOLID-600",
    "composition": "Linezolid 600mg",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "RAPMOX-CV",
    "composition": "Amoxycillin + Clavulanic Acid + Lactic Acid Bacillus",
    "category": "Tablet",
    "packaging": "10x6"
  },
  {
    "name": "RAPVERT 16",
    "composition": "Betahistine 16mg",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "SITARAP-D",
    "composition": "Dapagliflozin + Sitagliptin",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "SITARAP-M500",
    "composition": "Sitagliptin + Metformin (SR)",
    "category": "Tablet",
    "packaging": "10x10"
  },
  {
    "name": "VISQURA",
    "composition": "Carboxymethylcellulose Sodium + Stabilized Oxychloro Complex",
    "category": "Eye Drops",
    "packaging": "10ml"
  },
  {
    "name": "VITABORON",
    "composition": "Calcitriol + Omega-3 + Methylcobalamin + Folic Acid + Boron + Calcium Carbonate",
    "category": "Capsule",
    "packaging": "10x10"
  },
  {
    "name": "VITABORON-PLUS",
    "composition": "Calcium Citrate + Calcitriol + EPA + DHA + L-Methylfolate + others",
    "category": "Capsule",
    "packaging": "10x10"
  },
  {
    "name": "ZYMELYT",
    "composition": "Fungal Diastase + Pepsin",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle"
  },
  {
    "name": "ZYLIVIN",
    "composition": "Silymarin + L-Ornithine L-Aspartate + Tricholine Citrate + others",
    "category": "Syrup/Suspension",
    "packaging": "200ml bottle"
  }
];