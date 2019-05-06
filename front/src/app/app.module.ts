import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { EventsService } from './events.service';
import { AuthGuard } from './auth.guard';
import { TokenInterseptorService } from './token-interseptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, EventsService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterseptorService,
  multi: true
  }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
