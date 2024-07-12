import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations:[
  ],
  imports: [
    CommonModule,
    SidebarComponent
  ],
  exports:[
    SidebarComponent
  ]
})
export class SharedModule { }
