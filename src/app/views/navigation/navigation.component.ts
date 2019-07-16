import { Component, OnInit } from '@angular/core';
import { navigationPage } from "./../../animations/navigation.animation";


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [navigationPage],
  host: {
    '[@navigationPage]': ''
  }
})
export class NavigationComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    function UpdateClock() {
      var Clock = document.getElementsByClassName("Colon")[0].classList.toggle("blink");
      setTimeout(UpdateClock, 1000);
    }
    
    UpdateClock();
  }

}
