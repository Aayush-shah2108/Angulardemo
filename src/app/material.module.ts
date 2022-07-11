import { NgModule } from '@angular/core';
import { LayoutModule  } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule} from '@angular/material/chips';

// import { TagInputModule } from 'ngx-chips';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatRippleModule,
  MatSidenavModule,
  MatCardModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatExpansionModule,
  MatDividerModule,
  MatCheckboxModule,
  MatRadioModule,
  MatAutocompleteModule,
} from '@angular/material';
import { CommonModule } from '@angular/common';
const materialModules = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatListModule,
  MatSelectModule,
  MatRippleModule,
  MatSidenavModule,
  MatCardModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatExpansionModule,
  MatDividerModule,
  // DragDropModule,
  MatCheckboxModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatChipsModule,
  // TagInputModule
];
@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  exports: [
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
  ],

  entryComponents: [],
})
export class MaterialModule { }