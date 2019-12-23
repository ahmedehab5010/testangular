import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: AuthComponent }];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), SharedModule],
  exports: [],
  declarations: [AuthComponent]
})
export class AuthModule {}
