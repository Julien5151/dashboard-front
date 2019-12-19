import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ResetAppComponent } from './components/reset-app/reset-app.component';


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@NgModule({
  declarations: [
    NavigationComponent,
    ResetAppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSelectModule,
    //
    NavigationComponent,
    ResetAppComponent
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})
export class SharedModule { }
