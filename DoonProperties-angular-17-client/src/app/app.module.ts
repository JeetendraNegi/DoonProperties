import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { ToastrModule } from "ngx-toastr";
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthService } from "./services/authservice/auth.service";
import { AuthInterceptor } from "./services/interceptors/auth-interceptor.service";
import { SignupComponent } from "./authentication/signup/signup.component";
import { UserTypeService } from "./services/appusers/usertype/user-type.service";

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent, SignupComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    //ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
  ],
  providers: [AuthService, UserTypeService,
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
