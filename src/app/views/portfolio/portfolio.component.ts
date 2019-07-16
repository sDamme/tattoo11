import { Component, OnInit } from '@angular/core';
import { Portfolio } from "../../portfolio";
import { ArtistImagesService } from "../../artist-images.service";
import { ActivatedRoute, Router } from "@angular/router";
import { portfolioPage } from "./../../animations/portfolio.animation";

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [portfolioPage],
  host: {'[@portfolioPage]': ''}
})
export class PortfolioComponent implements OnInit {
  portfolio: Portfolio[];


    foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
  

  constructor(artistImagesService: ArtistImagesService,  private route: ActivatedRoute, private router: Router) {

    this.portfolio = artistImagesService.getTattoos();
   }
 
  ngOnInit() {
  
  }

 
}
