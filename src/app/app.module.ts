import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeDComponent } from './employee-d/employee-d.component';
import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
import { EmployeeCertificateComponent } from './employee-certificate/employee-certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDComponent,
    EmpAttendanceComponent,
    EmployeePayrollComponent,
    EmployeeCertificateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
