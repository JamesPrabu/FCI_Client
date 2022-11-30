import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatGridListModule,
    // FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
