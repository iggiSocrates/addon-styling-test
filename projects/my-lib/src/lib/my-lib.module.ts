import { NgModule } from '@angular/core';
import { OkComponent } from './components/ok/ok.component';
import { ProblematicComponent } from './components/problematic/problematic.component';



@NgModule({
  declarations: [
    OkComponent,
    ProblematicComponent
  ],
  imports: [
  ],
  exports: [
    OkComponent,
    ProblematicComponent
  ]
})
export class MyLibModule { }
