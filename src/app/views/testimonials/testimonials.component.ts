import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reviews = [{ image: '../../../assets/testimonials/Testoni Cristian.png', name: 'Cristian Testoni', comment: 'Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica.' },
  { image: '../../../assets/testimonials/Gavioli.png', name: 'Francesco Gavioli', comment: 'Nel corso degli anni ho maturato una profonda conoscenza nella progettazione e realizzazione di impianti elettrici e di energia rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda all’avanguardia nell’installazione di impianti fotovoltaici' },
  { image: '../../../assets/testimonials/Massimo Fabi_ direttore commerciale.png', name: 'Massimo Fabi', comment: 'Laurato in Economia e Commercio mi sono occupato per anni di Business Development sia in multinazionali che PMI italiane in differenti settori' }
  ]

}
