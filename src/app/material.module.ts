import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import {FlexLayoutModule  } from "@angular/flex-layout";
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    FlexLayoutModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatAutocompleteModule,
MatSelectModule,    
    
    
  ],
  exports: [
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
   MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
  MatAutocompleteModule,
  FormsModule,
  FlexLayoutModule,
  

  ]

})
export class MaterialModule{
  static forRoot: any;
}