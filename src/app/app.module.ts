import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LoadingComponent } from './compartido/loading/loading.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NotfoundComponent } from './modulos/notfound/notfound.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { CommonModule, DecimalPipe, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { PrimeNGConfig } from 'primeng/api';
import { esTranslation } from './i18n/es';
import { LoadingModule } from './compartido/loading.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutService } from './layout/service/app.layout.service';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { DashboardModule } from './modulos/dashboard/dashboard.module';

// Registra la configuración regional
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent, 
    NotfoundComponent, 
  ],
  imports: [  
    AppLayoutModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    PasswordModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    LoadingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DashboardModule
    //LoginModule,
    // Eliminar CommonModule si no es necesario aquí
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    MessageService, DecimalPipe, 
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private primengConfig: PrimeNGConfig,  private readonly layoutService: LayoutService) {
    primengConfig.setTranslation(esTranslation)
    this.layoutService.config = {
      ripple: false, // toggles ripple on and off
      inputStyle: 'filled', // default style for input elements
      menuMode: 'static', // layout mode of the menu, valid values are "static" and "overlay"
      scale: 13, // size of the body font size to scale the whole application
      theme: 'bootstrap4-light-blue',
      colorScheme:'light'
    }
  }
}
