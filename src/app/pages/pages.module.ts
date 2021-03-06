import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FlatpickrModule } from 'angularx-flatpickr';

import { UIModule } from '../shared/ui/ui.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { WidgetModule } from '../shared/widgets/widget.module';
// import { UiModule } from './ui/ui.module';
// import { AppsModule } from './apps/apps.module';
import { DetailsModule } from './details/details.module';
import { CompareModule } from './compare/compare.module';
import { KitchenModule } from './kitchen/kitchen.module';
import { InventoryModule } from './inventory/inventory.module';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgApexchartsModule,
    FlatpickrModule.forRoot(),
    UIModule,
    WidgetModule,
    PagesRoutingModule,
    // UiModule,
    // AppsModule,
    DetailsModule,
    NgSelectModule,
    NgbAlertModule
  ]
})
export class PagesModule { }
