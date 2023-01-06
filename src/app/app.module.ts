import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainComponent } from './shared/components/main/main.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { MaterialModule } from './shared/modules/modulematerial';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentModalComponent } from './shared/components/student-modal/student-modal.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { Titulosx20Directive } from './shared/directive/titulosx20.directive';
import { upperCase } from './shared/pipe/uppercase';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    StudentsPageComponent,
    StudentModalComponent,
    FooterComponent,
    Titulosx20Directive,
    upperCase,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
