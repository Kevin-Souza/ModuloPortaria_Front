import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  redirectTo:'home'
},
{
  path:'visitantes',
  loadChildren:()=> import('./componentes/visitantes/visitantes.module').then((v)=>v.VisitantesModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
