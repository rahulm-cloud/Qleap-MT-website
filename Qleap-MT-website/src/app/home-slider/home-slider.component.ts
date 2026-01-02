import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-slider',
  standalone:true,
  imports: [],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css'
})
export class HomeSliderComponent {

  constructor(private router:Router){}

  goToContact() {
  this.router.navigate(['/home-page'], { fragment: 'contact-us' });

}


}
