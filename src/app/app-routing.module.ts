import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { MinClockComponent } from './components/min-clock/min-clock.component';

const routes: Routes = [
  {path:'clock', component: TimePickerComponent},
  {path:'min', component: MinClockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
