import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './index/index.component';
import { Index2Component } from './index2/index2.component';

const routes: Routes = [
  { path: '',
   component: HomeComponent,
   children: [
    {
      path: 'index',
      component: IndexComponent
    },
    {
      path: 'index2',
      component: Index2Component
    }
   ]
   },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
