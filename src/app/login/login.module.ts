//import { MessagesModule } from 'primeng/messages';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent, LogarComponent } from './component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { MatIconModule} from '@angular/material/icon';
//import { MatListModule } from '@angular/material/list';

//import { FlexLayoutModule } from '@angular/flex-layout';
//import { LoginService } from './services';
@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  //  MessagesModule,
  //  FlexLayoutModule
  ],
  declarations: [
    LoginComponent,
    LogarComponent
  ],
  providers: [
 //   LoginService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginModule { }
