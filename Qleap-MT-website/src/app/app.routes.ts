import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { OurProductComponent } from './our-product/our-product.component';
import { OurCapabilitiesComponent } from './our-capabilities/our-capabilities.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';

export const routes: Routes = [

    {path:'',redirectTo:'home-page', pathMatch:'full'},

    {path:'home-page',component:HomePageComponent},
    {path:'footer',component:FooterComponent},
    {path:'home-slider',component:HomeSliderComponent},
    {path:'about',component:AboutComponent},
    {path:'our-product',component:OurProductComponent},
    {path:'our-capabilities',component:OurCapabilitiesComponent},

];
