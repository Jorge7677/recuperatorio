import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JorgecolqueComponent } from './jorgecolque/jorgecolque.component';

const routes: Routes = 
[


{path:'', redirectTo : 'jorgecolque', pathMatch:'full'},

{
   path:'',

   component:JorgecolqueComponent,
   children:
   [
      {
        path: 'jorgecolque', loadChildren: () => import('./jorgecolque/jorgecolque.module').then(m => m.JorgecolqueModule)
      }
   ]  

}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
