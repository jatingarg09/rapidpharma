// src/app/data/products.ts
export interface Product {
  name: string;
  composition: string;
  category: string;
  packaging: string;
}

// export const products: Product[] = [
//     {
//       name: 'RAPINAK-D',
//       description: 'Aceclofenac 100mg + Drotaverine Hydrochloride 80mg',
//     },
//     { name: 'RAPINAK-P', description: 'Aceclofenac 100mg + Paracetamol 325mg' },
//     {
//       name: 'RAPINAK-SP',
//       description:
//         'Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg',
//     },
//     {
//       name: 'AZIRAP-500',
//       description: 'Azithromycin Dihydrate equivalent to Azithromycin 500mg',
//     },
//     {
//       name: 'CEFIMELT-100DT',
//       description: 'Cefixime 100mg (Dispersible Tablets)',
//     },
//     {
//       name: 'CEFIMELT-200 LB',
//       description: 'Cefixime 200mg + Lactic Acid Bacillus 60 million spores',
//     },
//     {
//       name: 'ETOBRAN-TH',
//       description: 'Etoricoxib 60mg + Thiocolchicoside 4mg',
//     },
//     { name: 'DEFZORAP-6', description: 'Deflazacort 6mg' },
//     { name: 'NIMRAP-P', description: 'Nimesulide 100mg + Paracetamol 325mg' },
//     { name: 'RAPIPOD-200', description: 'Cefpodoxime Proxetil 200mg' },
//     {
//       name: 'ESMOTEC-D',
//       description: 'Esomeprazole 40mg (EC) + Domperidone 30mg (SR)',
//     },
//     {
//       name: 'DOMERAP-R',
//       description: 'Rabeprazole Sodium 20mg (EC) + Domperidone 30mg (SR)',
//     },
//     {
//       name: 'MAGZORAP',
//       description: 'Magaldrate 400mg + Simethicone 20mg (Oral Suspension)',
//     },
//     {
//       name: 'RAPIZOLID-600',
//       description: 'Linezolid 600mg (Film-Coated Tablets)',
//     },
//     {
//       name: 'CLARYMONT-L',
//       description: 'Montelukast Sodium 10mg + Levocetirizine Hydrochloride 5mg',
//     },
//     {
//       name: 'ESMOTEC-LSR',
//       description: 'Esomeprazole 40mg + Levosulpiride 50mg (SR)',
//     },
//     {
//       name: 'DOMEPANT SR',
//       description: 'Pantoprazole (DSR) – format unspecified',
//     },
//     {
//       name: 'RAPIFEVA-P',
//       description:
//         'Ibuprofen 100mg + Paracetamol 162.5mg (Pediatric Suspension)',
//     },
//     {
//       name: 'COFIRAP',
//       description:
//         'Ambroxol 15mg + Terbutaline 1.25mg + Guaiphenesin 50mg + Menthol 1mg per 5mL',
//     },
//     {
//       name: 'COFIRAP-D',
//       description:
//         'Dextromethorphan 10mg + Phenylephrine 5mg + CPM 2mg per 5mL',
//     },
//     {
//       name: 'COFIRAP-LS',
//       description: 'LS Syrup – carton included (composition not specified)',
//     },
//     {
//       name: 'MEFAPAD-125',
//       description: 'Mefenamic Acid 100mg + Paracetamol 125mg Syrup',
//     },
//     { name: 'D3NOW', description: 'Cholecalciferol IP 60,000 IU' },
//     {
//       name: 'SITARAP-D',
//       description: 'Dapagliflozin 10mg + Sitagliptin 100mg',
//     },
//     {
//       name: 'RAPMOX-CV',
//       description:
//         'Amoxycillin 500mg + Clavulanic Acid 125mg + Lactic Acid Bacillus',
//     },
//     {
//       name: 'CEFIMELT-S 1.5',
//       description:
//         'Ceftriaxone Sodium 1000mg + Sulbactam Sodium 500mg (Injection)',
//     },
//     {
//       name: 'RAPIKACIN',
//       description: 'Amikacin Sulphate 500mg/2ml (Injection)',
//     },
//     {
//       name: 'PIPZORAP-TZ',
//       description:
//         'Piperacillin Sodium 4g + Tazobactam Sodium 0.5g (Injection)',
//     },
//     {
//       name: 'GASTONEX IV',
//       description: 'Pantoprazole Sodium 40mg (Injection)',
//     },
//     {
//       name: 'VISQURA',
//       description:
//         'Carboxymethylcellulose Sodium 1% w/v + Stabilized Oxychloro Complex 0.005% w/v',
//     },
//     {
//       name: 'RAPISULAN-D',
//       description: 'Tamsulosin Hydrochloride (ER) + Dutasteride Tablets',
//     },
//     {
//       name: 'RAPINFLAM-FORTE',
//       description: 'Trypsin + Bromelain + Rutoside + Diclofenac Sodium',
//     },
//     {
//       name: 'PRO FC',
//       description: 'Ferrous Ascorbate + Folic Acid + Zinc Sulphate',
//     },
//     {
//       name: 'RAPIFUR',
//       description: 'Nitrofurantoin 100mg (Sustained Release)',
//     },
//     {
//       name: 'SITARAP-M500',
//       description: 'Sitagliptin 50mg + Metformin 500mg (SR)',
//     },
//     {
//       name: 'GLYNORAP-M1',
//       description: 'Glimepiride 1mg + Metformin Hydrochloride 500mg (SR)',
//     },
//     {
//       name: 'GLYNORAP-M2',
//       description: 'Glimepiride 2mg + Metformin Hydrochloride 500mg (SR)',
//     },
//     { name: 'RAPISART-40', description: 'Telmisartan 40mg' },
//     { name: 'RAPISART-AM', description: 'Telmisartan 40mg + Amlodipine 5mg' },
//     {
//       name: 'RAPISART-H',
//       description: 'Telmisartan 40mg + Hydrochlorothiazide 12.5mg',
//     },
//     {
//       name: 'RAPIFLAM-KT',
//       description: 'Ketorolac Tromethamine 10mg (Dispersible Tablets)',
//     },
//     { name: 'D3NOW NANO', description: 'Vitamin D3 Oral Solution 60,000 IU' },
//     {
//       name: 'RAPINOVA',
//       description:
//         'Lycopene + Zinc + Minerals + Multivitamins – broad spectrum tonic',
//     },
//     {
//       name: 'ZYMELYT',
//       description: 'Fungal Diastase 50mg + Pepsin 10mg per 15mL',
//     },
//     {
//       name: 'ZYLIVIN',
//       description:
//         'Silymarin + L-Ornithine L-Aspartate + Tricholine Citrate + Vitamin B12 + Niacinamide + Pyridoxine + Sorbitol Base – liver syrup',
//     },
//     {
//       name: 'VITABORON-PLUS',
//       description:
//         'Calcium Citrate + Calcitriol + EPA/DHA + Vitamins + Minerals + Methylfolate',
//     },
//     {
//       name: 'GINSORAP A-Z',
//       description: 'Ginseng + Multivitamins + Multiminerals + Probiotics',
//     },
//     {
//       name: 'GINSORAP 9G',
//       description:
//         'Green Tea, Ginseng, Ginkgo, Grape Seed, Garlic, Ginger, Green Coffee, Green Apple, Glutamic Acid, Omega-3, Minerals',
//     },
//     {
//       name: 'VITABORON',
//       description:
//         'Calcitriol + Omega-3 + Methylcobalamin + Folic Acid + Boron + Calcium – Soft Gel Capsules',
//     },
//   ];


export const products: Product[] = [
  {
    "name": "AZIRAP-500",
    "composition": "Azithromycin Dihydrate equivalent to Azithromycin 500mg",
    "category": "Tablet",
    "packaging": "10x3"
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
    "packaging": "10x1"
  },
  {
    "name": "D3NOW NANO",
    "composition": "Vitamin D3 Oral Solution 60000 IU",
    "category": "Syrup/Suspension",
    "packaging": "5ml ampoule"
  },
  {
    "name": "DECARAP 50",
    "composition": "Nandrolone Decanoate + Vitamin B12",
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
    "category": "Syrup/Suspension",
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
    "packaging": "10x10"
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
    "category": "Capsule",
    "packaging": "10x10"
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
    "packaging": "10ml bottle"
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