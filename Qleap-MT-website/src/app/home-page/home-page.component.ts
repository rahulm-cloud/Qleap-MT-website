import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AboutComponent } from '../about/about.component';
import { OurProductComponent } from '../our-product/our-product.component';
import { OurCapabilitiesComponent } from '../our-capabilities/our-capabilities.component';
import { WhyChooseQleapComponent } from '../why-choose-qleap/why-choose-qleap.component';
import { HomeSliderComponent } from '../home-slider/home-slider.component';
import { TechnologyStackComponent } from '../technology-stack/technology-stack.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent,FooterComponent,AboutComponent,OurProductComponent,OurCapabilitiesComponent,WhyChooseQleapComponent,HomeSliderComponent,TechnologyStackComponent,ContactUsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
