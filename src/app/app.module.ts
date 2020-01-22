import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeDComponent } from './employee-d/employee-d.component';
import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDComponent,
    EmpAttendanceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
