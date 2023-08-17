import { CommonModule } from '@angular/common';
import { NgModule }     from '@angular/core';

import { AboutPageComponent }      from './pages/about-page/about-page.component';
import { ContactPageComponent }    from './pages/contact-page/contact-page.component';
import { HomePageComponent }       from './pages/home-page/home-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { RouterModule }            from '@angular/router';
import { SearchboxComponent }      from './components/searchbox/searchbox.component';
import { SidebarComponent }        from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchboxComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    LoadingSpinnerComponent,
    SearchboxComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
