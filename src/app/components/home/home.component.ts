import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sampleProducts = [
    {
      name: 'AZIRAP-500',
      description: 'Azithromycin Dihydrate equivalent to Azithromycin 500mg',
      image: 'assets/products/azirap-500.jpg'

    },
    {
      name: 'CEFIMELT-100DT',
      description: 'Cefixime 100mg (Dispersible Tablets)',
      image: 'assets/products/azirap-500.jpg'
    },
    {
      name: 'CEFIMELT-200 LB',
      description: 'Cefixime 200mg + Lactic Acid Bacillus 60 million spores',
      image: 'assets/products/azirap-500.jpg'
    },
  ];

  ngOnInit(): void {
  }

}
