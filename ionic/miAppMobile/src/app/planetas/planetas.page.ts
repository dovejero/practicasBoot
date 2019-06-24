import { Component, OnInit } from '@angular/core';
import { PlanetasService } from '../planetas.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.page.html',
  styleUrls: ['./planetas.page.scss'],
})
export class PlanetasPage implements OnInit {
  planetas: any;
  constructor(private planetasService: PlanetasService) { }

  ngOnInit() {
    this.planetasService.getPlanetas().then((rows) => {
      console.log(rows);
      this.planetas = rows['results']
    }).catch((err) => {

    })
  }

}
