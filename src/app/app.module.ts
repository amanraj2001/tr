import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudataService } from './studata.service';
import { LogService } from './log/log.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [StudataService,LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
