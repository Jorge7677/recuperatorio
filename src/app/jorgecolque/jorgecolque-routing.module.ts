import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JorgecolqueComponent } from './jorgecolque.component';

const routes: Routes = [{ path: '', component: JorgecolqueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JorgecolqueRoutingModule { }
