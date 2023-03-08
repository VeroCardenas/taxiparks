import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { InputLabelComponent } from './componenents/atoms/input-label/input-label.component';
import { InputMessageErrorComponent } from './componenents/atoms/input-message-error/input-message-error.component';
import { InputComponent } from './componenents/molecules/input/input.component';
import { ButtonComponent } from './componenents/molecules/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputLabelComponent,
    InputMessageErrorComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
