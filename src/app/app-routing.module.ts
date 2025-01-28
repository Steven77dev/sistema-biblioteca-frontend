import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AppLayoutComponent } from './layout/app.layout.component';
import { NotfoundComponent } from './modulos/notfound/notfound.component'; 

@NgModule({
  imports: [
      RouterModule.forRoot([
        { path: '', component: AppLayoutComponent },
        {
          path: '', component: AppLayoutComponent,
          children: [
              { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
              { path: 'dashboard', loadChildren: () => import('./modulos/dashboard/dashboard.module').then(m => m.DashboardModule) }, 
              { path: 'autores', loadChildren: () => import('./modulos/autores/autores.module').then(m => m.AutoresModule) },
              { path: 'libros', loadChildren: () => import('./modulos/libros/libros.module').then(m => m.LibrosModule) },
              { path: 'prestamos', loadChildren: () =>  import('./modulos/prestamos/prestamos.module').then(m => m.PrestamosModule) },
              
          ]
      }, 
      
      { path: 'noencontrado', component: NotfoundComponent },
      { path: '**', redirectTo: '/noencontrado' },
      ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
