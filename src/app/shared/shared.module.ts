import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EnvPipe } from './pipe/env.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MatModules = [MatCardModule, MatGridListModule, MatChipsModule, MatGridListModule, MatSelectModule, MatInputModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatToolbarModule,
  MatIconModule, MatBadgeModule, MatDialogModule, MatProgressSpinnerModule]

@NgModule({
  declarations: [EnvPipe],
  imports: [
    CommonModule,
  ],
  exports: [...MatModules, EnvPipe, ReactiveFormsModule, FormsModule]
})
export class SharedModule { }
