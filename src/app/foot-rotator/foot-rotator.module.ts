import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootRotatorComponent } from './foot-rotator.component';
import {MatButtonModule,} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [FootRotatorComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [FootRotatorComponent]
})
export class FootRotatorModule { }
