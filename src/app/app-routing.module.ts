import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailsComponent } from './content-details/content-details.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/content', pathMatch: 'full'
  },
  {
    path:'content',
    component:ContentComponent
  },
  {
    path:'contentdetails',
    component:ContentDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
