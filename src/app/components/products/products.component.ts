import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      name: 'RAPINAK-D',
      description: 'Aceclofenac 100mg + Drotaverine Hydrochloride 80mg',
    },
    { name: 'RAPINAK-P', description: 'Aceclofenac 100mg + Paracetamol 325mg' },
    {
      name: 'RAPINAK-SP',
      description:
        'Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg',
    },
    {
      name: 'AZIRAP-500',
      description: 'Azithromycin Dihydrate equivalent to Azithromycin 500mg',
    },
    {
      name: 'CEFIMELT-100DT',
      description: 'Cefixime 100mg (Dispersible Tablets)',
    },
    {
      name: 'CEFIMELT-200 LB',
      description: 'Cefixime 200mg + Lactic Acid Bacillus 60 million spores',
    },
    {
      name: 'ETOBRAN-TH',
      description: 'Etoricoxib 60mg + Thiocolchicoside 4mg',
    },
    { name: 'DEFZORAP-6', description: 'Deflazacort 6mg' },
    { name: 'NIMRAP-P', description: 'Nimesulide 100mg + Paracetamol 325mg' },
    { name: 'RAPIPOD-200', description: 'Cefpodoxime Proxetil 200mg' },
    {
      name: 'ESMOTEC-D',
      description: 'Esomeprazole 40mg (EC) + Domperidone 30mg (SR)',
    },
    {
      name: 'DOMERAP-R',
      description: 'Rabeprazole Sodium 20mg (EC) + Domperidone 30mg (SR)',
    },
    {
      name: 'MAGZORAP',
      description: 'Magaldrate 400mg + Simethicone 20mg (Oral Suspension)',
    },
    {
      name: 'RAPIZOLID-600',
      description: 'Linezolid 600mg (Film-Coated Tablets)',
    },
    {
      name: 'CLARYMONT-L',
      description: 'Montelukast Sodium 10mg + Levocetirizine Hydrochloride 5mg',
    },
    {
      name: 'ESMOTEC-LSR',
      description: 'Esomeprazole 40mg + Levosulpiride 50mg (SR)',
    },
    {
      name: 'DOMEPANT SR',
      description: 'Pantoprazole (DSR) – format unspecified',
    },
    {
      name: 'RAPIFEVA-P',
      description:
        'Ibuprofen 100mg + Paracetamol 162.5mg (Pediatric Suspension)',
    },
    {
      name: 'COFIRAP',
      description:
        'Ambroxol 15mg + Terbutaline 1.25mg + Guaiphenesin 50mg + Menthol 1mg per 5mL',
    },
    {
      name: 'COFIRAP-D',
      description:
        'Dextromethorphan 10mg + Phenylephrine 5mg + CPM 2mg per 5mL',
    },
    {
      name: 'COFIRAP-LS',
      description: 'LS Syrup – carton included (composition not specified)',
    },
    {
      name: 'MEFAPAD-125',
      description: 'Mefenamic Acid 100mg + Paracetamol 125mg Syrup',
    },
    { name: 'D3NOW', description: 'Cholecalciferol IP 60,000 IU' },
    {
      name: 'SITARAP-D',
      description: 'Dapagliflozin 10mg + Sitagliptin 100mg',
    },
    {
      name: 'RAPMOX-CV',
      description:
        'Amoxycillin 500mg + Clavulanic Acid 125mg + Lactic Acid Bacillus',
    },
    {
      name: 'CEFIMELT-S 1.5',
      description:
        'Ceftriaxone Sodium 1000mg + Sulbactam Sodium 500mg (Injection)',
    },
    {
      name: 'RAPIKACIN',
      description: 'Amikacin Sulphate 500mg/2ml (Injection)',
    },
    {
      name: 'PIPZORAP-TZ',
      description:
        'Piperacillin Sodium 4g + Tazobactam Sodium 0.5g (Injection)',
    },
    {
      name: 'GASTONEX IV',
      description: 'Pantoprazole Sodium 40mg (Injection)',
    },
    {
      name: 'VISQURA',
      description:
        'Carboxymethylcellulose Sodium 1% w/v + Stabilized Oxychloro Complex 0.005% w/v',
    },
    {
      name: 'RAPISULAN-D',
      description: 'Tamsulosin Hydrochloride (ER) + Dutasteride Tablets',
    },
    {
      name: 'RAPINFLAM-FORTE',
      description: 'Trypsin + Bromelain + Rutoside + Diclofenac Sodium',
    },
    {
      name: 'PRO FC',
      description: 'Ferrous Ascorbate + Folic Acid + Zinc Sulphate',
    },
    {
      name: 'RAPIFUR',
      description: 'Nitrofurantoin 100mg (Sustained Release)',
    },
    {
      name: 'SITARAP-M500',
      description: 'Sitagliptin 50mg + Metformin 500mg (SR)',
    },
    {
      name: 'GLYNORAP-M1',
      description: 'Glimepiride 1mg + Metformin Hydrochloride 500mg (SR)',
    },
    {
      name: 'GLYNORAP-M2',
      description: 'Glimepiride 2mg + Metformin Hydrochloride 500mg (SR)',
    },
    { name: 'RAPISART-40', description: 'Telmisartan 40mg' },
    { name: 'RAPISART-AM', description: 'Telmisartan 40mg + Amlodipine 5mg' },
    {
      name: 'RAPISART-H',
      description: 'Telmisartan 40mg + Hydrochlorothiazide 12.5mg',
    },
    {
      name: 'RAPIFLAM-KT',
      description: 'Ketorolac Tromethamine 10mg (Dispersible Tablets)',
    },
    { name: 'D3NOW NANO', description: 'Vitamin D3 Oral Solution 60,000 IU' },
    {
      name: 'RAPINOVA',
      description:
        'Lycopene + Zinc + Minerals + Multivitamins – broad spectrum tonic',
    },
    {
      name: 'ZYMELYT',
      description: 'Fungal Diastase 50mg + Pepsin 10mg per 15mL',
    },
    {
      name: 'ZYLIVIN',
      description:
        'Silymarin + L-Ornithine L-Aspartate + Tricholine Citrate + Vitamin B12 + Niacinamide + Pyridoxine + Sorbitol Base – liver syrup',
    },
    {
      name: 'VITABORON-PLUS',
      description:
        'Calcium Citrate + Calcitriol + EPA/DHA + Vitamins + Minerals + Methylfolate',
    },
    {
      name: 'GINSORAP A-Z',
      description: 'Ginseng + Multivitamins + Multiminerals + Probiotics',
    },
    {
      name: 'GINSORAP 9G',
      description:
        'Green Tea, Ginseng, Ginkgo, Grape Seed, Garlic, Ginger, Green Coffee, Green Apple, Glutamic Acid, Omega-3, Minerals',
    },
    {
      name: 'VITABORON',
      description:
        'Calcitriol + Omega-3 + Methylcobalamin + Folic Acid + Boron + Calcium – Soft Gel Capsules',
    },
  ];
}
