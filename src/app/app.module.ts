import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeDComponent } from './employee-d/employee-d.component';
import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';
import { EmployeeDependentComponent } from './employee-dependent/employee-dependent.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDComponent,
    EmpAttendanceComponent,
    EmployeeDependentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
